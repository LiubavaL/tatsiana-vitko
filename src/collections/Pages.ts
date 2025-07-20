import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'page',
  fields: [
    {
      name: 'alias',
      type: 'text',
      required: true,
      label: 'Alias',
    },
    {
      name: 'path',
      type: 'text',
      required: true,
    },
  ],
}
