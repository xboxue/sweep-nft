import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "nft_attribute" */
  delete_nft_attribute?: Maybe<Nft_Attribute_Mutation_Response>;
  /** delete single row from the table: "nft_attribute" */
  delete_nft_attribute_by_pk?: Maybe<Nft_Attribute>;
  /** delete data from the table: "nft_metadata" */
  delete_nft_metadata?: Maybe<Nft_Metadata_Mutation_Response>;
  /** delete single row from the table: "nft_metadata" */
  delete_nft_metadata_by_pk?: Maybe<Nft_Metadata>;
  /** delete data from the table: "project" */
  delete_project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<Project>;
  /** insert data into the table: "nft_attribute" */
  insert_nft_attribute?: Maybe<Nft_Attribute_Mutation_Response>;
  /** insert a single row into the table: "nft_attribute" */
  insert_nft_attribute_one?: Maybe<Nft_Attribute>;
  /** insert data into the table: "nft_metadata" */
  insert_nft_metadata?: Maybe<Nft_Metadata_Mutation_Response>;
  /** insert a single row into the table: "nft_metadata" */
  insert_nft_metadata_one?: Maybe<Nft_Metadata>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** update data of the table: "nft_attribute" */
  update_nft_attribute?: Maybe<Nft_Attribute_Mutation_Response>;
  /** update single row of the table: "nft_attribute" */
  update_nft_attribute_by_pk?: Maybe<Nft_Attribute>;
  /** update data of the table: "nft_metadata" */
  update_nft_metadata?: Maybe<Nft_Metadata_Mutation_Response>;
  /** update single row of the table: "nft_metadata" */
  update_nft_metadata_by_pk?: Maybe<Nft_Metadata>;
  /** update data of the table: "project" */
  update_project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<Project>;
};


