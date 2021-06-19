const path = require('path');
const fs = require('fs-extra');
const yaml = require('js-yaml');
const postcss = require('postcss');

const OUTPUT_PATH = './dist';

main();

async function main() {
  let tokens = await readTokens();

  await prepareOutputDirectory();

  const outputCSS = buildOutputCSS(tokens);

  await fs.writeFile(
    path.join(OUTPUT_PATH, 'tokens.css'),
    outputCSS
  );
}

async function readTokens() {
  try {
    return yaml.load(await fs.readFile('./src/tokens.yaml', 'utf8'));
  } catch (err) {
    throw new Error(`The tokens could not be read: ${err.message}`);
  }
}

async function prepareOutputDirectory() {
  await fs.emptyDir(OUTPUT_PATH);
  await fs.mkdirp(OUTPUT_PATH);
}

function buildOutputCSS(tokens) {
  const flatTokens = flattenTokens(tokens);
  // const rootSelector = postcss.rule({ selector: ':root' });
  const hostSelector = postcss.rule({ selector: ':host' });

  for (const [key, value] of Object.entries(flatTokens)) {
    const declaration = postcss.decl({
      prop: `--${key}`,
      value: value,
    });

    // rootSelector.append(declaration);
    hostSelector.append(declaration);
  }

  return postcss
    .root()
    .append([
      // rootSelector,
      hostSelector,
    ])
    .toString();
}

function flattenTokens(token) {
  if (typeof token !== 'object') {
    return token;
  }

  return Object.entries(token).reduce((acc, [key, value]) => {
    const flatValue = flattenTokens(value);

    if (typeof value !== 'object') {
      return {
        ...acc,
        [key]: flatValue,
      }
    }
    
    return {
      ...acc,
      ...Object.entries(flatValue).reduce((nestedAcc, [nestedKey, nestedValue]) => ({
        ...nestedAcc,
        [`${key}-${nestedKey}`]: nestedValue,
      }), {})
    };
  }, {});
}
