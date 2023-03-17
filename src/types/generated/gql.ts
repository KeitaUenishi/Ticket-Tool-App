/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetEvents {\n    events(order_by: { event_date: desc }) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.GetEventsDocument,
    "\n  mutation CreateUser(\n    $event_type_id: Int\n    $event_date: date\n    $event_name: String\n  ) {\n    insert_events_one(\n      object: {\n        event_name: $event_name\n        event_date: $event_date\n        event_type_id: $event_type_id\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation DeleteUser($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation UpdateUser($id: uuid!, $event_type_id: Int, $event_name: String) {\n    update_events_by_pk(\n      pk_columns: { id: $id }\n      _set: { event_type_id: $event_type_id, event_name: $event_name }\n    ) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.UpdateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetEvents {\n    events(order_by: { event_date: desc }) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  query GetEvents {\n    events(order_by: { event_date: desc }) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $event_type_id: Int\n    $event_date: date\n    $event_name: String\n  ) {\n    insert_events_one(\n      object: {\n        event_name: $event_name\n        event_date: $event_date\n        event_type_id: $event_type_id\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser(\n    $event_type_id: Int\n    $event_date: date\n    $event_name: String\n  ) {\n    insert_events_one(\n      object: {\n        event_name: $event_name\n        event_date: $event_date\n        event_type_id: $event_type_id\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($id: uuid!, $event_type_id: Int, $event_name: String) {\n    update_events_by_pk(\n      pk_columns: { id: $id }\n      _set: { event_type_id: $event_type_id, event_name: $event_name }\n    ) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($id: uuid!, $event_type_id: Int, $event_name: String) {\n    update_events_by_pk(\n      pk_columns: { id: $id }\n      _set: { event_type_id: $event_type_id, event_name: $event_name }\n    ) {\n      id\n      event_type_id\n      event_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;