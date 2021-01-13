import { Component, h, Prop } from '@stencil/core';
import flatpickr from "flatpickr";
import { Instance } from 'flatpickr/dist/types/instance';

@Component({
  tag: 'custom-date-picker',
  styleUrl: 'custom-date-picker.scss',
  shadow: true,
})
export class CustomDatePicker {
  input!: HTMLCustomInputElement;
  calendar:Instance;
  @Prop() placeholder:string='';
  @Prop() label:string;
  @Prop() required:boolean=false;

  componentDidLoad() {
    this.calendar = flatpickr(this.input, {})
  }
  disconnectedCallback(){
    this.calendar.destroy()
  }
  render() {
    return (
      <custom-input required={this.required} placeholder={this.placeholder} label={this.label}  ref={(el) => this.input = el as HTMLCustomInputElement} >
        <custom-icon name="calendar-fill" slot="prefix"></custom-icon>
      </custom-input>
    );
  }

}
