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
  readonly _eq?: InputMaybe<Scalars['Boolean']>;
  readonly _gt?: InputMaybe<Scalars['Boolean']>;
  readonly _gte?: InputMaybe<Scalars['Boolean']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Boolean']>;
  readonly _lte?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<Scalars['Boolean']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
};

/** expression to compare columns of type Float. All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Float']>;
  readonly _gt?: InputMaybe<Scalars['Float']>;
  readonly _gte?: InputMaybe<Scalars['Float']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Float']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Float']>;
  readonly _lte?: InputMaybe<Scalars['Float']>;
  readonly _neq?: InputMaybe<Scalars['Float']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Float']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Int']>;
  readonly _gt?: InputMaybe<Scalars['Int']>;
  readonly _gte?: InputMaybe<Scalars['Int']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Int']>;
  readonly _lte?: InputMaybe<Scalars['Int']>;
  readonly _neq?: InputMaybe<Scalars['Int']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['String']>;
  readonly _gt?: InputMaybe<Scalars['String']>;
  readonly _gte?: InputMaybe<Scalars['String']>;
  readonly _ilike?: InputMaybe<Scalars['String']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _like?: InputMaybe<Scalars['String']>;
  readonly _lt?: InputMaybe<Scalars['String']>;
  readonly _lte?: InputMaybe<Scalars['String']>;
  readonly _neq?: InputMaybe<Scalars['String']>;
  readonly _nilike?: InputMaybe<Scalars['String']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _nlike?: InputMaybe<Scalars['String']>;
  readonly _nsimilar?: InputMaybe<Scalars['String']>;
  readonly _similar?: InputMaybe<Scalars['String']>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['bigint']>;
  readonly _gt?: InputMaybe<Scalars['bigint']>;
  readonly _gte?: InputMaybe<Scalars['bigint']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['bigint']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['bigint']>;
  readonly _lte?: InputMaybe<Scalars['bigint']>;
  readonly _neq?: InputMaybe<Scalars['bigint']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['bigint']>>;
};

/** columns and relationships of "blocks_log" */
export type Blocks_Log = {
  readonly __typename?: 'blocks_log';
  readonly last_processed_block: Scalars['Int'];
  readonly last_updated_at: Scalars['timestamp'];
  readonly zone: Scalars['String'];
};

/** Boolean expression to filter rows from the table "blocks_log". All fields are combined with a logical 'AND'. */
export type Blocks_Log_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Blocks_Log_Bool_Exp>>>;
  readonly _not?: InputMaybe<Blocks_Log_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Blocks_Log_Bool_Exp>>>;
  readonly last_processed_block?: InputMaybe<Int_Comparison_Exp>;
  readonly last_updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly zone?: InputMaybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "blocks_log" */
