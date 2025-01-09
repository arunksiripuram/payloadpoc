import type { CollectionConfig } from 'payload';

const MenuItems: CollectionConfig = {
  slug: 'menuItems',
//   labels: {
//     singular: 'Menu Item',
//     plural: 'Menu Items',
//   }
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
  upload: true,
};