import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.scss',
  shadow: false,
})
export class CustomInput {
@Prop() placeholder:string='';
@Prop() label:string;
@Prop() value:string='';
@Prop({ reflect: true }) required:boolean=false;
@Prop() type:'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'='text';


  render() {
    return (
      <sl-input  value={this.value} label={this.label} type={this.type} placeholder={this.placeholder}>
        <slot name='prefix'></slot>
        <slot name='suffix'></slot>
      </sl-input>
    );
  }

}
