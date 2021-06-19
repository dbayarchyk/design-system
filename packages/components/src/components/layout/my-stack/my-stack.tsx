import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-stack',
  styleUrl: 'my-stack.scss',
  shadow: true,
})
export class MyStack {
  @Prop() space: "xs" | "s" | "m" | "l" | "xl" | "2xl";

  render() {
    return (
      <Host class={{
        'my-stack-xs': this.space === "xs",
        'my-stack-s': this.space === "s",
        'my-stack-m': this.space === "m",
        'my-stack-l': this.space === "l",
        'my-stack-xl': this.space === "xl",
        'my-stack-2xl': this.space === "2xl",
      }}>
        <slot></slot>
      </Host>
    );
  }
}
