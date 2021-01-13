# custom-modal



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default     |
| -------- | --------- | ----------- | --------- | ----------- |
| `label`  | `label`   |             | `string`  | `undefined` |
| `open`   | `open`    |             | `boolean` | `false`     |


## Methods

### `hide() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- sl-dialog
- sl-button

### Graph
```mermaid
graph TD;
  custom-modal --> sl-dialog
  custom-modal --> sl-button
  sl-dialog --> sl-icon-button
  sl-icon-button --> sl-icon
  sl-button --> sl-spinner
  style custom-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
