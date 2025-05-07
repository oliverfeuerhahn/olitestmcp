# Test Stain TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/test-stain-typescript.git
cd test-stain-typescript
yarn && ./scripts/build-all
```

### Running

```sh
# set env vars as needed
export PETSTORE_API_KEY="My API Key"
npx ./packages/mcp-server
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y test-stain-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "test_stain_api": {
      "command": "npx",
      "args": ["-y", "/path/to/local/test-stain-typescript/packages/mcp-server", "--client=claude"],
      "env": {
        "PETSTORE_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "test-stain-mcp/server";

// import a specific tool
import createPet from "test-stain-mcp/tools/pet/create-pet";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createPet, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `pet`:

- `create_pet` (`write`): Add a new pet to the store
- `retrieve_pet` (`read`): Returns a single pet
- `update_pet` (`write`): Update an existing pet by Id
- `delete_pet` (`write`): delete a pet
- `find_by_status_pet` (`read`): Multiple status values can be provided with comma separated strings
- `find_by_tags_pet` (`read`): Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
- `update_by_id_pet` (`write`): Updates a pet in the store with form data
- `upload_image_pet` (`write`): uploads an image

### Resource `store`:

- `list_inventory_store` (`read`): Returns a map of status codes to quantities

### Resource `store.order`:

- `create_store_order` (`write`): Place a new order in the store
- `retrieve_store_order` (`read`): For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
- `delete_store_order` (`write`): For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Resource `user`:

- `create_user` (`write`): This can only be done by the logged in user.
- `retrieve_user` (`read`): Get user by user name
- `update_user` (`write`): This can only be done by the logged in user.
- `delete_user` (`write`): This can only be done by the logged in user.
- `create_with_list_user` (`write`): Creates list of users with given input array
- `login_user` (`read`): Logs user into the system
- `logout_user` (`read`): Logs out current logged in user session
