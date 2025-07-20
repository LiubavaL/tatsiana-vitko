import { Block } from 'payload'

export const LongText: Block = {
  slug: 'longText',
  fields: [
    {
      name: 'maxLength',
      type: 'number',
      label: 'Maximum Length',
    },
    {
      name: 'required',
      type: 'checkbox',
    },
  ],
}
