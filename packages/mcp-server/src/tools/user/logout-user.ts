// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TestStain from 'test-stain';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'logout_user',
  description: 'Logs out current logged in user session',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TestStain, args: Record<string, unknown> | undefined) => {
  return client.user.logout();
};

export default { metadata, tool, handler };
