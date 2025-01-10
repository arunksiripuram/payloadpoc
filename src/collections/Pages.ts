import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages', // Collection name
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  fields: [
    { name: 'cardHolder', type: 'text', required: true, label: 'Card Holder Names' },
    {
      name: 'cardType',
      type: 'select',
      options: ['Visa', 'MasterCard', 'American Express'], // Example card types
      required: true,
      label: 'Card Type',
    },
    { name: 'cardNumber', type: 'text', required: true, label: 'Card Number' },
    {
      name: 'expirationMonth',
      type: 'select',
      options: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      required: true,
      label: 'Expiration Month',
    },
    {
      name: 'expirationYear',
      type: 'select',
      options: ['2024', '2025', '2026'], // Example years
      required: true,
      label: 'Expiration Year',
    },
    { name: 'cvv', type: 'text', required: true, label: 'CVV' },
    { name: 'addressLine1', type: 'text', required: true, label: 'Address Line 1' },
    { name: 'addressLine2', type: 'text', label: 'Address Line 2' },
    { name: 'city', type: 'text', required: true, label: 'City' },
    {
      name: 'state',
      type: 'select',
      options: ['Texas', 'California'],
      required: true,
      label: 'State',
    },
    { name: 'zip', type: 'text', required: true, label: 'Zip Code' },
    {
      name: 'country',
      type: 'select',
      options: ['USA', 'Canada'],
      required: true,
      label: 'Country',
    },
    { name: 'useAsPrimary', type: 'checkbox', label: 'Use as Primary Card' },
    { name: 'newAddress', type: 'checkbox', label: 'New Address' },
  ],
}
