import { GlobalConfig } from 'payload'

export const Socials: GlobalConfig = {
  slug: 'socials',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
