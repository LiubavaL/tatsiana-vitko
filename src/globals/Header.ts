import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'link',
          type: 'text',
          required: true,
          label: 'Link',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Link Label',
        },
      ],
    },
  ],
}
