import { Component, Prop, h } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Prop() type: "button" | "submit" | "reset";
  @Prop() text: string;
  @Prop() variant: "primary" | "secondary" | "tertiary";

  render() {
    return (
      <button
        class={classnames({
          'my-button': true,
          'my-button-primary': this.variant === "primary",
          'my-button-secondary': this.variant === "secondary",
          'my-button-tertiary': this.variant === "tertiary",
        })}
        type={this.type}
      >
        {this.text}
      </button>
    );
  }
}
