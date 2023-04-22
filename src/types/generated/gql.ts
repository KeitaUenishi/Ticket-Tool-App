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
    "\n  query GetEvents($userId: String) {\n    events(\n      where: { userId: { _eq: $userId } }\n      order_by: { event_date: desc }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.GetEventsDocument,
    "\n  query GetEvent($userId: String, $id: uuid!) {\n    events(\n      where: { userId: { _eq: $userId }, id: { _eq: $id } }\n      order_by: { event_date: desc }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.GetEventDocument,
    "\n  mutation CreateEvent(\n    $event_type_id: Int\n    $event_date: date\n    $event_name: String\n    $place_name: String\n    $userId: String\n  ) {\n    insert_events_one(\n      object: {\n        event_name: $event_name\n        place_name: $place_name\n        event_date: $event_date\n        event_type_id: $event_type_id\n        userId: $userId\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.CreateEventDocument,
    "\n  mutation DeleteEvent($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.DeleteEventDocument,
    "\n  mutation UpdateEvent(\n    $id: uuid!\n    $event_type_id: Int\n    $event_name: String\n    $place_name: String\n    $event_date: date\n    $updated_date: timestamptz\n  ) {\n    update_events_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        event_type_id: $event_type_id\n        event_name: $event_name\n        place_name: $place_name\n        event_date: $event_date\n        updated_date: $updated_date\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n": types.UpdateEventDocument,
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
export function graphql(source: "\n  query GetEvents($userId: String) {\n    events(\n      where: { userId: { _eq: $userId } }\n      order_by: { event_date: desc }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  query GetEvents($userId: String) {\n    events(\n      where: { userId: { _eq: $userId } }\n      order_by: { event_date: desc }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetEvent($userId: String, $id: uuid!) {\n    events(\n      where: { userId: { _eq: $userId }, id: { _eq: $id } }\n      order_by: { event_date: desc }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  query GetEvent($userId: String, $id: uuid!) {\n    events(\n      where: { userId: { _eq: $userId }, id: { _eq: $id } }\n      order_by: { event_date: desc }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateEvent(\n    $event_type_id: Int\n    $event_date: date\n    $event_name: String\n    $place_name: String\n    $userId: String\n  ) {\n    insert_events_one(\n      object: {\n        event_name: $event_name\n        place_name: $place_name\n        event_date: $event_date\n        event_type_id: $event_type_id\n        userId: $userId\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  mutation CreateEvent(\n    $event_type_id: Int\n    $event_date: date\n    $event_name: String\n    $place_name: String\n    $userId: String\n  ) {\n    insert_events_one(\n      object: {\n        event_name: $event_name\n        place_name: $place_name\n        event_date: $event_date\n        event_type_id: $event_type_id\n        userId: $userId\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteEvent($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEvent($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateEvent(\n    $id: uuid!\n    $event_type_id: Int\n    $event_name: String\n    $place_name: String\n    $event_date: date\n    $updated_date: timestamptz\n  ) {\n    update_events_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        event_type_id: $event_type_id\n        event_name: $event_name\n        place_name: $place_name\n        event_date: $event_date\n        updated_date: $updated_date\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateEvent(\n    $id: uuid!\n    $event_type_id: Int\n    $event_name: String\n    $place_name: String\n    $event_date: date\n    $updated_date: timestamptz\n  ) {\n    update_events_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        event_type_id: $event_type_id\n        event_name: $event_name\n        place_name: $place_name\n        event_date: $event_date\n        updated_date: $updated_date\n      }\n    ) {\n      id\n      event_type_id\n      event_name\n      place_name\n      event_date\n      created_date\n      updated_date\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;