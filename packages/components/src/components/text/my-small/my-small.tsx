import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-small',
  styleUrl: 'my-small.scss',
  shadow: true,
})
export class MySmall {
  render() {
    return (
      <p class='my-small'>
        <slot />
      </p>
    );
  }
}
