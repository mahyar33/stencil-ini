import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-icon',
  styleUrl: 'custom-icon.scss',
  shadow: false,
})
export class CustomIcon {
  @Prop() name:string='upload';
  render() {
    return (
      <sl-icon name={this.name} />
    );
  }

}
