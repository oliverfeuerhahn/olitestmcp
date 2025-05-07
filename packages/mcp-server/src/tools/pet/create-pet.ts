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
  name: 'create_pet',
  description: 'Add a new pet to the store',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      photoUrls: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      id: {
        type: 'integer',
      },
      category: {
        $ref: '#/$defs/category',
      },
      status: {
        type: 'string',
        description: 'pet status in the store',
        enum: ['available', 'pending', 'sold'],
      },
      tags: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            name: {
              type: 'string',
            },
          },
          required: [],
        },
      },
    },
    $defs: {
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: TestStain, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.pet.create(body);
};

export default { metadata, tool, handler };
