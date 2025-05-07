// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TestStain from 'test-stain';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_pet',
  description: 'Returns a single pet',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: TestStain, args: Record<string, unknown> | undefined) => {
  const { petId, ...body } = args as any;
  return client.pet.retrieve(petId);
};

export default { metadata, tool, handler };
