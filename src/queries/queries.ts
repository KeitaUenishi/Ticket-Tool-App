import { gql } from "@apollo/client";

export const GET_ALL_EVENTS = gql`
  query GetAllEvents($event_date: date) {
    events(where: { event_date: { _gte: $event_date } }) {
      id
      event_title
      event_date
      event_place
      actors
      image
      fee
      free_input
      created_date
      updated_date
      user_id
    }
  }
`;

export const GET_MY_EVENTS = gql`
  query GetMyEvents($user_id: uuid) {
    events(where: { user_id: { _eq: $user_id } }) {
      id
      event_title
      event_date
      event_place
      actors
      image
      fee
      free_input
      created_date
      updated_date
      user_id
    }
  }
`;

// export const GET_EVENTS_LOCAL = gql`
//   query GetEvents {
//     events(where: { userId: { _eq: $userId } }, order_by: { event_date: desc })
//       @client {
//       id
//       event_type_id
//       event_name
//       place_name
//       event_date
//       created_date
//       updated_date
//     }
//   }
// `;

export const GET_EVENT = gql`
  query GetEvent($user_id: uuid, $id: uuid) {
    events(where: { user_id: { _eq: $user_id }, id: { _eq: $id } }) {
      id
      event_title
      event_date
      event_place
      actors
      image
      fee
      free_input
      created_date
      updated_date
      user_id
    }
  }
`;

// export const GET_EVENT = gql`
//   query GetEvent($userId: String, $id: uuid!) {
//     events(
//       where: { userId: { _eq: $userId }, id: { _eq: $id } }
//       order_by: { event_date: desc }
//     ) {
//       id
//       event_type_id
//       event_name
//       place_name
//       event_date
//       created_date
//       updated_date
//     }
//   }
// `;

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $event_title: String
    $event_date: date
    $event_place: String
    $actors: String
    $image: String
    $fee: String
    $free_input: String
    $user_id: uuid
  ) {
    insert_events_one(
      object: {
        event_title: $event_title
        event_date: $event_date
        event_place: $event_place
        actors: $actors
        image: $image
        fee: $fee
        free_input: $free_input
        user_id: $user_id
      }
    ) {
      id
      event_title
      event_date
      event_place
      actors
      image
      fee
      free_input
      created_date
      updated_date
      user_id
    }
  }
`;

// export const CREATE_EVENT = gql`
//   mutation CreateEvent(
//     $event_type_id: Int
//     $event_date: date
//     $event_name: String
//     $place_name: String
//     $userId: String
//   ) {
//     insert_events_one(
//       object: {
//         event_name: $event_name
//         place_name: $place_name
//         event_date: $event_date
//         event_type_id: $event_type_id
//         userId: $userId
//       }
//     ) {
//       id
//       event_type_id
//       event_name
//       place_name
//       event_date
//       created_date
//       updated_date
//     }
//   }
// `;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: uuid!) {
    delete_events_by_pk(id: $id) {
      id
      event_title
      event_place
      event_date
      actors
      fee
      free_input
      image
      created_date
      updated_date
      user_id
    }
  }
`;

// export const DELETE_EVENT = gql`
//   mutation DeleteEvent($id: uuid!) {
//     delete_events_by_pk(id: $id) {
//       id
//       event_type_id
//       event_name
//       place_name
//       event_date
//       created_date
//       updated_date
//     }
//   }
// `;

export const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $event_title: String
    $event_date: date
    $event_place: String
    $actors: String
    $image: String
    $fee: String
    $free_input: String
    $updated_date: timestamptz
  ) {
    update_events_by_pk(
      pk_columns: { id: "$id" }
      _set: {
        event_title: $event_title
        event_date: $event_date
        event_place: $event_place
        actors: $actors
        image: $image
        fee: $fee
        free_input: $free_input
        updated_date: $updated_date
      }
    ) {
      event_title
      event_place
      event_date
      actors
      fee
      free_input
      image
      updated_date
    }
  }
`;

// export const UPDATE_EVENT = gql`
//   mutation UpdateEvent(
//     $id: uuid!
//     $event_type_id: Int
//     $event_name: String
//     $place_name: String
//     $event_date: date
//     $updated_date: timestamptz
//   ) {
//     update_events_by_pk(
//       pk_columns: { id: $id }
//       _set: {
//         event_type_id: $event_type_id
//         event_name: $event_name
//         place_name: $place_name
//         event_date: $event_date
//         updated_date: $updated_date
//       }
//     ) {
//       id
//       event_type_id
//       event_name
//       place_name
//       event_date
//       created_date
//       updated_date
//     }
//   }
// `;
