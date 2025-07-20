import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'background image',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      relationTo: 'users',
      type: 'relationship',
      name: 'author',
      required: true,
    },
  ],
}
