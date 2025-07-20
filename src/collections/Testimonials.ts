import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  fields: [
    {
      name: 'author name',
      type: 'text',
      required: true,
    },
    {
      name: 'testimony',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author description',
      type: 'textarea',
    },
    {
      name: 'author avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'video link',
      type: 'text',
    },
  ],
}
