// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TestStain from 'test-stain';

export const metadata: Metadata = {
  resource: 'store',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_inventory_store',
  description: 'Returns a map of status codes to quantities',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TestStain, args: Record<string, unknown> | undefined) => {
  return client.store.listInventory();
};

export default { metadata, tool, handler };
