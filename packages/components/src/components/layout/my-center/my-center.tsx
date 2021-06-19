import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-center',
  styleUrl: 'my-center.scss',
  shadow: true,
})
export class MyCenter {
  @Prop() space: "xs" | "s" | "m" | "l" | "xl" | "2xl";

  render() {
    return (
      <Host class={{
        'my-center-xs': this.space === "xs",
        'my-center-s': this.space === "s",
        'my-center-m': this.space === "m",
        'my-center-l': this.space === "l",
        'my-center-xl': this.space === "xl",
        'my-center-2xl': this.space === "2xl",
      }}>
        <slot></slot>
      </Host>
    );
  }
}
