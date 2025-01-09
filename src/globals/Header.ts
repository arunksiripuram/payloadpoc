// src/globals/header.ts
import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header', // Global slug name
  fields: [
    {
      name: 'logo', // Field for the logo image
      type: 'text',
      label: 'Logo',
      required: true,
    },
    {
      name: 'navLinks', // Field for navigation links
      type: 'array',
      label: 'Navigation Links',
      fields: [
        {
          name: 'label', // Label for the link
          type: 'text',
          required: true,
        },
        {
          name: 'url', // URL for the link
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'languageOptions', // Language selection options
      type: 'array',
      label: 'Language Options',
      fields: [
        {
          name: 'language', // Language label
          type: 'text',
          required: true,
        },
        {
          name: 'languageCode', // Language code (e.g., "en", "es")
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'userOptions', // User-specific actions like logout
      type: 'array',
      label: 'User Options',
      fields: [
        {
          name: 'action', // Action like "Logout"
          type: 'text',
          required: true,
        },
        {
          name: 'url', // URL for the action
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
