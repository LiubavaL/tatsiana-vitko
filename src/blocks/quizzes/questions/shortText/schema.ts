import { Block } from 'payload'

export const ShortText: Block = {
  slug: 'shortText',
  fields: [
    {
      name: 'maxLength',
      type: 'number',
      label: 'Maximum length',
    },
    {
      name: 'required',
      type: 'checkbox',
    },
  ],
}
