import { Component, h, Prop } from '@stencil/core';
import flatpickr from "flatpickr";
import { Instance } from 'flatpickr/dist/types/instance';

@Component({
  tag: 'custom-time-picker',
  styleUrl: 'custom-time-picker.scss',
  shadow: true,
})
export class CustomTimePicker {
  input!: HTMLCustomInputElement;
  calendar:Instance;
  @Prop() placeholder:string='';
  @Prop() label:string;
  @Prop() required:boolean=false;

  componentDidLoad() {
    this.calendar = flatpickr(this.input, {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true
    })
  }
  disconnectedCallback(){
    this.calendar.destroy()
  }
  render() {
    return (
      <custom-input required={this.required} placeholder={this.placeholder} label={this.label}  ref={(el) => this.input = el as HTMLCustomInputElement} >
        <custom-icon name="clock-fill" slot="prefix"></custom-icon>
      </custom-input>
    );
  }

}
