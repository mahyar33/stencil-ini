/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Type } from "./components/custom-button/custom-button";
export namespace Components {
    interface CustomButton {
        "type": Type;
    }
    interface CustomCheckbox {
        "checked": boolean;
    }
    interface CustomDatePicker {
        "label": string;
        "placeholder": string;
        "required": boolean;
    }
    interface CustomIcon {
        "name": string;
    }
    interface CustomInput {
        "label": string;
        "placeholder": string;
        "required": boolean;
        "type": 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
        "value": string;
    }
    interface CustomModal {
        "hide": () => Promise<void>;
        "label": string;
        "open": boolean;
        "show": () => Promise<void>;
    }
    interface CustomRadio {
        "checked": boolean;
        "name": string;
    }
    interface CustomTimePicker {
        "label": string;
        "placeholder": string;
        "required": boolean;
    }
    interface MyButton {
        "color"?: 'primary' | 'secondary';
        "disabled"?: boolean;
        "elevation"?: boolean;
        "shape"?: 'full' | 'round' | 'smooth';
        "size"?: 'large' | 'medium' | 'small';
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCustomButtonElement extends Components.CustomButton, HTMLStencilElement {
    }
    var HTMLCustomButtonElement: {
        prototype: HTMLCustomButtonElement;
        new (): HTMLCustomButtonElement;
    };
    interface HTMLCustomCheckboxElement extends Components.CustomCheckbox, HTMLStencilElement {
    }
    var HTMLCustomCheckboxElement: {
        prototype: HTMLCustomCheckboxElement;
        new (): HTMLCustomCheckboxElement;
    };
    interface HTMLCustomDatePickerElement extends Components.CustomDatePicker, HTMLStencilElement {
    }
    var HTMLCustomDatePickerElement: {
        prototype: HTMLCustomDatePickerElement;
        new (): HTMLCustomDatePickerElement;
    };
    interface HTMLCustomIconElement extends Components.CustomIcon, HTMLStencilElement {
    }
    var HTMLCustomIconElement: {
        prototype: HTMLCustomIconElement;
        new (): HTMLCustomIconElement;
    };
    interface HTMLCustomInputElement extends Components.CustomInput, HTMLStencilElement {
    }
    var HTMLCustomInputElement: {
        prototype: HTMLCustomInputElement;
        new (): HTMLCustomInputElement;
    };
    interface HTMLCustomModalElement extends Components.CustomModal, HTMLStencilElement {
    }
    var HTMLCustomModalElement: {
        prototype: HTMLCustomModalElement;
        new (): HTMLCustomModalElement;
    };
    interface HTMLCustomRadioElement extends Components.CustomRadio, HTMLStencilElement {
    }
    var HTMLCustomRadioElement: {
        prototype: HTMLCustomRadioElement;
        new (): HTMLCustomRadioElement;
    };
    interface HTMLCustomTimePickerElement extends Components.CustomTimePicker, HTMLStencilElement {
    }
    var HTMLCustomTimePickerElement: {
        prototype: HTMLCustomTimePickerElement;
        new (): HTMLCustomTimePickerElement;
    };
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "custom-button": HTMLCustomButtonElement;
        "custom-checkbox": HTMLCustomCheckboxElement;
        "custom-date-picker": HTMLCustomDatePickerElement;
        "custom-icon": HTMLCustomIconElement;
        "custom-input": HTMLCustomInputElement;
        "custom-modal": HTMLCustomModalElement;
        "custom-radio": HTMLCustomRadioElement;
        "custom-time-picker": HTMLCustomTimePickerElement;
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CustomButton {
        "onOnClick"?: (event: CustomEvent<any>) => void;
        "type"?: Type;
    }
    interface CustomCheckbox {
        "checked"?: boolean;
    }
    interface CustomDatePicker {
        "label"?: string;
        "placeholder"?: string;
        "required"?: boolean;
    }
    interface CustomIcon {
        "name"?: string;
    }
    interface CustomInput {
        "label"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "type"?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
        "value"?: string;
    }
    interface CustomModal {
        "label"?: string;
        "open"?: boolean;
    }
    interface CustomRadio {
        "checked"?: boolean;
        "name"?: string;
    }
    interface CustomTimePicker {
        "label"?: string;
        "placeholder"?: string;
        "required"?: boolean;
    }
    interface MyButton {
        "color"?: 'primary' | 'secondary';
        "disabled"?: boolean;
        "elevation"?: boolean;
        "shape"?: 'full' | 'round' | 'smooth';
        "size"?: 'large' | 'medium' | 'small';
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "custom-button": CustomButton;
        "custom-checkbox": CustomCheckbox;
        "custom-date-picker": CustomDatePicker;
        "custom-icon": CustomIcon;
        "custom-input": CustomInput;
        "custom-modal": CustomModal;
        "custom-radio": CustomRadio;
        "custom-time-picker": CustomTimePicker;
        "my-button": MyButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-button": LocalJSX.CustomButton & JSXBase.HTMLAttributes<HTMLCustomButtonElement>;
            "custom-checkbox": LocalJSX.CustomCheckbox & JSXBase.HTMLAttributes<HTMLCustomCheckboxElement>;
            "custom-date-picker": LocalJSX.CustomDatePicker & JSXBase.HTMLAttributes<HTMLCustomDatePickerElement>;
            "custom-icon": LocalJSX.CustomIcon & JSXBase.HTMLAttributes<HTMLCustomIconElement>;
            "custom-input": LocalJSX.CustomInput & JSXBase.HTMLAttributes<HTMLCustomInputElement>;
            "custom-modal": LocalJSX.CustomModal & JSXBase.HTMLAttributes<HTMLCustomModalElement>;
            "custom-radio": LocalJSX.CustomRadio & JSXBase.HTMLAttributes<HTMLCustomRadioElement>;
            "custom-time-picker": LocalJSX.CustomTimePicker & JSXBase.HTMLAttributes<HTMLCustomTimePickerElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
