import { Component, h, Prop,EventEmitter,Event } from '@stencil/core';


export type Type = 'primary' | 'default' | 'success' | 'info' | 'warning' | 'danger' | 'text' | 'secondary'

@Component({
  tag: 'custom-button',
  styleUrl: 'custom-button.scss',
  shadow: true,
})
export class CustomButton {
  @Prop() type: Type = 'primary';
  @Event() onClick: EventEmitter;
  handleClick(event: UIEvent) {
    this.onClick.emit(event);
  }
  render() {
    return (
      <sl-button onClick={this.handleClick.bind(this)} class={this.type === 'secondary' ? 'secondary' : ''}
                 type={this.type === 'secondary' ? 'primary' : this.type}>
        <slot></slot>
      </sl-button>
    );
  }

}
