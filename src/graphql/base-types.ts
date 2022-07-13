/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

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
  bigint: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Float. All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
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

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "blocks_log" */
export type Blocks_Log = {
  __typename?: 'blocks_log';
  last_processed_block: Scalars['Int'];
  last_updated_at: Scalars['timestamp'];
  zone: Scalars['String'];
};

/** Boolean expression to filter rows from the table "blocks_log". All fields are combined with a logical 'AND'. */
export type Blocks_Log_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Blocks_Log_Bool_Exp>>>;
  _not?: InputMaybe<Blocks_Log_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Blocks_Log_Bool_Exp>>>;
  last_processed_block?: InputMaybe<Int_Comparison_Exp>;
  last_updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "blocks_log" */
export type Blocks_Log_Order_By = {
  last_processed_block?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "blocks_log" */
export type Blocks_Log_Pk_Columns_Input = {
  zone: Scalars['String'];
};

/** select columns of table "blocks_log" */
export const enum Blocks_Log_Select_Column {
  /** column name */
  LastProcessedBlock = 'last_processed_block',
  /** column name */
  LastUpdatedAt = 'last_updated_at',
  /** column name */
  Zone = 'zone',
}

/** columns and relationships of "channels_stats" */
export type Channels_Stats = {
  __typename?: 'channels_stats';
  channel_id: Scalars['String'];
  client_id: Scalars['String'];
  connection_id: Scalars['String'];
  ibc_tx_1d: Scalars['Int'];
  ibc_tx_1d_diff: Scalars['Int'];
  ibc_tx_1d_failed: Scalars['Int'];
  ibc_tx_1d_failed_diff: Scalars['Int'];
  ibc_tx_7d: Scalars['Int'];
  ibc_tx_7d_diff: Scalars['Int'];
  ibc_tx_7d_failed: Scalars['Int'];
  ibc_tx_7d_failed_diff: Scalars['Int'];
  ibc_tx_30d: Scalars['Int'];
  ibc_tx_30d_diff: Scalars['Int'];
  ibc_tx_30d_failed: Scalars['Int'];
  ibc_tx_30d_failed_diff: Scalars['Int'];
  is_opened: Scalars['Boolean'];
  is_zone_counerparty_mainnet: Scalars['Boolean'];
  zone: Scalars['String'];
  zone_counerparty: Scalars['String'];
  zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name: Scalars['String'];
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name: Scalars['String'];
};

/** aggregated selection of "channels_stats" */
export type Channels_Stats_Aggregate = {
  __typename?: 'channels_stats_aggregate';
  aggregate?: Maybe<Channels_Stats_Aggregate_Fields>;
  nodes: Array<Channels_Stats>;
};

/** aggregate fields of "channels_stats" */
export type Channels_Stats_Aggregate_Fields = {
  __typename?: 'channels_stats_aggregate_fields';
  avg?: Maybe<Channels_Stats_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channels_Stats_Max_Fields>;
  min?: Maybe<Channels_Stats_Min_Fields>;
  stddev?: Maybe<Channels_Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Channels_Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Channels_Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Channels_Stats_Sum_Fields>;
  var_pop?: Maybe<Channels_Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Channels_Stats_Var_Samp_Fields>;
  variance?: Maybe<Channels_Stats_Variance_Fields>;
};

/** aggregate fields of "channels_stats" */
export type Channels_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Channels_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channels_stats" */
export type Channels_Stats_Aggregate_Order_By = {
  avg?: InputMaybe<Channels_Stats_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Channels_Stats_Max_Order_By>;
  min?: InputMaybe<Channels_Stats_Min_Order_By>;
  stddev?: InputMaybe<Channels_Stats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Channels_Stats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Channels_Stats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Channels_Stats_Sum_Order_By>;
  var_pop?: InputMaybe<Channels_Stats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Channels_Stats_Var_Samp_Order_By>;
  variance?: InputMaybe<Channels_Stats_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Channels_Stats_Avg_Fields = {
  __typename?: 'channels_stats_avg_fields';
  ibc_tx_1d?: Maybe<Scalars['Float']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d?: Maybe<Scalars['Float']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d?: Maybe<Scalars['Float']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "channels_stats" */
export type Channels_Stats_Avg_Order_By = {
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "channels_stats". All fields are combined with a logical 'AND'. */
export type Channels_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Channels_Stats_Bool_Exp>>>;
  _not?: InputMaybe<Channels_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Channels_Stats_Bool_Exp>>>;
  channel_id?: InputMaybe<String_Comparison_Exp>;
  client_id?: InputMaybe<String_Comparison_Exp>;
  connection_id?: InputMaybe<String_Comparison_Exp>;
  ibc_tx_1d?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_1d_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_1d_failed?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_1d_failed_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_7d?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_7d_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_7d_failed?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_7d_failed_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_30d?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_30d_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_30d_failed?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_30d_failed_diff?: InputMaybe<Int_Comparison_Exp>;
  is_opened?: InputMaybe<Boolean_Comparison_Exp>;
  is_zone_counerparty_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
  zone_counerparty?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_channel_id?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_label_url?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_label_url2?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_readable_name?: InputMaybe<String_Comparison_Exp>;
  zone_label_url?: InputMaybe<String_Comparison_Exp>;
  zone_label_url2?: InputMaybe<String_Comparison_Exp>;
  zone_readable_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Channels_Stats_Max_Fields = {
  __typename?: 'channels_stats_max_fields';
  channel_id?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  connection_id?: Maybe<Scalars['String']>;
  ibc_tx_1d?: Maybe<Scalars['Int']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_7d?: Maybe<Scalars['Int']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_30d?: Maybe<Scalars['Int']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_counerparty?: Maybe<Scalars['String']>;
  zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "channels_stats" */
export type Channels_Stats_Max_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  connection_id?: InputMaybe<Order_By>;
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counerparty?: InputMaybe<Order_By>;
  zone_counterparty_channel_id?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_label_url2?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Channels_Stats_Min_Fields = {
  __typename?: 'channels_stats_min_fields';
  channel_id?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  connection_id?: Maybe<Scalars['String']>;
  ibc_tx_1d?: Maybe<Scalars['Int']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_7d?: Maybe<Scalars['Int']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_30d?: Maybe<Scalars['Int']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_counerparty?: Maybe<Scalars['String']>;
  zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "channels_stats" */
export type Channels_Stats_Min_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  connection_id?: InputMaybe<Order_By>;
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counerparty?: InputMaybe<Order_By>;
  zone_counterparty_channel_id?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_label_url2?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "channels_stats" */
export type Channels_Stats_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  connection_id?: InputMaybe<Order_By>;
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
  is_opened?: InputMaybe<Order_By>;
  is_zone_counerparty_mainnet?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counerparty?: InputMaybe<Order_By>;
  zone_counterparty_channel_id?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_label_url2?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "channels_stats" */
export type Channels_Stats_Pk_Columns_Input = {
  channel_id: Scalars['String'];
  client_id: Scalars['String'];
  connection_id: Scalars['String'];
  zone: Scalars['String'];
};

/** select columns of table "channels_stats" */
export const enum Channels_Stats_Select_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  ConnectionId = 'connection_id',
  /** column name */
  IbcTx_1d = 'ibc_tx_1d',
  /** column name */
  IbcTx_1dDiff = 'ibc_tx_1d_diff',
  /** column name */
  IbcTx_1dFailed = 'ibc_tx_1d_failed',
  /** column name */
  IbcTx_1dFailedDiff = 'ibc_tx_1d_failed_diff',
  /** column name */
  IbcTx_7d = 'ibc_tx_7d',
  /** column name */
  IbcTx_7dDiff = 'ibc_tx_7d_diff',
  /** column name */
  IbcTx_7dFailed = 'ibc_tx_7d_failed',
  /** column name */
  IbcTx_7dFailedDiff = 'ibc_tx_7d_failed_diff',
  /** column name */
  IbcTx_30d = 'ibc_tx_30d',
  /** column name */
  IbcTx_30dDiff = 'ibc_tx_30d_diff',
  /** column name */
  IbcTx_30dFailed = 'ibc_tx_30d_failed',
  /** column name */
  IbcTx_30dFailedDiff = 'ibc_tx_30d_failed_diff',
  /** column name */
  IsOpened = 'is_opened',
  /** column name */
  IsZoneCounerpartyMainnet = 'is_zone_counerparty_mainnet',
  /** column name */
  Zone = 'zone',
  /** column name */
  ZoneCounerparty = 'zone_counerparty',
  /** column name */
  ZoneCounterpartyChannelId = 'zone_counterparty_channel_id',
  /** column name */
  ZoneCounterpartyLabelUrl = 'zone_counterparty_label_url',
  /** column name */
  ZoneCounterpartyLabelUrl2 = 'zone_counterparty_label_url2',
  /** column name */
  ZoneCounterpartyReadableName = 'zone_counterparty_readable_name',
  /** column name */
  ZoneLabelUrl = 'zone_label_url',
  /** column name */
  ZoneLabelUrl2 = 'zone_label_url2',
  /** column name */
  ZoneReadableName = 'zone_readable_name',
}

/** aggregate stddev on columns */
export type Channels_Stats_Stddev_Fields = {
  __typename?: 'channels_stats_stddev_fields';
  ibc_tx_1d?: Maybe<Scalars['Float']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d?: Maybe<Scalars['Float']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d?: Maybe<Scalars['Float']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "channels_stats" */
export type Channels_Stats_Stddev_Order_By = {
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Channels_Stats_Stddev_Pop_Fields = {
  __typename?: 'channels_stats_stddev_pop_fields';
  ibc_tx_1d?: Maybe<Scalars['Float']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d?: Maybe<Scalars['Float']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d?: Maybe<Scalars['Float']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "channels_stats" */
export type Channels_Stats_Stddev_Pop_Order_By = {
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Channels_Stats_Stddev_Samp_Fields = {
  __typename?: 'channels_stats_stddev_samp_fields';
  ibc_tx_1d?: Maybe<Scalars['Float']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d?: Maybe<Scalars['Float']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d?: Maybe<Scalars['Float']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "channels_stats" */
export type Channels_Stats_Stddev_Samp_Order_By = {
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Channels_Stats_Sum_Fields = {
  __typename?: 'channels_stats_sum_fields';
  ibc_tx_1d?: Maybe<Scalars['Int']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_7d?: Maybe<Scalars['Int']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_30d?: Maybe<Scalars['Int']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Int']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Int']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "channels_stats" */
export type Channels_Stats_Sum_Order_By = {
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Channels_Stats_Var_Pop_Fields = {
  __typename?: 'channels_stats_var_pop_fields';
  ibc_tx_1d?: Maybe<Scalars['Float']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d?: Maybe<Scalars['Float']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d?: Maybe<Scalars['Float']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "channels_stats" */
export type Channels_Stats_Var_Pop_Order_By = {
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Channels_Stats_Var_Samp_Fields = {
  __typename?: 'channels_stats_var_samp_fields';
  ibc_tx_1d?: Maybe<Scalars['Float']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d?: Maybe<Scalars['Float']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d?: Maybe<Scalars['Float']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "channels_stats" */
export type Channels_Stats_Var_Samp_Order_By = {
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Channels_Stats_Variance_Fields = {
  __typename?: 'channels_stats_variance_fields';
  ibc_tx_1d?: Maybe<Scalars['Float']>;
  ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d?: Maybe<Scalars['Float']>;
  ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d?: Maybe<Scalars['Float']>;
  ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "channels_stats" */
export type Channels_Stats_Variance_Order_By = {
  ibc_tx_1d?: InputMaybe<Order_By>;
  ibc_tx_1d_diff?: InputMaybe<Order_By>;
  ibc_tx_1d_failed?: InputMaybe<Order_By>;
  ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_7d?: InputMaybe<Order_By>;
  ibc_tx_7d_diff?: InputMaybe<Order_By>;
  ibc_tx_7d_failed?: InputMaybe<Order_By>;
  ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_30d?: InputMaybe<Order_By>;
  ibc_tx_30d_diff?: InputMaybe<Order_By>;
  ibc_tx_30d_failed?: InputMaybe<Order_By>;
  ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** columns and relationships of "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats = {
  __typename?: 'ft_channel_group_stats';
  ibc_cashflow_in: Scalars['bigint'];
  ibc_cashflow_in_diff: Scalars['bigint'];
  ibc_cashflow_in_pending: Scalars['bigint'];
  ibc_cashflow_out: Scalars['bigint'];
  ibc_cashflow_out_diff: Scalars['bigint'];
  ibc_cashflow_out_pending: Scalars['bigint'];
  ibc_tx: Scalars['bigint'];
  ibc_tx_diff: Scalars['bigint'];
  ibc_tx_failed: Scalars['bigint'];
  ibc_tx_failed_diff: Scalars['bigint'];
  ibc_tx_pending?: Maybe<Scalars['Int']>;
  ibc_tx_success_rate: Scalars['numeric'];
  ibc_tx_success_rate_diff: Scalars['numeric'];
  is_zone_counterparty_mainnet: Scalars['Boolean'];
  is_zone_counterparty_up_to_date?: Maybe<Scalars['Boolean']>;
  is_zone_up_to_date?: Maybe<Scalars['Boolean']>;
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
  zone_counterparty: Scalars['String'];
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Aggregate = {
  __typename?: 'ft_channel_group_stats_aggregate';
  aggregate?: Maybe<Ft_Channel_Group_Stats_Aggregate_Fields>;
  nodes: Array<Ft_Channel_Group_Stats>;
};

/** aggregate fields of "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Aggregate_Fields = {
  __typename?: 'ft_channel_group_stats_aggregate_fields';
  avg?: Maybe<Ft_Channel_Group_Stats_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ft_Channel_Group_Stats_Max_Fields>;
  min?: Maybe<Ft_Channel_Group_Stats_Min_Fields>;
  stddev?: Maybe<Ft_Channel_Group_Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Ft_Channel_Group_Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ft_Channel_Group_Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Ft_Channel_Group_Stats_Sum_Fields>;
  var_pop?: Maybe<Ft_Channel_Group_Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Ft_Channel_Group_Stats_Var_Samp_Fields>;
  variance?: Maybe<Ft_Channel_Group_Stats_Variance_Fields>;
};

/** aggregate fields of "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ft_Channel_Group_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Aggregate_Order_By = {
  avg?: InputMaybe<Ft_Channel_Group_Stats_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ft_Channel_Group_Stats_Max_Order_By>;
  min?: InputMaybe<Ft_Channel_Group_Stats_Min_Order_By>;
  stddev?: InputMaybe<Ft_Channel_Group_Stats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ft_Channel_Group_Stats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ft_Channel_Group_Stats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ft_Channel_Group_Stats_Sum_Order_By>;
  var_pop?: InputMaybe<Ft_Channel_Group_Stats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ft_Channel_Group_Stats_Var_Samp_Order_By>;
  variance?: InputMaybe<Ft_Channel_Group_Stats_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Ft_Channel_Group_Stats_Avg_Fields = {
  __typename?: 'ft_channel_group_stats_avg_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Avg_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ft_channel_group_stats". All fields are combined with a logical 'AND'. */
export type Ft_Channel_Group_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>>>;
  _not?: InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>>>;
  ibc_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_pending?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_pending?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx_failed?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx_failed_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx_pending?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_success_rate?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_tx_success_rate_diff?: InputMaybe<Numeric_Comparison_Exp>;
  is_zone_counterparty_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  is_zone_counterparty_up_to_date?: InputMaybe<Boolean_Comparison_Exp>;
  is_zone_up_to_date?: InputMaybe<Boolean_Comparison_Exp>;
  timeframe?: InputMaybe<Int_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_label_url?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_readable_name?: InputMaybe<String_Comparison_Exp>;
  zone_label_url?: InputMaybe<String_Comparison_Exp>;
  zone_readable_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ft_Channel_Group_Stats_Max_Fields = {
  __typename?: 'ft_channel_group_stats_max_fields';
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_tx?: Maybe<Scalars['bigint']>;
  ibc_tx_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_failed?: Maybe<Scalars['bigint']>;
  ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_pending?: Maybe<Scalars['Int']>;
  ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_counterparty?: Maybe<Scalars['String']>;
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Max_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counterparty?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ft_Channel_Group_Stats_Min_Fields = {
  __typename?: 'ft_channel_group_stats_min_fields';
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_tx?: Maybe<Scalars['bigint']>;
  ibc_tx_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_failed?: Maybe<Scalars['bigint']>;
  ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_pending?: Maybe<Scalars['Int']>;
  ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_counterparty?: Maybe<Scalars['String']>;
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Min_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counterparty?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  is_zone_counterparty_mainnet?: InputMaybe<Order_By>;
  is_zone_counterparty_up_to_date?: InputMaybe<Order_By>;
  is_zone_up_to_date?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counterparty?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Pk_Columns_Input = {
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
  zone_counterparty: Scalars['String'];
};

/** select columns of table "ft_channel_group_stats" */
export const enum Ft_Channel_Group_Stats_Select_Column {
  /** column name */
  IbcCashflowIn = 'ibc_cashflow_in',
  /** column name */
  IbcCashflowInDiff = 'ibc_cashflow_in_diff',
  /** column name */
  IbcCashflowInPending = 'ibc_cashflow_in_pending',
  /** column name */
  IbcCashflowOut = 'ibc_cashflow_out',
  /** column name */
  IbcCashflowOutDiff = 'ibc_cashflow_out_diff',
  /** column name */
  IbcCashflowOutPending = 'ibc_cashflow_out_pending',
  /** column name */
  IbcTx = 'ibc_tx',
  /** column name */
  IbcTxDiff = 'ibc_tx_diff',
  /** column name */
  IbcTxFailed = 'ibc_tx_failed',
  /** column name */
  IbcTxFailedDiff = 'ibc_tx_failed_diff',
  /** column name */
  IbcTxPending = 'ibc_tx_pending',
  /** column name */
  IbcTxSuccessRate = 'ibc_tx_success_rate',
  /** column name */
  IbcTxSuccessRateDiff = 'ibc_tx_success_rate_diff',
  /** column name */
  IsZoneCounterpartyMainnet = 'is_zone_counterparty_mainnet',
  /** column name */
  IsZoneCounterpartyUpToDate = 'is_zone_counterparty_up_to_date',
  /** column name */
  IsZoneUpToDate = 'is_zone_up_to_date',
  /** column name */
  Timeframe = 'timeframe',
  /** column name */
  Zone = 'zone',
  /** column name */
  ZoneCounterparty = 'zone_counterparty',
  /** column name */
  ZoneCounterpartyLabelUrl = 'zone_counterparty_label_url',
  /** column name */
  ZoneCounterpartyReadableName = 'zone_counterparty_readable_name',
  /** column name */
  ZoneLabelUrl = 'zone_label_url',
  /** column name */
  ZoneReadableName = 'zone_readable_name',
}

/** aggregate stddev on columns */
export type Ft_Channel_Group_Stats_Stddev_Fields = {
  __typename?: 'ft_channel_group_stats_stddev_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Stddev_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ft_Channel_Group_Stats_Stddev_Pop_Fields = {
  __typename?: 'ft_channel_group_stats_stddev_pop_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Stddev_Pop_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ft_Channel_Group_Stats_Stddev_Samp_Fields = {
  __typename?: 'ft_channel_group_stats_stddev_samp_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Stddev_Samp_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Ft_Channel_Group_Stats_Sum_Fields = {
  __typename?: 'ft_channel_group_stats_sum_fields';
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_tx?: Maybe<Scalars['bigint']>;
  ibc_tx_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_failed?: Maybe<Scalars['bigint']>;
  ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_pending?: Maybe<Scalars['Int']>;
  ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Sum_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Ft_Channel_Group_Stats_Var_Pop_Fields = {
  __typename?: 'ft_channel_group_stats_var_pop_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Var_Pop_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ft_Channel_Group_Stats_Var_Samp_Fields = {
  __typename?: 'ft_channel_group_stats_var_samp_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Var_Samp_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ft_Channel_Group_Stats_Variance_Fields = {
  __typename?: 'ft_channel_group_stats_variance_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Variance_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** columns and relationships of "ft_channels_stats" */
export type Ft_Channels_Stats = {
  __typename?: 'ft_channels_stats';
  channel_id: Scalars['String'];
  client_id: Scalars['String'];
  connection_id: Scalars['String'];
  ibc_cashflow_in: Scalars['bigint'];
  ibc_cashflow_in_diff: Scalars['bigint'];
  ibc_cashflow_in_pending: Scalars['bigint'];
  ibc_cashflow_out: Scalars['bigint'];
  ibc_cashflow_out_diff: Scalars['bigint'];
  ibc_cashflow_out_pending: Scalars['bigint'];
  ibc_tx: Scalars['bigint'];
  ibc_tx_diff: Scalars['bigint'];
  ibc_tx_failed: Scalars['bigint'];
  ibc_tx_failed_diff: Scalars['bigint'];
  ibc_tx_pending?: Maybe<Scalars['Int']>;
  ibc_tx_success_rate: Scalars['numeric'];
  ibc_tx_success_rate_diff: Scalars['numeric'];
  is_opened: Scalars['Boolean'];
  is_zone_counterparty_mainnet: Scalars['Boolean'];
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
  zone_counterparty: Scalars['String'];
  zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
  zone_website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "ft_channels_stats" */
export type Ft_Channels_Stats_Aggregate = {
  __typename?: 'ft_channels_stats_aggregate';
  aggregate?: Maybe<Ft_Channels_Stats_Aggregate_Fields>;
  nodes: Array<Ft_Channels_Stats>;
};

/** aggregate fields of "ft_channels_stats" */
export type Ft_Channels_Stats_Aggregate_Fields = {
  __typename?: 'ft_channels_stats_aggregate_fields';
  avg?: Maybe<Ft_Channels_Stats_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ft_Channels_Stats_Max_Fields>;
  min?: Maybe<Ft_Channels_Stats_Min_Fields>;
  stddev?: Maybe<Ft_Channels_Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Ft_Channels_Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ft_Channels_Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Ft_Channels_Stats_Sum_Fields>;
  var_pop?: Maybe<Ft_Channels_Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Ft_Channels_Stats_Var_Samp_Fields>;
  variance?: Maybe<Ft_Channels_Stats_Variance_Fields>;
};

/** aggregate fields of "ft_channels_stats" */
export type Ft_Channels_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ft_Channels_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ft_channels_stats" */
export type Ft_Channels_Stats_Aggregate_Order_By = {
  avg?: InputMaybe<Ft_Channels_Stats_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ft_Channels_Stats_Max_Order_By>;
  min?: InputMaybe<Ft_Channels_Stats_Min_Order_By>;
  stddev?: InputMaybe<Ft_Channels_Stats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ft_Channels_Stats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ft_Channels_Stats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ft_Channels_Stats_Sum_Order_By>;
  var_pop?: InputMaybe<Ft_Channels_Stats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ft_Channels_Stats_Var_Samp_Order_By>;
  variance?: InputMaybe<Ft_Channels_Stats_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Ft_Channels_Stats_Avg_Fields = {
  __typename?: 'ft_channels_stats_avg_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Avg_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ft_channels_stats". All fields are combined with a logical 'AND'. */
export type Ft_Channels_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Ft_Channels_Stats_Bool_Exp>>>;
  _not?: InputMaybe<Ft_Channels_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Ft_Channels_Stats_Bool_Exp>>>;
  channel_id?: InputMaybe<String_Comparison_Exp>;
  client_id?: InputMaybe<String_Comparison_Exp>;
  connection_id?: InputMaybe<String_Comparison_Exp>;
  ibc_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_pending?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_pending?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx_failed?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx_failed_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_tx_pending?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_success_rate?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_tx_success_rate_diff?: InputMaybe<Numeric_Comparison_Exp>;
  is_opened?: InputMaybe<Boolean_Comparison_Exp>;
  is_zone_counterparty_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  timeframe?: InputMaybe<Int_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_channel_id?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_label_url?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_label_url2?: InputMaybe<String_Comparison_Exp>;
  zone_counterparty_readable_name?: InputMaybe<String_Comparison_Exp>;
  zone_label_url?: InputMaybe<String_Comparison_Exp>;
  zone_label_url2?: InputMaybe<String_Comparison_Exp>;
  zone_readable_name?: InputMaybe<String_Comparison_Exp>;
  zone_website?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ft_Channels_Stats_Max_Fields = {
  __typename?: 'ft_channels_stats_max_fields';
  channel_id?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  connection_id?: Maybe<Scalars['String']>;
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_tx?: Maybe<Scalars['bigint']>;
  ibc_tx_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_failed?: Maybe<Scalars['bigint']>;
  ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_pending?: Maybe<Scalars['Int']>;
  ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_counterparty?: Maybe<Scalars['String']>;
  zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
  zone_website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Max_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  connection_id?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counterparty?: InputMaybe<Order_By>;
  zone_counterparty_channel_id?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_label_url2?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
  zone_website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ft_Channels_Stats_Min_Fields = {
  __typename?: 'ft_channels_stats_min_fields';
  channel_id?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  connection_id?: Maybe<Scalars['String']>;
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_tx?: Maybe<Scalars['bigint']>;
  ibc_tx_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_failed?: Maybe<Scalars['bigint']>;
  ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_pending?: Maybe<Scalars['Int']>;
  ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_counterparty?: Maybe<Scalars['String']>;
  zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  zone_counterparty_label_url?: Maybe<Scalars['String']>;
  zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
  zone_website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Min_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  connection_id?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counterparty?: InputMaybe<Order_By>;
  zone_counterparty_channel_id?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_label_url2?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
  zone_website?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "ft_channels_stats" */
export type Ft_Channels_Stats_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  connection_id?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  is_opened?: InputMaybe<Order_By>;
  is_zone_counterparty_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_counterparty?: InputMaybe<Order_By>;
  zone_counterparty_channel_id?: InputMaybe<Order_By>;
  zone_counterparty_label_url?: InputMaybe<Order_By>;
  zone_counterparty_label_url2?: InputMaybe<Order_By>;
  zone_counterparty_readable_name?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
  zone_website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "ft_channels_stats" */
export type Ft_Channels_Stats_Pk_Columns_Input = {
  channel_id: Scalars['String'];
  client_id: Scalars['String'];
  connection_id: Scalars['String'];
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
};

/** select columns of table "ft_channels_stats" */
export const enum Ft_Channels_Stats_Select_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  ConnectionId = 'connection_id',
  /** column name */
  IbcCashflowIn = 'ibc_cashflow_in',
  /** column name */
  IbcCashflowInDiff = 'ibc_cashflow_in_diff',
  /** column name */
  IbcCashflowInPending = 'ibc_cashflow_in_pending',
  /** column name */
  IbcCashflowOut = 'ibc_cashflow_out',
  /** column name */
  IbcCashflowOutDiff = 'ibc_cashflow_out_diff',
  /** column name */
  IbcCashflowOutPending = 'ibc_cashflow_out_pending',
  /** column name */
  IbcTx = 'ibc_tx',
  /** column name */
  IbcTxDiff = 'ibc_tx_diff',
  /** column name */
  IbcTxFailed = 'ibc_tx_failed',
  /** column name */
  IbcTxFailedDiff = 'ibc_tx_failed_diff',
  /** column name */
  IbcTxPending = 'ibc_tx_pending',
  /** column name */
  IbcTxSuccessRate = 'ibc_tx_success_rate',
  /** column name */
  IbcTxSuccessRateDiff = 'ibc_tx_success_rate_diff',
  /** column name */
  IsOpened = 'is_opened',
  /** column name */
  IsZoneCounterpartyMainnet = 'is_zone_counterparty_mainnet',
  /** column name */
  Timeframe = 'timeframe',
  /** column name */
  Zone = 'zone',
  /** column name */
  ZoneCounterparty = 'zone_counterparty',
  /** column name */
  ZoneCounterpartyChannelId = 'zone_counterparty_channel_id',
  /** column name */
  ZoneCounterpartyLabelUrl = 'zone_counterparty_label_url',
  /** column name */
  ZoneCounterpartyLabelUrl2 = 'zone_counterparty_label_url2',
  /** column name */
  ZoneCounterpartyReadableName = 'zone_counterparty_readable_name',
  /** column name */
  ZoneLabelUrl = 'zone_label_url',
  /** column name */
  ZoneLabelUrl2 = 'zone_label_url2',
  /** column name */
  ZoneReadableName = 'zone_readable_name',
  /** column name */
  ZoneWebsite = 'zone_website',
}

/** aggregate stddev on columns */
export type Ft_Channels_Stats_Stddev_Fields = {
  __typename?: 'ft_channels_stats_stddev_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Stddev_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ft_Channels_Stats_Stddev_Pop_Fields = {
  __typename?: 'ft_channels_stats_stddev_pop_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Stddev_Pop_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ft_Channels_Stats_Stddev_Samp_Fields = {
  __typename?: 'ft_channels_stats_stddev_samp_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Stddev_Samp_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Ft_Channels_Stats_Sum_Fields = {
  __typename?: 'ft_channels_stats_sum_fields';
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_tx?: Maybe<Scalars['bigint']>;
  ibc_tx_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_failed?: Maybe<Scalars['bigint']>;
  ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  ibc_tx_pending?: Maybe<Scalars['Int']>;
  ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Sum_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Ft_Channels_Stats_Var_Pop_Fields = {
  __typename?: 'ft_channels_stats_var_pop_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Var_Pop_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ft_Channels_Stats_Var_Samp_Fields = {
  __typename?: 'ft_channels_stats_var_samp_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Var_Samp_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ft_Channels_Stats_Variance_Fields = {
  __typename?: 'ft_channels_stats_variance_fields';
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_tx?: Maybe<Scalars['Float']>;
  ibc_tx_diff?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_pending?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Variance_Order_By = {
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_tx?: InputMaybe<Order_By>;
  ibc_tx_diff?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_pending?: InputMaybe<Order_By>;
  ibc_tx_success_rate?: InputMaybe<Order_By>;
  ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** columns and relationships of "headers" */
export type Headers = {
  __typename?: 'headers';
  channels_cnt_active_period: Scalars['Int'];
  channels_cnt_active_period_diff: Scalars['Int'];
  channels_cnt_all: Scalars['Int'];
  channels_cnt_open: Scalars['Int'];
  channels_cnt_period: Scalars['Int'];
  channels_percent_active_period: Scalars['Int'];
  channels_percent_active_period_diff: Scalars['Int'];
  chart: Scalars['jsonb'];
  chart_cashflow?: Maybe<Scalars['jsonb']>;
  chart_transfers?: Maybe<Scalars['jsonb']>;
  ibc_cashflow_pending_period: Scalars['bigint'];
  ibc_cashflow_period?: Maybe<Scalars['bigint']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['bigint']>;
  ibc_transfers_failed_period: Scalars['Int'];
  ibc_transfers_pending_period: Scalars['Int'];
  ibc_transfers_period: Scalars['Int'];
  ibc_transfers_period_diff: Scalars['Int'];
  is_mainnet_only: Scalars['Boolean'];
  relations_cnt_open: Scalars['Int'];
  timeframe: Scalars['Int'];
  top_ibc_cashflow_zone_pair?: Maybe<Scalars['jsonb']>;
  top_transfer_zone_pair?: Maybe<Scalars['jsonb']>;
  top_zone_pair: Scalars['jsonb'];
  zones_cnt_all: Scalars['Int'];
  zones_cnt_period: Scalars['Int'];
};

/** columns and relationships of "headers" */
export type HeadersChartArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "headers" */
export type HeadersChart_CashflowArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "headers" */
export type HeadersChart_TransfersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "headers" */
export type HeadersTop_Ibc_Cashflow_Zone_PairArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "headers" */
export type HeadersTop_Transfer_Zone_PairArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "headers" */
export type HeadersTop_Zone_PairArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "headers" */
export type Headers_Aggregate = {
  __typename?: 'headers_aggregate';
  aggregate?: Maybe<Headers_Aggregate_Fields>;
  nodes: Array<Headers>;
};

/** aggregate fields of "headers" */
export type Headers_Aggregate_Fields = {
  __typename?: 'headers_aggregate_fields';
  avg?: Maybe<Headers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Headers_Max_Fields>;
  min?: Maybe<Headers_Min_Fields>;
  stddev?: Maybe<Headers_Stddev_Fields>;
  stddev_pop?: Maybe<Headers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Headers_Stddev_Samp_Fields>;
  sum?: Maybe<Headers_Sum_Fields>;
  var_pop?: Maybe<Headers_Var_Pop_Fields>;
  var_samp?: Maybe<Headers_Var_Samp_Fields>;
  variance?: Maybe<Headers_Variance_Fields>;
};

/** aggregate fields of "headers" */
export type Headers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Headers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "headers" */
export type Headers_Aggregate_Order_By = {
  avg?: InputMaybe<Headers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Headers_Max_Order_By>;
  min?: InputMaybe<Headers_Min_Order_By>;
  stddev?: InputMaybe<Headers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Headers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Headers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Headers_Sum_Order_By>;
  var_pop?: InputMaybe<Headers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Headers_Var_Samp_Order_By>;
  variance?: InputMaybe<Headers_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Headers_Avg_Fields = {
  __typename?: 'headers_avg_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_all?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_cnt_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  zones_cnt_all?: Maybe<Scalars['Float']>;
  zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "headers" */
export type Headers_Avg_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "headers". All fields are combined with a logical 'AND'. */
export type Headers_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Headers_Bool_Exp>>>;
  _not?: InputMaybe<Headers_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Headers_Bool_Exp>>>;
  channels_cnt_active_period?: InputMaybe<Int_Comparison_Exp>;
  channels_cnt_active_period_diff?: InputMaybe<Int_Comparison_Exp>;
  channels_cnt_all?: InputMaybe<Int_Comparison_Exp>;
  channels_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  channels_cnt_period?: InputMaybe<Int_Comparison_Exp>;
  channels_percent_active_period?: InputMaybe<Int_Comparison_Exp>;
  channels_percent_active_period_diff?: InputMaybe<Int_Comparison_Exp>;
  chart?: InputMaybe<Jsonb_Comparison_Exp>;
  chart_cashflow?: InputMaybe<Jsonb_Comparison_Exp>;
  chart_transfers?: InputMaybe<Jsonb_Comparison_Exp>;
  ibc_cashflow_pending_period?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_period?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_period_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_transfers_failed_period?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_pending_period?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_period?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_period_diff?: InputMaybe<Int_Comparison_Exp>;
  is_mainnet_only?: InputMaybe<Boolean_Comparison_Exp>;
  relations_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  timeframe?: InputMaybe<Int_Comparison_Exp>;
  top_ibc_cashflow_zone_pair?: InputMaybe<Jsonb_Comparison_Exp>;
  top_transfer_zone_pair?: InputMaybe<Jsonb_Comparison_Exp>;
  top_zone_pair?: InputMaybe<Jsonb_Comparison_Exp>;
  zones_cnt_all?: InputMaybe<Int_Comparison_Exp>;
  zones_cnt_period?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Headers_Max_Fields = {
  __typename?: 'headers_max_fields';
  channels_cnt_active_period?: Maybe<Scalars['Int']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  channels_cnt_all?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_cnt_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['bigint']>;
  ibc_cashflow_period?: Maybe<Scalars['bigint']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['bigint']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Int']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Int']>;
  ibc_transfers_period?: Maybe<Scalars['Int']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Int']>;
  relations_cnt_open?: Maybe<Scalars['Int']>;
  timeframe?: Maybe<Scalars['Int']>;
  zones_cnt_all?: Maybe<Scalars['Int']>;
  zones_cnt_period?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "headers" */
export type Headers_Max_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Headers_Min_Fields = {
  __typename?: 'headers_min_fields';
  channels_cnt_active_period?: Maybe<Scalars['Int']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  channels_cnt_all?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_cnt_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['bigint']>;
  ibc_cashflow_period?: Maybe<Scalars['bigint']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['bigint']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Int']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Int']>;
  ibc_transfers_period?: Maybe<Scalars['Int']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Int']>;
  relations_cnt_open?: Maybe<Scalars['Int']>;
  timeframe?: Maybe<Scalars['Int']>;
  zones_cnt_all?: Maybe<Scalars['Int']>;
  zones_cnt_period?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "headers" */
export type Headers_Min_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "headers" */
export type Headers_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  chart?: InputMaybe<Order_By>;
  chart_cashflow?: InputMaybe<Order_By>;
  chart_transfers?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  is_mainnet_only?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  top_ibc_cashflow_zone_pair?: InputMaybe<Order_By>;
  top_transfer_zone_pair?: InputMaybe<Order_By>;
  top_zone_pair?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "headers" */
export type Headers_Pk_Columns_Input = {
  is_mainnet_only: Scalars['Boolean'];
  timeframe: Scalars['Int'];
};

/** select columns of table "headers" */
export const enum Headers_Select_Column {
  /** column name */
  ChannelsCntActivePeriod = 'channels_cnt_active_period',
  /** column name */
  ChannelsCntActivePeriodDiff = 'channels_cnt_active_period_diff',
  /** column name */
  ChannelsCntAll = 'channels_cnt_all',
  /** column name */
  ChannelsCntOpen = 'channels_cnt_open',
  /** column name */
  ChannelsCntPeriod = 'channels_cnt_period',
  /** column name */
  ChannelsPercentActivePeriod = 'channels_percent_active_period',
  /** column name */
  ChannelsPercentActivePeriodDiff = 'channels_percent_active_period_diff',
  /** column name */
  Chart = 'chart',
  /** column name */
  ChartCashflow = 'chart_cashflow',
  /** column name */
  ChartTransfers = 'chart_transfers',
  /** column name */
  IbcCashflowPendingPeriod = 'ibc_cashflow_pending_period',
  /** column name */
  IbcCashflowPeriod = 'ibc_cashflow_period',
  /** column name */
  IbcCashflowPeriodDiff = 'ibc_cashflow_period_diff',
  /** column name */
  IbcTransfersFailedPeriod = 'ibc_transfers_failed_period',
  /** column name */
  IbcTransfersPendingPeriod = 'ibc_transfers_pending_period',
  /** column name */
  IbcTransfersPeriod = 'ibc_transfers_period',
  /** column name */
  IbcTransfersPeriodDiff = 'ibc_transfers_period_diff',
  /** column name */
  IsMainnetOnly = 'is_mainnet_only',
  /** column name */
  RelationsCntOpen = 'relations_cnt_open',
  /** column name */
  Timeframe = 'timeframe',
  /** column name */
  TopIbcCashflowZonePair = 'top_ibc_cashflow_zone_pair',
  /** column name */
  TopTransferZonePair = 'top_transfer_zone_pair',
  /** column name */
  TopZonePair = 'top_zone_pair',
  /** column name */
  ZonesCntAll = 'zones_cnt_all',
  /** column name */
  ZonesCntPeriod = 'zones_cnt_period',
}

/** aggregate stddev on columns */
export type Headers_Stddev_Fields = {
  __typename?: 'headers_stddev_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_all?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_cnt_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  zones_cnt_all?: Maybe<Scalars['Float']>;
  zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "headers" */
export type Headers_Stddev_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Headers_Stddev_Pop_Fields = {
  __typename?: 'headers_stddev_pop_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_all?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_cnt_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  zones_cnt_all?: Maybe<Scalars['Float']>;
  zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "headers" */
export type Headers_Stddev_Pop_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Headers_Stddev_Samp_Fields = {
  __typename?: 'headers_stddev_samp_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_all?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_cnt_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  zones_cnt_all?: Maybe<Scalars['Float']>;
  zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "headers" */
export type Headers_Stddev_Samp_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Headers_Sum_Fields = {
  __typename?: 'headers_sum_fields';
  channels_cnt_active_period?: Maybe<Scalars['Int']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  channels_cnt_all?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_cnt_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['bigint']>;
  ibc_cashflow_period?: Maybe<Scalars['bigint']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['bigint']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Int']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Int']>;
  ibc_transfers_period?: Maybe<Scalars['Int']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Int']>;
  relations_cnt_open?: Maybe<Scalars['Int']>;
  timeframe?: Maybe<Scalars['Int']>;
  zones_cnt_all?: Maybe<Scalars['Int']>;
  zones_cnt_period?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "headers" */
export type Headers_Sum_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Headers_Var_Pop_Fields = {
  __typename?: 'headers_var_pop_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_all?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_cnt_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  zones_cnt_all?: Maybe<Scalars['Float']>;
  zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "headers" */
export type Headers_Var_Pop_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Headers_Var_Samp_Fields = {
  __typename?: 'headers_var_samp_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_all?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_cnt_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  zones_cnt_all?: Maybe<Scalars['Float']>;
  zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "headers" */
export type Headers_Var_Samp_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Headers_Variance_Fields = {
  __typename?: 'headers_variance_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_all?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_cnt_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period?: Maybe<Scalars['Float']>;
  ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period?: Maybe<Scalars['Float']>;
  ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  zones_cnt_all?: Maybe<Scalars['Float']>;
  zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "headers" */
export type Headers_Variance_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_all?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_cnt_period?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  ibc_cashflow_period?: InputMaybe<Order_By>;
  ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  ibc_transfers_failed_period?: InputMaybe<Order_By>;
  ibc_transfers_pending_period?: InputMaybe<Order_By>;
  ibc_transfers_period?: InputMaybe<Order_By>;
  ibc_transfers_period_diff?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  zones_cnt_all?: InputMaybe<Order_By>;
  zones_cnt_period?: InputMaybe<Order_By>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "nodes_addrs" */
export type Nodes_Addrs = {
  __typename?: 'nodes_addrs';
  city?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  continent_code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  ip_or_dns: Scalars['String'];
  is_hidden: Scalars['Boolean'];
  is_hosting?: Maybe<Scalars['Boolean']>;
  is_prioritized: Scalars['Boolean'];
  isp_name?: Maybe<Scalars['String']>;
  last_checked_at: Scalars['timestamp'];
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  org?: Maybe<Scalars['String']>;
  org_as?: Maybe<Scalars['String']>;
  org_as_name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregated selection of "nodes_addrs" */
export type Nodes_Addrs_Aggregate = {
  __typename?: 'nodes_addrs_aggregate';
  aggregate?: Maybe<Nodes_Addrs_Aggregate_Fields>;
  nodes: Array<Nodes_Addrs>;
};

/** aggregate fields of "nodes_addrs" */
export type Nodes_Addrs_Aggregate_Fields = {
  __typename?: 'nodes_addrs_aggregate_fields';
  avg?: Maybe<Nodes_Addrs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Nodes_Addrs_Max_Fields>;
  min?: Maybe<Nodes_Addrs_Min_Fields>;
  stddev?: Maybe<Nodes_Addrs_Stddev_Fields>;
  stddev_pop?: Maybe<Nodes_Addrs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nodes_Addrs_Stddev_Samp_Fields>;
  sum?: Maybe<Nodes_Addrs_Sum_Fields>;
  var_pop?: Maybe<Nodes_Addrs_Var_Pop_Fields>;
  var_samp?: Maybe<Nodes_Addrs_Var_Samp_Fields>;
  variance?: Maybe<Nodes_Addrs_Variance_Fields>;
};

/** aggregate fields of "nodes_addrs" */
export type Nodes_Addrs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nodes_Addrs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nodes_addrs" */
export type Nodes_Addrs_Aggregate_Order_By = {
  avg?: InputMaybe<Nodes_Addrs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nodes_Addrs_Max_Order_By>;
  min?: InputMaybe<Nodes_Addrs_Min_Order_By>;
  stddev?: InputMaybe<Nodes_Addrs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nodes_Addrs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nodes_Addrs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nodes_Addrs_Sum_Order_By>;
  var_pop?: InputMaybe<Nodes_Addrs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nodes_Addrs_Var_Samp_Order_By>;
  variance?: InputMaybe<Nodes_Addrs_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nodes_Addrs_Avg_Fields = {
  __typename?: 'nodes_addrs_avg_fields';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Avg_Order_By = {
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nodes_addrs". All fields are combined with a logical 'AND'. */
export type Nodes_Addrs_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Nodes_Addrs_Bool_Exp>>>;
  _not?: InputMaybe<Nodes_Addrs_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Nodes_Addrs_Bool_Exp>>>;
  city?: InputMaybe<String_Comparison_Exp>;
  continent?: InputMaybe<String_Comparison_Exp>;
  continent_code?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  country_code?: InputMaybe<String_Comparison_Exp>;
  district?: InputMaybe<String_Comparison_Exp>;
  ip_or_dns?: InputMaybe<String_Comparison_Exp>;
  is_hidden?: InputMaybe<Boolean_Comparison_Exp>;
  is_hosting?: InputMaybe<Boolean_Comparison_Exp>;
  is_prioritized?: InputMaybe<Boolean_Comparison_Exp>;
  isp_name?: InputMaybe<String_Comparison_Exp>;
  last_checked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  lat?: InputMaybe<Float_Comparison_Exp>;
  lon?: InputMaybe<Float_Comparison_Exp>;
  org?: InputMaybe<String_Comparison_Exp>;
  org_as?: InputMaybe<String_Comparison_Exp>;
  org_as_name?: InputMaybe<String_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  region_name?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  timezone_offset?: InputMaybe<Int_Comparison_Exp>;
  zip?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nodes_Addrs_Max_Fields = {
  __typename?: 'nodes_addrs_max_fields';
  city?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  continent_code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  ip_or_dns?: Maybe<Scalars['String']>;
  isp_name?: Maybe<Scalars['String']>;
  last_checked_at?: Maybe<Scalars['timestamp']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  org?: Maybe<Scalars['String']>;
  org_as?: Maybe<Scalars['String']>;
  org_as_name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Max_Order_By = {
  city?: InputMaybe<Order_By>;
  continent?: InputMaybe<Order_By>;
  continent_code?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  country_code?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  isp_name?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  org?: InputMaybe<Order_By>;
  org_as?: InputMaybe<Order_By>;
  org_as_name?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  region_name?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
  zip?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nodes_Addrs_Min_Fields = {
  __typename?: 'nodes_addrs_min_fields';
  city?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  continent_code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  ip_or_dns?: Maybe<Scalars['String']>;
  isp_name?: Maybe<Scalars['String']>;
  last_checked_at?: Maybe<Scalars['timestamp']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  org?: Maybe<Scalars['String']>;
  org_as?: Maybe<Scalars['String']>;
  org_as_name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  timezone_offset?: Maybe<Scalars['Int']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Min_Order_By = {
  city?: InputMaybe<Order_By>;
  continent?: InputMaybe<Order_By>;
  continent_code?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  country_code?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  isp_name?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  org?: InputMaybe<Order_By>;
  org_as?: InputMaybe<Order_By>;
  org_as_name?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  region_name?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
  zip?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "nodes_addrs" */
export type Nodes_Addrs_Order_By = {
  city?: InputMaybe<Order_By>;
  continent?: InputMaybe<Order_By>;
  continent_code?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  country_code?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  is_hidden?: InputMaybe<Order_By>;
  is_hosting?: InputMaybe<Order_By>;
  is_prioritized?: InputMaybe<Order_By>;
  isp_name?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  org?: InputMaybe<Order_By>;
  org_as?: InputMaybe<Order_By>;
  org_as_name?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  region_name?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
  zip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "nodes_addrs" */
export type Nodes_Addrs_Pk_Columns_Input = {
  ip_or_dns: Scalars['String'];
};

/** select columns of table "nodes_addrs" */
export const enum Nodes_Addrs_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Continent = 'continent',
  /** column name */
  ContinentCode = 'continent_code',
  /** column name */
  Country = 'country',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  District = 'district',
  /** column name */
  IpOrDns = 'ip_or_dns',
  /** column name */
  IsHidden = 'is_hidden',
  /** column name */
  IsHosting = 'is_hosting',
  /** column name */
  IsPrioritized = 'is_prioritized',
  /** column name */
  IspName = 'isp_name',
  /** column name */
  LastCheckedAt = 'last_checked_at',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon',
  /** column name */
  Org = 'org',
  /** column name */
  OrgAs = 'org_as',
  /** column name */
  OrgAsName = 'org_as_name',
  /** column name */
  Region = 'region',
  /** column name */
  RegionName = 'region_name',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  TimezoneOffset = 'timezone_offset',
  /** column name */
  Zip = 'zip',
}

/** aggregate stddev on columns */
export type Nodes_Addrs_Stddev_Fields = {
  __typename?: 'nodes_addrs_stddev_fields';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Stddev_Order_By = {
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nodes_Addrs_Stddev_Pop_Fields = {
  __typename?: 'nodes_addrs_stddev_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Stddev_Pop_Order_By = {
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nodes_Addrs_Stddev_Samp_Fields = {
  __typename?: 'nodes_addrs_stddev_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Stddev_Samp_Order_By = {
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nodes_Addrs_Sum_Fields = {
  __typename?: 'nodes_addrs_sum_fields';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone_offset?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Sum_Order_By = {
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nodes_Addrs_Var_Pop_Fields = {
  __typename?: 'nodes_addrs_var_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Var_Pop_Order_By = {
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nodes_Addrs_Var_Samp_Fields = {
  __typename?: 'nodes_addrs_var_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Var_Samp_Order_By = {
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nodes_Addrs_Variance_Fields = {
  __typename?: 'nodes_addrs_variance_fields';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Variance_Order_By = {
  lat?: InputMaybe<Order_By>;
  lon?: InputMaybe<Order_By>;
  timezone_offset?: InputMaybe<Order_By>;
};

/** columns and relationships of "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs = {
  __typename?: 'nodes_lcd_addrs';
  added_at: Scalars['timestamp'];
  ip_or_dns: Scalars['String'];
  is_alive: Scalars['Boolean'];
  is_hidden: Scalars['Boolean'];
  is_prioritized: Scalars['Boolean'];
  last_active?: Maybe<Scalars['timestamp']>;
  last_checked_at: Scalars['timestamp'];
  lcd_addr: Scalars['String'];
  response_time?: Maybe<Scalars['Int']>;
  zone: Scalars['String'];
};

/** aggregated selection of "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Aggregate = {
  __typename?: 'nodes_lcd_addrs_aggregate';
  aggregate?: Maybe<Nodes_Lcd_Addrs_Aggregate_Fields>;
  nodes: Array<Nodes_Lcd_Addrs>;
};

/** aggregate fields of "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Aggregate_Fields = {
  __typename?: 'nodes_lcd_addrs_aggregate_fields';
  avg?: Maybe<Nodes_Lcd_Addrs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Nodes_Lcd_Addrs_Max_Fields>;
  min?: Maybe<Nodes_Lcd_Addrs_Min_Fields>;
  stddev?: Maybe<Nodes_Lcd_Addrs_Stddev_Fields>;
  stddev_pop?: Maybe<Nodes_Lcd_Addrs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nodes_Lcd_Addrs_Stddev_Samp_Fields>;
  sum?: Maybe<Nodes_Lcd_Addrs_Sum_Fields>;
  var_pop?: Maybe<Nodes_Lcd_Addrs_Var_Pop_Fields>;
  var_samp?: Maybe<Nodes_Lcd_Addrs_Var_Samp_Fields>;
  variance?: Maybe<Nodes_Lcd_Addrs_Variance_Fields>;
};

/** aggregate fields of "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nodes_Lcd_Addrs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Aggregate_Order_By = {
  avg?: InputMaybe<Nodes_Lcd_Addrs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nodes_Lcd_Addrs_Max_Order_By>;
  min?: InputMaybe<Nodes_Lcd_Addrs_Min_Order_By>;
  stddev?: InputMaybe<Nodes_Lcd_Addrs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nodes_Lcd_Addrs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nodes_Lcd_Addrs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nodes_Lcd_Addrs_Sum_Order_By>;
  var_pop?: InputMaybe<Nodes_Lcd_Addrs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nodes_Lcd_Addrs_Var_Samp_Order_By>;
  variance?: InputMaybe<Nodes_Lcd_Addrs_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nodes_Lcd_Addrs_Avg_Fields = {
  __typename?: 'nodes_lcd_addrs_avg_fields';
  response_time?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Avg_Order_By = {
  response_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nodes_lcd_addrs". All fields are combined with a logical 'AND'. */
export type Nodes_Lcd_Addrs_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>>>;
  _not?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>>>;
  added_at?: InputMaybe<Timestamp_Comparison_Exp>;
  ip_or_dns?: InputMaybe<String_Comparison_Exp>;
  is_alive?: InputMaybe<Boolean_Comparison_Exp>;
  is_hidden?: InputMaybe<Boolean_Comparison_Exp>;
  is_prioritized?: InputMaybe<Boolean_Comparison_Exp>;
  last_active?: InputMaybe<Timestamp_Comparison_Exp>;
  last_checked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  lcd_addr?: InputMaybe<String_Comparison_Exp>;
  response_time?: InputMaybe<Int_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nodes_Lcd_Addrs_Max_Fields = {
  __typename?: 'nodes_lcd_addrs_max_fields';
  added_at?: Maybe<Scalars['timestamp']>;
  ip_or_dns?: Maybe<Scalars['String']>;
  last_active?: Maybe<Scalars['timestamp']>;
  last_checked_at?: Maybe<Scalars['timestamp']>;
  lcd_addr?: Maybe<Scalars['String']>;
  response_time?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Max_Order_By = {
  added_at?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  last_active?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  lcd_addr?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nodes_Lcd_Addrs_Min_Fields = {
  __typename?: 'nodes_lcd_addrs_min_fields';
  added_at?: Maybe<Scalars['timestamp']>;
  ip_or_dns?: Maybe<Scalars['String']>;
  last_active?: Maybe<Scalars['timestamp']>;
  last_checked_at?: Maybe<Scalars['timestamp']>;
  lcd_addr?: Maybe<Scalars['String']>;
  response_time?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Min_Order_By = {
  added_at?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  last_active?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  lcd_addr?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Order_By = {
  added_at?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  is_alive?: InputMaybe<Order_By>;
  is_hidden?: InputMaybe<Order_By>;
  is_prioritized?: InputMaybe<Order_By>;
  last_active?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  lcd_addr?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Pk_Columns_Input = {
  lcd_addr: Scalars['String'];
};

/** select columns of table "nodes_lcd_addrs" */
export const enum Nodes_Lcd_Addrs_Select_Column {
  /** column name */
  AddedAt = 'added_at',
  /** column name */
  IpOrDns = 'ip_or_dns',
  /** column name */
  IsAlive = 'is_alive',
  /** column name */
  IsHidden = 'is_hidden',
  /** column name */
  IsPrioritized = 'is_prioritized',
  /** column name */
  LastActive = 'last_active',
  /** column name */
  LastCheckedAt = 'last_checked_at',
  /** column name */
  LcdAddr = 'lcd_addr',
  /** column name */
  ResponseTime = 'response_time',
  /** column name */
  Zone = 'zone',
}

/** aggregate stddev on columns */
export type Nodes_Lcd_Addrs_Stddev_Fields = {
  __typename?: 'nodes_lcd_addrs_stddev_fields';
  response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Stddev_Order_By = {
  response_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nodes_Lcd_Addrs_Stddev_Pop_Fields = {
  __typename?: 'nodes_lcd_addrs_stddev_pop_fields';
  response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Stddev_Pop_Order_By = {
  response_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nodes_Lcd_Addrs_Stddev_Samp_Fields = {
  __typename?: 'nodes_lcd_addrs_stddev_samp_fields';
  response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Stddev_Samp_Order_By = {
  response_time?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nodes_Lcd_Addrs_Sum_Fields = {
  __typename?: 'nodes_lcd_addrs_sum_fields';
  response_time?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Sum_Order_By = {
  response_time?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nodes_Lcd_Addrs_Var_Pop_Fields = {
  __typename?: 'nodes_lcd_addrs_var_pop_fields';
  response_time?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Var_Pop_Order_By = {
  response_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nodes_Lcd_Addrs_Var_Samp_Fields = {
  __typename?: 'nodes_lcd_addrs_var_samp_fields';
  response_time?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Var_Samp_Order_By = {
  response_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nodes_Lcd_Addrs_Variance_Fields = {
  __typename?: 'nodes_lcd_addrs_variance_fields';
  response_time?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Variance_Order_By = {
  response_time?: InputMaybe<Order_By>;
};

/** columns and relationships of "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs = {
  __typename?: 'nodes_rpc_addrs';
  added_at: Scalars['timestamp'];
  earliest_block_height?: Maybe<Scalars['bigint']>;
  ip_or_dns: Scalars['String'];
  is_alive: Scalars['Boolean'];
  is_hidden: Scalars['Boolean'];
  is_prioritized: Scalars['Boolean'];
  last_active?: Maybe<Scalars['timestamp']>;
  last_block_height?: Maybe<Scalars['bigint']>;
  last_checked_at: Scalars['timestamp'];
  moniker?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
  response_time?: Maybe<Scalars['Int']>;
  rpc_addr: Scalars['String'];
  tx_index?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  zone: Scalars['String'];
};

/** aggregated selection of "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Aggregate = {
  __typename?: 'nodes_rpc_addrs_aggregate';
  aggregate?: Maybe<Nodes_Rpc_Addrs_Aggregate_Fields>;
  nodes: Array<Nodes_Rpc_Addrs>;
};

/** aggregate fields of "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Aggregate_Fields = {
  __typename?: 'nodes_rpc_addrs_aggregate_fields';
  avg?: Maybe<Nodes_Rpc_Addrs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Nodes_Rpc_Addrs_Max_Fields>;
  min?: Maybe<Nodes_Rpc_Addrs_Min_Fields>;
  stddev?: Maybe<Nodes_Rpc_Addrs_Stddev_Fields>;
  stddev_pop?: Maybe<Nodes_Rpc_Addrs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nodes_Rpc_Addrs_Stddev_Samp_Fields>;
  sum?: Maybe<Nodes_Rpc_Addrs_Sum_Fields>;
  var_pop?: Maybe<Nodes_Rpc_Addrs_Var_Pop_Fields>;
  var_samp?: Maybe<Nodes_Rpc_Addrs_Var_Samp_Fields>;
  variance?: Maybe<Nodes_Rpc_Addrs_Variance_Fields>;
};

/** aggregate fields of "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nodes_Rpc_Addrs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Aggregate_Order_By = {
  avg?: InputMaybe<Nodes_Rpc_Addrs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nodes_Rpc_Addrs_Max_Order_By>;
  min?: InputMaybe<Nodes_Rpc_Addrs_Min_Order_By>;
  stddev?: InputMaybe<Nodes_Rpc_Addrs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nodes_Rpc_Addrs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nodes_Rpc_Addrs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nodes_Rpc_Addrs_Sum_Order_By>;
  var_pop?: InputMaybe<Nodes_Rpc_Addrs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nodes_Rpc_Addrs_Var_Samp_Order_By>;
  variance?: InputMaybe<Nodes_Rpc_Addrs_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nodes_Rpc_Addrs_Avg_Fields = {
  __typename?: 'nodes_rpc_addrs_avg_fields';
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  response_time?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Avg_Order_By = {
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nodes_rpc_addrs". All fields are combined with a logical 'AND'. */
export type Nodes_Rpc_Addrs_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>>>;
  _not?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>>>;
  added_at?: InputMaybe<Timestamp_Comparison_Exp>;
  earliest_block_height?: InputMaybe<Bigint_Comparison_Exp>;
  ip_or_dns?: InputMaybe<String_Comparison_Exp>;
  is_alive?: InputMaybe<Boolean_Comparison_Exp>;
  is_hidden?: InputMaybe<Boolean_Comparison_Exp>;
  is_prioritized?: InputMaybe<Boolean_Comparison_Exp>;
  last_active?: InputMaybe<Timestamp_Comparison_Exp>;
  last_block_height?: InputMaybe<Bigint_Comparison_Exp>;
  last_checked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  node_id?: InputMaybe<String_Comparison_Exp>;
  response_time?: InputMaybe<Int_Comparison_Exp>;
  rpc_addr?: InputMaybe<String_Comparison_Exp>;
  tx_index?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nodes_Rpc_Addrs_Max_Fields = {
  __typename?: 'nodes_rpc_addrs_max_fields';
  added_at?: Maybe<Scalars['timestamp']>;
  earliest_block_height?: Maybe<Scalars['bigint']>;
  ip_or_dns?: Maybe<Scalars['String']>;
  last_active?: Maybe<Scalars['timestamp']>;
  last_block_height?: Maybe<Scalars['bigint']>;
  last_checked_at?: Maybe<Scalars['timestamp']>;
  moniker?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
  response_time?: Maybe<Scalars['Int']>;
  rpc_addr?: Maybe<Scalars['String']>;
  tx_index?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Max_Order_By = {
  added_at?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  last_active?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
  rpc_addr?: InputMaybe<Order_By>;
  tx_index?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nodes_Rpc_Addrs_Min_Fields = {
  __typename?: 'nodes_rpc_addrs_min_fields';
  added_at?: Maybe<Scalars['timestamp']>;
  earliest_block_height?: Maybe<Scalars['bigint']>;
  ip_or_dns?: Maybe<Scalars['String']>;
  last_active?: Maybe<Scalars['timestamp']>;
  last_block_height?: Maybe<Scalars['bigint']>;
  last_checked_at?: Maybe<Scalars['timestamp']>;
  moniker?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
  response_time?: Maybe<Scalars['Int']>;
  rpc_addr?: Maybe<Scalars['String']>;
  tx_index?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Min_Order_By = {
  added_at?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  last_active?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
  rpc_addr?: InputMaybe<Order_By>;
  tx_index?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Order_By = {
  added_at?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  ip_or_dns?: InputMaybe<Order_By>;
  is_alive?: InputMaybe<Order_By>;
  is_hidden?: InputMaybe<Order_By>;
  is_prioritized?: InputMaybe<Order_By>;
  last_active?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
  rpc_addr?: InputMaybe<Order_By>;
  tx_index?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Pk_Columns_Input = {
  rpc_addr: Scalars['String'];
};

/** select columns of table "nodes_rpc_addrs" */
export const enum Nodes_Rpc_Addrs_Select_Column {
  /** column name */
  AddedAt = 'added_at',
  /** column name */
  EarliestBlockHeight = 'earliest_block_height',
  /** column name */
  IpOrDns = 'ip_or_dns',
  /** column name */
  IsAlive = 'is_alive',
  /** column name */
  IsHidden = 'is_hidden',
  /** column name */
  IsPrioritized = 'is_prioritized',
  /** column name */
  LastActive = 'last_active',
  /** column name */
  LastBlockHeight = 'last_block_height',
  /** column name */
  LastCheckedAt = 'last_checked_at',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  ResponseTime = 'response_time',
  /** column name */
  RpcAddr = 'rpc_addr',
  /** column name */
  TxIndex = 'tx_index',
  /** column name */
  Version = 'version',
  /** column name */
  Zone = 'zone',
}

/** aggregate stddev on columns */
export type Nodes_Rpc_Addrs_Stddev_Fields = {
  __typename?: 'nodes_rpc_addrs_stddev_fields';
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Stddev_Order_By = {
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nodes_Rpc_Addrs_Stddev_Pop_Fields = {
  __typename?: 'nodes_rpc_addrs_stddev_pop_fields';
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Stddev_Pop_Order_By = {
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nodes_Rpc_Addrs_Stddev_Samp_Fields = {
  __typename?: 'nodes_rpc_addrs_stddev_samp_fields';
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Stddev_Samp_Order_By = {
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nodes_Rpc_Addrs_Sum_Fields = {
  __typename?: 'nodes_rpc_addrs_sum_fields';
  earliest_block_height?: Maybe<Scalars['bigint']>;
  last_block_height?: Maybe<Scalars['bigint']>;
  response_time?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Sum_Order_By = {
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nodes_Rpc_Addrs_Var_Pop_Fields = {
  __typename?: 'nodes_rpc_addrs_var_pop_fields';
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  response_time?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Var_Pop_Order_By = {
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nodes_Rpc_Addrs_Var_Samp_Fields = {
  __typename?: 'nodes_rpc_addrs_var_samp_fields';
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  response_time?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Var_Samp_Order_By = {
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nodes_Rpc_Addrs_Variance_Fields = {
  __typename?: 'nodes_rpc_addrs_variance_fields';
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  response_time?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Variance_Order_By = {
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  response_time?: InputMaybe<Order_By>;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export const enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "blocks_log" */
  blocks_log: Array<Blocks_Log>;
  /** fetch data from the table: "blocks_log" using primary key columns */
  blocks_log_by_pk?: Maybe<Blocks_Log>;
  /** fetch data from the table: "channels_stats" */
  channels_stats: Array<Channels_Stats>;
  /** fetch aggregated fields from the table: "channels_stats" */
  channels_stats_aggregate: Channels_Stats_Aggregate;
  /** fetch data from the table: "channels_stats" using primary key columns */
  channels_stats_by_pk?: Maybe<Channels_Stats>;
  /** fetch data from the table: "ft_channel_group_stats" */
  ft_channel_group_stats: Array<Ft_Channel_Group_Stats>;
  /** fetch aggregated fields from the table: "ft_channel_group_stats" */
  ft_channel_group_stats_aggregate: Ft_Channel_Group_Stats_Aggregate;
  /** fetch data from the table: "ft_channel_group_stats" using primary key columns */
  ft_channel_group_stats_by_pk?: Maybe<Ft_Channel_Group_Stats>;
  /** fetch data from the table: "ft_channels_stats" */
  ft_channels_stats: Array<Ft_Channels_Stats>;
  /** fetch aggregated fields from the table: "ft_channels_stats" */
  ft_channels_stats_aggregate: Ft_Channels_Stats_Aggregate;
  /** fetch data from the table: "ft_channels_stats" using primary key columns */
  ft_channels_stats_by_pk?: Maybe<Ft_Channels_Stats>;
  /** fetch data from the table: "headers" */
  headers: Array<Headers>;
  /** fetch aggregated fields from the table: "headers" */
  headers_aggregate: Headers_Aggregate;
  /** fetch data from the table: "headers" using primary key columns */
  headers_by_pk?: Maybe<Headers>;
  /** fetch data from the table: "nodes_addrs" */
  nodes_addrs: Array<Nodes_Addrs>;
  /** fetch aggregated fields from the table: "nodes_addrs" */
  nodes_addrs_aggregate: Nodes_Addrs_Aggregate;
  /** fetch data from the table: "nodes_addrs" using primary key columns */
  nodes_addrs_by_pk?: Maybe<Nodes_Addrs>;
  /** fetch data from the table: "nodes_lcd_addrs" */
  nodes_lcd_addrs: Array<Nodes_Lcd_Addrs>;
  /** fetch aggregated fields from the table: "nodes_lcd_addrs" */
  nodes_lcd_addrs_aggregate: Nodes_Lcd_Addrs_Aggregate;
  /** fetch data from the table: "nodes_lcd_addrs" using primary key columns */
  nodes_lcd_addrs_by_pk?: Maybe<Nodes_Lcd_Addrs>;
  /** fetch data from the table: "nodes_rpc_addrs" */
  nodes_rpc_addrs: Array<Nodes_Rpc_Addrs>;
  /** fetch aggregated fields from the table: "nodes_rpc_addrs" */
  nodes_rpc_addrs_aggregate: Nodes_Rpc_Addrs_Aggregate;
  /** fetch data from the table: "nodes_rpc_addrs" using primary key columns */
  nodes_rpc_addrs_by_pk?: Maybe<Nodes_Rpc_Addrs>;
  /** fetch data from the table: "zone_nodes" */
  zone_nodes: Array<Zone_Nodes>;
  /** fetch aggregated fields from the table: "zone_nodes" */
  zone_nodes_aggregate: Zone_Nodes_Aggregate;
  /** fetch data from the table: "zone_nodes" using primary key columns */
  zone_nodes_by_pk?: Maybe<Zone_Nodes>;
  /** fetch data from the table: "zones_graphs" */
  zones_graphs: Array<Zones_Graphs>;
  /** fetch aggregated fields from the table: "zones_graphs" */
  zones_graphs_aggregate: Zones_Graphs_Aggregate;
  /** fetch data from the table: "zones_graphs" using primary key columns */
  zones_graphs_by_pk?: Maybe<Zones_Graphs>;
  /** fetch data from the table: "zones_stats" */
  zones_stats: Array<Zones_Stats>;
  /** fetch aggregated fields from the table: "zones_stats" */
  zones_stats_aggregate: Zones_Stats_Aggregate;
  /** fetch data from the table: "zones_stats" using primary key columns */
  zones_stats_by_pk?: Maybe<Zones_Stats>;
};

/** query root */
export type Query_RootBlocks_LogArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blocks_Log_Order_By>>;
  where?: InputMaybe<Blocks_Log_Bool_Exp>;
};

/** query root */
export type Query_RootBlocks_Log_By_PkArgs = {
  zone: Scalars['String'];
};

/** query root */
export type Query_RootChannels_StatsArgs = {
  distinct_on?: InputMaybe<Array<Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channels_Stats_Order_By>>;
  where?: InputMaybe<Channels_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootChannels_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channels_Stats_Order_By>>;
  where?: InputMaybe<Channels_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootChannels_Stats_By_PkArgs = {
  channel_id: Scalars['String'];
  client_id: Scalars['String'];
  connection_id: Scalars['String'];
  zone: Scalars['String'];
};

/** query root */
export type Query_RootFt_Channel_Group_StatsArgs = {
  distinct_on?: InputMaybe<Array<Ft_Channel_Group_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ft_Channel_Group_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootFt_Channel_Group_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ft_Channel_Group_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ft_Channel_Group_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootFt_Channel_Group_Stats_By_PkArgs = {
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
  zone_counterparty: Scalars['String'];
};

/** query root */
export type Query_RootFt_Channels_StatsArgs = {
  distinct_on?: InputMaybe<Array<Ft_Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ft_Channels_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channels_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootFt_Channels_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ft_Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ft_Channels_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channels_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootFt_Channels_Stats_By_PkArgs = {
  channel_id: Scalars['String'];
  client_id: Scalars['String'];
  connection_id: Scalars['String'];
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
};

/** query root */
export type Query_RootHeadersArgs = {
  distinct_on?: InputMaybe<Array<Headers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Headers_Order_By>>;
  where?: InputMaybe<Headers_Bool_Exp>;
};

/** query root */
export type Query_RootHeaders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Headers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Headers_Order_By>>;
  where?: InputMaybe<Headers_Bool_Exp>;
};

/** query root */
export type Query_RootHeaders_By_PkArgs = {
  is_mainnet_only: Scalars['Boolean'];
  timeframe: Scalars['Int'];
};

/** query root */
export type Query_RootNodes_AddrsArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Addrs_By_PkArgs = {
  ip_or_dns: Scalars['String'];
};

/** query root */
export type Query_RootNodes_Lcd_AddrsArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Lcd_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Lcd_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Lcd_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Lcd_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Lcd_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Lcd_Addrs_By_PkArgs = {
  lcd_addr: Scalars['String'];
};

/** query root */
export type Query_RootNodes_Rpc_AddrsArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Rpc_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Rpc_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Rpc_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Rpc_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Rpc_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Rpc_Addrs_By_PkArgs = {
  rpc_addr: Scalars['String'];
};

/** query root */
export type Query_RootZone_NodesArgs = {
  distinct_on?: InputMaybe<Array<Zone_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zone_Nodes_Order_By>>;
  where?: InputMaybe<Zone_Nodes_Bool_Exp>;
};

/** query root */
export type Query_RootZone_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zone_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zone_Nodes_Order_By>>;
  where?: InputMaybe<Zone_Nodes_Bool_Exp>;
};

/** query root */
export type Query_RootZone_Nodes_By_PkArgs = {
  rpc_addr: Scalars['String'];
};

/** query root */
export type Query_RootZones_GraphsArgs = {
  distinct_on?: InputMaybe<Array<Zones_Graphs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zones_Graphs_Order_By>>;
  where?: InputMaybe<Zones_Graphs_Bool_Exp>;
};

/** query root */
export type Query_RootZones_Graphs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zones_Graphs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zones_Graphs_Order_By>>;
  where?: InputMaybe<Zones_Graphs_Bool_Exp>;
};

/** query root */
export type Query_RootZones_Graphs_By_PkArgs = {
  source: Scalars['String'];
  target: Scalars['String'];
  timeframe: Scalars['Int'];
};

/** query root */
export type Query_RootZones_StatsArgs = {
  distinct_on?: InputMaybe<Array<Zones_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zones_Stats_Order_By>>;
  where?: InputMaybe<Zones_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootZones_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zones_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zones_Stats_Order_By>>;
  where?: InputMaybe<Zones_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootZones_Stats_By_PkArgs = {
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "blocks_log" */
  blocks_log: Array<Blocks_Log>;
  /** fetch data from the table: "blocks_log" using primary key columns */
  blocks_log_by_pk?: Maybe<Blocks_Log>;
  /** fetch data from the table: "channels_stats" */
  channels_stats: Array<Channels_Stats>;
  /** fetch aggregated fields from the table: "channels_stats" */
  channels_stats_aggregate: Channels_Stats_Aggregate;
  /** fetch data from the table: "channels_stats" using primary key columns */
  channels_stats_by_pk?: Maybe<Channels_Stats>;
  /** fetch data from the table: "ft_channel_group_stats" */
  ft_channel_group_stats: Array<Ft_Channel_Group_Stats>;
  /** fetch aggregated fields from the table: "ft_channel_group_stats" */
  ft_channel_group_stats_aggregate: Ft_Channel_Group_Stats_Aggregate;
  /** fetch data from the table: "ft_channel_group_stats" using primary key columns */
  ft_channel_group_stats_by_pk?: Maybe<Ft_Channel_Group_Stats>;
  /** fetch data from the table: "ft_channels_stats" */
  ft_channels_stats: Array<Ft_Channels_Stats>;
  /** fetch aggregated fields from the table: "ft_channels_stats" */
  ft_channels_stats_aggregate: Ft_Channels_Stats_Aggregate;
  /** fetch data from the table: "ft_channels_stats" using primary key columns */
  ft_channels_stats_by_pk?: Maybe<Ft_Channels_Stats>;
  /** fetch data from the table: "headers" */
  headers: Array<Headers>;
  /** fetch aggregated fields from the table: "headers" */
  headers_aggregate: Headers_Aggregate;
  /** fetch data from the table: "headers" using primary key columns */
  headers_by_pk?: Maybe<Headers>;
  /** fetch data from the table: "nodes_addrs" */
  nodes_addrs: Array<Nodes_Addrs>;
  /** fetch aggregated fields from the table: "nodes_addrs" */
  nodes_addrs_aggregate: Nodes_Addrs_Aggregate;
  /** fetch data from the table: "nodes_addrs" using primary key columns */
  nodes_addrs_by_pk?: Maybe<Nodes_Addrs>;
  /** fetch data from the table: "nodes_lcd_addrs" */
  nodes_lcd_addrs: Array<Nodes_Lcd_Addrs>;
  /** fetch aggregated fields from the table: "nodes_lcd_addrs" */
  nodes_lcd_addrs_aggregate: Nodes_Lcd_Addrs_Aggregate;
  /** fetch data from the table: "nodes_lcd_addrs" using primary key columns */
  nodes_lcd_addrs_by_pk?: Maybe<Nodes_Lcd_Addrs>;
  /** fetch data from the table: "nodes_rpc_addrs" */
  nodes_rpc_addrs: Array<Nodes_Rpc_Addrs>;
  /** fetch aggregated fields from the table: "nodes_rpc_addrs" */
  nodes_rpc_addrs_aggregate: Nodes_Rpc_Addrs_Aggregate;
  /** fetch data from the table: "nodes_rpc_addrs" using primary key columns */
  nodes_rpc_addrs_by_pk?: Maybe<Nodes_Rpc_Addrs>;
  /** fetch data from the table: "zone_nodes" */
  zone_nodes: Array<Zone_Nodes>;
  /** fetch aggregated fields from the table: "zone_nodes" */
  zone_nodes_aggregate: Zone_Nodes_Aggregate;
  /** fetch data from the table: "zone_nodes" using primary key columns */
  zone_nodes_by_pk?: Maybe<Zone_Nodes>;
  /** fetch data from the table: "zones_graphs" */
  zones_graphs: Array<Zones_Graphs>;
  /** fetch aggregated fields from the table: "zones_graphs" */
  zones_graphs_aggregate: Zones_Graphs_Aggregate;
  /** fetch data from the table: "zones_graphs" using primary key columns */
  zones_graphs_by_pk?: Maybe<Zones_Graphs>;
  /** fetch data from the table: "zones_stats" */
  zones_stats: Array<Zones_Stats>;
  /** fetch aggregated fields from the table: "zones_stats" */
  zones_stats_aggregate: Zones_Stats_Aggregate;
  /** fetch data from the table: "zones_stats" using primary key columns */
  zones_stats_by_pk?: Maybe<Zones_Stats>;
};

/** subscription root */
export type Subscription_RootBlocks_LogArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blocks_Log_Order_By>>;
  where?: InputMaybe<Blocks_Log_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBlocks_Log_By_PkArgs = {
  zone: Scalars['String'];
};

/** subscription root */
export type Subscription_RootChannels_StatsArgs = {
  distinct_on?: InputMaybe<Array<Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channels_Stats_Order_By>>;
  where?: InputMaybe<Channels_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootChannels_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channels_Stats_Order_By>>;
  where?: InputMaybe<Channels_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootChannels_Stats_By_PkArgs = {
  channel_id: Scalars['String'];
  client_id: Scalars['String'];
  connection_id: Scalars['String'];
  zone: Scalars['String'];
};

/** subscription root */
export type Subscription_RootFt_Channel_Group_StatsArgs = {
  distinct_on?: InputMaybe<Array<Ft_Channel_Group_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ft_Channel_Group_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFt_Channel_Group_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ft_Channel_Group_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ft_Channel_Group_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFt_Channel_Group_Stats_By_PkArgs = {
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
  zone_counterparty: Scalars['String'];
};

/** subscription root */
export type Subscription_RootFt_Channels_StatsArgs = {
  distinct_on?: InputMaybe<Array<Ft_Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ft_Channels_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channels_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFt_Channels_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ft_Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ft_Channels_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channels_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFt_Channels_Stats_By_PkArgs = {
  channel_id: Scalars['String'];
  client_id: Scalars['String'];
  connection_id: Scalars['String'];
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
};

/** subscription root */
export type Subscription_RootHeadersArgs = {
  distinct_on?: InputMaybe<Array<Headers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Headers_Order_By>>;
  where?: InputMaybe<Headers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootHeaders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Headers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Headers_Order_By>>;
  where?: InputMaybe<Headers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootHeaders_By_PkArgs = {
  is_mainnet_only: Scalars['Boolean'];
  timeframe: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootNodes_AddrsArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Addrs_By_PkArgs = {
  ip_or_dns: Scalars['String'];
};

/** subscription root */
export type Subscription_RootNodes_Lcd_AddrsArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Lcd_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Lcd_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Lcd_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Lcd_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Lcd_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Lcd_Addrs_By_PkArgs = {
  lcd_addr: Scalars['String'];
};

/** subscription root */
export type Subscription_RootNodes_Rpc_AddrsArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Rpc_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Rpc_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Rpc_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nodes_Rpc_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nodes_Rpc_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Rpc_Addrs_By_PkArgs = {
  rpc_addr: Scalars['String'];
};

/** subscription root */
export type Subscription_RootZone_NodesArgs = {
  distinct_on?: InputMaybe<Array<Zone_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zone_Nodes_Order_By>>;
  where?: InputMaybe<Zone_Nodes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZone_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zone_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zone_Nodes_Order_By>>;
  where?: InputMaybe<Zone_Nodes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZone_Nodes_By_PkArgs = {
  rpc_addr: Scalars['String'];
};

/** subscription root */
export type Subscription_RootZones_GraphsArgs = {
  distinct_on?: InputMaybe<Array<Zones_Graphs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zones_Graphs_Order_By>>;
  where?: InputMaybe<Zones_Graphs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZones_Graphs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zones_Graphs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zones_Graphs_Order_By>>;
  where?: InputMaybe<Zones_Graphs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZones_Graphs_By_PkArgs = {
  source: Scalars['String'];
  target: Scalars['String'];
  timeframe: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootZones_StatsArgs = {
  distinct_on?: InputMaybe<Array<Zones_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zones_Stats_Order_By>>;
  where?: InputMaybe<Zones_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZones_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zones_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zones_Stats_Order_By>>;
  where?: InputMaybe<Zones_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZones_Stats_By_PkArgs = {
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "zone_nodes" */
export type Zone_Nodes = {
  __typename?: 'zone_nodes';
  connection_duration?: Maybe<Scalars['bigint']>;
  earliest_block_height?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  is_alive: Scalars['Boolean'];
  is_hidden?: Maybe<Scalars['Boolean']>;
  is_hosting_location?: Maybe<Scalars['Boolean']>;
  is_lcd_addr_active?: Maybe<Scalars['Boolean']>;
  is_prioritized?: Maybe<Scalars['Boolean']>;
  is_recv_connection_active?: Maybe<Scalars['Boolean']>;
  is_rpc_addr_active?: Maybe<Scalars['Boolean']>;
  is_send_connection_active?: Maybe<Scalars['Boolean']>;
  last_block_height?: Maybe<Scalars['Int']>;
  last_checked_at: Scalars['timestamp'];
  last_worked_at: Scalars['timestamp'];
  lcd_addr?: Maybe<Scalars['String']>;
  location_city?: Maybe<Scalars['String']>;
  location_continent?: Maybe<Scalars['String']>;
  location_continent_code?: Maybe<Scalars['String']>;
  location_country?: Maybe<Scalars['String']>;
  location_country_code?: Maybe<Scalars['String']>;
  location_district?: Maybe<Scalars['String']>;
  location_isp_name?: Maybe<Scalars['String']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_org?: Maybe<Scalars['String']>;
  location_org_as?: Maybe<Scalars['String']>;
  location_org_as_name?: Maybe<Scalars['String']>;
  location_region?: Maybe<Scalars['String']>;
  location_region_name?: Maybe<Scalars['String']>;
  location_timezone?: Maybe<Scalars['String']>;
  location_timezone_offset?: Maybe<Scalars['Int']>;
  location_zip?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
  rpc_addr: Scalars['String'];
  tx_index?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  zone: Scalars['String'];
};

/** aggregated selection of "zone_nodes" */
export type Zone_Nodes_Aggregate = {
  __typename?: 'zone_nodes_aggregate';
  aggregate?: Maybe<Zone_Nodes_Aggregate_Fields>;
  nodes: Array<Zone_Nodes>;
};

/** aggregate fields of "zone_nodes" */
export type Zone_Nodes_Aggregate_Fields = {
  __typename?: 'zone_nodes_aggregate_fields';
  avg?: Maybe<Zone_Nodes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Zone_Nodes_Max_Fields>;
  min?: Maybe<Zone_Nodes_Min_Fields>;
  stddev?: Maybe<Zone_Nodes_Stddev_Fields>;
  stddev_pop?: Maybe<Zone_Nodes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Zone_Nodes_Stddev_Samp_Fields>;
  sum?: Maybe<Zone_Nodes_Sum_Fields>;
  var_pop?: Maybe<Zone_Nodes_Var_Pop_Fields>;
  var_samp?: Maybe<Zone_Nodes_Var_Samp_Fields>;
  variance?: Maybe<Zone_Nodes_Variance_Fields>;
};

/** aggregate fields of "zone_nodes" */
export type Zone_Nodes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Zone_Nodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "zone_nodes" */
export type Zone_Nodes_Aggregate_Order_By = {
  avg?: InputMaybe<Zone_Nodes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Zone_Nodes_Max_Order_By>;
  min?: InputMaybe<Zone_Nodes_Min_Order_By>;
  stddev?: InputMaybe<Zone_Nodes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Zone_Nodes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Zone_Nodes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Zone_Nodes_Sum_Order_By>;
  var_pop?: InputMaybe<Zone_Nodes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Zone_Nodes_Var_Samp_Order_By>;
  variance?: InputMaybe<Zone_Nodes_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Zone_Nodes_Avg_Fields = {
  __typename?: 'zone_nodes_avg_fields';
  connection_duration?: Maybe<Scalars['Float']>;
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "zone_nodes" */
export type Zone_Nodes_Avg_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "zone_nodes". All fields are combined with a logical 'AND'. */
export type Zone_Nodes_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Zone_Nodes_Bool_Exp>>>;
  _not?: InputMaybe<Zone_Nodes_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Zone_Nodes_Bool_Exp>>>;
  connection_duration?: InputMaybe<Bigint_Comparison_Exp>;
  earliest_block_height?: InputMaybe<Int_Comparison_Exp>;
  ip?: InputMaybe<String_Comparison_Exp>;
  is_alive?: InputMaybe<Boolean_Comparison_Exp>;
  is_hidden?: InputMaybe<Boolean_Comparison_Exp>;
  is_hosting_location?: InputMaybe<Boolean_Comparison_Exp>;
  is_lcd_addr_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_prioritized?: InputMaybe<Boolean_Comparison_Exp>;
  is_recv_connection_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_rpc_addr_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_send_connection_active?: InputMaybe<Boolean_Comparison_Exp>;
  last_block_height?: InputMaybe<Int_Comparison_Exp>;
  last_checked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  last_worked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  lcd_addr?: InputMaybe<String_Comparison_Exp>;
  location_city?: InputMaybe<String_Comparison_Exp>;
  location_continent?: InputMaybe<String_Comparison_Exp>;
  location_continent_code?: InputMaybe<String_Comparison_Exp>;
  location_country?: InputMaybe<String_Comparison_Exp>;
  location_country_code?: InputMaybe<String_Comparison_Exp>;
  location_district?: InputMaybe<String_Comparison_Exp>;
  location_isp_name?: InputMaybe<String_Comparison_Exp>;
  location_lat?: InputMaybe<Float_Comparison_Exp>;
  location_lon?: InputMaybe<Float_Comparison_Exp>;
  location_org?: InputMaybe<String_Comparison_Exp>;
  location_org_as?: InputMaybe<String_Comparison_Exp>;
  location_org_as_name?: InputMaybe<String_Comparison_Exp>;
  location_region?: InputMaybe<String_Comparison_Exp>;
  location_region_name?: InputMaybe<String_Comparison_Exp>;
  location_timezone?: InputMaybe<String_Comparison_Exp>;
  location_timezone_offset?: InputMaybe<Int_Comparison_Exp>;
  location_zip?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  node_id?: InputMaybe<String_Comparison_Exp>;
  rpc_addr?: InputMaybe<String_Comparison_Exp>;
  tx_index?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Zone_Nodes_Max_Fields = {
  __typename?: 'zone_nodes_max_fields';
  connection_duration?: Maybe<Scalars['bigint']>;
  earliest_block_height?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  last_block_height?: Maybe<Scalars['Int']>;
  last_checked_at?: Maybe<Scalars['timestamp']>;
  last_worked_at?: Maybe<Scalars['timestamp']>;
  lcd_addr?: Maybe<Scalars['String']>;
  location_city?: Maybe<Scalars['String']>;
  location_continent?: Maybe<Scalars['String']>;
  location_continent_code?: Maybe<Scalars['String']>;
  location_country?: Maybe<Scalars['String']>;
  location_country_code?: Maybe<Scalars['String']>;
  location_district?: Maybe<Scalars['String']>;
  location_isp_name?: Maybe<Scalars['String']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_org?: Maybe<Scalars['String']>;
  location_org_as?: Maybe<Scalars['String']>;
  location_org_as_name?: Maybe<Scalars['String']>;
  location_region?: Maybe<Scalars['String']>;
  location_region_name?: Maybe<Scalars['String']>;
  location_timezone?: Maybe<Scalars['String']>;
  location_timezone_offset?: Maybe<Scalars['Int']>;
  location_zip?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
  rpc_addr?: Maybe<Scalars['String']>;
  tx_index?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "zone_nodes" */
export type Zone_Nodes_Max_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  last_worked_at?: InputMaybe<Order_By>;
  lcd_addr?: InputMaybe<Order_By>;
  location_city?: InputMaybe<Order_By>;
  location_continent?: InputMaybe<Order_By>;
  location_continent_code?: InputMaybe<Order_By>;
  location_country?: InputMaybe<Order_By>;
  location_country_code?: InputMaybe<Order_By>;
  location_district?: InputMaybe<Order_By>;
  location_isp_name?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_org?: InputMaybe<Order_By>;
  location_org_as?: InputMaybe<Order_By>;
  location_org_as_name?: InputMaybe<Order_By>;
  location_region?: InputMaybe<Order_By>;
  location_region_name?: InputMaybe<Order_By>;
  location_timezone?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
  location_zip?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  rpc_addr?: InputMaybe<Order_By>;
  tx_index?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Zone_Nodes_Min_Fields = {
  __typename?: 'zone_nodes_min_fields';
  connection_duration?: Maybe<Scalars['bigint']>;
  earliest_block_height?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  last_block_height?: Maybe<Scalars['Int']>;
  last_checked_at?: Maybe<Scalars['timestamp']>;
  last_worked_at?: Maybe<Scalars['timestamp']>;
  lcd_addr?: Maybe<Scalars['String']>;
  location_city?: Maybe<Scalars['String']>;
  location_continent?: Maybe<Scalars['String']>;
  location_continent_code?: Maybe<Scalars['String']>;
  location_country?: Maybe<Scalars['String']>;
  location_country_code?: Maybe<Scalars['String']>;
  location_district?: Maybe<Scalars['String']>;
  location_isp_name?: Maybe<Scalars['String']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_org?: Maybe<Scalars['String']>;
  location_org_as?: Maybe<Scalars['String']>;
  location_org_as_name?: Maybe<Scalars['String']>;
  location_region?: Maybe<Scalars['String']>;
  location_region_name?: Maybe<Scalars['String']>;
  location_timezone?: Maybe<Scalars['String']>;
  location_timezone_offset?: Maybe<Scalars['Int']>;
  location_zip?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
  rpc_addr?: Maybe<Scalars['String']>;
  tx_index?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "zone_nodes" */
export type Zone_Nodes_Min_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  last_worked_at?: InputMaybe<Order_By>;
  lcd_addr?: InputMaybe<Order_By>;
  location_city?: InputMaybe<Order_By>;
  location_continent?: InputMaybe<Order_By>;
  location_continent_code?: InputMaybe<Order_By>;
  location_country?: InputMaybe<Order_By>;
  location_country_code?: InputMaybe<Order_By>;
  location_district?: InputMaybe<Order_By>;
  location_isp_name?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_org?: InputMaybe<Order_By>;
  location_org_as?: InputMaybe<Order_By>;
  location_org_as_name?: InputMaybe<Order_By>;
  location_region?: InputMaybe<Order_By>;
  location_region_name?: InputMaybe<Order_By>;
  location_timezone?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
  location_zip?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  rpc_addr?: InputMaybe<Order_By>;
  tx_index?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "zone_nodes" */
export type Zone_Nodes_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  is_alive?: InputMaybe<Order_By>;
  is_hidden?: InputMaybe<Order_By>;
  is_hosting_location?: InputMaybe<Order_By>;
  is_lcd_addr_active?: InputMaybe<Order_By>;
  is_prioritized?: InputMaybe<Order_By>;
  is_recv_connection_active?: InputMaybe<Order_By>;
  is_rpc_addr_active?: InputMaybe<Order_By>;
  is_send_connection_active?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  last_checked_at?: InputMaybe<Order_By>;
  last_worked_at?: InputMaybe<Order_By>;
  lcd_addr?: InputMaybe<Order_By>;
  location_city?: InputMaybe<Order_By>;
  location_continent?: InputMaybe<Order_By>;
  location_continent_code?: InputMaybe<Order_By>;
  location_country?: InputMaybe<Order_By>;
  location_country_code?: InputMaybe<Order_By>;
  location_district?: InputMaybe<Order_By>;
  location_isp_name?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_org?: InputMaybe<Order_By>;
  location_org_as?: InputMaybe<Order_By>;
  location_org_as_name?: InputMaybe<Order_By>;
  location_region?: InputMaybe<Order_By>;
  location_region_name?: InputMaybe<Order_By>;
  location_timezone?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
  location_zip?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  node_id?: InputMaybe<Order_By>;
  rpc_addr?: InputMaybe<Order_By>;
  tx_index?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "zone_nodes" */
export type Zone_Nodes_Pk_Columns_Input = {
  rpc_addr: Scalars['String'];
};

/** select columns of table "zone_nodes" */
export const enum Zone_Nodes_Select_Column {
  /** column name */
  ConnectionDuration = 'connection_duration',
  /** column name */
  EarliestBlockHeight = 'earliest_block_height',
  /** column name */
  Ip = 'ip',
  /** column name */
  IsAlive = 'is_alive',
  /** column name */
  IsHidden = 'is_hidden',
  /** column name */
  IsHostingLocation = 'is_hosting_location',
  /** column name */
  IsLcdAddrActive = 'is_lcd_addr_active',
  /** column name */
  IsPrioritized = 'is_prioritized',
  /** column name */
  IsRecvConnectionActive = 'is_recv_connection_active',
  /** column name */
  IsRpcAddrActive = 'is_rpc_addr_active',
  /** column name */
  IsSendConnectionActive = 'is_send_connection_active',
  /** column name */
  LastBlockHeight = 'last_block_height',
  /** column name */
  LastCheckedAt = 'last_checked_at',
  /** column name */
  LastWorkedAt = 'last_worked_at',
  /** column name */
  LcdAddr = 'lcd_addr',
  /** column name */
  LocationCity = 'location_city',
  /** column name */
  LocationContinent = 'location_continent',
  /** column name */
  LocationContinentCode = 'location_continent_code',
  /** column name */
  LocationCountry = 'location_country',
  /** column name */
  LocationCountryCode = 'location_country_code',
  /** column name */
  LocationDistrict = 'location_district',
  /** column name */
  LocationIspName = 'location_isp_name',
  /** column name */
  LocationLat = 'location_lat',
  /** column name */
  LocationLon = 'location_lon',
  /** column name */
  LocationOrg = 'location_org',
  /** column name */
  LocationOrgAs = 'location_org_as',
  /** column name */
  LocationOrgAsName = 'location_org_as_name',
  /** column name */
  LocationRegion = 'location_region',
  /** column name */
  LocationRegionName = 'location_region_name',
  /** column name */
  LocationTimezone = 'location_timezone',
  /** column name */
  LocationTimezoneOffset = 'location_timezone_offset',
  /** column name */
  LocationZip = 'location_zip',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  RpcAddr = 'rpc_addr',
  /** column name */
  TxIndex = 'tx_index',
  /** column name */
  Version = 'version',
  /** column name */
  Zone = 'zone',
}

/** aggregate stddev on columns */
export type Zone_Nodes_Stddev_Fields = {
  __typename?: 'zone_nodes_stddev_fields';
  connection_duration?: Maybe<Scalars['Float']>;
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "zone_nodes" */
export type Zone_Nodes_Stddev_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Zone_Nodes_Stddev_Pop_Fields = {
  __typename?: 'zone_nodes_stddev_pop_fields';
  connection_duration?: Maybe<Scalars['Float']>;
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "zone_nodes" */
export type Zone_Nodes_Stddev_Pop_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Zone_Nodes_Stddev_Samp_Fields = {
  __typename?: 'zone_nodes_stddev_samp_fields';
  connection_duration?: Maybe<Scalars['Float']>;
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "zone_nodes" */
export type Zone_Nodes_Stddev_Samp_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Zone_Nodes_Sum_Fields = {
  __typename?: 'zone_nodes_sum_fields';
  connection_duration?: Maybe<Scalars['bigint']>;
  earliest_block_height?: Maybe<Scalars['Int']>;
  last_block_height?: Maybe<Scalars['Int']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_timezone_offset?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "zone_nodes" */
export type Zone_Nodes_Sum_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Zone_Nodes_Var_Pop_Fields = {
  __typename?: 'zone_nodes_var_pop_fields';
  connection_duration?: Maybe<Scalars['Float']>;
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "zone_nodes" */
export type Zone_Nodes_Var_Pop_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Zone_Nodes_Var_Samp_Fields = {
  __typename?: 'zone_nodes_var_samp_fields';
  connection_duration?: Maybe<Scalars['Float']>;
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "zone_nodes" */
export type Zone_Nodes_Var_Samp_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Zone_Nodes_Variance_Fields = {
  __typename?: 'zone_nodes_variance_fields';
  connection_duration?: Maybe<Scalars['Float']>;
  earliest_block_height?: Maybe<Scalars['Float']>;
  last_block_height?: Maybe<Scalars['Float']>;
  location_lat?: Maybe<Scalars['Float']>;
  location_lon?: Maybe<Scalars['Float']>;
  location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "zone_nodes" */
export type Zone_Nodes_Variance_Order_By = {
  connection_duration?: InputMaybe<Order_By>;
  earliest_block_height?: InputMaybe<Order_By>;
  last_block_height?: InputMaybe<Order_By>;
  location_lat?: InputMaybe<Order_By>;
  location_lon?: InputMaybe<Order_By>;
  location_timezone_offset?: InputMaybe<Order_By>;
};

/** columns and relationships of "zones_graphs" */
export type Zones_Graphs = {
  __typename?: 'zones_graphs';
  channels_cnt_active: Scalars['Int'];
  channels_cnt_open: Scalars['Int'];
  channels_percent_active: Scalars['numeric'];
  ibc_cashflow?: Maybe<Scalars['bigint']>;
  ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  ibc_transfers?: Maybe<Scalars['Int']>;
  ibc_transfers_pending?: Maybe<Scalars['Int']>;
  is_mainnet: Scalars['Boolean'];
  source: Scalars['String'];
  source_cashflow_in?: Maybe<Scalars['bigint']>;
  source_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  source_cashflow_out?: Maybe<Scalars['bigint']>;
  source_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  source_transfers_period?: Maybe<Scalars['bigint']>;
  target: Scalars['String'];
  target_cashflow_in?: Maybe<Scalars['bigint']>;
  target_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  target_cashflow_out?: Maybe<Scalars['bigint']>;
  target_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  target_transfers_period?: Maybe<Scalars['bigint']>;
  timeframe: Scalars['Int'];
};

/** aggregated selection of "zones_graphs" */
export type Zones_Graphs_Aggregate = {
  __typename?: 'zones_graphs_aggregate';
  aggregate?: Maybe<Zones_Graphs_Aggregate_Fields>;
  nodes: Array<Zones_Graphs>;
};

/** aggregate fields of "zones_graphs" */
export type Zones_Graphs_Aggregate_Fields = {
  __typename?: 'zones_graphs_aggregate_fields';
  avg?: Maybe<Zones_Graphs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Zones_Graphs_Max_Fields>;
  min?: Maybe<Zones_Graphs_Min_Fields>;
  stddev?: Maybe<Zones_Graphs_Stddev_Fields>;
  stddev_pop?: Maybe<Zones_Graphs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Zones_Graphs_Stddev_Samp_Fields>;
  sum?: Maybe<Zones_Graphs_Sum_Fields>;
  var_pop?: Maybe<Zones_Graphs_Var_Pop_Fields>;
  var_samp?: Maybe<Zones_Graphs_Var_Samp_Fields>;
  variance?: Maybe<Zones_Graphs_Variance_Fields>;
};

/** aggregate fields of "zones_graphs" */
export type Zones_Graphs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Zones_Graphs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "zones_graphs" */
export type Zones_Graphs_Aggregate_Order_By = {
  avg?: InputMaybe<Zones_Graphs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Zones_Graphs_Max_Order_By>;
  min?: InputMaybe<Zones_Graphs_Min_Order_By>;
  stddev?: InputMaybe<Zones_Graphs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Zones_Graphs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Zones_Graphs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Zones_Graphs_Sum_Order_By>;
  var_pop?: InputMaybe<Zones_Graphs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Zones_Graphs_Var_Samp_Order_By>;
  variance?: InputMaybe<Zones_Graphs_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Zones_Graphs_Avg_Fields = {
  __typename?: 'zones_graphs_avg_fields';
  channels_cnt_active?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_percent_active?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  source_cashflow_in?: Maybe<Scalars['Float']>;
  source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  source_cashflow_out?: Maybe<Scalars['Float']>;
  source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  source_transfers_period?: Maybe<Scalars['Float']>;
  target_cashflow_in?: Maybe<Scalars['Float']>;
  target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  target_cashflow_out?: Maybe<Scalars['Float']>;
  target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  target_transfers_period?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "zones_graphs" */
export type Zones_Graphs_Avg_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "zones_graphs". All fields are combined with a logical 'AND'. */
export type Zones_Graphs_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Zones_Graphs_Bool_Exp>>>;
  _not?: InputMaybe<Zones_Graphs_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Zones_Graphs_Bool_Exp>>>;
  channels_cnt_active?: InputMaybe<Int_Comparison_Exp>;
  channels_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  channels_percent_active?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_pending?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_transfers?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_pending?: InputMaybe<Int_Comparison_Exp>;
  is_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  source_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  source_cashflow_in_percent?: InputMaybe<Numeric_Comparison_Exp>;
  source_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  source_cashflow_out_percent?: InputMaybe<Numeric_Comparison_Exp>;
  source_transfers_period?: InputMaybe<Bigint_Comparison_Exp>;
  target?: InputMaybe<String_Comparison_Exp>;
  target_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  target_cashflow_in_percent?: InputMaybe<Numeric_Comparison_Exp>;
  target_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  target_cashflow_out_percent?: InputMaybe<Numeric_Comparison_Exp>;
  target_transfers_period?: InputMaybe<Bigint_Comparison_Exp>;
  timeframe?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Zones_Graphs_Max_Fields = {
  __typename?: 'zones_graphs_max_fields';
  channels_cnt_active?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_percent_active?: Maybe<Scalars['numeric']>;
  ibc_cashflow?: Maybe<Scalars['bigint']>;
  ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  ibc_transfers?: Maybe<Scalars['Int']>;
  ibc_transfers_pending?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  source_cashflow_in?: Maybe<Scalars['bigint']>;
  source_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  source_cashflow_out?: Maybe<Scalars['bigint']>;
  source_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  source_transfers_period?: Maybe<Scalars['bigint']>;
  target?: Maybe<Scalars['String']>;
  target_cashflow_in?: Maybe<Scalars['bigint']>;
  target_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  target_cashflow_out?: Maybe<Scalars['bigint']>;
  target_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  target_transfers_period?: Maybe<Scalars['bigint']>;
  timeframe?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "zones_graphs" */
export type Zones_Graphs_Max_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Zones_Graphs_Min_Fields = {
  __typename?: 'zones_graphs_min_fields';
  channels_cnt_active?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_percent_active?: Maybe<Scalars['numeric']>;
  ibc_cashflow?: Maybe<Scalars['bigint']>;
  ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  ibc_transfers?: Maybe<Scalars['Int']>;
  ibc_transfers_pending?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  source_cashflow_in?: Maybe<Scalars['bigint']>;
  source_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  source_cashflow_out?: Maybe<Scalars['bigint']>;
  source_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  source_transfers_period?: Maybe<Scalars['bigint']>;
  target?: Maybe<Scalars['String']>;
  target_cashflow_in?: Maybe<Scalars['bigint']>;
  target_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  target_cashflow_out?: Maybe<Scalars['bigint']>;
  target_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  target_transfers_period?: Maybe<Scalars['bigint']>;
  timeframe?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "zones_graphs" */
export type Zones_Graphs_Min_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "zones_graphs" */
export type Zones_Graphs_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  is_mainnet?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "zones_graphs" */
export type Zones_Graphs_Pk_Columns_Input = {
  source: Scalars['String'];
  target: Scalars['String'];
  timeframe: Scalars['Int'];
};

/** select columns of table "zones_graphs" */
export const enum Zones_Graphs_Select_Column {
  /** column name */
  ChannelsCntActive = 'channels_cnt_active',
  /** column name */
  ChannelsCntOpen = 'channels_cnt_open',
  /** column name */
  ChannelsPercentActive = 'channels_percent_active',
  /** column name */
  IbcCashflow = 'ibc_cashflow',
  /** column name */
  IbcCashflowPending = 'ibc_cashflow_pending',
  /** column name */
  IbcTransfers = 'ibc_transfers',
  /** column name */
  IbcTransfersPending = 'ibc_transfers_pending',
  /** column name */
  IsMainnet = 'is_mainnet',
  /** column name */
  Source = 'source',
  /** column name */
  SourceCashflowIn = 'source_cashflow_in',
  /** column name */
  SourceCashflowInPercent = 'source_cashflow_in_percent',
  /** column name */
  SourceCashflowOut = 'source_cashflow_out',
  /** column name */
  SourceCashflowOutPercent = 'source_cashflow_out_percent',
  /** column name */
  SourceTransfersPeriod = 'source_transfers_period',
  /** column name */
  Target = 'target',
  /** column name */
  TargetCashflowIn = 'target_cashflow_in',
  /** column name */
  TargetCashflowInPercent = 'target_cashflow_in_percent',
  /** column name */
  TargetCashflowOut = 'target_cashflow_out',
  /** column name */
  TargetCashflowOutPercent = 'target_cashflow_out_percent',
  /** column name */
  TargetTransfersPeriod = 'target_transfers_period',
  /** column name */
  Timeframe = 'timeframe',
}

/** aggregate stddev on columns */
export type Zones_Graphs_Stddev_Fields = {
  __typename?: 'zones_graphs_stddev_fields';
  channels_cnt_active?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_percent_active?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  source_cashflow_in?: Maybe<Scalars['Float']>;
  source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  source_cashflow_out?: Maybe<Scalars['Float']>;
  source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  source_transfers_period?: Maybe<Scalars['Float']>;
  target_cashflow_in?: Maybe<Scalars['Float']>;
  target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  target_cashflow_out?: Maybe<Scalars['Float']>;
  target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  target_transfers_period?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "zones_graphs" */
export type Zones_Graphs_Stddev_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Zones_Graphs_Stddev_Pop_Fields = {
  __typename?: 'zones_graphs_stddev_pop_fields';
  channels_cnt_active?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_percent_active?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  source_cashflow_in?: Maybe<Scalars['Float']>;
  source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  source_cashflow_out?: Maybe<Scalars['Float']>;
  source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  source_transfers_period?: Maybe<Scalars['Float']>;
  target_cashflow_in?: Maybe<Scalars['Float']>;
  target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  target_cashflow_out?: Maybe<Scalars['Float']>;
  target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  target_transfers_period?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "zones_graphs" */
export type Zones_Graphs_Stddev_Pop_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Zones_Graphs_Stddev_Samp_Fields = {
  __typename?: 'zones_graphs_stddev_samp_fields';
  channels_cnt_active?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_percent_active?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  source_cashflow_in?: Maybe<Scalars['Float']>;
  source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  source_cashflow_out?: Maybe<Scalars['Float']>;
  source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  source_transfers_period?: Maybe<Scalars['Float']>;
  target_cashflow_in?: Maybe<Scalars['Float']>;
  target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  target_cashflow_out?: Maybe<Scalars['Float']>;
  target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  target_transfers_period?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "zones_graphs" */
export type Zones_Graphs_Stddev_Samp_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Zones_Graphs_Sum_Fields = {
  __typename?: 'zones_graphs_sum_fields';
  channels_cnt_active?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_percent_active?: Maybe<Scalars['numeric']>;
  ibc_cashflow?: Maybe<Scalars['bigint']>;
  ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  ibc_transfers?: Maybe<Scalars['Int']>;
  ibc_transfers_pending?: Maybe<Scalars['Int']>;
  source_cashflow_in?: Maybe<Scalars['bigint']>;
  source_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  source_cashflow_out?: Maybe<Scalars['bigint']>;
  source_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  source_transfers_period?: Maybe<Scalars['bigint']>;
  target_cashflow_in?: Maybe<Scalars['bigint']>;
  target_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  target_cashflow_out?: Maybe<Scalars['bigint']>;
  target_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  target_transfers_period?: Maybe<Scalars['bigint']>;
  timeframe?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "zones_graphs" */
export type Zones_Graphs_Sum_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Zones_Graphs_Var_Pop_Fields = {
  __typename?: 'zones_graphs_var_pop_fields';
  channels_cnt_active?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_percent_active?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  source_cashflow_in?: Maybe<Scalars['Float']>;
  source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  source_cashflow_out?: Maybe<Scalars['Float']>;
  source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  source_transfers_period?: Maybe<Scalars['Float']>;
  target_cashflow_in?: Maybe<Scalars['Float']>;
  target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  target_cashflow_out?: Maybe<Scalars['Float']>;
  target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  target_transfers_period?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "zones_graphs" */
export type Zones_Graphs_Var_Pop_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Zones_Graphs_Var_Samp_Fields = {
  __typename?: 'zones_graphs_var_samp_fields';
  channels_cnt_active?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_percent_active?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  source_cashflow_in?: Maybe<Scalars['Float']>;
  source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  source_cashflow_out?: Maybe<Scalars['Float']>;
  source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  source_transfers_period?: Maybe<Scalars['Float']>;
  target_cashflow_in?: Maybe<Scalars['Float']>;
  target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  target_cashflow_out?: Maybe<Scalars['Float']>;
  target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  target_transfers_period?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "zones_graphs" */
export type Zones_Graphs_Var_Samp_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Zones_Graphs_Variance_Fields = {
  __typename?: 'zones_graphs_variance_fields';
  channels_cnt_active?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_percent_active?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  source_cashflow_in?: Maybe<Scalars['Float']>;
  source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  source_cashflow_out?: Maybe<Scalars['Float']>;
  source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  source_transfers_period?: Maybe<Scalars['Float']>;
  target_cashflow_in?: Maybe<Scalars['Float']>;
  target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  target_cashflow_out?: Maybe<Scalars['Float']>;
  target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  target_transfers_period?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "zones_graphs" */
export type Zones_Graphs_Variance_Order_By = {
  channels_cnt_active?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_percent_active?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  source_cashflow_in?: InputMaybe<Order_By>;
  source_cashflow_in_percent?: InputMaybe<Order_By>;
  source_cashflow_out?: InputMaybe<Order_By>;
  source_cashflow_out_percent?: InputMaybe<Order_By>;
  source_transfers_period?: InputMaybe<Order_By>;
  target_cashflow_in?: InputMaybe<Order_By>;
  target_cashflow_in_percent?: InputMaybe<Order_By>;
  target_cashflow_out?: InputMaybe<Order_By>;
  target_cashflow_out_percent?: InputMaybe<Order_By>;
  target_transfers_period?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
};

/** columns and relationships of "zones_stats" */
export type Zones_Stats = {
  __typename?: 'zones_stats';
  channels_cnt_active_period: Scalars['Int'];
  channels_cnt_active_period_diff: Scalars['Int'];
  channels_cnt_open: Scalars['Int'];
  channels_num?: Maybe<Scalars['Int']>;
  channels_percent_active_period: Scalars['Int'];
  channels_percent_active_period_diff: Scalars['Int'];
  chart: Scalars['jsonb'];
  chart_cashflow?: Maybe<Scalars['jsonb']>;
  ibc_active_addresses?: Maybe<Scalars['Int']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Int']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow?: Maybe<Scalars['bigint']>;
  ibc_cashflow_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_pending: Scalars['bigint'];
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_pending: Scalars['bigint'];
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_pending: Scalars['bigint'];
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_weight?: Maybe<Scalars['numeric']>;
  ibc_peers?: Maybe<Scalars['Int']>;
  ibc_peers_mainnet?: Maybe<Scalars['Int']>;
  ibc_percent?: Maybe<Scalars['numeric']>;
  ibc_transfers: Scalars['Int'];
  ibc_transfers_diff: Scalars['Int'];
  ibc_transfers_mainnet?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_transfers_pending: Scalars['Int'];
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Int']>;
  ibc_transfers_rating?: Maybe<Scalars['Int']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_failed: Scalars['Int'];
  ibc_tx_failed_diff: Scalars['Int'];
  ibc_tx_in: Scalars['Int'];
  ibc_tx_in_diff: Scalars['Int'];
  ibc_tx_in_failed: Scalars['Int'];
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_in_rating: Scalars['Int'];
  ibc_tx_in_rating_diff: Scalars['Int'];
  ibc_tx_in_weight: Scalars['numeric'];
  ibc_tx_out: Scalars['Int'];
  ibc_tx_out_diff: Scalars['Int'];
  ibc_tx_out_failed: Scalars['Int'];
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_out_rating: Scalars['Int'];
  ibc_tx_out_rating_diff: Scalars['Int'];
  ibc_tx_out_weight: Scalars['numeric'];
  is_zone_mainnet: Scalars['Boolean'];
  is_zone_new: Scalars['Boolean'];
  is_zone_up_to_date?: Maybe<Scalars['Boolean']>;
  relations_cnt_open: Scalars['Int'];
  success_rate?: Maybe<Scalars['numeric']>;
  success_rate_mainnet?: Maybe<Scalars['numeric']>;
  timeframe: Scalars['Int'];
  total_active_addresses?: Maybe<Scalars['Int']>;
  total_active_addresses_diff: Scalars['Int'];
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_active_addresses_rating: Scalars['Int'];
  total_active_addresses_rating_diff: Scalars['Int'];
  total_active_addresses_weight: Scalars['numeric'];
  total_coin_turnover_amount: Scalars['numeric'];
  total_coin_turnover_amount_diff: Scalars['numeric'];
  total_ibc_txs: Scalars['Int'];
  total_ibc_txs_diff: Scalars['Int'];
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_ibc_txs_rating: Scalars['Int'];
  total_ibc_txs_rating_diff: Scalars['Int'];
  total_ibc_txs_weight: Scalars['numeric'];
  total_txs?: Maybe<Scalars['Int']>;
  total_txs_diff: Scalars['Int'];
  total_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_txs_rating: Scalars['Int'];
  total_txs_rating_diff: Scalars['Int'];
  total_txs_weight: Scalars['numeric'];
  website?: Maybe<Scalars['String']>;
  zone: Scalars['String'];
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name: Scalars['String'];
};

/** columns and relationships of "zones_stats" */
export type Zones_StatsChartArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zones_stats" */
export type Zones_StatsChart_CashflowArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "zones_stats" */
export type Zones_Stats_Aggregate = {
  __typename?: 'zones_stats_aggregate';
  aggregate?: Maybe<Zones_Stats_Aggregate_Fields>;
  nodes: Array<Zones_Stats>;
};

/** aggregate fields of "zones_stats" */
export type Zones_Stats_Aggregate_Fields = {
  __typename?: 'zones_stats_aggregate_fields';
  avg?: Maybe<Zones_Stats_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Zones_Stats_Max_Fields>;
  min?: Maybe<Zones_Stats_Min_Fields>;
  stddev?: Maybe<Zones_Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Zones_Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Zones_Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Zones_Stats_Sum_Fields>;
  var_pop?: Maybe<Zones_Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Zones_Stats_Var_Samp_Fields>;
  variance?: Maybe<Zones_Stats_Variance_Fields>;
};

/** aggregate fields of "zones_stats" */
export type Zones_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Zones_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "zones_stats" */
export type Zones_Stats_Aggregate_Order_By = {
  avg?: InputMaybe<Zones_Stats_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Zones_Stats_Max_Order_By>;
  min?: InputMaybe<Zones_Stats_Min_Order_By>;
  stddev?: InputMaybe<Zones_Stats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Zones_Stats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Zones_Stats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Zones_Stats_Sum_Order_By>;
  var_pop?: InputMaybe<Zones_Stats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Zones_Stats_Var_Samp_Order_By>;
  variance?: InputMaybe<Zones_Stats_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Zones_Stats_Avg_Fields = {
  __typename?: 'zones_stats_avg_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_num?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses?: Maybe<Scalars['Float']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  ibc_peers?: Maybe<Scalars['Float']>;
  ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  ibc_percent?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_weight?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in?: Maybe<Scalars['Float']>;
  ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out?: Maybe<Scalars['Float']>;
  ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  success_rate?: Maybe<Scalars['Float']>;
  success_rate_mainnet?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  total_active_addresses?: Maybe<Scalars['Float']>;
  total_active_addresses_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  total_active_addresses_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_weight?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs?: Maybe<Scalars['Float']>;
  total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  total_txs?: Maybe<Scalars['Float']>;
  total_txs_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_txs_rating?: Maybe<Scalars['Float']>;
  total_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "zones_stats" */
export type Zones_Stats_Avg_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "zones_stats". All fields are combined with a logical 'AND'. */
export type Zones_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Zones_Stats_Bool_Exp>>>;
  _not?: InputMaybe<Zones_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Zones_Stats_Bool_Exp>>>;
  channels_cnt_active_period?: InputMaybe<Int_Comparison_Exp>;
  channels_cnt_active_period_diff?: InputMaybe<Int_Comparison_Exp>;
  channels_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  channels_num?: InputMaybe<Int_Comparison_Exp>;
  channels_percent_active_period?: InputMaybe<Int_Comparison_Exp>;
  channels_percent_active_period_diff?: InputMaybe<Int_Comparison_Exp>;
  chart?: InputMaybe<Jsonb_Comparison_Exp>;
  chart_cashflow?: InputMaybe<Jsonb_Comparison_Exp>;
  ibc_active_addresses?: InputMaybe<Int_Comparison_Exp>;
  ibc_active_addresses_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_active_addresses_mainnet?: InputMaybe<Int_Comparison_Exp>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_active_addresses_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_active_addresses_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_active_addresses_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_in_pending?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_in_percent?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_in_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_in_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_out_pending?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_out_percent?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_out_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_out_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_cashflow_pending?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  ibc_cashflow_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_cashflow_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_peers?: InputMaybe<Int_Comparison_Exp>;
  ibc_peers_mainnet?: InputMaybe<Int_Comparison_Exp>;
  ibc_percent?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_transfers?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_mainnet?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_mainnet_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_transfers_pending?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_pending_mainnet?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_transfers_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_tx_failed?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_failed_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_in?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_in_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_in_failed?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_tx_in_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_in_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_in_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_tx_out?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_out_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_out_failed?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  ibc_tx_out_rating?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_out_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  ibc_tx_out_weight?: InputMaybe<Numeric_Comparison_Exp>;
  is_zone_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  is_zone_new?: InputMaybe<Boolean_Comparison_Exp>;
  is_zone_up_to_date?: InputMaybe<Boolean_Comparison_Exp>;
  relations_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  success_rate?: InputMaybe<Numeric_Comparison_Exp>;
  success_rate_mainnet?: InputMaybe<Numeric_Comparison_Exp>;
  timeframe?: InputMaybe<Int_Comparison_Exp>;
  total_active_addresses?: InputMaybe<Int_Comparison_Exp>;
  total_active_addresses_diff?: InputMaybe<Int_Comparison_Exp>;
  total_active_addresses_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  total_active_addresses_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  total_active_addresses_rating?: InputMaybe<Int_Comparison_Exp>;
  total_active_addresses_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  total_active_addresses_weight?: InputMaybe<Numeric_Comparison_Exp>;
  total_coin_turnover_amount?: InputMaybe<Numeric_Comparison_Exp>;
  total_coin_turnover_amount_diff?: InputMaybe<Numeric_Comparison_Exp>;
  total_ibc_txs?: InputMaybe<Int_Comparison_Exp>;
  total_ibc_txs_diff?: InputMaybe<Int_Comparison_Exp>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  total_ibc_txs_rating?: InputMaybe<Int_Comparison_Exp>;
  total_ibc_txs_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  total_ibc_txs_weight?: InputMaybe<Numeric_Comparison_Exp>;
  total_txs?: InputMaybe<Int_Comparison_Exp>;
  total_txs_diff?: InputMaybe<Int_Comparison_Exp>;
  total_txs_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  total_txs_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  total_txs_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  total_txs_rating?: InputMaybe<Int_Comparison_Exp>;
  total_txs_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  total_txs_weight?: InputMaybe<Numeric_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
  zone_label_url?: InputMaybe<String_Comparison_Exp>;
  zone_label_url2?: InputMaybe<String_Comparison_Exp>;
  zone_readable_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Zones_Stats_Max_Fields = {
  __typename?: 'zones_stats_max_fields';
  channels_cnt_active_period?: Maybe<Scalars['Int']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_num?: Maybe<Scalars['Int']>;
  channels_percent_active_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses?: Maybe<Scalars['Int']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Int']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow?: Maybe<Scalars['bigint']>;
  ibc_cashflow_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_weight?: Maybe<Scalars['numeric']>;
  ibc_peers?: Maybe<Scalars['Int']>;
  ibc_peers_mainnet?: Maybe<Scalars['Int']>;
  ibc_percent?: Maybe<Scalars['numeric']>;
  ibc_transfers?: Maybe<Scalars['Int']>;
  ibc_transfers_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_transfers_pending?: Maybe<Scalars['Int']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Int']>;
  ibc_transfers_rating?: Maybe<Scalars['Int']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_failed?: Maybe<Scalars['Int']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in?: Maybe<Scalars['Int']>;
  ibc_tx_in_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_failed?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_in_rating?: Maybe<Scalars['Int']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_out?: Maybe<Scalars['Int']>;
  ibc_tx_out_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_failed?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_out_rating?: Maybe<Scalars['Int']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_weight?: Maybe<Scalars['numeric']>;
  relations_cnt_open?: Maybe<Scalars['Int']>;
  success_rate?: Maybe<Scalars['numeric']>;
  success_rate_mainnet?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
  total_active_addresses?: Maybe<Scalars['Int']>;
  total_active_addresses_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_active_addresses_rating?: Maybe<Scalars['Int']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_weight?: Maybe<Scalars['numeric']>;
  total_coin_turnover_amount?: Maybe<Scalars['numeric']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['numeric']>;
  total_ibc_txs?: Maybe<Scalars['Int']>;
  total_ibc_txs_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_ibc_txs_rating?: Maybe<Scalars['Int']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_weight?: Maybe<Scalars['numeric']>;
  total_txs?: Maybe<Scalars['Int']>;
  total_txs_diff?: Maybe<Scalars['Int']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_txs_rating?: Maybe<Scalars['Int']>;
  total_txs_rating_diff?: Maybe<Scalars['Int']>;
  total_txs_weight?: Maybe<Scalars['numeric']>;
  website?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "zones_stats" */
export type Zones_Stats_Max_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Zones_Stats_Min_Fields = {
  __typename?: 'zones_stats_min_fields';
  channels_cnt_active_period?: Maybe<Scalars['Int']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_num?: Maybe<Scalars['Int']>;
  channels_percent_active_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses?: Maybe<Scalars['Int']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Int']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow?: Maybe<Scalars['bigint']>;
  ibc_cashflow_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_weight?: Maybe<Scalars['numeric']>;
  ibc_peers?: Maybe<Scalars['Int']>;
  ibc_peers_mainnet?: Maybe<Scalars['Int']>;
  ibc_percent?: Maybe<Scalars['numeric']>;
  ibc_transfers?: Maybe<Scalars['Int']>;
  ibc_transfers_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_transfers_pending?: Maybe<Scalars['Int']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Int']>;
  ibc_transfers_rating?: Maybe<Scalars['Int']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_failed?: Maybe<Scalars['Int']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in?: Maybe<Scalars['Int']>;
  ibc_tx_in_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_failed?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_in_rating?: Maybe<Scalars['Int']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_out?: Maybe<Scalars['Int']>;
  ibc_tx_out_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_failed?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_out_rating?: Maybe<Scalars['Int']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_weight?: Maybe<Scalars['numeric']>;
  relations_cnt_open?: Maybe<Scalars['Int']>;
  success_rate?: Maybe<Scalars['numeric']>;
  success_rate_mainnet?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
  total_active_addresses?: Maybe<Scalars['Int']>;
  total_active_addresses_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_active_addresses_rating?: Maybe<Scalars['Int']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_weight?: Maybe<Scalars['numeric']>;
  total_coin_turnover_amount?: Maybe<Scalars['numeric']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['numeric']>;
  total_ibc_txs?: Maybe<Scalars['Int']>;
  total_ibc_txs_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_ibc_txs_rating?: Maybe<Scalars['Int']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_weight?: Maybe<Scalars['numeric']>;
  total_txs?: Maybe<Scalars['Int']>;
  total_txs_diff?: Maybe<Scalars['Int']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_txs_rating?: Maybe<Scalars['Int']>;
  total_txs_rating_diff?: Maybe<Scalars['Int']>;
  total_txs_weight?: Maybe<Scalars['numeric']>;
  website?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  zone_label_url?: Maybe<Scalars['String']>;
  zone_label_url2?: Maybe<Scalars['String']>;
  zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "zones_stats" */
export type Zones_Stats_Min_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "zones_stats" */
export type Zones_Stats_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  chart?: InputMaybe<Order_By>;
  chart_cashflow?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  is_zone_mainnet?: InputMaybe<Order_By>;
  is_zone_new?: InputMaybe<Order_By>;
  is_zone_up_to_date?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
  zone_label_url?: InputMaybe<Order_By>;
  zone_label_url2?: InputMaybe<Order_By>;
  zone_readable_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "zones_stats" */
export type Zones_Stats_Pk_Columns_Input = {
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
};

/** select columns of table "zones_stats" */
export const enum Zones_Stats_Select_Column {
  /** column name */
  ChannelsCntActivePeriod = 'channels_cnt_active_period',
  /** column name */
  ChannelsCntActivePeriodDiff = 'channels_cnt_active_period_diff',
  /** column name */
  ChannelsCntOpen = 'channels_cnt_open',
  /** column name */
  ChannelsNum = 'channels_num',
  /** column name */
  ChannelsPercentActivePeriod = 'channels_percent_active_period',
  /** column name */
  ChannelsPercentActivePeriodDiff = 'channels_percent_active_period_diff',
  /** column name */
  Chart = 'chart',
  /** column name */
  ChartCashflow = 'chart_cashflow',
  /** column name */
  IbcActiveAddresses = 'ibc_active_addresses',
  /** column name */
  IbcActiveAddressesDiff = 'ibc_active_addresses_diff',
  /** column name */
  IbcActiveAddressesMainnet = 'ibc_active_addresses_mainnet',
  /** column name */
  IbcActiveAddressesMainnetDiff = 'ibc_active_addresses_mainnet_diff',
  /** column name */
  IbcActiveAddressesMainnetRating = 'ibc_active_addresses_mainnet_rating',
  /** column name */
  IbcActiveAddressesMainnetRatingDiff = 'ibc_active_addresses_mainnet_rating_diff',
  /** column name */
  IbcActiveAddressesMainnetWeight = 'ibc_active_addresses_mainnet_weight',
  /** column name */
  IbcActiveAddressesRating = 'ibc_active_addresses_rating',
  /** column name */
  IbcActiveAddressesRatingDiff = 'ibc_active_addresses_rating_diff',
  /** column name */
  IbcActiveAddressesWeight = 'ibc_active_addresses_weight',
  /** column name */
  IbcCashflow = 'ibc_cashflow',
  /** column name */
  IbcCashflowDiff = 'ibc_cashflow_diff',
  /** column name */
  IbcCashflowIn = 'ibc_cashflow_in',
  /** column name */
  IbcCashflowInDiff = 'ibc_cashflow_in_diff',
  /** column name */
  IbcCashflowInMainnet = 'ibc_cashflow_in_mainnet',
  /** column name */
  IbcCashflowInMainnetDiff = 'ibc_cashflow_in_mainnet_diff',
  /** column name */
  IbcCashflowInMainnetRating = 'ibc_cashflow_in_mainnet_rating',
  /** column name */
  IbcCashflowInMainnetRatingDiff = 'ibc_cashflow_in_mainnet_rating_diff',
  /** column name */
  IbcCashflowInMainnetWeight = 'ibc_cashflow_in_mainnet_weight',
  /** column name */
  IbcCashflowInPending = 'ibc_cashflow_in_pending',
  /** column name */
  IbcCashflowInPendingMainnet = 'ibc_cashflow_in_pending_mainnet',
  /** column name */
  IbcCashflowInPercent = 'ibc_cashflow_in_percent',
  /** column name */
  IbcCashflowInPercentMainnet = 'ibc_cashflow_in_percent_mainnet',
  /** column name */
  IbcCashflowInRating = 'ibc_cashflow_in_rating',
  /** column name */
  IbcCashflowInRatingDiff = 'ibc_cashflow_in_rating_diff',
  /** column name */
  IbcCashflowInWeight = 'ibc_cashflow_in_weight',
  /** column name */
  IbcCashflowMainnet = 'ibc_cashflow_mainnet',
  /** column name */
  IbcCashflowMainnetDiff = 'ibc_cashflow_mainnet_diff',
  /** column name */
  IbcCashflowMainnetRating = 'ibc_cashflow_mainnet_rating',
  /** column name */
  IbcCashflowMainnetRatingDiff = 'ibc_cashflow_mainnet_rating_diff',
  /** column name */
  IbcCashflowMainnetWeight = 'ibc_cashflow_mainnet_weight',
  /** column name */
  IbcCashflowOut = 'ibc_cashflow_out',
  /** column name */
  IbcCashflowOutDiff = 'ibc_cashflow_out_diff',
  /** column name */
  IbcCashflowOutMainnet = 'ibc_cashflow_out_mainnet',
  /** column name */
  IbcCashflowOutMainnetDiff = 'ibc_cashflow_out_mainnet_diff',
  /** column name */
  IbcCashflowOutMainnetRating = 'ibc_cashflow_out_mainnet_rating',
  /** column name */
  IbcCashflowOutMainnetRatingDiff = 'ibc_cashflow_out_mainnet_rating_diff',
  /** column name */
  IbcCashflowOutMainnetWeight = 'ibc_cashflow_out_mainnet_weight',
  /** column name */
  IbcCashflowOutPending = 'ibc_cashflow_out_pending',
  /** column name */
  IbcCashflowOutPendingMainnet = 'ibc_cashflow_out_pending_mainnet',
  /** column name */
  IbcCashflowOutPercent = 'ibc_cashflow_out_percent',
  /** column name */
  IbcCashflowOutPercentMainnet = 'ibc_cashflow_out_percent_mainnet',
  /** column name */
  IbcCashflowOutRating = 'ibc_cashflow_out_rating',
  /** column name */
  IbcCashflowOutRatingDiff = 'ibc_cashflow_out_rating_diff',
  /** column name */
  IbcCashflowOutWeight = 'ibc_cashflow_out_weight',
  /** column name */
  IbcCashflowPending = 'ibc_cashflow_pending',
  /** column name */
  IbcCashflowPendingMainnet = 'ibc_cashflow_pending_mainnet',
  /** column name */
  IbcCashflowRating = 'ibc_cashflow_rating',
  /** column name */
  IbcCashflowRatingDiff = 'ibc_cashflow_rating_diff',
  /** column name */
  IbcCashflowWeight = 'ibc_cashflow_weight',
  /** column name */
  IbcPeers = 'ibc_peers',
  /** column name */
  IbcPeersMainnet = 'ibc_peers_mainnet',
  /** column name */
  IbcPercent = 'ibc_percent',
  /** column name */
  IbcTransfers = 'ibc_transfers',
  /** column name */
  IbcTransfersDiff = 'ibc_transfers_diff',
  /** column name */
  IbcTransfersMainnet = 'ibc_transfers_mainnet',
  /** column name */
  IbcTransfersMainnetDiff = 'ibc_transfers_mainnet_diff',
  /** column name */
  IbcTransfersMainnetRating = 'ibc_transfers_mainnet_rating',
  /** column name */
  IbcTransfersMainnetRatingDiff = 'ibc_transfers_mainnet_rating_diff',
  /** column name */
  IbcTransfersMainnetWeight = 'ibc_transfers_mainnet_weight',
  /** column name */
  IbcTransfersPending = 'ibc_transfers_pending',
  /** column name */
  IbcTransfersPendingMainnet = 'ibc_transfers_pending_mainnet',
  /** column name */
  IbcTransfersRating = 'ibc_transfers_rating',
  /** column name */
  IbcTransfersRatingDiff = 'ibc_transfers_rating_diff',
  /** column name */
  IbcTransfersWeight = 'ibc_transfers_weight',
  /** column name */
  IbcTxFailed = 'ibc_tx_failed',
  /** column name */
  IbcTxFailedDiff = 'ibc_tx_failed_diff',
  /** column name */
  IbcTxIn = 'ibc_tx_in',
  /** column name */
  IbcTxInDiff = 'ibc_tx_in_diff',
  /** column name */
  IbcTxInFailed = 'ibc_tx_in_failed',
  /** column name */
  IbcTxInMainnetRating = 'ibc_tx_in_mainnet_rating',
  /** column name */
  IbcTxInMainnetRatingDiff = 'ibc_tx_in_mainnet_rating_diff',
  /** column name */
  IbcTxInMainnetWeight = 'ibc_tx_in_mainnet_weight',
  /** column name */
  IbcTxInRating = 'ibc_tx_in_rating',
  /** column name */
  IbcTxInRatingDiff = 'ibc_tx_in_rating_diff',
  /** column name */
  IbcTxInWeight = 'ibc_tx_in_weight',
  /** column name */
  IbcTxOut = 'ibc_tx_out',
  /** column name */
  IbcTxOutDiff = 'ibc_tx_out_diff',
  /** column name */
  IbcTxOutFailed = 'ibc_tx_out_failed',
  /** column name */
  IbcTxOutMainnetRating = 'ibc_tx_out_mainnet_rating',
  /** column name */
  IbcTxOutMainnetRatingDiff = 'ibc_tx_out_mainnet_rating_diff',
  /** column name */
  IbcTxOutMainnetWeight = 'ibc_tx_out_mainnet_weight',
  /** column name */
  IbcTxOutRating = 'ibc_tx_out_rating',
  /** column name */
  IbcTxOutRatingDiff = 'ibc_tx_out_rating_diff',
  /** column name */
  IbcTxOutWeight = 'ibc_tx_out_weight',
  /** column name */
  IsZoneMainnet = 'is_zone_mainnet',
  /** column name */
  IsZoneNew = 'is_zone_new',
  /** column name */
  IsZoneUpToDate = 'is_zone_up_to_date',
  /** column name */
  RelationsCntOpen = 'relations_cnt_open',
  /** column name */
  SuccessRate = 'success_rate',
  /** column name */
  SuccessRateMainnet = 'success_rate_mainnet',
  /** column name */
  Timeframe = 'timeframe',
  /** column name */
  TotalActiveAddresses = 'total_active_addresses',
  /** column name */
  TotalActiveAddressesDiff = 'total_active_addresses_diff',
  /** column name */
  TotalActiveAddressesMainnetRating = 'total_active_addresses_mainnet_rating',
  /** column name */
  TotalActiveAddressesMainnetRatingDiff = 'total_active_addresses_mainnet_rating_diff',
  /** column name */
  TotalActiveAddressesMainnetWeight = 'total_active_addresses_mainnet_weight',
  /** column name */
  TotalActiveAddressesRating = 'total_active_addresses_rating',
  /** column name */
  TotalActiveAddressesRatingDiff = 'total_active_addresses_rating_diff',
  /** column name */
  TotalActiveAddressesWeight = 'total_active_addresses_weight',
  /** column name */
  TotalCoinTurnoverAmount = 'total_coin_turnover_amount',
  /** column name */
  TotalCoinTurnoverAmountDiff = 'total_coin_turnover_amount_diff',
  /** column name */
  TotalIbcTxs = 'total_ibc_txs',
  /** column name */
  TotalIbcTxsDiff = 'total_ibc_txs_diff',
  /** column name */
  TotalIbcTxsMainnetRating = 'total_ibc_txs_mainnet_rating',
  /** column name */
  TotalIbcTxsMainnetRatingDiff = 'total_ibc_txs_mainnet_rating_diff',
  /** column name */
  TotalIbcTxsMainnetWeight = 'total_ibc_txs_mainnet_weight',
  /** column name */
  TotalIbcTxsRating = 'total_ibc_txs_rating',
  /** column name */
  TotalIbcTxsRatingDiff = 'total_ibc_txs_rating_diff',
  /** column name */
  TotalIbcTxsWeight = 'total_ibc_txs_weight',
  /** column name */
  TotalTxs = 'total_txs',
  /** column name */
  TotalTxsDiff = 'total_txs_diff',
  /** column name */
  TotalTxsMainnetRating = 'total_txs_mainnet_rating',
  /** column name */
  TotalTxsMainnetRatingDiff = 'total_txs_mainnet_rating_diff',
  /** column name */
  TotalTxsMainnetWeight = 'total_txs_mainnet_weight',
  /** column name */
  TotalTxsRating = 'total_txs_rating',
  /** column name */
  TotalTxsRatingDiff = 'total_txs_rating_diff',
  /** column name */
  TotalTxsWeight = 'total_txs_weight',
  /** column name */
  Website = 'website',
  /** column name */
  Zone = 'zone',
  /** column name */
  ZoneLabelUrl = 'zone_label_url',
  /** column name */
  ZoneLabelUrl2 = 'zone_label_url2',
  /** column name */
  ZoneReadableName = 'zone_readable_name',
}

/** aggregate stddev on columns */
export type Zones_Stats_Stddev_Fields = {
  __typename?: 'zones_stats_stddev_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_num?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses?: Maybe<Scalars['Float']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  ibc_peers?: Maybe<Scalars['Float']>;
  ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  ibc_percent?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_weight?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in?: Maybe<Scalars['Float']>;
  ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out?: Maybe<Scalars['Float']>;
  ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  success_rate?: Maybe<Scalars['Float']>;
  success_rate_mainnet?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  total_active_addresses?: Maybe<Scalars['Float']>;
  total_active_addresses_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  total_active_addresses_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_weight?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs?: Maybe<Scalars['Float']>;
  total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  total_txs?: Maybe<Scalars['Float']>;
  total_txs_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_txs_rating?: Maybe<Scalars['Float']>;
  total_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "zones_stats" */
export type Zones_Stats_Stddev_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Zones_Stats_Stddev_Pop_Fields = {
  __typename?: 'zones_stats_stddev_pop_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_num?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses?: Maybe<Scalars['Float']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  ibc_peers?: Maybe<Scalars['Float']>;
  ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  ibc_percent?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_weight?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in?: Maybe<Scalars['Float']>;
  ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out?: Maybe<Scalars['Float']>;
  ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  success_rate?: Maybe<Scalars['Float']>;
  success_rate_mainnet?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  total_active_addresses?: Maybe<Scalars['Float']>;
  total_active_addresses_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  total_active_addresses_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_weight?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs?: Maybe<Scalars['Float']>;
  total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  total_txs?: Maybe<Scalars['Float']>;
  total_txs_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_txs_rating?: Maybe<Scalars['Float']>;
  total_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "zones_stats" */
export type Zones_Stats_Stddev_Pop_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Zones_Stats_Stddev_Samp_Fields = {
  __typename?: 'zones_stats_stddev_samp_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_num?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses?: Maybe<Scalars['Float']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  ibc_peers?: Maybe<Scalars['Float']>;
  ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  ibc_percent?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_weight?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in?: Maybe<Scalars['Float']>;
  ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out?: Maybe<Scalars['Float']>;
  ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  success_rate?: Maybe<Scalars['Float']>;
  success_rate_mainnet?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  total_active_addresses?: Maybe<Scalars['Float']>;
  total_active_addresses_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  total_active_addresses_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_weight?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs?: Maybe<Scalars['Float']>;
  total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  total_txs?: Maybe<Scalars['Float']>;
  total_txs_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_txs_rating?: Maybe<Scalars['Float']>;
  total_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "zones_stats" */
export type Zones_Stats_Stddev_Samp_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Zones_Stats_Sum_Fields = {
  __typename?: 'zones_stats_sum_fields';
  channels_cnt_active_period?: Maybe<Scalars['Int']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  channels_cnt_open?: Maybe<Scalars['Int']>;
  channels_num?: Maybe<Scalars['Int']>;
  channels_percent_active_period?: Maybe<Scalars['Int']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses?: Maybe<Scalars['Int']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Int']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  ibc_active_addresses_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow?: Maybe<Scalars['bigint']>;
  ibc_cashflow_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['numeric']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['numeric']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['numeric']>;
  ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['bigint']>;
  ibc_cashflow_rating?: Maybe<Scalars['Int']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Int']>;
  ibc_cashflow_weight?: Maybe<Scalars['numeric']>;
  ibc_peers?: Maybe<Scalars['Int']>;
  ibc_peers_mainnet?: Maybe<Scalars['Int']>;
  ibc_percent?: Maybe<Scalars['numeric']>;
  ibc_transfers?: Maybe<Scalars['Int']>;
  ibc_transfers_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_transfers_pending?: Maybe<Scalars['Int']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Int']>;
  ibc_transfers_rating?: Maybe<Scalars['Int']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Int']>;
  ibc_transfers_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_failed?: Maybe<Scalars['Int']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in?: Maybe<Scalars['Int']>;
  ibc_tx_in_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_failed?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_in_rating?: Maybe<Scalars['Int']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_in_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_out?: Maybe<Scalars['Int']>;
  ibc_tx_out_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_failed?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  ibc_tx_out_rating?: Maybe<Scalars['Int']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Int']>;
  ibc_tx_out_weight?: Maybe<Scalars['numeric']>;
  relations_cnt_open?: Maybe<Scalars['Int']>;
  success_rate?: Maybe<Scalars['numeric']>;
  success_rate_mainnet?: Maybe<Scalars['numeric']>;
  timeframe?: Maybe<Scalars['Int']>;
  total_active_addresses?: Maybe<Scalars['Int']>;
  total_active_addresses_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_active_addresses_rating?: Maybe<Scalars['Int']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  total_active_addresses_weight?: Maybe<Scalars['numeric']>;
  total_coin_turnover_amount?: Maybe<Scalars['numeric']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['numeric']>;
  total_ibc_txs?: Maybe<Scalars['Int']>;
  total_ibc_txs_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_ibc_txs_rating?: Maybe<Scalars['Int']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Int']>;
  total_ibc_txs_weight?: Maybe<Scalars['numeric']>;
  total_txs?: Maybe<Scalars['Int']>;
  total_txs_diff?: Maybe<Scalars['Int']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  total_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  total_txs_rating?: Maybe<Scalars['Int']>;
  total_txs_rating_diff?: Maybe<Scalars['Int']>;
  total_txs_weight?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "zones_stats" */
export type Zones_Stats_Sum_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Zones_Stats_Var_Pop_Fields = {
  __typename?: 'zones_stats_var_pop_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_num?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses?: Maybe<Scalars['Float']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  ibc_peers?: Maybe<Scalars['Float']>;
  ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  ibc_percent?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_weight?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in?: Maybe<Scalars['Float']>;
  ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out?: Maybe<Scalars['Float']>;
  ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  success_rate?: Maybe<Scalars['Float']>;
  success_rate_mainnet?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  total_active_addresses?: Maybe<Scalars['Float']>;
  total_active_addresses_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  total_active_addresses_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_weight?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs?: Maybe<Scalars['Float']>;
  total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  total_txs?: Maybe<Scalars['Float']>;
  total_txs_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_txs_rating?: Maybe<Scalars['Float']>;
  total_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "zones_stats" */
export type Zones_Stats_Var_Pop_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Zones_Stats_Var_Samp_Fields = {
  __typename?: 'zones_stats_var_samp_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_num?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses?: Maybe<Scalars['Float']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  ibc_peers?: Maybe<Scalars['Float']>;
  ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  ibc_percent?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_weight?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in?: Maybe<Scalars['Float']>;
  ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out?: Maybe<Scalars['Float']>;
  ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  success_rate?: Maybe<Scalars['Float']>;
  success_rate_mainnet?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  total_active_addresses?: Maybe<Scalars['Float']>;
  total_active_addresses_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  total_active_addresses_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_weight?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs?: Maybe<Scalars['Float']>;
  total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  total_txs?: Maybe<Scalars['Float']>;
  total_txs_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_txs_rating?: Maybe<Scalars['Float']>;
  total_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "zones_stats" */
export type Zones_Stats_Var_Samp_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Zones_Stats_Variance_Fields = {
  __typename?: 'zones_stats_variance_fields';
  channels_cnt_active_period?: Maybe<Scalars['Float']>;
  channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  channels_cnt_open?: Maybe<Scalars['Float']>;
  channels_num?: Maybe<Scalars['Float']>;
  channels_percent_active_period?: Maybe<Scalars['Float']>;
  channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses?: Maybe<Scalars['Float']>;
  ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow?: Maybe<Scalars['Float']>;
  ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  ibc_peers?: Maybe<Scalars['Float']>;
  ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  ibc_percent?: Maybe<Scalars['Float']>;
  ibc_transfers?: Maybe<Scalars['Float']>;
  ibc_transfers_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_transfers_pending?: Maybe<Scalars['Float']>;
  ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  ibc_transfers_rating?: Maybe<Scalars['Float']>;
  ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  ibc_transfers_weight?: Maybe<Scalars['Float']>;
  ibc_tx_failed?: Maybe<Scalars['Float']>;
  ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in?: Maybe<Scalars['Float']>;
  ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out?: Maybe<Scalars['Float']>;
  ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  relations_cnt_open?: Maybe<Scalars['Float']>;
  success_rate?: Maybe<Scalars['Float']>;
  success_rate_mainnet?: Maybe<Scalars['Float']>;
  timeframe?: Maybe<Scalars['Float']>;
  total_active_addresses?: Maybe<Scalars['Float']>;
  total_active_addresses_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  total_active_addresses_rating?: Maybe<Scalars['Float']>;
  total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  total_active_addresses_weight?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs?: Maybe<Scalars['Float']>;
  total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  total_txs?: Maybe<Scalars['Float']>;
  total_txs_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  total_txs_rating?: Maybe<Scalars['Float']>;
  total_txs_rating_diff?: Maybe<Scalars['Float']>;
  total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "zones_stats" */
export type Zones_Stats_Variance_Order_By = {
  channels_cnt_active_period?: InputMaybe<Order_By>;
  channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  channels_cnt_open?: InputMaybe<Order_By>;
  channels_num?: InputMaybe<Order_By>;
  channels_percent_active_period?: InputMaybe<Order_By>;
  channels_percent_active_period_diff?: InputMaybe<Order_By>;
  ibc_active_addresses?: InputMaybe<Order_By>;
  ibc_active_addresses_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  ibc_active_addresses_rating?: InputMaybe<Order_By>;
  ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  ibc_active_addresses_weight?: InputMaybe<Order_By>;
  ibc_cashflow?: InputMaybe<Order_By>;
  ibc_cashflow_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in?: InputMaybe<Order_By>;
  ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out?: InputMaybe<Order_By>;
  ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  ibc_cashflow_pending?: InputMaybe<Order_By>;
  ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  ibc_cashflow_rating?: InputMaybe<Order_By>;
  ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  ibc_cashflow_weight?: InputMaybe<Order_By>;
  ibc_peers?: InputMaybe<Order_By>;
  ibc_peers_mainnet?: InputMaybe<Order_By>;
  ibc_percent?: InputMaybe<Order_By>;
  ibc_transfers?: InputMaybe<Order_By>;
  ibc_transfers_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  ibc_transfers_pending?: InputMaybe<Order_By>;
  ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  ibc_transfers_rating?: InputMaybe<Order_By>;
  ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  ibc_transfers_weight?: InputMaybe<Order_By>;
  ibc_tx_failed?: InputMaybe<Order_By>;
  ibc_tx_failed_diff?: InputMaybe<Order_By>;
  ibc_tx_in?: InputMaybe<Order_By>;
  ibc_tx_in_diff?: InputMaybe<Order_By>;
  ibc_tx_in_failed?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_in_rating?: InputMaybe<Order_By>;
  ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_in_weight?: InputMaybe<Order_By>;
  ibc_tx_out?: InputMaybe<Order_By>;
  ibc_tx_out_diff?: InputMaybe<Order_By>;
  ibc_tx_out_failed?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  ibc_tx_out_rating?: InputMaybe<Order_By>;
  ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  ibc_tx_out_weight?: InputMaybe<Order_By>;
  relations_cnt_open?: InputMaybe<Order_By>;
  success_rate?: InputMaybe<Order_By>;
  success_rate_mainnet?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  total_active_addresses?: InputMaybe<Order_By>;
  total_active_addresses_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  total_active_addresses_rating?: InputMaybe<Order_By>;
  total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  total_active_addresses_weight?: InputMaybe<Order_By>;
  total_coin_turnover_amount?: InputMaybe<Order_By>;
  total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  total_ibc_txs?: InputMaybe<Order_By>;
  total_ibc_txs_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_ibc_txs_rating?: InputMaybe<Order_By>;
  total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  total_ibc_txs_weight?: InputMaybe<Order_By>;
  total_txs?: InputMaybe<Order_By>;
  total_txs_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_rating?: InputMaybe<Order_By>;
  total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  total_txs_mainnet_weight?: InputMaybe<Order_By>;
  total_txs_rating?: InputMaybe<Order_By>;
  total_txs_rating_diff?: InputMaybe<Order_By>;
  total_txs_weight?: InputMaybe<Order_By>;
};
