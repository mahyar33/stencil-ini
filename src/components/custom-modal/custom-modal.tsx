import { Component, h, Prop,Method } from '@stencil/core';

@Component({
  tag: 'custom-modal',
  styleUrl: 'custom-modal.scss',
  shadow: false,
})
export class CustomModal {
  @Prop() open:boolean=false;
  @Prop() label:string;
  dialog!:HTMLSlDialogElement;
  @Method()
  async show() {
    return this.dialog.show()
  }
  @Method()
  async hide() {
    return this.dialog.hide()
  }
  render() {
    return (
      <sl-dialog ref={(el) => this.dialog = el as HTMLSlDialogElement}  open={this.open} label={this.label} >
              <slot>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</slot>
        <slot name='footer'>  <sl-button type="primary">Close</sl-button></slot>
      </sl-dialog>
    );
  }

}
