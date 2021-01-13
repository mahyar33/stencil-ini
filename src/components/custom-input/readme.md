# custom-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                        | Default     |
| ------------- | ------------- | ----------- | --------------------------------------------------------------------------- | ----------- |
| `label`       | `label`       |             | `string`                                                                    | `undefined` |
| `placeholder` | `placeholder` |             | `string`                                                                    | `''`        |
| `required`    | `required`    |             | `boolean`                                                                   | `false`     |
| `type`        | `type`        |             | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`       | `value`       |             | `string`                                                                    | `''`        |


## Dependencies

### Used by

 - [custom-date-picker](../custom-date-picker)
 - [custom-time-picker](../custom-time-picker)

### Depends on

- sl-input

### Graph
```mermaid
graph TD;
  custom-input --> sl-input
  sl-input --> sl-icon
  custom-date-picker --> custom-input
  custom-time-picker --> custom-input
  style custom-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