/** mutation root */
export type Mutation_RootDelete_Nft_AttributeArgs = {
  where: Nft_Attribute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_Attribute_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Nft_MetadataArgs = {
  where: Nft_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_Metadata_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Nft_AttributeArgs = {
  objects: Array<Nft_Attribute_Insert_Input>;
  on_conflict?: InputMaybe<Nft_Attribute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Attribute_OneArgs = {
  object: Nft_Attribute_Insert_Input;
  on_conflict?: InputMaybe<Nft_Attribute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_MetadataArgs = {
  objects: Array<Nft_Metadata_Insert_Input>;
  on_conflict?: InputMaybe<Nft_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Metadata_OneArgs = {
  object: Nft_Metadata_Insert_Input;
  on_conflict?: InputMaybe<Nft_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_AttributeArgs = {
  _set?: InputMaybe<Nft_Attribute_Set_Input>;
  where: Nft_Attribute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Attribute_By_PkArgs = {
  _set?: InputMaybe<Nft_Attribute_Set_Input>;
  pk_columns: Nft_Attribute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_MetadataArgs = {
  _inc?: InputMaybe<Nft_Metadata_Inc_Input>;
  _set?: InputMaybe<Nft_Metadata_Set_Input>;
  where: Nft_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Metadata_By_PkArgs = {
  _inc?: InputMaybe<Nft_Metadata_Inc_Input>;
  _set?: InputMaybe<Nft_Metadata_Set_Input>;
  pk_columns: Nft_Metadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};

/** columns and relationships of "nft_attribute" */
export type Nft_Attribute = {
  __typename?: 'nft_attribute';
  created_at: Scalars['timestamptz'];
  display_type?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  nft_metadata_id: Scalars['uuid'];
  /** An object relationship */
  nft_metadatum: Nft_Metadata;
  trait_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** aggregated selection of "nft_attribute" */
export type Nft_Attribute_Aggregate = {
  __typename?: 'nft_attribute_aggregate';
  aggregate?: Maybe<Nft_Attribute_Aggregate_Fields>;
  nodes: Array<Nft_Attribute>;
};

/** aggregate fields of "nft_attribute" */
export type Nft_Attribute_Aggregate_Fields = {
  __typename?: 'nft_attribute_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Nft_Attribute_Max_Fields>;
  min?: Maybe<Nft_Attribute_Min_Fields>;
};


/** aggregate fields of "nft_attribute" */
export type Nft_Attribute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Attribute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft_attribute" */
export type Nft_Attribute_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Attribute_Max_Order_By>;
  min?: InputMaybe<Nft_Attribute_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nft_attribute" */
export type Nft_Attribute_Arr_Rel_Insert_Input = {
  data: Array<Nft_Attribute_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nft_Attribute_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nft_attribute". All fields are combined with a logical 'AND'. */
export type Nft_Attribute_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Attribute_Bool_Exp>>;
  _not?: InputMaybe<Nft_Attribute_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Attribute_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nft_metadata_id?: InputMaybe<Uuid_Comparison_Exp>;
  nft_metadatum?: InputMaybe<Nft_Metadata_Bool_Exp>;
  trait_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nft_attribute" */
export enum Nft_Attribute_Constraint {
  /** unique or primary key constraint */
  NftAttributePkey = 'nft_attribute_pkey'
}

/** input type for inserting data into table "nft_attribute" */
export type Nft_Attribute_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  nft_metadata_id?: InputMaybe<Scalars['uuid']>;
  nft_metadatum?: InputMaybe<Nft_Metadata_Obj_Rel_Insert_Input>;
  trait_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Nft_Attribute_Max_Fields = {
  __typename?: 'nft_attribute_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nft_metadata_id?: Maybe<Scalars['uuid']>;
  trait_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nft_attribute" */
export type Nft_Attribute_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  display_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nft_metadata_id?: InputMaybe<Order_By>;
  trait_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Attribute_Min_Fields = {
  __typename?: 'nft_attribute_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nft_metadata_id?: Maybe<Scalars['uuid']>;
  trait_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nft_attribute" */
export type Nft_Attribute_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  display_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nft_metadata_id?: InputMaybe<Order_By>;
  trait_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nft_attribute" */
export type Nft_Attribute_Mutation_Response = {
  __typename?: 'nft_attribute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft_Attribute>;
};

/** on_conflict condition type for table "nft_attribute" */
export type Nft_Attribute_On_Conflict = {
  constraint: Nft_Attribute_Constraint;
  update_columns?: Array<Nft_Attribute_Update_Column>;
  where?: InputMaybe<Nft_Attribute_Bool_Exp>;
};

/** Ordering options when selecting data from "nft_attribute". */
export type Nft_Attribute_Order_By = {
  created_at?: InputMaybe<Order_By>;
  display_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nft_metadata_id?: InputMaybe<Order_By>;
  nft_metadatum?: InputMaybe<Nft_Metadata_Order_By>;
  trait_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_attribute */
export type Nft_Attribute_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "nft_attribute" */
export enum Nft_Attribute_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayType = 'display_type',
  /** column name */
  Id = 'id',
  /** column name */
  NftMetadataId = 'nft_metadata_id',
  /** column name */
  TraitType = 'trait_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "nft_attribute" */
export type Nft_Attribute_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  nft_metadata_id?: InputMaybe<Scalars['uuid']>;
  trait_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "nft_attribute" */
export enum Nft_Attribute_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayType = 'display_type',
  /** column name */
  Id = 'id',
  /** column name */
  NftMetadataId = 'nft_metadata_id',
  /** column name */
  TraitType = 'trait_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "nft_metadata" */
export type Nft_Metadata = {
  __typename?: 'nft_metadata';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  nft_attributes: Array<Nft_Attribute>;
  /** An aggregate relationship */
  nft_attributes_aggregate: Nft_Attribute_Aggregate;
  /** An object relationship */
  project?: Maybe<Project>;
  project_id?: Maybe<Scalars['uuid']>;
  token_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "nft_metadata" */
export type Nft_MetadataNft_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attribute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Attribute_Order_By>>;
  where?: InputMaybe<Nft_Attribute_Bool_Exp>;
};


/** columns and relationships of "nft_metadata" */
export type Nft_MetadataNft_Attributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attribute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Attribute_Order_By>>;
  where?: InputMaybe<Nft_Attribute_Bool_Exp>;
};

/** aggregated selection of "nft_metadata" */
export type Nft_Metadata_Aggregate = {
  __typename?: 'nft_metadata_aggregate';
  aggregate?: Maybe<Nft_Metadata_Aggregate_Fields>;
  nodes: Array<Nft_Metadata>;
};

/** aggregate fields of "nft_metadata" */
export type Nft_Metadata_Aggregate_Fields = {
  __typename?: 'nft_metadata_aggregate_fields';
  avg?: Maybe<Nft_Metadata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nft_Metadata_Max_Fields>;
  min?: Maybe<Nft_Metadata_Min_Fields>;
  stddev?: Maybe<Nft_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Metadata_Sum_Fields>;
  var_pop?: Maybe<Nft_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Nft_Metadata_Variance_Fields>;
};


/** aggregate fields of "nft_metadata" */
export type Nft_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft_metadata" */
export type Nft_Metadata_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_Metadata_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Metadata_Max_Order_By>;
  min?: InputMaybe<Nft_Metadata_Min_Order_By>;
  stddev?: InputMaybe<Nft_Metadata_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_Metadata_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_Metadata_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_Metadata_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_Metadata_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_Metadata_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_Metadata_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nft_metadata" */
export type Nft_Metadata_Arr_Rel_Insert_Input = {
  data: Array<Nft_Metadata_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nft_Metadata_On_Conflict>;
};

/** aggregate avg on columns */
export type Nft_Metadata_Avg_Fields = {
  __typename?: 'nft_metadata_avg_fields';
  token_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nft_metadata" */
export type Nft_Metadata_Avg_Order_By = {
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_metadata". All fields are combined with a logical 'AND'. */
export type Nft_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Nft_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Metadata_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  external_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nft_attributes?: InputMaybe<Nft_Attribute_Bool_Exp>;
  project?: InputMaybe<Project_Bool_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  token_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nft_metadata" */
export enum Nft_Metadata_Constraint {
  /** unique or primary key constraint */
  NftMetadataPkey = 'nft_metadata_pkey'
}

/** input type for incrementing numeric columns in table "nft_metadata" */
export type Nft_Metadata_Inc_Input = {
  token_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nft_metadata" */
export type Nft_Metadata_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  external_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nft_attributes?: InputMaybe<Nft_Attribute_Arr_Rel_Insert_Input>;
  project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['uuid']>;
  token_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Nft_Metadata_Max_Fields = {
  __typename?: 'nft_metadata_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  token_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "nft_metadata" */
export type Nft_Metadata_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  external_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Metadata_Min_Fields = {
  __typename?: 'nft_metadata_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  token_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "nft_metadata" */
export type Nft_Metadata_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  external_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nft_metadata" */
export type Nft_Metadata_Mutation_Response = {
  __typename?: 'nft_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft_Metadata>;
};

/** input type for inserting object relation for remote table "nft_metadata" */
export type Nft_Metadata_Obj_Rel_Insert_Input = {
  data: Nft_Metadata_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nft_Metadata_On_Conflict>;
};

/** on_conflict condition type for table "nft_metadata" */
export type Nft_Metadata_On_Conflict = {
  constraint: Nft_Metadata_Constraint;
  update_columns?: Array<Nft_Metadata_Update_Column>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "nft_metadata". */
export type Nft_Metadata_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  external_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nft_attributes_aggregate?: InputMaybe<Nft_Attribute_Aggregate_Order_By>;
  project?: InputMaybe<Project_Order_By>;
  project_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_metadata */
export type Nft_Metadata_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "nft_metadata" */
export enum Nft_Metadata_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ExternalUrl = 'external_url',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nft_metadata" */
export type Nft_Metadata_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  external_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  token_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Nft_Metadata_Stddev_Fields = {
  __typename?: 'nft_metadata_stddev_fields';
  token_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nft_metadata" */
export type Nft_Metadata_Stddev_Order_By = {
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_Metadata_Stddev_Pop_Fields = {
  __typename?: 'nft_metadata_stddev_pop_fields';
  token_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nft_metadata" */
export type Nft_Metadata_Stddev_Pop_Order_By = {
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_Metadata_Stddev_Samp_Fields = {
  __typename?: 'nft_metadata_stddev_samp_fields';
  token_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nft_metadata" */
export type Nft_Metadata_Stddev_Samp_Order_By = {
  token_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nft_Metadata_Sum_Fields = {
  __typename?: 'nft_metadata_sum_fields';
  token_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nft_metadata" */
export type Nft_Metadata_Sum_Order_By = {
  token_id?: InputMaybe<Order_By>;
};

/** update columns of table "nft_metadata" */
export enum Nft_Metadata_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ExternalUrl = 'external_url',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Nft_Metadata_Var_Pop_Fields = {
  __typename?: 'nft_metadata_var_pop_fields';
  token_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nft_metadata" */
export type Nft_Metadata_Var_Pop_Order_By = {
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_Metadata_Var_Samp_Fields = {
  __typename?: 'nft_metadata_var_samp_fields';
  token_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nft_metadata" */
export type Nft_Metadata_Var_Samp_Order_By = {
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_Metadata_Variance_Fields = {
  __typename?: 'nft_metadata_variance_fields';
  token_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nft_metadata" */
export type Nft_Metadata_Variance_Order_By = {
  token_id?: InputMaybe<Order_By>;
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

/** columns and relationships of "project" */
export type Project = {
  __typename?: 'project';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  metadata_cid?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  nft_metadata: Array<Nft_Metadata>;
  /** An aggregate relationship */
  nft_metadata_aggregate: Nft_Metadata_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['String'];
};


/** columns and relationships of "project" */
export type ProjectNft_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


/** columns and relationships of "project" */
export type ProjectNft_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};

/** aggregated selection of "project" */
export type Project_Aggregate = {
  __typename?: 'project_aggregate';
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

/** aggregate fields of "project" */
export type Project_Aggregate_Fields = {
  __typename?: 'project_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
};


/** aggregate fields of "project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata_cid?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nft_metadata?: InputMaybe<Nft_Metadata_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project" */
export enum Project_Constraint {
  /** unique or primary key constraint */
  ProjectIdKey = 'project_id_key',
  /** unique or primary key constraint */
  ProjectPkey = 'project_pkey'
}

/** input type for inserting data into table "project" */
export type Project_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata_cid?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nft_metadata?: InputMaybe<Nft_Metadata_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  __typename?: 'project_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadata_cid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  __typename?: 'project_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadata_cid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "project" */
export type Project_Mutation_Response = {
  __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** input type for inserting object relation for remote table "project" */
export type Project_Obj_Rel_Insert_Input = {
  data: Project_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** on_conflict condition type for table "project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "project". */
export type Project_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata_cid?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nft_metadata_aggregate?: InputMaybe<Nft_Metadata_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project */
export type Project_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "project" */
export enum Project_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataCid = 'metadata_cid',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "project" */
export type Project_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata_cid?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "project" */
export enum Project_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataCid = 'metadata_cid',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "nft_attribute" */
  nft_attribute: Array<Nft_Attribute>;
  /** fetch aggregated fields from the table: "nft_attribute" */
  nft_attribute_aggregate: Nft_Attribute_Aggregate;
  /** fetch data from the table: "nft_attribute" using primary key columns */
  nft_attribute_by_pk?: Maybe<Nft_Attribute>;
  /** An array relationship */
  nft_metadata: Array<Nft_Metadata>;
  /** An aggregate relationship */
  nft_metadata_aggregate: Nft_Metadata_Aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  nft_metadata_by_pk?: Maybe<Nft_Metadata>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
};


export type Query_RootNft_AttributeArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attribute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Attribute_Order_By>>;
  where?: InputMaybe<Nft_Attribute_Bool_Exp>;
};


export type Query_RootNft_Attribute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attribute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Attribute_Order_By>>;
  where?: InputMaybe<Nft_Attribute_Bool_Exp>;
};


export type Query_RootNft_Attribute_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNft_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Query_RootNft_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Query_RootNft_Metadata_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "nft_attribute" */
  nft_attribute: Array<Nft_Attribute>;
  /** fetch aggregated fields from the table: "nft_attribute" */
  nft_attribute_aggregate: Nft_Attribute_Aggregate;
  /** fetch data from the table: "nft_attribute" using primary key columns */
  nft_attribute_by_pk?: Maybe<Nft_Attribute>;
  /** An array relationship */
  nft_metadata: Array<Nft_Metadata>;
  /** An aggregate relationship */
  nft_metadata_aggregate: Nft_Metadata_Aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  nft_metadata_by_pk?: Maybe<Nft_Metadata>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
};


export type Subscription_RootNft_AttributeArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attribute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Attribute_Order_By>>;
  where?: InputMaybe<Nft_Attribute_Bool_Exp>;
};


export type Subscription_RootNft_Attribute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attribute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Attribute_Order_By>>;
  where?: InputMaybe<Nft_Attribute_Bool_Exp>;
};


export type Subscription_RootNft_Attribute_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNft_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Subscription_RootNft_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Subscription_RootNft_Metadata_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
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

export type CreateProjectMutationVariables = Exact<{
  input: Project_Insert_Input;
}>;


export type CreateProjectMutation = { __typename?: 'mutation_root', insert_project_one?: { __typename?: 'project', id: any, created_at?: any | null, description?: string | null, metadata_cid?: string | null, name: string, updated_at?: any | null, user_id: string } | null };

export type SetProjectNftMetadataMutationVariables = Exact<{
  input: Array<Nft_Metadata_Insert_Input> | Nft_Metadata_Insert_Input;
}>;


export type SetProjectNftMetadataMutation = { __typename?: 'mutation_root', insert_nft_metadata?: { __typename?: 'nft_metadata_mutation_response', returning: Array<{ __typename?: 'nft_metadata', id: any }> } | null };

export type UpdateProjectMetadataCidMutationVariables = Exact<{
  id: Scalars['uuid'];
  metadata_cid: Scalars['String'];
}>;


export type UpdateProjectMetadataCidMutation = { __typename?: 'mutation_root', update_project_by_pk?: { __typename?: 'project', id: any, metadata_cid?: string | null } | null };

export type GetNftMetadataQueryVariables = Exact<{
  project_id: Scalars['uuid'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By> | Nft_Metadata_Order_By>;
}>;


export type GetNftMetadataQuery = { __typename?: 'query_root', nft_metadata: Array<{ __typename?: 'nft_metadata', description?: string | null, external_url?: string | null, id: any, image: string, name?: string | null, token_id: number, nft_attributes: Array<{ __typename?: 'nft_attribute', display_type?: string | null, id: any, trait_type: string, value: string }> }>, nft_attribute_aggregate: { __typename?: 'nft_attribute_aggregate', nodes: Array<{ __typename?: 'nft_attribute', trait_type: string }> } };

export type GetProjectQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetProjectQuery = { __typename?: 'query_root', project_by_pk?: { __typename?: 'project', created_at?: any | null, description?: string | null, id: any, metadata_cid?: string | null, name: string, updated_at?: any | null } | null };


export const CreateProjectDocument = gql`
    mutation CreateProject($input: project_insert_input!) {
  insert_project_one(object: $input) {
    id
    created_at
    description
    metadata_cid
    name
    updated_at
    user_id
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const SetProjectNftMetadataDocument = gql`
    mutation SetProjectNFTMetadata($input: [nft_metadata_insert_input!]!) {
  insert_nft_metadata(objects: $input) {
    returning {
      id
    }
  }
}
    `;
export type SetProjectNftMetadataMutationFn = Apollo.MutationFunction<SetProjectNftMetadataMutation, SetProjectNftMetadataMutationVariables>;

/**
 * __useSetProjectNftMetadataMutation__
 *
 * To run a mutation, you first call `useSetProjectNftMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetProjectNftMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setProjectNftMetadataMutation, { data, loading, error }] = useSetProjectNftMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetProjectNftMetadataMutation(baseOptions?: Apollo.MutationHookOptions<SetProjectNftMetadataMutation, SetProjectNftMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetProjectNftMetadataMutation, SetProjectNftMetadataMutationVariables>(SetProjectNftMetadataDocument, options);
      }
export type SetProjectNftMetadataMutationHookResult = ReturnType<typeof useSetProjectNftMetadataMutation>;
export type SetProjectNftMetadataMutationResult = Apollo.MutationResult<SetProjectNftMetadataMutation>;
export type SetProjectNftMetadataMutationOptions = Apollo.BaseMutationOptions<SetProjectNftMetadataMutation, SetProjectNftMetadataMutationVariables>;
export const UpdateProjectMetadataCidDocument = gql`
    mutation UpdateProjectMetadataCID($id: uuid!, $metadata_cid: String!) {
  update_project_by_pk(pk_columns: {id: $id}, _set: {metadata_cid: $metadata_cid}) {
    id
    metadata_cid
  }
}
    `;
export type UpdateProjectMetadataCidMutationFn = Apollo.MutationFunction<UpdateProjectMetadataCidMutation, UpdateProjectMetadataCidMutationVariables>;

/**
 * __useUpdateProjectMetadataCidMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMetadataCidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMetadataCidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMetadataCidMutation, { data, loading, error }] = useUpdateProjectMetadataCidMutation({
 *   variables: {
 *      id: // value for 'id'
 *      metadata_cid: // value for 'metadata_cid'
 *   },
 * });
 */
export function useUpdateProjectMetadataCidMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMetadataCidMutation, UpdateProjectMetadataCidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMetadataCidMutation, UpdateProjectMetadataCidMutationVariables>(UpdateProjectMetadataCidDocument, options);
      }
export type UpdateProjectMetadataCidMutationHookResult = ReturnType<typeof useUpdateProjectMetadataCidMutation>;
export type UpdateProjectMetadataCidMutationResult = Apollo.MutationResult<UpdateProjectMetadataCidMutation>;
export type UpdateProjectMetadataCidMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMetadataCidMutation, UpdateProjectMetadataCidMutationVariables>;
export const GetNftMetadataDocument = gql`
    query GetNFTMetadata($project_id: uuid!, $limit: Int = 50, $offset: Int = 0, $order_by: [nft_metadata_order_by!] = {}) {
  nft_metadata(
    where: {project_id: {_eq: $project_id}}
    order_by: $order_by
    limit: $limit
    offset: $offset
  ) {
    description
    external_url
    id
    image
    name
    token_id
    nft_attributes {
      display_type
      id
      trait_type
      value
    }
  }
  nft_attribute_aggregate(
    distinct_on: trait_type
    where: {nft_metadatum: {project_id: {_eq: $project_id}}}
  ) {
    nodes {
      trait_type
    }
  }
}
    `;

/**
 * __useGetNftMetadataQuery__
 *
 * To run a query within a React component, call `useGetNftMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNftMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNftMetadataQuery({
 *   variables: {
 *      project_id: // value for 'project_id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useGetNftMetadataQuery(baseOptions: Apollo.QueryHookOptions<GetNftMetadataQuery, GetNftMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNftMetadataQuery, GetNftMetadataQueryVariables>(GetNftMetadataDocument, options);
      }
export function useGetNftMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNftMetadataQuery, GetNftMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNftMetadataQuery, GetNftMetadataQueryVariables>(GetNftMetadataDocument, options);
        }
export type GetNftMetadataQueryHookResult = ReturnType<typeof useGetNftMetadataQuery>;
export type GetNftMetadataLazyQueryHookResult = ReturnType<typeof useGetNftMetadataLazyQuery>;
export type GetNftMetadataQueryResult = Apollo.QueryResult<GetNftMetadataQuery, GetNftMetadataQueryVariables>;
export const GetProjectDocument = gql`
    query GetProject($id: uuid!) {
  project_by_pk(id: $id) {
    created_at
    description
    id
    metadata_cid
    name
    updated_at
  }
}
    `;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;