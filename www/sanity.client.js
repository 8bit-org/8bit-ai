// sanity.client.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-10-01',     // Use a specific date or 'v1'
  useCdn: false,                // `false` ensures fresh data
  token: process.env.SANITY_API_TOKEN, // Add this line
});

export default client;
