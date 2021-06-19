import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-headline',
  styleUrl: 'my-headline.scss',
  shadow: true,
})
export class MyHeadline {
  @Prop() level: "1" | "2" | "3" | "4";

  render() {
    const props = {
      class: "my-headline",
    }
    const elememntBasedOnLevel = {
      "1": <h1 {...props}><slot /></h1>,
      "2": <h2 {...props}><slot /></h2>,
      "3": <h3 {...props}><slot /></h3>,
      "4": <h4 {...props}><slot /></h4>,
    };

    return elememntBasedOnLevel[this.level];
  }
}
