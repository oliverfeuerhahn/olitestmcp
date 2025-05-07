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
  name: 'delete_pet',
  description: 'delete a pet',
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
  return client.pet.delete(petId);
};

export default { metadata, tool, handler };
