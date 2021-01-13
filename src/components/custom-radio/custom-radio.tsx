import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-radio',
  styleUrl: 'custom-radio.scss',
  shadow: false,
})
export class CustomRadio {
  @Prop() name: string = '';
  @Prop() checked:boolean=false;
  render() {
    return (
      <sl-radio checked={this.checked} name={this.name}>
        <slot></slot>
      </sl-radio>
    );
  }

}
