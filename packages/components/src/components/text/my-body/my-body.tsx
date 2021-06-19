import { Component, Prop, h } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'my-body',
  styleUrl: 'my-body.scss',
  shadow: true,
})
export class MyBody {
  @Prop() weight: 'light' | 'regular' | 'medium' = 'regular';

  render() {
    return (
      <p class={classnames({
        'my-body': true,
        'my-body-light': this.weight === 'light',
        'my-body-regular': this.weight === 'regular',
        'my-body-medium': this.weight === 'medium',
      })}>
        <slot />
      </p>
    );
  }
}
