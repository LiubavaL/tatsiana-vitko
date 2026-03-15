import { CollectionConfig } from 'payload'

export const Certificates: CollectionConfig = {
  slug: 'certificates',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'documentImage',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
      required: true,
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'decription',
      type: 'text',
    },
  ],
}
