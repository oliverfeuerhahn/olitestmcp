// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TestStain from 'test-stain';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'upload_image_pet',
  description: 'uploads an image',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
      additionalMetadata: {
        type: 'string',
        description: 'Additional Metadata',
      },
      image: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TestStain, args: Record<string, unknown> | undefined) => {
  const { petId, ...body } = args as any;
  return client.pet.uploadImage(petId, body);
};

export default { metadata, tool, handler };
