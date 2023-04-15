/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** 登録されたeventを管理するテーブル */
export type Events = {
  __typename?: 'events';
  created_date: Scalars['timestamptz'];
  event_date: Scalars['date'];
  event_name: Scalars['String'];
  event_type_id: Scalars['Int'];
  id: Scalars['uuid'];
  updated_date: Scalars['timestamptz'];
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields';
  avg?: Maybe<Events_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
  stddev?: Maybe<Events_Stddev_Fields>;
  stddev_pop?: Maybe<Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Events_Stddev_Samp_Fields>;
  sum?: Maybe<Events_Sum_Fields>;
  var_pop?: Maybe<Events_Var_Pop_Fields>;
  var_samp?: Maybe<Events_Var_Samp_Fields>;
  variance?: Maybe<Events_Variance_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Events_Avg_Fields = {
  __typename?: 'events_avg_fields';
  event_type_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_date?: InputMaybe<Date_Comparison_Exp>;
  event_name?: InputMaybe<String_Comparison_Exp>;
  event_type_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_date?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "events" */
export enum Events_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventsPkey = 'events_pkey'
}

/** input type for incrementing numeric columns in table "events" */
export type Events_Inc_Input = {
  event_type_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
  created_date?: InputMaybe<Scalars['timestamptz']>;
  event_date?: InputMaybe<Scalars['date']>;
  event_name?: InputMaybe<Scalars['String']>;
  event_type_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_date?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields';
  created_date?: Maybe<Scalars['timestamptz']>;
  event_date?: Maybe<Scalars['date']>;
  event_name?: Maybe<Scalars['String']>;
  event_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  updated_date?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
  created_date?: Maybe<Scalars['timestamptz']>;
  event_date?: Maybe<Scalars['date']>;
  event_name?: Maybe<Scalars['String']>;
  event_type_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  updated_date?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
  __typename?: 'events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** on_conflict condition type for table "events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns?: Array<Events_Update_Column>;
  where?: InputMaybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  created_date?: InputMaybe<Order_By>;
  event_date?: InputMaybe<Order_By>;
  event_name?: InputMaybe<Order_By>;
  event_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_date?: InputMaybe<Order_By>;
};

/** primary key columns input for table: events */
export type Events_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  CreatedDate = 'created_date',
  /** column name */
  EventDate = 'event_date',
  /** column name */
  EventName = 'event_name',
  /** column name */
  EventTypeId = 'event_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedDate = 'updated_date'
}

/** input type for updating data in table "events" */
export type Events_Set_Input = {
  created_date?: InputMaybe<Scalars['timestamptz']>;
  event_date?: InputMaybe<Scalars['date']>;
  event_name?: InputMaybe<Scalars['String']>;
  event_type_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_date?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Events_Stddev_Fields = {
  __typename?: 'events_stddev_fields';
  event_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Events_Stddev_Pop_Fields = {
  __typename?: 'events_stddev_pop_fields';
  event_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Events_Stddev_Samp_Fields = {
  __typename?: 'events_stddev_samp_fields';
  event_type_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  created_date?: InputMaybe<Scalars['timestamptz']>;
  event_date?: InputMaybe<Scalars['date']>;
  event_name?: InputMaybe<Scalars['String']>;
  event_type_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_date?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Events_Sum_Fields = {
  __typename?: 'events_sum_fields';
  event_type_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "events" */
export enum Events_Update_Column {
  /** column name */
  CreatedDate = 'created_date',
  /** column name */
  EventDate = 'event_date',
  /** column name */
  EventName = 'event_name',
  /** column name */
  EventTypeId = 'event_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedDate = 'updated_date'
}

export type Events_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Events_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Events_Set_Input>;
  /** filter the rows which have to be updated */
  where: Events_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Events_Var_Pop_Fields = {
  __typename?: 'events_var_pop_fields';
  event_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Events_Var_Samp_Fields = {
  __typename?: 'events_var_samp_fields';
  event_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Events_Variance_Fields = {
  __typename?: 'events_variance_fields';
  event_type_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "events" */
  delete_events?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "events" */
  delete_events_by_pk?: Maybe<Events>;
  /** insert data into the table: "events" */
  insert_events?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "events" */
  insert_events_one?: Maybe<Events>;
  /** update data of the table: "events" */
  update_events?: Maybe<Events_Mutation_Response>;
  /** update single row of the table: "events" */
  update_events_by_pk?: Maybe<Events>;
  /** update multiples rows of table: "events" */
  update_events_many?: Maybe<Array<Maybe<Events_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
  object: Events_Insert_Input;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _inc?: InputMaybe<Events_Inc_Input>;
  _set?: InputMaybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Events_By_PkArgs = {
  _inc?: InputMaybe<Events_Inc_Input>;
  _set?: InputMaybe<Events_Set_Input>;
  pk_columns: Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Events_ManyArgs = {
  updates: Array<Events_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
};


export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<Events>;
};


export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = { __typename?: 'query_root', events: Array<{ __typename?: 'events', id: any, event_type_id: number, event_name: string, event_date: any, created_date: any, updated_date: any }> };

export type CreateEventMutationVariables = Exact<{
  event_type_id?: InputMaybe<Scalars['Int']>;
  event_date?: InputMaybe<Scalars['date']>;
  event_name?: InputMaybe<Scalars['String']>;
}>;


export type CreateEventMutation = { __typename?: 'mutation_root', insert_events_one?: { __typename?: 'events', id: any, event_type_id: number, event_name: string, event_date: any, created_date: any, updated_date: any } | null };

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteEventMutation = { __typename?: 'mutation_root', delete_events_by_pk?: { __typename?: 'events', id: any, event_type_id: number, event_name: string, event_date: any, created_date: any, updated_date: any } | null };

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['uuid'];
  event_type_id?: InputMaybe<Scalars['Int']>;
  event_name?: InputMaybe<Scalars['String']>;
  event_date?: InputMaybe<Scalars['date']>;
  updated_date?: InputMaybe<Scalars['timestamptz']>;
}>;


export type UpdateEventMutation = { __typename?: 'mutation_root', update_events_by_pk?: { __typename?: 'events', id: any, event_type_id: number, event_name: string, event_date: any, created_date: any, updated_date: any } | null };


export const GetEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_date"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"event_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"event_name"}},{"kind":"Field","name":{"kind":"Name","value":"event_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}},{"kind":"Field","name":{"kind":"Name","value":"updated_date"}}]}}]}}]} as unknown as DocumentNode<GetEventsQuery, GetEventsQueryVariables>;
export const CreateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event_type_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_events_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"event_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"event_type_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event_type_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"event_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"event_name"}},{"kind":"Field","name":{"kind":"Name","value":"event_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}},{"kind":"Field","name":{"kind":"Name","value":"updated_date"}}]}}]}}]} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>;
export const DeleteEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_events_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"event_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"event_name"}},{"kind":"Field","name":{"kind":"Name","value":"event_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}},{"kind":"Field","name":{"kind":"Name","value":"updated_date"}}]}}]}}]} as unknown as DocumentNode<DeleteEventMutation, DeleteEventMutationVariables>;
export const UpdateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event_type_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"event_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_events_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_type_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event_type_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"event_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"event_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"event_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"updated_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_date"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"event_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"event_name"}},{"kind":"Field","name":{"kind":"Name","value":"event_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}},{"kind":"Field","name":{"kind":"Name","value":"updated_date"}}]}}]}}]} as unknown as DocumentNode<UpdateEventMutation, UpdateEventMutationVariables>;