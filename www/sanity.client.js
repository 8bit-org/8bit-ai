// sanity.client.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2023-10-01',     // Use a specific date or 'v1'
  useCdn: false,                // `false` ensures fresh data
});

export default client;
