import { Block } from 'payload'

export const Choice: Block = {
  slug: 'choice',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'multiple',
      type: 'checkbox',
    },
    {
      name: 'required',
      type: 'checkbox',
    },
  ],
}
