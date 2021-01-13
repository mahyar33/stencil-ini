import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-checkbox',
  styleUrl: 'custom-checkbox.scss',
  shadow: true,
})
export class CustomCheckbox {
  @Prop() checked:boolean=false;
  render() {
    return (
  <sl-checkbox checked={this.checked}> <slot></slot></sl-checkbox>
    );
  }

}