export type Blocks_Log_Order_By = {
  readonly last_processed_block?: InputMaybe<Order_By>;
  readonly last_updated_at?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "blocks_log" */
export type Blocks_Log_Pk_Columns_Input = {
  readonly zone: Scalars['String'];
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
  readonly __typename?: 'channels_stats';
  readonly channel_id: Scalars['String'];
  readonly client_id: Scalars['String'];
  readonly connection_id: Scalars['String'];
  readonly ibc_tx_1d: Scalars['Int'];
  readonly ibc_tx_1d_diff: Scalars['Int'];
  readonly ibc_tx_1d_failed: Scalars['Int'];
  readonly ibc_tx_1d_failed_diff: Scalars['Int'];
  readonly ibc_tx_7d: Scalars['Int'];
  readonly ibc_tx_7d_diff: Scalars['Int'];
  readonly ibc_tx_7d_failed: Scalars['Int'];
  readonly ibc_tx_7d_failed_diff: Scalars['Int'];
  readonly ibc_tx_30d: Scalars['Int'];
  readonly ibc_tx_30d_diff: Scalars['Int'];
  readonly ibc_tx_30d_failed: Scalars['Int'];
  readonly ibc_tx_30d_failed_diff: Scalars['Int'];
  readonly is_opened: Scalars['Boolean'];
  readonly is_zone_counerparty_mainnet: Scalars['Boolean'];
  readonly zone: Scalars['String'];
  readonly zone_counerparty: Scalars['String'];
  readonly zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name: Scalars['String'];
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name: Scalars['String'];
};

/** aggregated selection of "channels_stats" */
export type Channels_Stats_Aggregate = {
  readonly __typename?: 'channels_stats_aggregate';
  readonly aggregate?: Maybe<Channels_Stats_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Channels_Stats>;
};

/** aggregate fields of "channels_stats" */
export type Channels_Stats_Aggregate_Fields = {
  readonly __typename?: 'channels_stats_aggregate_fields';
  readonly avg?: Maybe<Channels_Stats_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Channels_Stats_Max_Fields>;
  readonly min?: Maybe<Channels_Stats_Min_Fields>;
  readonly stddev?: Maybe<Channels_Stats_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Channels_Stats_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Channels_Stats_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Channels_Stats_Sum_Fields>;
  readonly var_pop?: Maybe<Channels_Stats_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Channels_Stats_Var_Samp_Fields>;
  readonly variance?: Maybe<Channels_Stats_Variance_Fields>;
};

/** aggregate fields of "channels_stats" */
export type Channels_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Channels_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "channels_stats" */
export type Channels_Stats_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Channels_Stats_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Channels_Stats_Max_Order_By>;
  readonly min?: InputMaybe<Channels_Stats_Min_Order_By>;
  readonly stddev?: InputMaybe<Channels_Stats_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Channels_Stats_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Channels_Stats_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Channels_Stats_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Channels_Stats_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Channels_Stats_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Channels_Stats_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Channels_Stats_Avg_Fields = {
  readonly __typename?: 'channels_stats_avg_fields';
  readonly ibc_tx_1d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "channels_stats" */
export type Channels_Stats_Avg_Order_By = {
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "channels_stats". All fields are combined with a logical 'AND'. */
export type Channels_Stats_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Channels_Stats_Bool_Exp>>>;
  readonly _not?: InputMaybe<Channels_Stats_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Channels_Stats_Bool_Exp>>>;
  readonly channel_id?: InputMaybe<String_Comparison_Exp>;
  readonly client_id?: InputMaybe<String_Comparison_Exp>;
  readonly connection_id?: InputMaybe<String_Comparison_Exp>;
  readonly ibc_tx_1d?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_1d_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_1d_failed?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_7d?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_7d_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_7d_failed?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_30d?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_30d_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_30d_failed?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly is_opened?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_zone_counerparty_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  readonly zone?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counerparty?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_channel_id?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_label_url?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_label_url2?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_readable_name?: InputMaybe<String_Comparison_Exp>;
  readonly zone_label_url?: InputMaybe<String_Comparison_Exp>;
  readonly zone_label_url2?: InputMaybe<String_Comparison_Exp>;
  readonly zone_readable_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Channels_Stats_Max_Fields = {
  readonly __typename?: 'channels_stats_max_fields';
  readonly channel_id?: Maybe<Scalars['String']>;
  readonly client_id?: Maybe<Scalars['String']>;
  readonly connection_id?: Maybe<Scalars['String']>;
  readonly ibc_tx_1d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Int']>;
  readonly zone?: Maybe<Scalars['String']>;
  readonly zone_counerparty?: Maybe<Scalars['String']>;
  readonly zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "channels_stats" */
export type Channels_Stats_Max_Order_By = {
  readonly channel_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly connection_id?: InputMaybe<Order_By>;
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counerparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_channel_id?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url2?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Channels_Stats_Min_Fields = {
  readonly __typename?: 'channels_stats_min_fields';
  readonly channel_id?: Maybe<Scalars['String']>;
  readonly client_id?: Maybe<Scalars['String']>;
  readonly connection_id?: Maybe<Scalars['String']>;
  readonly ibc_tx_1d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Int']>;
  readonly zone?: Maybe<Scalars['String']>;
  readonly zone_counerparty?: Maybe<Scalars['String']>;
  readonly zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "channels_stats" */
export type Channels_Stats_Min_Order_By = {
  readonly channel_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly connection_id?: InputMaybe<Order_By>;
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counerparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_channel_id?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url2?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "channels_stats" */
export type Channels_Stats_Order_By = {
  readonly channel_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly connection_id?: InputMaybe<Order_By>;
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
  readonly is_opened?: InputMaybe<Order_By>;
  readonly is_zone_counerparty_mainnet?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counerparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_channel_id?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url2?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "channels_stats" */
export type Channels_Stats_Pk_Columns_Input = {
  readonly channel_id: Scalars['String'];
  readonly client_id: Scalars['String'];
  readonly connection_id: Scalars['String'];
  readonly zone: Scalars['String'];
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
  readonly __typename?: 'channels_stats_stddev_fields';
  readonly ibc_tx_1d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "channels_stats" */
export type Channels_Stats_Stddev_Order_By = {
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Channels_Stats_Stddev_Pop_Fields = {
  readonly __typename?: 'channels_stats_stddev_pop_fields';
  readonly ibc_tx_1d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "channels_stats" */
export type Channels_Stats_Stddev_Pop_Order_By = {
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Channels_Stats_Stddev_Samp_Fields = {
  readonly __typename?: 'channels_stats_stddev_samp_fields';
  readonly ibc_tx_1d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "channels_stats" */
export type Channels_Stats_Stddev_Samp_Order_By = {
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Channels_Stats_Sum_Fields = {
  readonly __typename?: 'channels_stats_sum_fields';
  readonly ibc_tx_1d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "channels_stats" */
export type Channels_Stats_Sum_Order_By = {
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Channels_Stats_Var_Pop_Fields = {
  readonly __typename?: 'channels_stats_var_pop_fields';
  readonly ibc_tx_1d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "channels_stats" */
export type Channels_Stats_Var_Pop_Order_By = {
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Channels_Stats_Var_Samp_Fields = {
  readonly __typename?: 'channels_stats_var_samp_fields';
  readonly ibc_tx_1d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "channels_stats" */
export type Channels_Stats_Var_Samp_Order_By = {
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Channels_Stats_Variance_Fields = {
  readonly __typename?: 'channels_stats_variance_fields';
  readonly ibc_tx_1d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_1d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_7d_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_30d_failed_diff?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "channels_stats" */
export type Channels_Stats_Variance_Order_By = {
  readonly ibc_tx_1d?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_1d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_7d_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_30d_failed_diff?: InputMaybe<Order_By>;
};

/** columns and relationships of "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats = {
  readonly __typename?: 'ft_channel_group_stats';
  readonly ibc_cashflow_in: Scalars['bigint'];
  readonly ibc_cashflow_in_diff: Scalars['bigint'];
  readonly ibc_cashflow_in_pending: Scalars['bigint'];
  readonly ibc_cashflow_out: Scalars['bigint'];
  readonly ibc_cashflow_out_diff: Scalars['bigint'];
  readonly ibc_cashflow_out_pending: Scalars['bigint'];
  readonly ibc_tx: Scalars['bigint'];
  readonly ibc_tx_diff: Scalars['bigint'];
  readonly ibc_tx_failed: Scalars['bigint'];
  readonly ibc_tx_failed_diff: Scalars['bigint'];
  readonly ibc_tx_pending?: Maybe<Scalars['Int']>;
  readonly ibc_tx_success_rate: Scalars['numeric'];
  readonly ibc_tx_success_rate_diff: Scalars['numeric'];
  readonly is_zone_counterparty_mainnet: Scalars['Boolean'];
  readonly is_zone_counterparty_up_to_date?: Maybe<Scalars['Boolean']>;
  readonly is_zone_up_to_date?: Maybe<Scalars['Boolean']>;
  readonly timeframe: Scalars['Int'];
  readonly zone: Scalars['String'];
  readonly zone_counterparty: Scalars['String'];
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Aggregate = {
  readonly __typename?: 'ft_channel_group_stats_aggregate';
  readonly aggregate?: Maybe<Ft_Channel_Group_Stats_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Ft_Channel_Group_Stats>;
};

/** aggregate fields of "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Aggregate_Fields = {
  readonly __typename?: 'ft_channel_group_stats_aggregate_fields';
  readonly avg?: Maybe<Ft_Channel_Group_Stats_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Ft_Channel_Group_Stats_Max_Fields>;
  readonly min?: Maybe<Ft_Channel_Group_Stats_Min_Fields>;
  readonly stddev?: Maybe<Ft_Channel_Group_Stats_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Ft_Channel_Group_Stats_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Ft_Channel_Group_Stats_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Ft_Channel_Group_Stats_Sum_Fields>;
  readonly var_pop?: Maybe<Ft_Channel_Group_Stats_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Ft_Channel_Group_Stats_Var_Samp_Fields>;
  readonly variance?: Maybe<Ft_Channel_Group_Stats_Variance_Fields>;
};

/** aggregate fields of "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Ft_Channel_Group_Stats_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Ft_Channel_Group_Stats_Max_Order_By>;
  readonly min?: InputMaybe<Ft_Channel_Group_Stats_Min_Order_By>;
  readonly stddev?: InputMaybe<Ft_Channel_Group_Stats_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Ft_Channel_Group_Stats_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Ft_Channel_Group_Stats_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Ft_Channel_Group_Stats_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Ft_Channel_Group_Stats_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Ft_Channel_Group_Stats_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Ft_Channel_Group_Stats_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Ft_Channel_Group_Stats_Avg_Fields = {
  readonly __typename?: 'ft_channel_group_stats_avg_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Avg_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ft_channel_group_stats". All fields are combined with a logical 'AND'. */
export type Ft_Channel_Group_Stats_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>>>;
  readonly _not?: InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>>>;
  readonly ibc_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx_failed?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx_failed_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx_pending?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_success_rate?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Numeric_Comparison_Exp>;
  readonly is_zone_counterparty_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_zone_counterparty_up_to_date?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_zone_up_to_date?: InputMaybe<Boolean_Comparison_Exp>;
  readonly timeframe?: InputMaybe<Int_Comparison_Exp>;
  readonly zone?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_label_url?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_readable_name?: InputMaybe<String_Comparison_Exp>;
  readonly zone_label_url?: InputMaybe<String_Comparison_Exp>;
  readonly zone_readable_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ft_Channel_Group_Stats_Max_Fields = {
  readonly __typename?: 'ft_channel_group_stats_max_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_tx?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Int']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly zone?: Maybe<Scalars['String']>;
  readonly zone_counterparty?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Max_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counterparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ft_Channel_Group_Stats_Min_Fields = {
  readonly __typename?: 'ft_channel_group_stats_min_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_tx?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Int']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly zone?: Maybe<Scalars['String']>;
  readonly zone_counterparty?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Min_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counterparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly is_zone_counterparty_mainnet?: InputMaybe<Order_By>;
  readonly is_zone_counterparty_up_to_date?: InputMaybe<Order_By>;
  readonly is_zone_up_to_date?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counterparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Pk_Columns_Input = {
  readonly timeframe: Scalars['Int'];
  readonly zone: Scalars['String'];
  readonly zone_counterparty: Scalars['String'];
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
  readonly __typename?: 'ft_channel_group_stats_stddev_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Stddev_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ft_Channel_Group_Stats_Stddev_Pop_Fields = {
  readonly __typename?: 'ft_channel_group_stats_stddev_pop_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Stddev_Pop_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ft_Channel_Group_Stats_Stddev_Samp_Fields = {
  readonly __typename?: 'ft_channel_group_stats_stddev_samp_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Stddev_Samp_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Ft_Channel_Group_Stats_Sum_Fields = {
  readonly __typename?: 'ft_channel_group_stats_sum_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_tx?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Int']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Sum_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Ft_Channel_Group_Stats_Var_Pop_Fields = {
  readonly __typename?: 'ft_channel_group_stats_var_pop_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Var_Pop_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ft_Channel_Group_Stats_Var_Samp_Fields = {
  readonly __typename?: 'ft_channel_group_stats_var_samp_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Var_Samp_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ft_Channel_Group_Stats_Variance_Fields = {
  readonly __typename?: 'ft_channel_group_stats_variance_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ft_channel_group_stats" */
export type Ft_Channel_Group_Stats_Variance_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** columns and relationships of "ft_channels_stats" */
export type Ft_Channels_Stats = {
  readonly __typename?: 'ft_channels_stats';
  readonly channel_id: Scalars['String'];
  readonly client_id: Scalars['String'];
  readonly connection_id: Scalars['String'];
  readonly ibc_cashflow_in: Scalars['bigint'];
  readonly ibc_cashflow_in_diff: Scalars['bigint'];
  readonly ibc_cashflow_in_pending: Scalars['bigint'];
  readonly ibc_cashflow_out: Scalars['bigint'];
  readonly ibc_cashflow_out_diff: Scalars['bigint'];
  readonly ibc_cashflow_out_pending: Scalars['bigint'];
  readonly ibc_tx: Scalars['bigint'];
  readonly ibc_tx_diff: Scalars['bigint'];
  readonly ibc_tx_failed: Scalars['bigint'];
  readonly ibc_tx_failed_diff: Scalars['bigint'];
  readonly ibc_tx_pending?: Maybe<Scalars['Int']>;
  readonly ibc_tx_success_rate: Scalars['numeric'];
  readonly ibc_tx_success_rate_diff: Scalars['numeric'];
  readonly is_opened: Scalars['Boolean'];
  readonly is_zone_counterparty_mainnet: Scalars['Boolean'];
  readonly timeframe: Scalars['Int'];
  readonly zone: Scalars['String'];
  readonly zone_counterparty: Scalars['String'];
  readonly zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
  readonly zone_website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "ft_channels_stats" */
export type Ft_Channels_Stats_Aggregate = {
  readonly __typename?: 'ft_channels_stats_aggregate';
  readonly aggregate?: Maybe<Ft_Channels_Stats_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Ft_Channels_Stats>;
};

/** aggregate fields of "ft_channels_stats" */
export type Ft_Channels_Stats_Aggregate_Fields = {
  readonly __typename?: 'ft_channels_stats_aggregate_fields';
  readonly avg?: Maybe<Ft_Channels_Stats_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Ft_Channels_Stats_Max_Fields>;
  readonly min?: Maybe<Ft_Channels_Stats_Min_Fields>;
  readonly stddev?: Maybe<Ft_Channels_Stats_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Ft_Channels_Stats_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Ft_Channels_Stats_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Ft_Channels_Stats_Sum_Fields>;
  readonly var_pop?: Maybe<Ft_Channels_Stats_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Ft_Channels_Stats_Var_Samp_Fields>;
  readonly variance?: Maybe<Ft_Channels_Stats_Variance_Fields>;
};

/** aggregate fields of "ft_channels_stats" */
export type Ft_Channels_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ft_channels_stats" */
export type Ft_Channels_Stats_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Ft_Channels_Stats_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Ft_Channels_Stats_Max_Order_By>;
  readonly min?: InputMaybe<Ft_Channels_Stats_Min_Order_By>;
  readonly stddev?: InputMaybe<Ft_Channels_Stats_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Ft_Channels_Stats_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Ft_Channels_Stats_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Ft_Channels_Stats_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Ft_Channels_Stats_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Ft_Channels_Stats_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Ft_Channels_Stats_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Ft_Channels_Stats_Avg_Fields = {
  readonly __typename?: 'ft_channels_stats_avg_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Avg_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ft_channels_stats". All fields are combined with a logical 'AND'. */
export type Ft_Channels_Stats_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Ft_Channels_Stats_Bool_Exp>>>;
  readonly _not?: InputMaybe<Ft_Channels_Stats_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Ft_Channels_Stats_Bool_Exp>>>;
  readonly channel_id?: InputMaybe<String_Comparison_Exp>;
  readonly client_id?: InputMaybe<String_Comparison_Exp>;
  readonly connection_id?: InputMaybe<String_Comparison_Exp>;
  readonly ibc_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx_failed?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx_failed_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_tx_pending?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_success_rate?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Numeric_Comparison_Exp>;
  readonly is_opened?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_zone_counterparty_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  readonly timeframe?: InputMaybe<Int_Comparison_Exp>;
  readonly zone?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_channel_id?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_label_url?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_label_url2?: InputMaybe<String_Comparison_Exp>;
  readonly zone_counterparty_readable_name?: InputMaybe<String_Comparison_Exp>;
  readonly zone_label_url?: InputMaybe<String_Comparison_Exp>;
  readonly zone_label_url2?: InputMaybe<String_Comparison_Exp>;
  readonly zone_readable_name?: InputMaybe<String_Comparison_Exp>;
  readonly zone_website?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ft_Channels_Stats_Max_Fields = {
  readonly __typename?: 'ft_channels_stats_max_fields';
  readonly channel_id?: Maybe<Scalars['String']>;
  readonly client_id?: Maybe<Scalars['String']>;
  readonly connection_id?: Maybe<Scalars['String']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_tx?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Int']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly zone?: Maybe<Scalars['String']>;
  readonly zone_counterparty?: Maybe<Scalars['String']>;
  readonly zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
  readonly zone_website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Max_Order_By = {
  readonly channel_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly connection_id?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counterparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_channel_id?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url2?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
  readonly zone_website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ft_Channels_Stats_Min_Fields = {
  readonly __typename?: 'ft_channels_stats_min_fields';
  readonly channel_id?: Maybe<Scalars['String']>;
  readonly client_id?: Maybe<Scalars['String']>;
  readonly connection_id?: Maybe<Scalars['String']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_tx?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Int']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly zone?: Maybe<Scalars['String']>;
  readonly zone_counterparty?: Maybe<Scalars['String']>;
  readonly zone_counterparty_channel_id?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url?: Maybe<Scalars['String']>;
  readonly zone_counterparty_label_url2?: Maybe<Scalars['String']>;
  readonly zone_counterparty_readable_name?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
  readonly zone_website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Min_Order_By = {
  readonly channel_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly connection_id?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counterparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_channel_id?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url2?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
  readonly zone_website?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "ft_channels_stats" */
export type Ft_Channels_Stats_Order_By = {
  readonly channel_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly connection_id?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly is_opened?: InputMaybe<Order_By>;
  readonly is_zone_counterparty_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_counterparty?: InputMaybe<Order_By>;
  readonly zone_counterparty_channel_id?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url?: InputMaybe<Order_By>;
  readonly zone_counterparty_label_url2?: InputMaybe<Order_By>;
  readonly zone_counterparty_readable_name?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
  readonly zone_website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "ft_channels_stats" */
export type Ft_Channels_Stats_Pk_Columns_Input = {
  readonly channel_id: Scalars['String'];
  readonly client_id: Scalars['String'];
  readonly connection_id: Scalars['String'];
  readonly timeframe: Scalars['Int'];
  readonly zone: Scalars['String'];
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
  readonly __typename?: 'ft_channels_stats_stddev_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Stddev_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ft_Channels_Stats_Stddev_Pop_Fields = {
  readonly __typename?: 'ft_channels_stats_stddev_pop_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Stddev_Pop_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ft_Channels_Stats_Stddev_Samp_Fields = {
  readonly __typename?: 'ft_channels_stats_stddev_samp_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Stddev_Samp_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Ft_Channels_Stats_Sum_Fields = {
  readonly __typename?: 'ft_channels_stats_sum_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_tx?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Int']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Sum_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Ft_Channels_Stats_Var_Pop_Fields = {
  readonly __typename?: 'ft_channels_stats_var_pop_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Var_Pop_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ft_Channels_Stats_Var_Samp_Fields = {
  readonly __typename?: 'ft_channels_stats_var_samp_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Var_Samp_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ft_Channels_Stats_Variance_Fields = {
  readonly __typename?: 'ft_channels_stats_variance_fields';
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx?: Maybe<Scalars['Float']>;
  readonly ibc_tx_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_pending?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate?: Maybe<Scalars['Float']>;
  readonly ibc_tx_success_rate_diff?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ft_channels_stats" */
export type Ft_Channels_Stats_Variance_Order_By = {
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_tx?: InputMaybe<Order_By>;
  readonly ibc_tx_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_pending?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate?: InputMaybe<Order_By>;
  readonly ibc_tx_success_rate_diff?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** columns and relationships of "headers" */
export type Headers = {
  readonly __typename?: 'headers';
  readonly channels_cnt_active_period: Scalars['Int'];
  readonly channels_cnt_active_period_diff: Scalars['Int'];
  readonly channels_cnt_all: Scalars['Int'];
  readonly channels_cnt_open: Scalars['Int'];
  readonly channels_cnt_period: Scalars['Int'];
  readonly channels_percent_active_period: Scalars['Int'];
  readonly channels_percent_active_period_diff: Scalars['Int'];
  readonly chart: Scalars['jsonb'];
  readonly chart_cashflow?: Maybe<Scalars['jsonb']>;
  readonly chart_transfers?: Maybe<Scalars['jsonb']>;
  readonly ibc_cashflow_pending_period: Scalars['bigint'];
  readonly ibc_cashflow_period?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_transfers_failed_period: Scalars['Int'];
  readonly ibc_transfers_pending_period: Scalars['Int'];
  readonly ibc_transfers_period: Scalars['Int'];
  readonly ibc_transfers_period_diff: Scalars['Int'];
  readonly is_mainnet_only: Scalars['Boolean'];
  readonly relations_cnt_open: Scalars['Int'];
  readonly timeframe: Scalars['Int'];
  readonly top_ibc_cashflow_zone_pair?: Maybe<Scalars['jsonb']>;
  readonly top_transfer_zone_pair?: Maybe<Scalars['jsonb']>;
  readonly top_zone_pair: Scalars['jsonb'];
  readonly zones_cnt_all: Scalars['Int'];
  readonly zones_cnt_period: Scalars['Int'];
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
  readonly __typename?: 'headers_aggregate';
  readonly aggregate?: Maybe<Headers_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Headers>;
};

/** aggregate fields of "headers" */
export type Headers_Aggregate_Fields = {
  readonly __typename?: 'headers_aggregate_fields';
  readonly avg?: Maybe<Headers_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Headers_Max_Fields>;
  readonly min?: Maybe<Headers_Min_Fields>;
  readonly stddev?: Maybe<Headers_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Headers_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Headers_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Headers_Sum_Fields>;
  readonly var_pop?: Maybe<Headers_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Headers_Var_Samp_Fields>;
  readonly variance?: Maybe<Headers_Variance_Fields>;
};

/** aggregate fields of "headers" */
export type Headers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Headers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "headers" */
export type Headers_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Headers_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Headers_Max_Order_By>;
  readonly min?: InputMaybe<Headers_Min_Order_By>;
  readonly stddev?: InputMaybe<Headers_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Headers_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Headers_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Headers_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Headers_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Headers_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Headers_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Headers_Avg_Fields = {
  readonly __typename?: 'headers_avg_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_all?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_cnt_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly zones_cnt_all?: Maybe<Scalars['Float']>;
  readonly zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "headers" */
export type Headers_Avg_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "headers". All fields are combined with a logical 'AND'. */
export type Headers_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Headers_Bool_Exp>>>;
  readonly _not?: InputMaybe<Headers_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Headers_Bool_Exp>>>;
  readonly channels_cnt_active_period?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_cnt_all?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_cnt_period?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_percent_active_period?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_percent_active_period_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly chart?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly chart_cashflow?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly chart_transfers?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_period?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_transfers_failed_period?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_pending_period?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_period?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_period_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly is_mainnet_only?: InputMaybe<Boolean_Comparison_Exp>;
  readonly relations_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  readonly timeframe?: InputMaybe<Int_Comparison_Exp>;
  readonly top_ibc_cashflow_zone_pair?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly top_transfer_zone_pair?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly top_zone_pair?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly zones_cnt_all?: InputMaybe<Int_Comparison_Exp>;
  readonly zones_cnt_period?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Headers_Max_Fields = {
  readonly __typename?: 'headers_max_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Int']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  readonly channels_cnt_all?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_cnt_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Int']>;
  readonly relations_cnt_open?: Maybe<Scalars['Int']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly zones_cnt_all?: Maybe<Scalars['Int']>;
  readonly zones_cnt_period?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "headers" */
export type Headers_Max_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Headers_Min_Fields = {
  readonly __typename?: 'headers_min_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Int']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  readonly channels_cnt_all?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_cnt_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Int']>;
  readonly relations_cnt_open?: Maybe<Scalars['Int']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly zones_cnt_all?: Maybe<Scalars['Int']>;
  readonly zones_cnt_period?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "headers" */
export type Headers_Min_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "headers" */
export type Headers_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly chart?: InputMaybe<Order_By>;
  readonly chart_cashflow?: InputMaybe<Order_By>;
  readonly chart_transfers?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly is_mainnet_only?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly top_ibc_cashflow_zone_pair?: InputMaybe<Order_By>;
  readonly top_transfer_zone_pair?: InputMaybe<Order_By>;
  readonly top_zone_pair?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "headers" */
export type Headers_Pk_Columns_Input = {
  readonly is_mainnet_only: Scalars['Boolean'];
  readonly timeframe: Scalars['Int'];
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
  readonly __typename?: 'headers_stddev_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_all?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_cnt_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly zones_cnt_all?: Maybe<Scalars['Float']>;
  readonly zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "headers" */
export type Headers_Stddev_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Headers_Stddev_Pop_Fields = {
  readonly __typename?: 'headers_stddev_pop_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_all?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_cnt_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly zones_cnt_all?: Maybe<Scalars['Float']>;
  readonly zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "headers" */
export type Headers_Stddev_Pop_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Headers_Stddev_Samp_Fields = {
  readonly __typename?: 'headers_stddev_samp_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_all?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_cnt_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly zones_cnt_all?: Maybe<Scalars['Float']>;
  readonly zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "headers" */
export type Headers_Stddev_Samp_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Headers_Sum_Fields = {
  readonly __typename?: 'headers_sum_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Int']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  readonly channels_cnt_all?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_cnt_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Int']>;
  readonly relations_cnt_open?: Maybe<Scalars['Int']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly zones_cnt_all?: Maybe<Scalars['Int']>;
  readonly zones_cnt_period?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "headers" */
export type Headers_Sum_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Headers_Var_Pop_Fields = {
  readonly __typename?: 'headers_var_pop_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_all?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_cnt_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly zones_cnt_all?: Maybe<Scalars['Float']>;
  readonly zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "headers" */
export type Headers_Var_Pop_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Headers_Var_Samp_Fields = {
  readonly __typename?: 'headers_var_samp_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_all?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_cnt_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly zones_cnt_all?: Maybe<Scalars['Float']>;
  readonly zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "headers" */
export type Headers_Var_Samp_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Headers_Variance_Fields = {
  readonly __typename?: 'headers_variance_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_all?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_cnt_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_failed_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_period_diff?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly zones_cnt_all?: Maybe<Scalars['Float']>;
  readonly zones_cnt_period?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "headers" */
export type Headers_Variance_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_all?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_cnt_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period?: InputMaybe<Order_By>;
  readonly ibc_cashflow_period_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_failed_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period?: InputMaybe<Order_By>;
  readonly ibc_transfers_period_diff?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly zones_cnt_all?: InputMaybe<Order_By>;
  readonly zones_cnt_period?: InputMaybe<Order_By>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  readonly _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  readonly _contains?: InputMaybe<Scalars['jsonb']>;
  readonly _eq?: InputMaybe<Scalars['jsonb']>;
  readonly _gt?: InputMaybe<Scalars['jsonb']>;
  readonly _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  readonly _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  readonly _has_keys_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  readonly _has_keys_any?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['jsonb']>;
  readonly _lte?: InputMaybe<Scalars['jsonb']>;
  readonly _neq?: InputMaybe<Scalars['jsonb']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
};

/** columns and relationships of "nodes_addrs" */
export type Nodes_Addrs = {
  readonly __typename?: 'nodes_addrs';
  readonly city?: Maybe<Scalars['String']>;
  readonly continent?: Maybe<Scalars['String']>;
  readonly continent_code?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly country_code?: Maybe<Scalars['String']>;
  readonly district?: Maybe<Scalars['String']>;
  readonly ip_or_dns: Scalars['String'];
  readonly is_hidden: Scalars['Boolean'];
  readonly is_hosting?: Maybe<Scalars['Boolean']>;
  readonly is_prioritized: Scalars['Boolean'];
  readonly isp_name?: Maybe<Scalars['String']>;
  readonly last_checked_at: Scalars['timestamp'];
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly org?: Maybe<Scalars['String']>;
  readonly org_as?: Maybe<Scalars['String']>;
  readonly org_as_name?: Maybe<Scalars['String']>;
  readonly region?: Maybe<Scalars['String']>;
  readonly region_name?: Maybe<Scalars['String']>;
  readonly timezone?: Maybe<Scalars['String']>;
  readonly timezone_offset?: Maybe<Scalars['Int']>;
  readonly zip?: Maybe<Scalars['String']>;
};

/** aggregated selection of "nodes_addrs" */
export type Nodes_Addrs_Aggregate = {
  readonly __typename?: 'nodes_addrs_aggregate';
  readonly aggregate?: Maybe<Nodes_Addrs_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Nodes_Addrs>;
};

/** aggregate fields of "nodes_addrs" */
export type Nodes_Addrs_Aggregate_Fields = {
  readonly __typename?: 'nodes_addrs_aggregate_fields';
  readonly avg?: Maybe<Nodes_Addrs_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Nodes_Addrs_Max_Fields>;
  readonly min?: Maybe<Nodes_Addrs_Min_Fields>;
  readonly stddev?: Maybe<Nodes_Addrs_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Nodes_Addrs_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Nodes_Addrs_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Nodes_Addrs_Sum_Fields>;
  readonly var_pop?: Maybe<Nodes_Addrs_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Nodes_Addrs_Var_Samp_Fields>;
  readonly variance?: Maybe<Nodes_Addrs_Variance_Fields>;
};

/** aggregate fields of "nodes_addrs" */
export type Nodes_Addrs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Nodes_Addrs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nodes_addrs" */
export type Nodes_Addrs_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Nodes_Addrs_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Nodes_Addrs_Max_Order_By>;
  readonly min?: InputMaybe<Nodes_Addrs_Min_Order_By>;
  readonly stddev?: InputMaybe<Nodes_Addrs_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Nodes_Addrs_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Nodes_Addrs_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Nodes_Addrs_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Nodes_Addrs_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Nodes_Addrs_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Nodes_Addrs_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nodes_Addrs_Avg_Fields = {
  readonly __typename?: 'nodes_addrs_avg_fields';
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Avg_Order_By = {
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nodes_addrs". All fields are combined with a logical 'AND'. */
export type Nodes_Addrs_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Nodes_Addrs_Bool_Exp>>>;
  readonly _not?: InputMaybe<Nodes_Addrs_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Nodes_Addrs_Bool_Exp>>>;
  readonly city?: InputMaybe<String_Comparison_Exp>;
  readonly continent?: InputMaybe<String_Comparison_Exp>;
  readonly continent_code?: InputMaybe<String_Comparison_Exp>;
  readonly country?: InputMaybe<String_Comparison_Exp>;
  readonly country_code?: InputMaybe<String_Comparison_Exp>;
  readonly district?: InputMaybe<String_Comparison_Exp>;
  readonly ip_or_dns?: InputMaybe<String_Comparison_Exp>;
  readonly is_hidden?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_hosting?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_prioritized?: InputMaybe<Boolean_Comparison_Exp>;
  readonly isp_name?: InputMaybe<String_Comparison_Exp>;
  readonly last_checked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly lat?: InputMaybe<Float_Comparison_Exp>;
  readonly lon?: InputMaybe<Float_Comparison_Exp>;
  readonly org?: InputMaybe<String_Comparison_Exp>;
  readonly org_as?: InputMaybe<String_Comparison_Exp>;
  readonly org_as_name?: InputMaybe<String_Comparison_Exp>;
  readonly region?: InputMaybe<String_Comparison_Exp>;
  readonly region_name?: InputMaybe<String_Comparison_Exp>;
  readonly timezone?: InputMaybe<String_Comparison_Exp>;
  readonly timezone_offset?: InputMaybe<Int_Comparison_Exp>;
  readonly zip?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nodes_Addrs_Max_Fields = {
  readonly __typename?: 'nodes_addrs_max_fields';
  readonly city?: Maybe<Scalars['String']>;
  readonly continent?: Maybe<Scalars['String']>;
  readonly continent_code?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly country_code?: Maybe<Scalars['String']>;
  readonly district?: Maybe<Scalars['String']>;
  readonly ip_or_dns?: Maybe<Scalars['String']>;
  readonly isp_name?: Maybe<Scalars['String']>;
  readonly last_checked_at?: Maybe<Scalars['timestamp']>;
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly org?: Maybe<Scalars['String']>;
  readonly org_as?: Maybe<Scalars['String']>;
  readonly org_as_name?: Maybe<Scalars['String']>;
  readonly region?: Maybe<Scalars['String']>;
  readonly region_name?: Maybe<Scalars['String']>;
  readonly timezone?: Maybe<Scalars['String']>;
  readonly timezone_offset?: Maybe<Scalars['Int']>;
  readonly zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Max_Order_By = {
  readonly city?: InputMaybe<Order_By>;
  readonly continent?: InputMaybe<Order_By>;
  readonly continent_code?: InputMaybe<Order_By>;
  readonly country?: InputMaybe<Order_By>;
  readonly country_code?: InputMaybe<Order_By>;
  readonly district?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly isp_name?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly org?: InputMaybe<Order_By>;
  readonly org_as?: InputMaybe<Order_By>;
  readonly org_as_name?: InputMaybe<Order_By>;
  readonly region?: InputMaybe<Order_By>;
  readonly region_name?: InputMaybe<Order_By>;
  readonly timezone?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
  readonly zip?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nodes_Addrs_Min_Fields = {
  readonly __typename?: 'nodes_addrs_min_fields';
  readonly city?: Maybe<Scalars['String']>;
  readonly continent?: Maybe<Scalars['String']>;
  readonly continent_code?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly country_code?: Maybe<Scalars['String']>;
  readonly district?: Maybe<Scalars['String']>;
  readonly ip_or_dns?: Maybe<Scalars['String']>;
  readonly isp_name?: Maybe<Scalars['String']>;
  readonly last_checked_at?: Maybe<Scalars['timestamp']>;
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly org?: Maybe<Scalars['String']>;
  readonly org_as?: Maybe<Scalars['String']>;
  readonly org_as_name?: Maybe<Scalars['String']>;
  readonly region?: Maybe<Scalars['String']>;
  readonly region_name?: Maybe<Scalars['String']>;
  readonly timezone?: Maybe<Scalars['String']>;
  readonly timezone_offset?: Maybe<Scalars['Int']>;
  readonly zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Min_Order_By = {
  readonly city?: InputMaybe<Order_By>;
  readonly continent?: InputMaybe<Order_By>;
  readonly continent_code?: InputMaybe<Order_By>;
  readonly country?: InputMaybe<Order_By>;
  readonly country_code?: InputMaybe<Order_By>;
  readonly district?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly isp_name?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly org?: InputMaybe<Order_By>;
  readonly org_as?: InputMaybe<Order_By>;
  readonly org_as_name?: InputMaybe<Order_By>;
  readonly region?: InputMaybe<Order_By>;
  readonly region_name?: InputMaybe<Order_By>;
  readonly timezone?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
  readonly zip?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "nodes_addrs" */
export type Nodes_Addrs_Order_By = {
  readonly city?: InputMaybe<Order_By>;
  readonly continent?: InputMaybe<Order_By>;
  readonly continent_code?: InputMaybe<Order_By>;
  readonly country?: InputMaybe<Order_By>;
  readonly country_code?: InputMaybe<Order_By>;
  readonly district?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly is_hidden?: InputMaybe<Order_By>;
  readonly is_hosting?: InputMaybe<Order_By>;
  readonly is_prioritized?: InputMaybe<Order_By>;
  readonly isp_name?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly org?: InputMaybe<Order_By>;
  readonly org_as?: InputMaybe<Order_By>;
  readonly org_as_name?: InputMaybe<Order_By>;
  readonly region?: InputMaybe<Order_By>;
  readonly region_name?: InputMaybe<Order_By>;
  readonly timezone?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
  readonly zip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "nodes_addrs" */
export type Nodes_Addrs_Pk_Columns_Input = {
  readonly ip_or_dns: Scalars['String'];
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
  readonly __typename?: 'nodes_addrs_stddev_fields';
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Stddev_Order_By = {
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nodes_Addrs_Stddev_Pop_Fields = {
  readonly __typename?: 'nodes_addrs_stddev_pop_fields';
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Stddev_Pop_Order_By = {
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nodes_Addrs_Stddev_Samp_Fields = {
  readonly __typename?: 'nodes_addrs_stddev_samp_fields';
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Stddev_Samp_Order_By = {
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nodes_Addrs_Sum_Fields = {
  readonly __typename?: 'nodes_addrs_sum_fields';
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly timezone_offset?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Sum_Order_By = {
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nodes_Addrs_Var_Pop_Fields = {
  readonly __typename?: 'nodes_addrs_var_pop_fields';
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Var_Pop_Order_By = {
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nodes_Addrs_Var_Samp_Fields = {
  readonly __typename?: 'nodes_addrs_var_samp_fields';
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Var_Samp_Order_By = {
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nodes_Addrs_Variance_Fields = {
  readonly __typename?: 'nodes_addrs_variance_fields';
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nodes_addrs" */
export type Nodes_Addrs_Variance_Order_By = {
  readonly lat?: InputMaybe<Order_By>;
  readonly lon?: InputMaybe<Order_By>;
  readonly timezone_offset?: InputMaybe<Order_By>;
};

/** columns and relationships of "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs = {
  readonly __typename?: 'nodes_lcd_addrs';
  readonly added_at: Scalars['timestamp'];
  readonly ip_or_dns: Scalars['String'];
  readonly is_alive: Scalars['Boolean'];
  readonly is_hidden: Scalars['Boolean'];
  readonly is_prioritized: Scalars['Boolean'];
  readonly last_active?: Maybe<Scalars['timestamp']>;
  readonly last_checked_at: Scalars['timestamp'];
  readonly lcd_addr: Scalars['String'];
  readonly response_time?: Maybe<Scalars['Int']>;
  readonly zone: Scalars['String'];
};

/** aggregated selection of "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Aggregate = {
  readonly __typename?: 'nodes_lcd_addrs_aggregate';
  readonly aggregate?: Maybe<Nodes_Lcd_Addrs_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Nodes_Lcd_Addrs>;
};

/** aggregate fields of "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Aggregate_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_aggregate_fields';
  readonly avg?: Maybe<Nodes_Lcd_Addrs_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Nodes_Lcd_Addrs_Max_Fields>;
  readonly min?: Maybe<Nodes_Lcd_Addrs_Min_Fields>;
  readonly stddev?: Maybe<Nodes_Lcd_Addrs_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Nodes_Lcd_Addrs_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Nodes_Lcd_Addrs_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Nodes_Lcd_Addrs_Sum_Fields>;
  readonly var_pop?: Maybe<Nodes_Lcd_Addrs_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Nodes_Lcd_Addrs_Var_Samp_Fields>;
  readonly variance?: Maybe<Nodes_Lcd_Addrs_Variance_Fields>;
};

/** aggregate fields of "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Nodes_Lcd_Addrs_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Nodes_Lcd_Addrs_Max_Order_By>;
  readonly min?: InputMaybe<Nodes_Lcd_Addrs_Min_Order_By>;
  readonly stddev?: InputMaybe<Nodes_Lcd_Addrs_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Nodes_Lcd_Addrs_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Nodes_Lcd_Addrs_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Nodes_Lcd_Addrs_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Nodes_Lcd_Addrs_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Nodes_Lcd_Addrs_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Nodes_Lcd_Addrs_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nodes_Lcd_Addrs_Avg_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_avg_fields';
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Avg_Order_By = {
  readonly response_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nodes_lcd_addrs". All fields are combined with a logical 'AND'. */
export type Nodes_Lcd_Addrs_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>>>;
  readonly _not?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>>>;
  readonly added_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly ip_or_dns?: InputMaybe<String_Comparison_Exp>;
  readonly is_alive?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_hidden?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_prioritized?: InputMaybe<Boolean_Comparison_Exp>;
  readonly last_active?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly last_checked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly lcd_addr?: InputMaybe<String_Comparison_Exp>;
  readonly response_time?: InputMaybe<Int_Comparison_Exp>;
  readonly zone?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nodes_Lcd_Addrs_Max_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_max_fields';
  readonly added_at?: Maybe<Scalars['timestamp']>;
  readonly ip_or_dns?: Maybe<Scalars['String']>;
  readonly last_active?: Maybe<Scalars['timestamp']>;
  readonly last_checked_at?: Maybe<Scalars['timestamp']>;
  readonly lcd_addr?: Maybe<Scalars['String']>;
  readonly response_time?: Maybe<Scalars['Int']>;
  readonly zone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Max_Order_By = {
  readonly added_at?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly last_active?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly lcd_addr?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nodes_Lcd_Addrs_Min_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_min_fields';
  readonly added_at?: Maybe<Scalars['timestamp']>;
  readonly ip_or_dns?: Maybe<Scalars['String']>;
  readonly last_active?: Maybe<Scalars['timestamp']>;
  readonly last_checked_at?: Maybe<Scalars['timestamp']>;
  readonly lcd_addr?: Maybe<Scalars['String']>;
  readonly response_time?: Maybe<Scalars['Int']>;
  readonly zone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Min_Order_By = {
  readonly added_at?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly last_active?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly lcd_addr?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Order_By = {
  readonly added_at?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly is_alive?: InputMaybe<Order_By>;
  readonly is_hidden?: InputMaybe<Order_By>;
  readonly is_prioritized?: InputMaybe<Order_By>;
  readonly last_active?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly lcd_addr?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Pk_Columns_Input = {
  readonly lcd_addr: Scalars['String'];
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
  readonly __typename?: 'nodes_lcd_addrs_stddev_fields';
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Stddev_Order_By = {
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nodes_Lcd_Addrs_Stddev_Pop_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_stddev_pop_fields';
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Stddev_Pop_Order_By = {
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nodes_Lcd_Addrs_Stddev_Samp_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_stddev_samp_fields';
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Stddev_Samp_Order_By = {
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nodes_Lcd_Addrs_Sum_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_sum_fields';
  readonly response_time?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Sum_Order_By = {
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nodes_Lcd_Addrs_Var_Pop_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_var_pop_fields';
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Var_Pop_Order_By = {
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nodes_Lcd_Addrs_Var_Samp_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_var_samp_fields';
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Var_Samp_Order_By = {
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nodes_Lcd_Addrs_Variance_Fields = {
  readonly __typename?: 'nodes_lcd_addrs_variance_fields';
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nodes_lcd_addrs" */
export type Nodes_Lcd_Addrs_Variance_Order_By = {
  readonly response_time?: InputMaybe<Order_By>;
};

/** columns and relationships of "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs = {
  readonly __typename?: 'nodes_rpc_addrs';
  readonly added_at: Scalars['timestamp'];
  readonly earliest_block_height?: Maybe<Scalars['Int']>;
  readonly ip_or_dns: Scalars['String'];
  readonly is_alive: Scalars['Boolean'];
  readonly is_hidden: Scalars['Boolean'];
  readonly is_prioritized: Scalars['Boolean'];
  readonly last_active?: Maybe<Scalars['timestamp']>;
  readonly last_block_height?: Maybe<Scalars['Int']>;
  readonly last_checked_at: Scalars['timestamp'];
  readonly moniker?: Maybe<Scalars['String']>;
  readonly node_id?: Maybe<Scalars['String']>;
  readonly response_time?: Maybe<Scalars['Int']>;
  readonly rpc_addr: Scalars['String'];
  readonly tx_index?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly zone: Scalars['String'];
};

/** aggregated selection of "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Aggregate = {
  readonly __typename?: 'nodes_rpc_addrs_aggregate';
  readonly aggregate?: Maybe<Nodes_Rpc_Addrs_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Nodes_Rpc_Addrs>;
};

/** aggregate fields of "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Aggregate_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_aggregate_fields';
  readonly avg?: Maybe<Nodes_Rpc_Addrs_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Nodes_Rpc_Addrs_Max_Fields>;
  readonly min?: Maybe<Nodes_Rpc_Addrs_Min_Fields>;
  readonly stddev?: Maybe<Nodes_Rpc_Addrs_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Nodes_Rpc_Addrs_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Nodes_Rpc_Addrs_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Nodes_Rpc_Addrs_Sum_Fields>;
  readonly var_pop?: Maybe<Nodes_Rpc_Addrs_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Nodes_Rpc_Addrs_Var_Samp_Fields>;
  readonly variance?: Maybe<Nodes_Rpc_Addrs_Variance_Fields>;
};

/** aggregate fields of "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Nodes_Rpc_Addrs_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Nodes_Rpc_Addrs_Max_Order_By>;
  readonly min?: InputMaybe<Nodes_Rpc_Addrs_Min_Order_By>;
  readonly stddev?: InputMaybe<Nodes_Rpc_Addrs_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Nodes_Rpc_Addrs_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Nodes_Rpc_Addrs_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Nodes_Rpc_Addrs_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Nodes_Rpc_Addrs_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Nodes_Rpc_Addrs_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Nodes_Rpc_Addrs_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nodes_Rpc_Addrs_Avg_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_avg_fields';
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Avg_Order_By = {
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nodes_rpc_addrs". All fields are combined with a logical 'AND'. */
export type Nodes_Rpc_Addrs_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>>>;
  readonly _not?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>>>;
  readonly added_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly earliest_block_height?: InputMaybe<Int_Comparison_Exp>;
  readonly ip_or_dns?: InputMaybe<String_Comparison_Exp>;
  readonly is_alive?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_hidden?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_prioritized?: InputMaybe<Boolean_Comparison_Exp>;
  readonly last_active?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly last_block_height?: InputMaybe<Int_Comparison_Exp>;
  readonly last_checked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly moniker?: InputMaybe<String_Comparison_Exp>;
  readonly node_id?: InputMaybe<String_Comparison_Exp>;
  readonly response_time?: InputMaybe<Int_Comparison_Exp>;
  readonly rpc_addr?: InputMaybe<String_Comparison_Exp>;
  readonly tx_index?: InputMaybe<String_Comparison_Exp>;
  readonly version?: InputMaybe<String_Comparison_Exp>;
  readonly zone?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nodes_Rpc_Addrs_Max_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_max_fields';
  readonly added_at?: Maybe<Scalars['timestamp']>;
  readonly earliest_block_height?: Maybe<Scalars['Int']>;
  readonly ip_or_dns?: Maybe<Scalars['String']>;
  readonly last_active?: Maybe<Scalars['timestamp']>;
  readonly last_block_height?: Maybe<Scalars['Int']>;
  readonly last_checked_at?: Maybe<Scalars['timestamp']>;
  readonly moniker?: Maybe<Scalars['String']>;
  readonly node_id?: Maybe<Scalars['String']>;
  readonly response_time?: Maybe<Scalars['Int']>;
  readonly rpc_addr?: Maybe<Scalars['String']>;
  readonly tx_index?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly zone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Max_Order_By = {
  readonly added_at?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly last_active?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly moniker?: InputMaybe<Order_By>;
  readonly node_id?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
  readonly rpc_addr?: InputMaybe<Order_By>;
  readonly tx_index?: InputMaybe<Order_By>;
  readonly version?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nodes_Rpc_Addrs_Min_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_min_fields';
  readonly added_at?: Maybe<Scalars['timestamp']>;
  readonly earliest_block_height?: Maybe<Scalars['Int']>;
  readonly ip_or_dns?: Maybe<Scalars['String']>;
  readonly last_active?: Maybe<Scalars['timestamp']>;
  readonly last_block_height?: Maybe<Scalars['Int']>;
  readonly last_checked_at?: Maybe<Scalars['timestamp']>;
  readonly moniker?: Maybe<Scalars['String']>;
  readonly node_id?: Maybe<Scalars['String']>;
  readonly response_time?: Maybe<Scalars['Int']>;
  readonly rpc_addr?: Maybe<Scalars['String']>;
  readonly tx_index?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly zone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Min_Order_By = {
  readonly added_at?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly last_active?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly moniker?: InputMaybe<Order_By>;
  readonly node_id?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
  readonly rpc_addr?: InputMaybe<Order_By>;
  readonly tx_index?: InputMaybe<Order_By>;
  readonly version?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Order_By = {
  readonly added_at?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly ip_or_dns?: InputMaybe<Order_By>;
  readonly is_alive?: InputMaybe<Order_By>;
  readonly is_hidden?: InputMaybe<Order_By>;
  readonly is_prioritized?: InputMaybe<Order_By>;
  readonly last_active?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly moniker?: InputMaybe<Order_By>;
  readonly node_id?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
  readonly rpc_addr?: InputMaybe<Order_By>;
  readonly tx_index?: InputMaybe<Order_By>;
  readonly version?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Pk_Columns_Input = {
  readonly rpc_addr: Scalars['String'];
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
  readonly __typename?: 'nodes_rpc_addrs_stddev_fields';
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Stddev_Order_By = {
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nodes_Rpc_Addrs_Stddev_Pop_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_stddev_pop_fields';
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Stddev_Pop_Order_By = {
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nodes_Rpc_Addrs_Stddev_Samp_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_stddev_samp_fields';
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Stddev_Samp_Order_By = {
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nodes_Rpc_Addrs_Sum_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_sum_fields';
  readonly earliest_block_height?: Maybe<Scalars['Int']>;
  readonly last_block_height?: Maybe<Scalars['Int']>;
  readonly response_time?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Sum_Order_By = {
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nodes_Rpc_Addrs_Var_Pop_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_var_pop_fields';
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Var_Pop_Order_By = {
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nodes_Rpc_Addrs_Var_Samp_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_var_samp_fields';
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Var_Samp_Order_By = {
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nodes_Rpc_Addrs_Variance_Fields = {
  readonly __typename?: 'nodes_rpc_addrs_variance_fields';
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly response_time?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nodes_rpc_addrs" */
export type Nodes_Rpc_Addrs_Variance_Order_By = {
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly response_time?: InputMaybe<Order_By>;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['numeric']>;
  readonly _gt?: InputMaybe<Scalars['numeric']>;
  readonly _gte?: InputMaybe<Scalars['numeric']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['numeric']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['numeric']>;
  readonly _lte?: InputMaybe<Scalars['numeric']>;
  readonly _neq?: InputMaybe<Scalars['numeric']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['numeric']>>;
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
  readonly __typename?: 'query_root';
  /** fetch data from the table: "blocks_log" */
  readonly blocks_log: ReadonlyArray<Blocks_Log>;
  /** fetch data from the table: "blocks_log" using primary key columns */
  readonly blocks_log_by_pk?: Maybe<Blocks_Log>;
  /** fetch data from the table: "channels_stats" */
  readonly channels_stats: ReadonlyArray<Channels_Stats>;
  /** fetch aggregated fields from the table: "channels_stats" */
  readonly channels_stats_aggregate: Channels_Stats_Aggregate;
  /** fetch data from the table: "channels_stats" using primary key columns */
  readonly channels_stats_by_pk?: Maybe<Channels_Stats>;
  /** fetch data from the table: "ft_channel_group_stats" */
  readonly ft_channel_group_stats: ReadonlyArray<Ft_Channel_Group_Stats>;
  /** fetch aggregated fields from the table: "ft_channel_group_stats" */
  readonly ft_channel_group_stats_aggregate: Ft_Channel_Group_Stats_Aggregate;
  /** fetch data from the table: "ft_channel_group_stats" using primary key columns */
  readonly ft_channel_group_stats_by_pk?: Maybe<Ft_Channel_Group_Stats>;
  /** fetch data from the table: "ft_channels_stats" */
  readonly ft_channels_stats: ReadonlyArray<Ft_Channels_Stats>;
  /** fetch aggregated fields from the table: "ft_channels_stats" */
  readonly ft_channels_stats_aggregate: Ft_Channels_Stats_Aggregate;
  /** fetch data from the table: "ft_channels_stats" using primary key columns */
  readonly ft_channels_stats_by_pk?: Maybe<Ft_Channels_Stats>;
  /** fetch data from the table: "headers" */
  readonly headers: ReadonlyArray<Headers>;
  /** fetch aggregated fields from the table: "headers" */
  readonly headers_aggregate: Headers_Aggregate;
  /** fetch data from the table: "headers" using primary key columns */
  readonly headers_by_pk?: Maybe<Headers>;
  /** fetch data from the table: "nodes_addrs" */
  readonly nodes_addrs: ReadonlyArray<Nodes_Addrs>;
  /** fetch aggregated fields from the table: "nodes_addrs" */
  readonly nodes_addrs_aggregate: Nodes_Addrs_Aggregate;
  /** fetch data from the table: "nodes_addrs" using primary key columns */
  readonly nodes_addrs_by_pk?: Maybe<Nodes_Addrs>;
  /** fetch data from the table: "nodes_lcd_addrs" */
  readonly nodes_lcd_addrs: ReadonlyArray<Nodes_Lcd_Addrs>;
  /** fetch aggregated fields from the table: "nodes_lcd_addrs" */
  readonly nodes_lcd_addrs_aggregate: Nodes_Lcd_Addrs_Aggregate;
  /** fetch data from the table: "nodes_lcd_addrs" using primary key columns */
  readonly nodes_lcd_addrs_by_pk?: Maybe<Nodes_Lcd_Addrs>;
  /** fetch data from the table: "nodes_rpc_addrs" */
  readonly nodes_rpc_addrs: ReadonlyArray<Nodes_Rpc_Addrs>;
  /** fetch aggregated fields from the table: "nodes_rpc_addrs" */
  readonly nodes_rpc_addrs_aggregate: Nodes_Rpc_Addrs_Aggregate;
  /** fetch data from the table: "nodes_rpc_addrs" using primary key columns */
  readonly nodes_rpc_addrs_by_pk?: Maybe<Nodes_Rpc_Addrs>;
  /** fetch data from the table: "zone_nodes" */
  readonly zone_nodes: ReadonlyArray<Zone_Nodes>;
  /** fetch aggregated fields from the table: "zone_nodes" */
  readonly zone_nodes_aggregate: Zone_Nodes_Aggregate;
  /** fetch data from the table: "zone_nodes" using primary key columns */
  readonly zone_nodes_by_pk?: Maybe<Zone_Nodes>;
  /** fetch data from the table: "zones_graphs" */
  readonly zones_graphs: ReadonlyArray<Zones_Graphs>;
  /** fetch aggregated fields from the table: "zones_graphs" */
  readonly zones_graphs_aggregate: Zones_Graphs_Aggregate;
  /** fetch data from the table: "zones_graphs" using primary key columns */
  readonly zones_graphs_by_pk?: Maybe<Zones_Graphs>;
  /** fetch data from the table: "zones_stats" */
  readonly zones_stats: ReadonlyArray<Zones_Stats>;
  /** fetch aggregated fields from the table: "zones_stats" */
  readonly zones_stats_aggregate: Zones_Stats_Aggregate;
  /** fetch data from the table: "zones_stats" using primary key columns */
  readonly zones_stats_by_pk?: Maybe<Zones_Stats>;
};

/** query root */
export type Query_RootBlocks_LogArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Blocks_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Blocks_Log_Order_By>>;
  where?: InputMaybe<Blocks_Log_Bool_Exp>;
};

/** query root */
export type Query_RootBlocks_Log_By_PkArgs = {
  zone: Scalars['String'];
};

/** query root */
export type Query_RootChannels_StatsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Channels_Stats_Order_By>>;
  where?: InputMaybe<Channels_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootChannels_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Channels_Stats_Order_By>>;
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
  distinct_on?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootFt_Channel_Group_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Order_By>>;
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
  distinct_on?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channels_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootFt_Channels_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Order_By>>;
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
  distinct_on?: InputMaybe<ReadonlyArray<Headers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Headers_Order_By>>;
  where?: InputMaybe<Headers_Bool_Exp>;
};

/** query root */
export type Query_RootHeaders_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Headers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Headers_Order_By>>;
  where?: InputMaybe<Headers_Bool_Exp>;
};

/** query root */
export type Query_RootHeaders_By_PkArgs = {
  is_mainnet_only: Scalars['Boolean'];
  timeframe: Scalars['Int'];
};

/** query root */
export type Query_RootNodes_AddrsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Addrs_By_PkArgs = {
  ip_or_dns: Scalars['String'];
};

/** query root */
export type Query_RootNodes_Lcd_AddrsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Lcd_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Lcd_Addrs_By_PkArgs = {
  lcd_addr: Scalars['String'];
};

/** query root */
export type Query_RootNodes_Rpc_AddrsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Rpc_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_Rpc_Addrs_By_PkArgs = {
  rpc_addr: Scalars['String'];
};

/** query root */
export type Query_RootZone_NodesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zone_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zone_Nodes_Order_By>>;
  where?: InputMaybe<Zone_Nodes_Bool_Exp>;
};

/** query root */
export type Query_RootZone_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zone_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zone_Nodes_Order_By>>;
  where?: InputMaybe<Zone_Nodes_Bool_Exp>;
};

/** query root */
export type Query_RootZone_Nodes_By_PkArgs = {
  rpc_addr: Scalars['String'];
};

/** query root */
export type Query_RootZones_GraphsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zones_Graphs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zones_Graphs_Order_By>>;
  where?: InputMaybe<Zones_Graphs_Bool_Exp>;
};

/** query root */
export type Query_RootZones_Graphs_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zones_Graphs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zones_Graphs_Order_By>>;
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
  distinct_on?: InputMaybe<ReadonlyArray<Zones_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zones_Stats_Order_By>>;
  where?: InputMaybe<Zones_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootZones_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zones_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zones_Stats_Order_By>>;
  where?: InputMaybe<Zones_Stats_Bool_Exp>;
};

/** query root */
export type Query_RootZones_Stats_By_PkArgs = {
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "blocks_log" */
  readonly blocks_log: ReadonlyArray<Blocks_Log>;
  /** fetch data from the table: "blocks_log" using primary key columns */
  readonly blocks_log_by_pk?: Maybe<Blocks_Log>;
  /** fetch data from the table: "channels_stats" */
  readonly channels_stats: ReadonlyArray<Channels_Stats>;
  /** fetch aggregated fields from the table: "channels_stats" */
  readonly channels_stats_aggregate: Channels_Stats_Aggregate;
  /** fetch data from the table: "channels_stats" using primary key columns */
  readonly channels_stats_by_pk?: Maybe<Channels_Stats>;
  /** fetch data from the table: "ft_channel_group_stats" */
  readonly ft_channel_group_stats: ReadonlyArray<Ft_Channel_Group_Stats>;
  /** fetch aggregated fields from the table: "ft_channel_group_stats" */
  readonly ft_channel_group_stats_aggregate: Ft_Channel_Group_Stats_Aggregate;
  /** fetch data from the table: "ft_channel_group_stats" using primary key columns */
  readonly ft_channel_group_stats_by_pk?: Maybe<Ft_Channel_Group_Stats>;
  /** fetch data from the table: "ft_channels_stats" */
  readonly ft_channels_stats: ReadonlyArray<Ft_Channels_Stats>;
  /** fetch aggregated fields from the table: "ft_channels_stats" */
  readonly ft_channels_stats_aggregate: Ft_Channels_Stats_Aggregate;
  /** fetch data from the table: "ft_channels_stats" using primary key columns */
  readonly ft_channels_stats_by_pk?: Maybe<Ft_Channels_Stats>;
  /** fetch data from the table: "headers" */
  readonly headers: ReadonlyArray<Headers>;
  /** fetch aggregated fields from the table: "headers" */
  readonly headers_aggregate: Headers_Aggregate;
  /** fetch data from the table: "headers" using primary key columns */
  readonly headers_by_pk?: Maybe<Headers>;
  /** fetch data from the table: "nodes_addrs" */
  readonly nodes_addrs: ReadonlyArray<Nodes_Addrs>;
  /** fetch aggregated fields from the table: "nodes_addrs" */
  readonly nodes_addrs_aggregate: Nodes_Addrs_Aggregate;
  /** fetch data from the table: "nodes_addrs" using primary key columns */
  readonly nodes_addrs_by_pk?: Maybe<Nodes_Addrs>;
  /** fetch data from the table: "nodes_lcd_addrs" */
  readonly nodes_lcd_addrs: ReadonlyArray<Nodes_Lcd_Addrs>;
  /** fetch aggregated fields from the table: "nodes_lcd_addrs" */
  readonly nodes_lcd_addrs_aggregate: Nodes_Lcd_Addrs_Aggregate;
  /** fetch data from the table: "nodes_lcd_addrs" using primary key columns */
  readonly nodes_lcd_addrs_by_pk?: Maybe<Nodes_Lcd_Addrs>;
  /** fetch data from the table: "nodes_rpc_addrs" */
  readonly nodes_rpc_addrs: ReadonlyArray<Nodes_Rpc_Addrs>;
  /** fetch aggregated fields from the table: "nodes_rpc_addrs" */
  readonly nodes_rpc_addrs_aggregate: Nodes_Rpc_Addrs_Aggregate;
  /** fetch data from the table: "nodes_rpc_addrs" using primary key columns */
  readonly nodes_rpc_addrs_by_pk?: Maybe<Nodes_Rpc_Addrs>;
  /** fetch data from the table: "zone_nodes" */
  readonly zone_nodes: ReadonlyArray<Zone_Nodes>;
  /** fetch aggregated fields from the table: "zone_nodes" */
  readonly zone_nodes_aggregate: Zone_Nodes_Aggregate;
  /** fetch data from the table: "zone_nodes" using primary key columns */
  readonly zone_nodes_by_pk?: Maybe<Zone_Nodes>;
  /** fetch data from the table: "zones_graphs" */
  readonly zones_graphs: ReadonlyArray<Zones_Graphs>;
  /** fetch aggregated fields from the table: "zones_graphs" */
  readonly zones_graphs_aggregate: Zones_Graphs_Aggregate;
  /** fetch data from the table: "zones_graphs" using primary key columns */
  readonly zones_graphs_by_pk?: Maybe<Zones_Graphs>;
  /** fetch data from the table: "zones_stats" */
  readonly zones_stats: ReadonlyArray<Zones_Stats>;
  /** fetch aggregated fields from the table: "zones_stats" */
  readonly zones_stats_aggregate: Zones_Stats_Aggregate;
  /** fetch data from the table: "zones_stats" using primary key columns */
  readonly zones_stats_by_pk?: Maybe<Zones_Stats>;
};

/** subscription root */
export type Subscription_RootBlocks_LogArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Blocks_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Blocks_Log_Order_By>>;
  where?: InputMaybe<Blocks_Log_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBlocks_Log_By_PkArgs = {
  zone: Scalars['String'];
};

/** subscription root */
export type Subscription_RootChannels_StatsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Channels_Stats_Order_By>>;
  where?: InputMaybe<Channels_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootChannels_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Channels_Stats_Order_By>>;
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
  distinct_on?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channel_Group_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFt_Channel_Group_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Ft_Channel_Group_Stats_Order_By>>;
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
  distinct_on?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Order_By>>;
  where?: InputMaybe<Ft_Channels_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFt_Channels_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Ft_Channels_Stats_Order_By>>;
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
  distinct_on?: InputMaybe<ReadonlyArray<Headers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Headers_Order_By>>;
  where?: InputMaybe<Headers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootHeaders_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Headers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Headers_Order_By>>;
  where?: InputMaybe<Headers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootHeaders_By_PkArgs = {
  is_mainnet_only: Scalars['Boolean'];
  timeframe: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootNodes_AddrsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Addrs_By_PkArgs = {
  ip_or_dns: Scalars['String'];
};

/** subscription root */
export type Subscription_RootNodes_Lcd_AddrsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Lcd_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Lcd_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Lcd_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Lcd_Addrs_By_PkArgs = {
  lcd_addr: Scalars['String'];
};

/** subscription root */
export type Subscription_RootNodes_Rpc_AddrsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Rpc_Addrs_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nodes_Rpc_Addrs_Order_By>>;
  where?: InputMaybe<Nodes_Rpc_Addrs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_Rpc_Addrs_By_PkArgs = {
  rpc_addr: Scalars['String'];
};

/** subscription root */
export type Subscription_RootZone_NodesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zone_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zone_Nodes_Order_By>>;
  where?: InputMaybe<Zone_Nodes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZone_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zone_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zone_Nodes_Order_By>>;
  where?: InputMaybe<Zone_Nodes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZone_Nodes_By_PkArgs = {
  rpc_addr: Scalars['String'];
};

/** subscription root */
export type Subscription_RootZones_GraphsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zones_Graphs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zones_Graphs_Order_By>>;
  where?: InputMaybe<Zones_Graphs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZones_Graphs_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zones_Graphs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zones_Graphs_Order_By>>;
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
  distinct_on?: InputMaybe<ReadonlyArray<Zones_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zones_Stats_Order_By>>;
  where?: InputMaybe<Zones_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZones_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Zones_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Zones_Stats_Order_By>>;
  where?: InputMaybe<Zones_Stats_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootZones_Stats_By_PkArgs = {
  timeframe: Scalars['Int'];
  zone: Scalars['String'];
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamp']>;
  readonly _gt?: InputMaybe<Scalars['timestamp']>;
  readonly _gte?: InputMaybe<Scalars['timestamp']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamp']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['timestamp']>;
  readonly _lte?: InputMaybe<Scalars['timestamp']>;
  readonly _neq?: InputMaybe<Scalars['timestamp']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamp']>>;
};

/** columns and relationships of "zone_nodes" */
export type Zone_Nodes = {
  readonly __typename?: 'zone_nodes';
  readonly connection_duration?: Maybe<Scalars['bigint']>;
  readonly earliest_block_height?: Maybe<Scalars['Int']>;
  readonly ip?: Maybe<Scalars['String']>;
  readonly is_alive: Scalars['Boolean'];
  readonly is_hidden?: Maybe<Scalars['Boolean']>;
  readonly is_hosting_location?: Maybe<Scalars['Boolean']>;
  readonly is_lcd_addr_active?: Maybe<Scalars['Boolean']>;
  readonly is_prioritized?: Maybe<Scalars['Boolean']>;
  readonly is_recv_connection_active?: Maybe<Scalars['Boolean']>;
  readonly is_rpc_addr_active?: Maybe<Scalars['Boolean']>;
  readonly is_send_connection_active?: Maybe<Scalars['Boolean']>;
  readonly last_block_height?: Maybe<Scalars['Int']>;
  readonly last_checked_at: Scalars['timestamp'];
  readonly last_worked_at: Scalars['timestamp'];
  readonly lcd_addr?: Maybe<Scalars['String']>;
  readonly location_city?: Maybe<Scalars['String']>;
  readonly location_continent?: Maybe<Scalars['String']>;
  readonly location_continent_code?: Maybe<Scalars['String']>;
  readonly location_country?: Maybe<Scalars['String']>;
  readonly location_country_code?: Maybe<Scalars['String']>;
  readonly location_district?: Maybe<Scalars['String']>;
  readonly location_isp_name?: Maybe<Scalars['String']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_org?: Maybe<Scalars['String']>;
  readonly location_org_as?: Maybe<Scalars['String']>;
  readonly location_org_as_name?: Maybe<Scalars['String']>;
  readonly location_region?: Maybe<Scalars['String']>;
  readonly location_region_name?: Maybe<Scalars['String']>;
  readonly location_timezone?: Maybe<Scalars['String']>;
  readonly location_timezone_offset?: Maybe<Scalars['Int']>;
  readonly location_zip?: Maybe<Scalars['String']>;
  readonly moniker?: Maybe<Scalars['String']>;
  readonly node_id?: Maybe<Scalars['String']>;
  readonly rpc_addr: Scalars['String'];
  readonly tx_index?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly zone: Scalars['String'];
};

/** aggregated selection of "zone_nodes" */
export type Zone_Nodes_Aggregate = {
  readonly __typename?: 'zone_nodes_aggregate';
  readonly aggregate?: Maybe<Zone_Nodes_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Zone_Nodes>;
};

/** aggregate fields of "zone_nodes" */
export type Zone_Nodes_Aggregate_Fields = {
  readonly __typename?: 'zone_nodes_aggregate_fields';
  readonly avg?: Maybe<Zone_Nodes_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Zone_Nodes_Max_Fields>;
  readonly min?: Maybe<Zone_Nodes_Min_Fields>;
  readonly stddev?: Maybe<Zone_Nodes_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Zone_Nodes_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Zone_Nodes_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Zone_Nodes_Sum_Fields>;
  readonly var_pop?: Maybe<Zone_Nodes_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Zone_Nodes_Var_Samp_Fields>;
  readonly variance?: Maybe<Zone_Nodes_Variance_Fields>;
};

/** aggregate fields of "zone_nodes" */
export type Zone_Nodes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Zone_Nodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "zone_nodes" */
export type Zone_Nodes_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Zone_Nodes_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Zone_Nodes_Max_Order_By>;
  readonly min?: InputMaybe<Zone_Nodes_Min_Order_By>;
  readonly stddev?: InputMaybe<Zone_Nodes_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Zone_Nodes_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Zone_Nodes_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Zone_Nodes_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Zone_Nodes_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Zone_Nodes_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Zone_Nodes_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Zone_Nodes_Avg_Fields = {
  readonly __typename?: 'zone_nodes_avg_fields';
  readonly connection_duration?: Maybe<Scalars['Float']>;
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "zone_nodes" */
export type Zone_Nodes_Avg_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "zone_nodes". All fields are combined with a logical 'AND'. */
export type Zone_Nodes_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Zone_Nodes_Bool_Exp>>>;
  readonly _not?: InputMaybe<Zone_Nodes_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Zone_Nodes_Bool_Exp>>>;
  readonly connection_duration?: InputMaybe<Bigint_Comparison_Exp>;
  readonly earliest_block_height?: InputMaybe<Int_Comparison_Exp>;
  readonly ip?: InputMaybe<String_Comparison_Exp>;
  readonly is_alive?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_hidden?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_hosting_location?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_lcd_addr_active?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_prioritized?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_recv_connection_active?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_rpc_addr_active?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_send_connection_active?: InputMaybe<Boolean_Comparison_Exp>;
  readonly last_block_height?: InputMaybe<Int_Comparison_Exp>;
  readonly last_checked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly last_worked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly lcd_addr?: InputMaybe<String_Comparison_Exp>;
  readonly location_city?: InputMaybe<String_Comparison_Exp>;
  readonly location_continent?: InputMaybe<String_Comparison_Exp>;
  readonly location_continent_code?: InputMaybe<String_Comparison_Exp>;
  readonly location_country?: InputMaybe<String_Comparison_Exp>;
  readonly location_country_code?: InputMaybe<String_Comparison_Exp>;
  readonly location_district?: InputMaybe<String_Comparison_Exp>;
  readonly location_isp_name?: InputMaybe<String_Comparison_Exp>;
  readonly location_lat?: InputMaybe<Float_Comparison_Exp>;
  readonly location_lon?: InputMaybe<Float_Comparison_Exp>;
  readonly location_org?: InputMaybe<String_Comparison_Exp>;
  readonly location_org_as?: InputMaybe<String_Comparison_Exp>;
  readonly location_org_as_name?: InputMaybe<String_Comparison_Exp>;
  readonly location_region?: InputMaybe<String_Comparison_Exp>;
  readonly location_region_name?: InputMaybe<String_Comparison_Exp>;
  readonly location_timezone?: InputMaybe<String_Comparison_Exp>;
  readonly location_timezone_offset?: InputMaybe<Int_Comparison_Exp>;
  readonly location_zip?: InputMaybe<String_Comparison_Exp>;
  readonly moniker?: InputMaybe<String_Comparison_Exp>;
  readonly node_id?: InputMaybe<String_Comparison_Exp>;
  readonly rpc_addr?: InputMaybe<String_Comparison_Exp>;
  readonly tx_index?: InputMaybe<String_Comparison_Exp>;
  readonly version?: InputMaybe<String_Comparison_Exp>;
  readonly zone?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Zone_Nodes_Max_Fields = {
  readonly __typename?: 'zone_nodes_max_fields';
  readonly connection_duration?: Maybe<Scalars['bigint']>;
  readonly earliest_block_height?: Maybe<Scalars['Int']>;
  readonly ip?: Maybe<Scalars['String']>;
  readonly last_block_height?: Maybe<Scalars['Int']>;
  readonly last_checked_at?: Maybe<Scalars['timestamp']>;
  readonly last_worked_at?: Maybe<Scalars['timestamp']>;
  readonly lcd_addr?: Maybe<Scalars['String']>;
  readonly location_city?: Maybe<Scalars['String']>;
  readonly location_continent?: Maybe<Scalars['String']>;
  readonly location_continent_code?: Maybe<Scalars['String']>;
  readonly location_country?: Maybe<Scalars['String']>;
  readonly location_country_code?: Maybe<Scalars['String']>;
  readonly location_district?: Maybe<Scalars['String']>;
  readonly location_isp_name?: Maybe<Scalars['String']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_org?: Maybe<Scalars['String']>;
  readonly location_org_as?: Maybe<Scalars['String']>;
  readonly location_org_as_name?: Maybe<Scalars['String']>;
  readonly location_region?: Maybe<Scalars['String']>;
  readonly location_region_name?: Maybe<Scalars['String']>;
  readonly location_timezone?: Maybe<Scalars['String']>;
  readonly location_timezone_offset?: Maybe<Scalars['Int']>;
  readonly location_zip?: Maybe<Scalars['String']>;
  readonly moniker?: Maybe<Scalars['String']>;
  readonly node_id?: Maybe<Scalars['String']>;
  readonly rpc_addr?: Maybe<Scalars['String']>;
  readonly tx_index?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly zone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "zone_nodes" */
export type Zone_Nodes_Max_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly ip?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly last_worked_at?: InputMaybe<Order_By>;
  readonly lcd_addr?: InputMaybe<Order_By>;
  readonly location_city?: InputMaybe<Order_By>;
  readonly location_continent?: InputMaybe<Order_By>;
  readonly location_continent_code?: InputMaybe<Order_By>;
  readonly location_country?: InputMaybe<Order_By>;
  readonly location_country_code?: InputMaybe<Order_By>;
  readonly location_district?: InputMaybe<Order_By>;
  readonly location_isp_name?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_org?: InputMaybe<Order_By>;
  readonly location_org_as?: InputMaybe<Order_By>;
  readonly location_org_as_name?: InputMaybe<Order_By>;
  readonly location_region?: InputMaybe<Order_By>;
  readonly location_region_name?: InputMaybe<Order_By>;
  readonly location_timezone?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
  readonly location_zip?: InputMaybe<Order_By>;
  readonly moniker?: InputMaybe<Order_By>;
  readonly node_id?: InputMaybe<Order_By>;
  readonly rpc_addr?: InputMaybe<Order_By>;
  readonly tx_index?: InputMaybe<Order_By>;
  readonly version?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Zone_Nodes_Min_Fields = {
  readonly __typename?: 'zone_nodes_min_fields';
  readonly connection_duration?: Maybe<Scalars['bigint']>;
  readonly earliest_block_height?: Maybe<Scalars['Int']>;
  readonly ip?: Maybe<Scalars['String']>;
  readonly last_block_height?: Maybe<Scalars['Int']>;
  readonly last_checked_at?: Maybe<Scalars['timestamp']>;
  readonly last_worked_at?: Maybe<Scalars['timestamp']>;
  readonly lcd_addr?: Maybe<Scalars['String']>;
  readonly location_city?: Maybe<Scalars['String']>;
  readonly location_continent?: Maybe<Scalars['String']>;
  readonly location_continent_code?: Maybe<Scalars['String']>;
  readonly location_country?: Maybe<Scalars['String']>;
  readonly location_country_code?: Maybe<Scalars['String']>;
  readonly location_district?: Maybe<Scalars['String']>;
  readonly location_isp_name?: Maybe<Scalars['String']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_org?: Maybe<Scalars['String']>;
  readonly location_org_as?: Maybe<Scalars['String']>;
  readonly location_org_as_name?: Maybe<Scalars['String']>;
  readonly location_region?: Maybe<Scalars['String']>;
  readonly location_region_name?: Maybe<Scalars['String']>;
  readonly location_timezone?: Maybe<Scalars['String']>;
  readonly location_timezone_offset?: Maybe<Scalars['Int']>;
  readonly location_zip?: Maybe<Scalars['String']>;
  readonly moniker?: Maybe<Scalars['String']>;
  readonly node_id?: Maybe<Scalars['String']>;
  readonly rpc_addr?: Maybe<Scalars['String']>;
  readonly tx_index?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly zone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "zone_nodes" */
export type Zone_Nodes_Min_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly ip?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly last_worked_at?: InputMaybe<Order_By>;
  readonly lcd_addr?: InputMaybe<Order_By>;
  readonly location_city?: InputMaybe<Order_By>;
  readonly location_continent?: InputMaybe<Order_By>;
  readonly location_continent_code?: InputMaybe<Order_By>;
  readonly location_country?: InputMaybe<Order_By>;
  readonly location_country_code?: InputMaybe<Order_By>;
  readonly location_district?: InputMaybe<Order_By>;
  readonly location_isp_name?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_org?: InputMaybe<Order_By>;
  readonly location_org_as?: InputMaybe<Order_By>;
  readonly location_org_as_name?: InputMaybe<Order_By>;
  readonly location_region?: InputMaybe<Order_By>;
  readonly location_region_name?: InputMaybe<Order_By>;
  readonly location_timezone?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
  readonly location_zip?: InputMaybe<Order_By>;
  readonly moniker?: InputMaybe<Order_By>;
  readonly node_id?: InputMaybe<Order_By>;
  readonly rpc_addr?: InputMaybe<Order_By>;
  readonly tx_index?: InputMaybe<Order_By>;
  readonly version?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "zone_nodes" */
export type Zone_Nodes_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly ip?: InputMaybe<Order_By>;
  readonly is_alive?: InputMaybe<Order_By>;
  readonly is_hidden?: InputMaybe<Order_By>;
  readonly is_hosting_location?: InputMaybe<Order_By>;
  readonly is_lcd_addr_active?: InputMaybe<Order_By>;
  readonly is_prioritized?: InputMaybe<Order_By>;
  readonly is_recv_connection_active?: InputMaybe<Order_By>;
  readonly is_rpc_addr_active?: InputMaybe<Order_By>;
  readonly is_send_connection_active?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly last_checked_at?: InputMaybe<Order_By>;
  readonly last_worked_at?: InputMaybe<Order_By>;
  readonly lcd_addr?: InputMaybe<Order_By>;
  readonly location_city?: InputMaybe<Order_By>;
  readonly location_continent?: InputMaybe<Order_By>;
  readonly location_continent_code?: InputMaybe<Order_By>;
  readonly location_country?: InputMaybe<Order_By>;
  readonly location_country_code?: InputMaybe<Order_By>;
  readonly location_district?: InputMaybe<Order_By>;
  readonly location_isp_name?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_org?: InputMaybe<Order_By>;
  readonly location_org_as?: InputMaybe<Order_By>;
  readonly location_org_as_name?: InputMaybe<Order_By>;
  readonly location_region?: InputMaybe<Order_By>;
  readonly location_region_name?: InputMaybe<Order_By>;
  readonly location_timezone?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
  readonly location_zip?: InputMaybe<Order_By>;
  readonly moniker?: InputMaybe<Order_By>;
  readonly node_id?: InputMaybe<Order_By>;
  readonly rpc_addr?: InputMaybe<Order_By>;
  readonly tx_index?: InputMaybe<Order_By>;
  readonly version?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "zone_nodes" */
export type Zone_Nodes_Pk_Columns_Input = {
  readonly rpc_addr: Scalars['String'];
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
  readonly __typename?: 'zone_nodes_stddev_fields';
  readonly connection_duration?: Maybe<Scalars['Float']>;
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "zone_nodes" */
export type Zone_Nodes_Stddev_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Zone_Nodes_Stddev_Pop_Fields = {
  readonly __typename?: 'zone_nodes_stddev_pop_fields';
  readonly connection_duration?: Maybe<Scalars['Float']>;
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "zone_nodes" */
export type Zone_Nodes_Stddev_Pop_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Zone_Nodes_Stddev_Samp_Fields = {
  readonly __typename?: 'zone_nodes_stddev_samp_fields';
  readonly connection_duration?: Maybe<Scalars['Float']>;
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "zone_nodes" */
export type Zone_Nodes_Stddev_Samp_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Zone_Nodes_Sum_Fields = {
  readonly __typename?: 'zone_nodes_sum_fields';
  readonly connection_duration?: Maybe<Scalars['bigint']>;
  readonly earliest_block_height?: Maybe<Scalars['Int']>;
  readonly last_block_height?: Maybe<Scalars['Int']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_timezone_offset?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "zone_nodes" */
export type Zone_Nodes_Sum_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Zone_Nodes_Var_Pop_Fields = {
  readonly __typename?: 'zone_nodes_var_pop_fields';
  readonly connection_duration?: Maybe<Scalars['Float']>;
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "zone_nodes" */
export type Zone_Nodes_Var_Pop_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Zone_Nodes_Var_Samp_Fields = {
  readonly __typename?: 'zone_nodes_var_samp_fields';
  readonly connection_duration?: Maybe<Scalars['Float']>;
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "zone_nodes" */
export type Zone_Nodes_Var_Samp_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Zone_Nodes_Variance_Fields = {
  readonly __typename?: 'zone_nodes_variance_fields';
  readonly connection_duration?: Maybe<Scalars['Float']>;
  readonly earliest_block_height?: Maybe<Scalars['Float']>;
  readonly last_block_height?: Maybe<Scalars['Float']>;
  readonly location_lat?: Maybe<Scalars['Float']>;
  readonly location_lon?: Maybe<Scalars['Float']>;
  readonly location_timezone_offset?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "zone_nodes" */
export type Zone_Nodes_Variance_Order_By = {
  readonly connection_duration?: InputMaybe<Order_By>;
  readonly earliest_block_height?: InputMaybe<Order_By>;
  readonly last_block_height?: InputMaybe<Order_By>;
  readonly location_lat?: InputMaybe<Order_By>;
  readonly location_lon?: InputMaybe<Order_By>;
  readonly location_timezone_offset?: InputMaybe<Order_By>;
};

/** columns and relationships of "zones_graphs" */
export type Zones_Graphs = {
  readonly __typename?: 'zones_graphs';
  readonly channels_cnt_active: Scalars['Int'];
  readonly channels_cnt_open: Scalars['Int'];
  readonly channels_percent_active: Scalars['numeric'];
  readonly ibc_cashflow?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_transfers?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Int']>;
  readonly is_mainnet: Scalars['Boolean'];
  readonly source: Scalars['String'];
  readonly source_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly source_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly source_transfers_period?: Maybe<Scalars['bigint']>;
  readonly target: Scalars['String'];
  readonly target_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly target_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly target_transfers_period?: Maybe<Scalars['bigint']>;
  readonly timeframe: Scalars['Int'];
};

/** aggregated selection of "zones_graphs" */
export type Zones_Graphs_Aggregate = {
  readonly __typename?: 'zones_graphs_aggregate';
  readonly aggregate?: Maybe<Zones_Graphs_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Zones_Graphs>;
};

/** aggregate fields of "zones_graphs" */
export type Zones_Graphs_Aggregate_Fields = {
  readonly __typename?: 'zones_graphs_aggregate_fields';
  readonly avg?: Maybe<Zones_Graphs_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Zones_Graphs_Max_Fields>;
  readonly min?: Maybe<Zones_Graphs_Min_Fields>;
  readonly stddev?: Maybe<Zones_Graphs_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Zones_Graphs_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Zones_Graphs_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Zones_Graphs_Sum_Fields>;
  readonly var_pop?: Maybe<Zones_Graphs_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Zones_Graphs_Var_Samp_Fields>;
  readonly variance?: Maybe<Zones_Graphs_Variance_Fields>;
};

/** aggregate fields of "zones_graphs" */
export type Zones_Graphs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Zones_Graphs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "zones_graphs" */
export type Zones_Graphs_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Zones_Graphs_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Zones_Graphs_Max_Order_By>;
  readonly min?: InputMaybe<Zones_Graphs_Min_Order_By>;
  readonly stddev?: InputMaybe<Zones_Graphs_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Zones_Graphs_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Zones_Graphs_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Zones_Graphs_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Zones_Graphs_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Zones_Graphs_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Zones_Graphs_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Zones_Graphs_Avg_Fields = {
  readonly __typename?: 'zones_graphs_avg_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_percent_active?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly source_transfers_period?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly target_transfers_period?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "zones_graphs" */
export type Zones_Graphs_Avg_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "zones_graphs". All fields are combined with a logical 'AND'. */
export type Zones_Graphs_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Zones_Graphs_Bool_Exp>>>;
  readonly _not?: InputMaybe<Zones_Graphs_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Zones_Graphs_Bool_Exp>>>;
  readonly channels_cnt_active?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_percent_active?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_pending?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_transfers?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_pending?: InputMaybe<Int_Comparison_Exp>;
  readonly is_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  readonly source?: InputMaybe<String_Comparison_Exp>;
  readonly source_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  readonly source_cashflow_in_percent?: InputMaybe<Numeric_Comparison_Exp>;
  readonly source_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  readonly source_cashflow_out_percent?: InputMaybe<Numeric_Comparison_Exp>;
  readonly source_transfers_period?: InputMaybe<Bigint_Comparison_Exp>;
  readonly target?: InputMaybe<String_Comparison_Exp>;
  readonly target_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  readonly target_cashflow_in_percent?: InputMaybe<Numeric_Comparison_Exp>;
  readonly target_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  readonly target_cashflow_out_percent?: InputMaybe<Numeric_Comparison_Exp>;
  readonly target_transfers_period?: InputMaybe<Bigint_Comparison_Exp>;
  readonly timeframe?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Zones_Graphs_Max_Fields = {
  readonly __typename?: 'zones_graphs_max_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_percent_active?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_transfers?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Int']>;
  readonly source?: Maybe<Scalars['String']>;
  readonly source_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly source_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly source_transfers_period?: Maybe<Scalars['bigint']>;
  readonly target?: Maybe<Scalars['String']>;
  readonly target_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly target_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly target_transfers_period?: Maybe<Scalars['bigint']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "zones_graphs" */
export type Zones_Graphs_Max_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Zones_Graphs_Min_Fields = {
  readonly __typename?: 'zones_graphs_min_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_percent_active?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_transfers?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Int']>;
  readonly source?: Maybe<Scalars['String']>;
  readonly source_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly source_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly source_transfers_period?: Maybe<Scalars['bigint']>;
  readonly target?: Maybe<Scalars['String']>;
  readonly target_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly target_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly target_transfers_period?: Maybe<Scalars['bigint']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "zones_graphs" */
export type Zones_Graphs_Min_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "zones_graphs" */
export type Zones_Graphs_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly is_mainnet?: InputMaybe<Order_By>;
  readonly source?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "zones_graphs" */
export type Zones_Graphs_Pk_Columns_Input = {
  readonly source: Scalars['String'];
  readonly target: Scalars['String'];
  readonly timeframe: Scalars['Int'];
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
  readonly __typename?: 'zones_graphs_stddev_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_percent_active?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly source_transfers_period?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly target_transfers_period?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "zones_graphs" */
export type Zones_Graphs_Stddev_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Zones_Graphs_Stddev_Pop_Fields = {
  readonly __typename?: 'zones_graphs_stddev_pop_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_percent_active?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly source_transfers_period?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly target_transfers_period?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "zones_graphs" */
export type Zones_Graphs_Stddev_Pop_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Zones_Graphs_Stddev_Samp_Fields = {
  readonly __typename?: 'zones_graphs_stddev_samp_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_percent_active?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly source_transfers_period?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly target_transfers_period?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "zones_graphs" */
export type Zones_Graphs_Stddev_Samp_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Zones_Graphs_Sum_Fields = {
  readonly __typename?: 'zones_graphs_sum_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_percent_active?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_transfers?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Int']>;
  readonly source_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly source_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly source_transfers_period?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly target_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly target_transfers_period?: Maybe<Scalars['bigint']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "zones_graphs" */
export type Zones_Graphs_Sum_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Zones_Graphs_Var_Pop_Fields = {
  readonly __typename?: 'zones_graphs_var_pop_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_percent_active?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly source_transfers_period?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly target_transfers_period?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "zones_graphs" */
export type Zones_Graphs_Var_Pop_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Zones_Graphs_Var_Samp_Fields = {
  readonly __typename?: 'zones_graphs_var_samp_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_percent_active?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly source_transfers_period?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly target_transfers_period?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "zones_graphs" */
export type Zones_Graphs_Var_Samp_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Zones_Graphs_Variance_Fields = {
  readonly __typename?: 'zones_graphs_variance_fields';
  readonly channels_cnt_active?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_percent_active?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in?: Maybe<Scalars['Float']>;
  readonly source_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out?: Maybe<Scalars['Float']>;
  readonly source_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly source_transfers_period?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in?: Maybe<Scalars['Float']>;
  readonly target_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out?: Maybe<Scalars['Float']>;
  readonly target_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly target_transfers_period?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "zones_graphs" */
export type Zones_Graphs_Variance_Order_By = {
  readonly channels_cnt_active?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_percent_active?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly source_cashflow_in?: InputMaybe<Order_By>;
  readonly source_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly source_cashflow_out?: InputMaybe<Order_By>;
  readonly source_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly source_transfers_period?: InputMaybe<Order_By>;
  readonly target_cashflow_in?: InputMaybe<Order_By>;
  readonly target_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly target_cashflow_out?: InputMaybe<Order_By>;
  readonly target_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly target_transfers_period?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
};

/** columns and relationships of "zones_stats" */
export type Zones_Stats = {
  readonly __typename?: 'zones_stats';
  readonly channels_cnt_active_period: Scalars['Int'];
  readonly channels_cnt_active_period_diff: Scalars['Int'];
  readonly channels_cnt_open: Scalars['Int'];
  readonly channels_num?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period: Scalars['Int'];
  readonly channels_percent_active_period_diff: Scalars['Int'];
  readonly chart: Scalars['jsonb'];
  readonly chart_cashflow?: Maybe<Scalars['jsonb']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_pending: Scalars['bigint'];
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_pending: Scalars['bigint'];
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_pending: Scalars['bigint'];
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_peers?: Maybe<Scalars['Int']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_transfers: Scalars['Int'];
  readonly ibc_transfers_diff: Scalars['Int'];
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_transfers_pending: Scalars['Int'];
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_failed: Scalars['Int'];
  readonly ibc_tx_failed_diff: Scalars['Int'];
  readonly ibc_tx_in: Scalars['Int'];
  readonly ibc_tx_in_diff: Scalars['Int'];
  readonly ibc_tx_in_failed: Scalars['Int'];
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_in_rating: Scalars['Int'];
  readonly ibc_tx_in_rating_diff: Scalars['Int'];
  readonly ibc_tx_in_weight: Scalars['numeric'];
  readonly ibc_tx_out: Scalars['Int'];
  readonly ibc_tx_out_diff: Scalars['Int'];
  readonly ibc_tx_out_failed: Scalars['Int'];
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_out_rating: Scalars['Int'];
  readonly ibc_tx_out_rating_diff: Scalars['Int'];
  readonly ibc_tx_out_weight: Scalars['numeric'];
  readonly is_zone_mainnet: Scalars['Boolean'];
  readonly is_zone_new: Scalars['Boolean'];
  readonly is_zone_up_to_date?: Maybe<Scalars['Boolean']>;
  readonly relations_cnt_open: Scalars['Int'];
  readonly success_rate?: Maybe<Scalars['numeric']>;
  readonly success_rate_mainnet?: Maybe<Scalars['numeric']>;
  readonly timeframe: Scalars['Int'];
  readonly total_active_addresses?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_diff: Scalars['Int'];
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_active_addresses_rating: Scalars['Int'];
  readonly total_active_addresses_rating_diff: Scalars['Int'];
  readonly total_active_addresses_weight: Scalars['numeric'];
  readonly total_coin_turnover_amount: Scalars['numeric'];
  readonly total_coin_turnover_amount_diff: Scalars['numeric'];
  readonly total_ibc_txs: Scalars['Int'];
  readonly total_ibc_txs_diff: Scalars['Int'];
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_ibc_txs_rating: Scalars['Int'];
  readonly total_ibc_txs_rating_diff: Scalars['Int'];
  readonly total_ibc_txs_weight: Scalars['numeric'];
  readonly total_txs?: Maybe<Scalars['Int']>;
  readonly total_txs_diff: Scalars['Int'];
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_txs_rating: Scalars['Int'];
  readonly total_txs_rating_diff: Scalars['Int'];
  readonly total_txs_weight: Scalars['numeric'];
  readonly website?: Maybe<Scalars['String']>;
  readonly zone: Scalars['String'];
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name: Scalars['String'];
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
  readonly __typename?: 'zones_stats_aggregate';
  readonly aggregate?: Maybe<Zones_Stats_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Zones_Stats>;
};

/** aggregate fields of "zones_stats" */
export type Zones_Stats_Aggregate_Fields = {
  readonly __typename?: 'zones_stats_aggregate_fields';
  readonly avg?: Maybe<Zones_Stats_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Zones_Stats_Max_Fields>;
  readonly min?: Maybe<Zones_Stats_Min_Fields>;
  readonly stddev?: Maybe<Zones_Stats_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Zones_Stats_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Zones_Stats_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Zones_Stats_Sum_Fields>;
  readonly var_pop?: Maybe<Zones_Stats_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Zones_Stats_Var_Samp_Fields>;
  readonly variance?: Maybe<Zones_Stats_Variance_Fields>;
};

/** aggregate fields of "zones_stats" */
export type Zones_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Zones_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "zones_stats" */
export type Zones_Stats_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Zones_Stats_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Zones_Stats_Max_Order_By>;
  readonly min?: InputMaybe<Zones_Stats_Min_Order_By>;
  readonly stddev?: InputMaybe<Zones_Stats_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Zones_Stats_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Zones_Stats_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Zones_Stats_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Zones_Stats_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Zones_Stats_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Zones_Stats_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Zones_Stats_Avg_Fields = {
  readonly __typename?: 'zones_stats_avg_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_num?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  readonly ibc_peers?: Maybe<Scalars['Float']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_percent?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly success_rate?: Maybe<Scalars['Float']>;
  readonly success_rate_mainnet?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly total_active_addresses?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  readonly total_txs?: Maybe<Scalars['Float']>;
  readonly total_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "zones_stats" */
export type Zones_Stats_Avg_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "zones_stats". All fields are combined with a logical 'AND'. */
export type Zones_Stats_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Zones_Stats_Bool_Exp>>>;
  readonly _not?: InputMaybe<Zones_Stats_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Zones_Stats_Bool_Exp>>>;
  readonly channels_cnt_active_period?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_num?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_percent_active_period?: InputMaybe<Int_Comparison_Exp>;
  readonly channels_percent_active_period_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly chart?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly chart_cashflow?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly ibc_active_addresses?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_active_addresses_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_active_addresses_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_active_addresses_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_out?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_cashflow_pending?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Bigint_Comparison_Exp>;
  readonly ibc_cashflow_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_cashflow_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_peers?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_peers_mainnet?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_percent?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_transfers?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_mainnet?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_transfers_pending?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_transfers_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_tx_failed?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_failed_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_in?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_in_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_in_failed?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_tx_in_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_in_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_tx_out?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_out_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_out_failed?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly ibc_tx_out_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly ibc_tx_out_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly is_zone_mainnet?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_zone_new?: InputMaybe<Boolean_Comparison_Exp>;
  readonly is_zone_up_to_date?: InputMaybe<Boolean_Comparison_Exp>;
  readonly relations_cnt_open?: InputMaybe<Int_Comparison_Exp>;
  readonly success_rate?: InputMaybe<Numeric_Comparison_Exp>;
  readonly success_rate_mainnet?: InputMaybe<Numeric_Comparison_Exp>;
  readonly timeframe?: InputMaybe<Int_Comparison_Exp>;
  readonly total_active_addresses?: InputMaybe<Int_Comparison_Exp>;
  readonly total_active_addresses_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly total_active_addresses_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_active_addresses_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly total_coin_turnover_amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Numeric_Comparison_Exp>;
  readonly total_ibc_txs?: InputMaybe<Int_Comparison_Exp>;
  readonly total_ibc_txs_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly total_ibc_txs_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_ibc_txs_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly total_txs?: InputMaybe<Int_Comparison_Exp>;
  readonly total_txs_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_txs_mainnet_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_txs_mainnet_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly total_txs_rating?: InputMaybe<Int_Comparison_Exp>;
  readonly total_txs_rating_diff?: InputMaybe<Int_Comparison_Exp>;
  readonly total_txs_weight?: InputMaybe<Numeric_Comparison_Exp>;
  readonly website?: InputMaybe<String_Comparison_Exp>;
  readonly zone?: InputMaybe<String_Comparison_Exp>;
  readonly zone_label_url?: InputMaybe<String_Comparison_Exp>;
  readonly zone_label_url2?: InputMaybe<String_Comparison_Exp>;
  readonly zone_readable_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Zones_Stats_Max_Fields = {
  readonly __typename?: 'zones_stats_max_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Int']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_num?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_peers?: Maybe<Scalars['Int']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_transfers?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_out?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['numeric']>;
  readonly relations_cnt_open?: Maybe<Scalars['Int']>;
  readonly success_rate?: Maybe<Scalars['numeric']>;
  readonly success_rate_mainnet?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly total_active_addresses?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['numeric']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['numeric']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['numeric']>;
  readonly total_ibc_txs?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['numeric']>;
  readonly total_txs?: Maybe<Scalars['Int']>;
  readonly total_txs_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_txs_rating?: Maybe<Scalars['Int']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_weight?: Maybe<Scalars['numeric']>;
  readonly website?: Maybe<Scalars['String']>;
  readonly zone?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "zones_stats" */
export type Zones_Stats_Max_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
  readonly website?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Zones_Stats_Min_Fields = {
  readonly __typename?: 'zones_stats_min_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Int']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_num?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_peers?: Maybe<Scalars['Int']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_transfers?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_out?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['numeric']>;
  readonly relations_cnt_open?: Maybe<Scalars['Int']>;
  readonly success_rate?: Maybe<Scalars['numeric']>;
  readonly success_rate_mainnet?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly total_active_addresses?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['numeric']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['numeric']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['numeric']>;
  readonly total_ibc_txs?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['numeric']>;
  readonly total_txs?: Maybe<Scalars['Int']>;
  readonly total_txs_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_txs_rating?: Maybe<Scalars['Int']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_weight?: Maybe<Scalars['numeric']>;
  readonly website?: Maybe<Scalars['String']>;
  readonly zone?: Maybe<Scalars['String']>;
  readonly zone_label_url?: Maybe<Scalars['String']>;
  readonly zone_label_url2?: Maybe<Scalars['String']>;
  readonly zone_readable_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "zones_stats" */
export type Zones_Stats_Min_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
  readonly website?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "zones_stats" */
export type Zones_Stats_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly chart?: InputMaybe<Order_By>;
  readonly chart_cashflow?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly is_zone_mainnet?: InputMaybe<Order_By>;
  readonly is_zone_new?: InputMaybe<Order_By>;
  readonly is_zone_up_to_date?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
  readonly website?: InputMaybe<Order_By>;
  readonly zone?: InputMaybe<Order_By>;
  readonly zone_label_url?: InputMaybe<Order_By>;
  readonly zone_label_url2?: InputMaybe<Order_By>;
  readonly zone_readable_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "zones_stats" */
export type Zones_Stats_Pk_Columns_Input = {
  readonly timeframe: Scalars['Int'];
  readonly zone: Scalars['String'];
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
  readonly __typename?: 'zones_stats_stddev_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_num?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  readonly ibc_peers?: Maybe<Scalars['Float']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_percent?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly success_rate?: Maybe<Scalars['Float']>;
  readonly success_rate_mainnet?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly total_active_addresses?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  readonly total_txs?: Maybe<Scalars['Float']>;
  readonly total_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "zones_stats" */
export type Zones_Stats_Stddev_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Zones_Stats_Stddev_Pop_Fields = {
  readonly __typename?: 'zones_stats_stddev_pop_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_num?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  readonly ibc_peers?: Maybe<Scalars['Float']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_percent?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly success_rate?: Maybe<Scalars['Float']>;
  readonly success_rate_mainnet?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly total_active_addresses?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  readonly total_txs?: Maybe<Scalars['Float']>;
  readonly total_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "zones_stats" */
export type Zones_Stats_Stddev_Pop_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Zones_Stats_Stddev_Samp_Fields = {
  readonly __typename?: 'zones_stats_stddev_samp_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_num?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  readonly ibc_peers?: Maybe<Scalars['Float']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_percent?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly success_rate?: Maybe<Scalars['Float']>;
  readonly success_rate_mainnet?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly total_active_addresses?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  readonly total_txs?: Maybe<Scalars['Float']>;
  readonly total_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "zones_stats" */
export type Zones_Stats_Stddev_Samp_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Zones_Stats_Sum_Fields = {
  readonly __typename?: 'zones_stats_sum_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Int']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Int']>;
  readonly channels_cnt_open?: Maybe<Scalars['Int']>;
  readonly channels_num?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Int']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['bigint']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_peers?: Maybe<Scalars['Int']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_percent?: Maybe<Scalars['numeric']>;
  readonly ibc_transfers?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_out?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Int']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['numeric']>;
  readonly relations_cnt_open?: Maybe<Scalars['Int']>;
  readonly success_rate?: Maybe<Scalars['numeric']>;
  readonly success_rate_mainnet?: Maybe<Scalars['numeric']>;
  readonly timeframe?: Maybe<Scalars['Int']>;
  readonly total_active_addresses?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['numeric']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['numeric']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['numeric']>;
  readonly total_ibc_txs?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['numeric']>;
  readonly total_txs?: Maybe<Scalars['Int']>;
  readonly total_txs_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['numeric']>;
  readonly total_txs_rating?: Maybe<Scalars['Int']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Int']>;
  readonly total_txs_weight?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "zones_stats" */
export type Zones_Stats_Sum_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Zones_Stats_Var_Pop_Fields = {
  readonly __typename?: 'zones_stats_var_pop_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_num?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  readonly ibc_peers?: Maybe<Scalars['Float']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_percent?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly success_rate?: Maybe<Scalars['Float']>;
  readonly success_rate_mainnet?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly total_active_addresses?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  readonly total_txs?: Maybe<Scalars['Float']>;
  readonly total_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "zones_stats" */
export type Zones_Stats_Var_Pop_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Zones_Stats_Var_Samp_Fields = {
  readonly __typename?: 'zones_stats_var_samp_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_num?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  readonly ibc_peers?: Maybe<Scalars['Float']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_percent?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly success_rate?: Maybe<Scalars['Float']>;
  readonly success_rate_mainnet?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly total_active_addresses?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  readonly total_txs?: Maybe<Scalars['Float']>;
  readonly total_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "zones_stats" */
export type Zones_Stats_Var_Samp_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Zones_Stats_Variance_Fields = {
  readonly __typename?: 'zones_stats_variance_fields';
  readonly channels_cnt_active_period?: Maybe<Scalars['Float']>;
  readonly channels_cnt_active_period_diff?: Maybe<Scalars['Float']>;
  readonly channels_cnt_open?: Maybe<Scalars['Float']>;
  readonly channels_num?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period?: Maybe<Scalars['Float']>;
  readonly channels_percent_active_period_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_percent_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_out_weight?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_cashflow_weight?: Maybe<Scalars['Float']>;
  readonly ibc_peers?: Maybe<Scalars['Float']>;
  readonly ibc_peers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_percent?: Maybe<Scalars['Float']>;
  readonly ibc_transfers?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_pending_mainnet?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_transfers_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_failed_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_in_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_failed?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_rating_diff?: Maybe<Scalars['Float']>;
  readonly ibc_tx_out_weight?: Maybe<Scalars['Float']>;
  readonly relations_cnt_open?: Maybe<Scalars['Float']>;
  readonly success_rate?: Maybe<Scalars['Float']>;
  readonly success_rate_mainnet?: Maybe<Scalars['Float']>;
  readonly timeframe?: Maybe<Scalars['Float']>;
  readonly total_active_addresses?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_active_addresses_weight?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount?: Maybe<Scalars['Float']>;
  readonly total_coin_turnover_amount_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_ibc_txs_weight?: Maybe<Scalars['Float']>;
  readonly total_txs?: Maybe<Scalars['Float']>;
  readonly total_txs_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_mainnet_weight?: Maybe<Scalars['Float']>;
  readonly total_txs_rating?: Maybe<Scalars['Float']>;
  readonly total_txs_rating_diff?: Maybe<Scalars['Float']>;
  readonly total_txs_weight?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "zones_stats" */
export type Zones_Stats_Variance_Order_By = {
  readonly channels_cnt_active_period?: InputMaybe<Order_By>;
  readonly channels_cnt_active_period_diff?: InputMaybe<Order_By>;
  readonly channels_cnt_open?: InputMaybe<Order_By>;
  readonly channels_num?: InputMaybe<Order_By>;
  readonly channels_percent_active_period?: InputMaybe<Order_By>;
  readonly channels_percent_active_period_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_active_addresses_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow?: InputMaybe<Order_By>;
  readonly ibc_cashflow_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_in_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_percent_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_out_weight?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending?: InputMaybe<Order_By>;
  readonly ibc_cashflow_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating?: InputMaybe<Order_By>;
  readonly ibc_cashflow_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_cashflow_weight?: InputMaybe<Order_By>;
  readonly ibc_peers?: InputMaybe<Order_By>;
  readonly ibc_peers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_percent?: InputMaybe<Order_By>;
  readonly ibc_transfers?: InputMaybe<Order_By>;
  readonly ibc_transfers_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending?: InputMaybe<Order_By>;
  readonly ibc_transfers_pending_mainnet?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating?: InputMaybe<Order_By>;
  readonly ibc_transfers_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_transfers_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_failed_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in?: InputMaybe<Order_By>;
  readonly ibc_tx_in_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_in_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_in_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out?: InputMaybe<Order_By>;
  readonly ibc_tx_out_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_failed?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_mainnet_weight?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating?: InputMaybe<Order_By>;
  readonly ibc_tx_out_rating_diff?: InputMaybe<Order_By>;
  readonly ibc_tx_out_weight?: InputMaybe<Order_By>;
  readonly relations_cnt_open?: InputMaybe<Order_By>;
  readonly success_rate?: InputMaybe<Order_By>;
  readonly success_rate_mainnet?: InputMaybe<Order_By>;
  readonly timeframe?: InputMaybe<Order_By>;
  readonly total_active_addresses?: InputMaybe<Order_By>;
  readonly total_active_addresses_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating?: InputMaybe<Order_By>;
  readonly total_active_addresses_rating_diff?: InputMaybe<Order_By>;
  readonly total_active_addresses_weight?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount?: InputMaybe<Order_By>;
  readonly total_coin_turnover_amount_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs?: InputMaybe<Order_By>;
  readonly total_ibc_txs_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating?: InputMaybe<Order_By>;
  readonly total_ibc_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_ibc_txs_weight?: InputMaybe<Order_By>;
  readonly total_txs?: InputMaybe<Order_By>;
  readonly total_txs_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_mainnet_weight?: InputMaybe<Order_By>;
  readonly total_txs_rating?: InputMaybe<Order_By>;
  readonly total_txs_rating_diff?: InputMaybe<Order_By>;
  readonly total_txs_weight?: InputMaybe<Order_By>;
};
