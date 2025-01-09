import type { CollectionConfig } from 'payload';

export const Footer: CollectionConfig = {
  slug: 'footer',  // Use 'footer' as the collection slug
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  fields: [
    {
      name: 'contactInfo',
      type: 'text',
      label: 'Contact Information',
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
};
