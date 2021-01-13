import readme from './readme.md';

export default {
  title: 'custom-input',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `
     <custom-input required="true" label="jo" placeholder="Small" >
      <custom-icon name="tag" slot="prefix"></custom-icon>
    </custom-input>
`;
