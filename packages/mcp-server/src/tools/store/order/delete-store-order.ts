// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TestStain from 'test-stain';

export const metadata: Metadata = {
  resource: 'store.order',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_store_order',
  description:
    'For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors',
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: TestStain, args: Record<string, unknown> | undefined) => {
  const { orderId, ...body } = args as any;
  return client.store.order.delete(orderId);
};

export default { metadata, tool, handler };
