import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer', // Slug to access footer content
  fields: [
    {
      name: 'address', // Customer service address
      type: 'text',
      label: 'Address',
      required: true,
      localized: true, // Make it translatable
    },
    {
      name: 'phone', // Customer service phone number
      type: 'text',
      label: 'Phone Number',
      required: true,
      localized: true,
    },
    {
      name: 'socialLinks', // Social media links
      type: 'array',
      fields: [
        {
          name: 'platform', // Platform name (e.g., Twitter, Facebook)
          type: 'text',
          label: 'Platform Name',
        },
        {
          name: 'url', // URL to the social media profile
          type: 'text',
          label: 'Social Media URL',
        },
      ],
    },
    {
      name: 'newsletterSignup', // Newsletter signup form
      type: 'text',
      label: 'Newsletter Signup',
      required: true,
      localized: true,
    },
    {
      name: 'surveyLink', // Survey link
      type: 'text',
      label: 'Survey Link',
      localized: true,
    },
    {
      name: 'termsAndConditions', // Terms and Conditions link
      type: 'text',
      label: 'Terms and Conditions Link',
    },
    {
      name: 'privacyPolicy', // Privacy Policy link
      type: 'text',
      label: 'Privacy Policy Link',
    },
  ],
}
