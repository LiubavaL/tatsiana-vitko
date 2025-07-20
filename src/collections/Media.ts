import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    adminThumbnail: 'large',
    imageSizes: [
      {
        name: 'small',
        fit: 'cover',
        height: 300,
        width: 900,
      },
      {
        name: 'large',
        fit: 'cover',
        height: 800,
        width: 1800,
      },
    ],
    pasteURL: {
      allowList: [
        {
          hostname: 'i.pinimg.com',
          pathname: '',
          port: '',
          protocol: 'https',
          search: '',
        },
      ],
    },
  },
}
