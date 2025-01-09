import type { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
  slug: 'header',
  labels: {
    singular: 'Header',
    plural: 'Headers',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',  // Assuming 'media' collection exists for file uploads
      required: true,
    }
  ],
};
