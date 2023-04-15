import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query GetEvents {
    events(order_by: { event_date: desc }) {
      id
      event_type_id
      event_name
      place_name
      event_date
      created_date
      updated_date
    }
  }
`;

export const GET_EVENTS_LOCAL = gql`
  query GetEvents {
    events(order_by: { event_date: desc }) @client {
      id
      event_type_id
      event_name
      place_name
      event_date
      created_date
      updated_date
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $event_type_id: Int
    $event_date: date
    $event_name: String
    $place_name: String
  ) {
    insert_events_one(
      object: {
        event_name: $event_name
        place_name: $place_name
        event_date: $event_date
        event_type_id: $event_type_id
      }
    ) {
      id
      event_type_id
      event_name
      place_name
      event_date
      created_date
      updated_date
    }
  }
`;
export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: uuid!) {
    delete_events_by_pk(id: $id) {
      id
      event_type_id
      event_name
      place_name
      event_date
      created_date
      updated_date
    }
  }
`;
export const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $id: uuid!
    $event_type_id: Int
    $event_name: String
    $place_name: String
    $event_date: date
    $updated_date: timestamptz
  ) {
    update_events_by_pk(
      pk_columns: { id: $id }
      _set: {
        event_type_id: $event_type_id
        event_name: $event_name
        place_name: $place_name
        event_date: $event_date
        updated_date: $updated_date
      }
    ) {
      id
      event_type_id
      event_name
      place_name
      event_date
      created_date
      updated_date
    }
  }
`;
