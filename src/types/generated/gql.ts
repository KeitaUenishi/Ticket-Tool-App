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
    "\n  query GetAllEvents($event_date: date) {\n    events(where: { event_date: { _gte: $event_date } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n": types.GetAllEventsDocument,
    "\n  query GetMyEvents($user_id: uuid) {\n    events(where: { user_id: { _eq: $user_id } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n": types.GetMyEventsDocument,
    "\n  query GetEvent($user_id: uuid, $id: uuid) {\n    events(where: { user_id: { _eq: $user_id }, id: { _eq: $id } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n": types.GetEventDocument,
    "\n  mutation CreateEvent(\n    $event_title: String\n    $event_date: date\n    $event_place: String\n    $actors: String\n    $image: String\n    $fee: String\n    $free_input: String\n    $user_id: uuid\n  ) {\n    insert_events_one(\n      object: {\n        event_title: $event_title\n        event_date: $event_date\n        event_place: $event_place\n        actors: $actors\n        image: $image\n        fee: $fee\n        free_input: $free_input\n        user_id: $user_id\n      }\n    ) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n": types.CreateEventDocument,
    "\n  mutation DeleteEvent($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_title\n      event_place\n      event_date\n      actors\n      fee\n      free_input\n      image\n      created_date\n      updated_date\n      user_id\n    }\n  }\n": types.DeleteEventDocument,
    "\n  mutation UpdateEvent(\n    $event_title: String\n    $event_date: date\n    $event_place: String\n    $actors: String\n    $image: String\n    $fee: String\n    $free_input: String\n    $updated_date: timestamptz\n  ) {\n    update_events_by_pk(\n      pk_columns: { id: \"$id\" }\n      _set: {\n        event_title: $event_title\n        event_date: $event_date\n        event_place: $event_place\n        actors: $actors\n        image: $image\n        fee: $fee\n        free_input: $free_input\n        updated_date: $updated_date\n      }\n    ) {\n      event_title\n      event_place\n      event_date\n      actors\n      fee\n      free_input\n      image\n      updated_date\n    }\n  }\n": types.UpdateEventDocument,
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
export function graphql(source: "\n  query GetAllEvents($event_date: date) {\n    events(where: { event_date: { _gte: $event_date } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"): (typeof documents)["\n  query GetAllEvents($event_date: date) {\n    events(where: { event_date: { _gte: $event_date } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMyEvents($user_id: uuid) {\n    events(where: { user_id: { _eq: $user_id } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"): (typeof documents)["\n  query GetMyEvents($user_id: uuid) {\n    events(where: { user_id: { _eq: $user_id } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetEvent($user_id: uuid, $id: uuid) {\n    events(where: { user_id: { _eq: $user_id }, id: { _eq: $id } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"): (typeof documents)["\n  query GetEvent($user_id: uuid, $id: uuid) {\n    events(where: { user_id: { _eq: $user_id }, id: { _eq: $id } }) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateEvent(\n    $event_title: String\n    $event_date: date\n    $event_place: String\n    $actors: String\n    $image: String\n    $fee: String\n    $free_input: String\n    $user_id: uuid\n  ) {\n    insert_events_one(\n      object: {\n        event_title: $event_title\n        event_date: $event_date\n        event_place: $event_place\n        actors: $actors\n        image: $image\n        fee: $fee\n        free_input: $free_input\n        user_id: $user_id\n      }\n    ) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateEvent(\n    $event_title: String\n    $event_date: date\n    $event_place: String\n    $actors: String\n    $image: String\n    $fee: String\n    $free_input: String\n    $user_id: uuid\n  ) {\n    insert_events_one(\n      object: {\n        event_title: $event_title\n        event_date: $event_date\n        event_place: $event_place\n        actors: $actors\n        image: $image\n        fee: $fee\n        free_input: $free_input\n        user_id: $user_id\n      }\n    ) {\n      id\n      event_title\n      event_date\n      event_place\n      actors\n      image\n      fee\n      free_input\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteEvent($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_title\n      event_place\n      event_date\n      actors\n      fee\n      free_input\n      image\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEvent($id: uuid!) {\n    delete_events_by_pk(id: $id) {\n      id\n      event_title\n      event_place\n      event_date\n      actors\n      fee\n      free_input\n      image\n      created_date\n      updated_date\n      user_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateEvent(\n    $event_title: String\n    $event_date: date\n    $event_place: String\n    $actors: String\n    $image: String\n    $fee: String\n    $free_input: String\n    $updated_date: timestamptz\n  ) {\n    update_events_by_pk(\n      pk_columns: { id: \"$id\" }\n      _set: {\n        event_title: $event_title\n        event_date: $event_date\n        event_place: $event_place\n        actors: $actors\n        image: $image\n        fee: $fee\n        free_input: $free_input\n        updated_date: $updated_date\n      }\n    ) {\n      event_title\n      event_place\n      event_date\n      actors\n      fee\n      free_input\n      image\n      updated_date\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateEvent(\n    $event_title: String\n    $event_date: date\n    $event_place: String\n    $actors: String\n    $image: String\n    $fee: String\n    $free_input: String\n    $updated_date: timestamptz\n  ) {\n    update_events_by_pk(\n      pk_columns: { id: \"$id\" }\n      _set: {\n        event_title: $event_title\n        event_date: $event_date\n        event_place: $event_place\n        actors: $actors\n        image: $image\n        fee: $fee\n        free_input: $free_input\n        updated_date: $updated_date\n      }\n    ) {\n      event_title\n      event_place\n      event_date\n      actors\n      fee\n      free_input\n      image\n      updated_date\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;