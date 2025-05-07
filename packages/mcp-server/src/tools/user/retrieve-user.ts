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
  name: 'retrieve_user',
  description: 'Get user by user name',
  inputSchema: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TestStain, args: Record<string, unknown> | undefined) => {
  const { username, ...body } = args as any;
  return client.user.retrieve(username);
};

export default { metadata, tool, handler };
