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
  name: 'update_by_id_pet',
  description: 'Updates a pet in the store with form data',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
      name: {
        type: 'string',
        description: 'Name of pet that needs to be updated',
      },
      status: {
        type: 'string',
        description: 'Status of pet that needs to be updated',
      },
    },
  },
};

export const handler = (client: TestStain, args: Record<string, unknown> | undefined) => {
  const { petId, ...body } = args as any;
  return client.pet.updateByID(petId, body);
};

export default { metadata, tool, handler };
