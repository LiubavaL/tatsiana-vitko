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
      label: 'Testimony (Text or Video)',
      type: 'textarea',
      required: true,
    },
    {
      name: 'authorDescription',
      type: 'textarea',
    },
    {
      name: 'authorAvatar',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
