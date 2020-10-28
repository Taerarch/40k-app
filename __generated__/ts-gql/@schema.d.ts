// ts-gql-integrity:fec1d3ce578a4a05d7158b5148e4e8e1
/*
ts-gql-meta-begin
{
  "hash": "83dbc71c52e52e55a780de34f98c2caa"
}
ts-gql-meta-end
*/
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  /**
   * NOTE: Can be JSON, or a Boolean/Int/String
   * Why not a union? GraphQL doesn't support a union including a scalar
   * (https://github.com/facebook/graphql/issues/215)
   */
  JSON: any;
};


export type ArmyRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<ArmyCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<ArmyWhereUniqueInput>>>;
  readonly disconnect?: Maybe<ReadonlyArray<Maybe<ArmyWhereUniqueInput>>>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type User = {
  readonly __typename: 'User';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the User List config, or
   *  2. As an alias to the field set on 'labelField' in the User List config, or
   *  3. As an alias to a 'name' field on the User List (if one exists), or
   *  4. As an alias to the 'id' field on the User List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly isAdmin: Maybe<Scalars['Boolean']>;
  readonly password_is_set: Maybe<Scalars['Boolean']>;
  readonly armies: ReadonlyArray<Army>;
  readonly _armiesMeta: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type UserarmiesArgs = {
  where: Maybe<ArmyWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortArmiesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_armiesMetaArgs = {
  where: Maybe<ArmyWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortArmiesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type UserWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<UserWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<UserWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_i?: Maybe<Scalars['String']>;
  readonly name_not_i?: Maybe<Scalars['String']>;
  readonly name_contains_i?: Maybe<Scalars['String']>;
  readonly name_not_contains_i?: Maybe<Scalars['String']>;
  readonly name_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly email?: Maybe<Scalars['String']>;
  readonly email_not?: Maybe<Scalars['String']>;
  readonly email_contains?: Maybe<Scalars['String']>;
  readonly email_not_contains?: Maybe<Scalars['String']>;
  readonly email_starts_with?: Maybe<Scalars['String']>;
  readonly email_not_starts_with?: Maybe<Scalars['String']>;
  readonly email_ends_with?: Maybe<Scalars['String']>;
  readonly email_not_ends_with?: Maybe<Scalars['String']>;
  readonly email_i?: Maybe<Scalars['String']>;
  readonly email_not_i?: Maybe<Scalars['String']>;
  readonly email_contains_i?: Maybe<Scalars['String']>;
  readonly email_not_contains_i?: Maybe<Scalars['String']>;
  readonly email_starts_with_i?: Maybe<Scalars['String']>;
  readonly email_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly email_ends_with_i?: Maybe<Scalars['String']>;
  readonly email_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly email_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly email_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly isAdmin?: Maybe<Scalars['Boolean']>;
  readonly isAdmin_not?: Maybe<Scalars['Boolean']>;
  readonly password_is_set?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  readonly armies_every?: Maybe<ArmyWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly armies_some?: Maybe<ArmyWhereInput>;
  /**  condition must be false for all nodes  */
  readonly armies_none?: Maybe<ArmyWhereInput>;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'isAdmin_ASC'
  | 'isAdmin_DESC'
  | 'armies_ASC'
  | 'armies_DESC';

export type UserUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly isAdmin?: Maybe<Scalars['Boolean']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly armies?: Maybe<ArmyRelateToManyInput>;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<UserUpdateInput>;
};

export type UserCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly isAdmin?: Maybe<Scalars['Boolean']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly armies?: Maybe<ArmyRelateToManyInput>;
};

export type UsersCreateInput = {
  readonly data?: Maybe<UserCreateInput>;
};

export type UnitRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<UnitCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<UnitWhereUniqueInput>>>;
  readonly disconnect?: Maybe<ReadonlyArray<Maybe<UnitWhereUniqueInput>>>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserRelateToOneInput = {
  readonly create?: Maybe<UserCreateInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
  readonly disconnect?: Maybe<UserWhereUniqueInput>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Army = {
  readonly __typename: 'Army';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Army List config, or
   *  2. As an alias to the field set on 'labelField' in the Army List config, or
   *  3. As an alias to a 'name' field on the Army List (if one exists), or
   *  4. As an alias to the 'id' field on the Army List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly armyRules: Maybe<Scalars['String']>;
  readonly faction: Maybe<Scalars['String']>;
  readonly units: ReadonlyArray<Unit>;
  readonly _unitsMeta: Maybe<_QueryMeta>;
  readonly owner: Maybe<User>;
  readonly primaryColor: Maybe<Scalars['String']>;
  readonly secondaryColor: Maybe<Scalars['String']>;
  readonly highlightColor: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type ArmyunitsArgs = {
  where: Maybe<UnitWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortUnitsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Army_unitsMetaArgs = {
  where: Maybe<UnitWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortUnitsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type ArmyWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<ArmyWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<ArmyWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_i?: Maybe<Scalars['String']>;
  readonly name_not_i?: Maybe<Scalars['String']>;
  readonly name_contains_i?: Maybe<Scalars['String']>;
  readonly name_not_contains_i?: Maybe<Scalars['String']>;
  readonly name_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  readonly description_ends_with?: Maybe<Scalars['String']>;
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly description_i?: Maybe<Scalars['String']>;
  readonly description_not_i?: Maybe<Scalars['String']>;
  readonly description_contains_i?: Maybe<Scalars['String']>;
  readonly description_not_contains_i?: Maybe<Scalars['String']>;
  readonly description_starts_with_i?: Maybe<Scalars['String']>;
  readonly description_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly description_ends_with_i?: Maybe<Scalars['String']>;
  readonly description_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly armyRules?: Maybe<Scalars['String']>;
  readonly armyRules_not?: Maybe<Scalars['String']>;
  readonly armyRules_contains?: Maybe<Scalars['String']>;
  readonly armyRules_not_contains?: Maybe<Scalars['String']>;
  readonly armyRules_starts_with?: Maybe<Scalars['String']>;
  readonly armyRules_not_starts_with?: Maybe<Scalars['String']>;
  readonly armyRules_ends_with?: Maybe<Scalars['String']>;
  readonly armyRules_not_ends_with?: Maybe<Scalars['String']>;
  readonly armyRules_i?: Maybe<Scalars['String']>;
  readonly armyRules_not_i?: Maybe<Scalars['String']>;
  readonly armyRules_contains_i?: Maybe<Scalars['String']>;
  readonly armyRules_not_contains_i?: Maybe<Scalars['String']>;
  readonly armyRules_starts_with_i?: Maybe<Scalars['String']>;
  readonly armyRules_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly armyRules_ends_with_i?: Maybe<Scalars['String']>;
  readonly armyRules_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly armyRules_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly armyRules_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly faction?: Maybe<Scalars['String']>;
  readonly faction_not?: Maybe<Scalars['String']>;
  readonly faction_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly faction_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  readonly units_every?: Maybe<UnitWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly units_some?: Maybe<UnitWhereInput>;
  /**  condition must be false for all nodes  */
  readonly units_none?: Maybe<UnitWhereInput>;
  readonly owner?: Maybe<UserWhereInput>;
  readonly owner_is_null?: Maybe<Scalars['Boolean']>;
  readonly primaryColor?: Maybe<Scalars['String']>;
  readonly primaryColor_not?: Maybe<Scalars['String']>;
  readonly primaryColor_contains?: Maybe<Scalars['String']>;
  readonly primaryColor_not_contains?: Maybe<Scalars['String']>;
  readonly primaryColor_starts_with?: Maybe<Scalars['String']>;
  readonly primaryColor_not_starts_with?: Maybe<Scalars['String']>;
  readonly primaryColor_ends_with?: Maybe<Scalars['String']>;
  readonly primaryColor_not_ends_with?: Maybe<Scalars['String']>;
  readonly primaryColor_i?: Maybe<Scalars['String']>;
  readonly primaryColor_not_i?: Maybe<Scalars['String']>;
  readonly primaryColor_contains_i?: Maybe<Scalars['String']>;
  readonly primaryColor_not_contains_i?: Maybe<Scalars['String']>;
  readonly primaryColor_starts_with_i?: Maybe<Scalars['String']>;
  readonly primaryColor_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly primaryColor_ends_with_i?: Maybe<Scalars['String']>;
  readonly primaryColor_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly primaryColor_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly primaryColor_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly secondaryColor?: Maybe<Scalars['String']>;
  readonly secondaryColor_not?: Maybe<Scalars['String']>;
  readonly secondaryColor_contains?: Maybe<Scalars['String']>;
  readonly secondaryColor_not_contains?: Maybe<Scalars['String']>;
  readonly secondaryColor_starts_with?: Maybe<Scalars['String']>;
  readonly secondaryColor_not_starts_with?: Maybe<Scalars['String']>;
  readonly secondaryColor_ends_with?: Maybe<Scalars['String']>;
  readonly secondaryColor_not_ends_with?: Maybe<Scalars['String']>;
  readonly secondaryColor_i?: Maybe<Scalars['String']>;
  readonly secondaryColor_not_i?: Maybe<Scalars['String']>;
  readonly secondaryColor_contains_i?: Maybe<Scalars['String']>;
  readonly secondaryColor_not_contains_i?: Maybe<Scalars['String']>;
  readonly secondaryColor_starts_with_i?: Maybe<Scalars['String']>;
  readonly secondaryColor_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly secondaryColor_ends_with_i?: Maybe<Scalars['String']>;
  readonly secondaryColor_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly secondaryColor_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly secondaryColor_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly highlightColor?: Maybe<Scalars['String']>;
  readonly highlightColor_not?: Maybe<Scalars['String']>;
  readonly highlightColor_contains?: Maybe<Scalars['String']>;
  readonly highlightColor_not_contains?: Maybe<Scalars['String']>;
  readonly highlightColor_starts_with?: Maybe<Scalars['String']>;
  readonly highlightColor_not_starts_with?: Maybe<Scalars['String']>;
  readonly highlightColor_ends_with?: Maybe<Scalars['String']>;
  readonly highlightColor_not_ends_with?: Maybe<Scalars['String']>;
  readonly highlightColor_i?: Maybe<Scalars['String']>;
  readonly highlightColor_not_i?: Maybe<Scalars['String']>;
  readonly highlightColor_contains_i?: Maybe<Scalars['String']>;
  readonly highlightColor_not_contains_i?: Maybe<Scalars['String']>;
  readonly highlightColor_starts_with_i?: Maybe<Scalars['String']>;
  readonly highlightColor_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly highlightColor_ends_with_i?: Maybe<Scalars['String']>;
  readonly highlightColor_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly highlightColor_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly highlightColor_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type ArmyWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortArmiesBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'armyRules_ASC'
  | 'armyRules_DESC'
  | 'faction_ASC'
  | 'faction_DESC'
  | 'units_ASC'
  | 'units_DESC'
  | 'owner_ASC'
  | 'owner_DESC'
  | 'primaryColor_ASC'
  | 'primaryColor_DESC'
  | 'secondaryColor_ASC'
  | 'secondaryColor_DESC'
  | 'highlightColor_ASC'
  | 'highlightColor_DESC';

export type ArmyUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly armyRules?: Maybe<Scalars['String']>;
  readonly faction?: Maybe<Scalars['String']>;
  readonly units?: Maybe<UnitRelateToManyInput>;
  readonly owner?: Maybe<UserRelateToOneInput>;
  readonly primaryColor?: Maybe<Scalars['String']>;
  readonly secondaryColor?: Maybe<Scalars['String']>;
  readonly highlightColor?: Maybe<Scalars['String']>;
};

export type ArmiesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<ArmyUpdateInput>;
};

export type ArmyCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly armyRules?: Maybe<Scalars['String']>;
  readonly faction?: Maybe<Scalars['String']>;
  readonly units?: Maybe<UnitRelateToManyInput>;
  readonly owner?: Maybe<UserRelateToOneInput>;
  readonly primaryColor?: Maybe<Scalars['String']>;
  readonly secondaryColor?: Maybe<Scalars['String']>;
  readonly highlightColor?: Maybe<Scalars['String']>;
};

export type ArmiesCreateInput = {
  readonly data?: Maybe<ArmyCreateInput>;
};

export type ArmyRelateToOneInput = {
  readonly create?: Maybe<ArmyCreateInput>;
  readonly connect?: Maybe<ArmyWhereUniqueInput>;
  readonly disconnect?: Maybe<ArmyWhereUniqueInput>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Unit = {
  readonly __typename: 'Unit';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Unit List config, or
   *  2. As an alias to the field set on 'labelField' in the Unit List config, or
   *  3. As an alias to a 'name' field on the Unit List (if one exists), or
   *  4. As an alias to the 'id' field on the Unit List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly points: Maybe<Scalars['Int']>;
  readonly army: Maybe<Army>;
  readonly battleFieldRole: Maybe<Scalars['String']>;
};

export type UnitWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<UnitWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<UnitWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_i?: Maybe<Scalars['String']>;
  readonly name_not_i?: Maybe<Scalars['String']>;
  readonly name_contains_i?: Maybe<Scalars['String']>;
  readonly name_not_contains_i?: Maybe<Scalars['String']>;
  readonly name_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly points?: Maybe<Scalars['Int']>;
  readonly points_not?: Maybe<Scalars['Int']>;
  readonly points_lt?: Maybe<Scalars['Int']>;
  readonly points_lte?: Maybe<Scalars['Int']>;
  readonly points_gt?: Maybe<Scalars['Int']>;
  readonly points_gte?: Maybe<Scalars['Int']>;
  readonly points_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly points_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly army?: Maybe<ArmyWhereInput>;
  readonly army_is_null?: Maybe<Scalars['Boolean']>;
  readonly battleFieldRole?: Maybe<Scalars['String']>;
  readonly battleFieldRole_not?: Maybe<Scalars['String']>;
  readonly battleFieldRole_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly battleFieldRole_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type UnitWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUnitsBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'points_ASC'
  | 'points_DESC'
  | 'army_ASC'
  | 'army_DESC'
  | 'battleFieldRole_ASC'
  | 'battleFieldRole_DESC';

export type UnitUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly points?: Maybe<Scalars['Int']>;
  readonly army?: Maybe<ArmyRelateToOneInput>;
  readonly battleFieldRole?: Maybe<Scalars['String']>;
};

export type UnitsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<UnitUpdateInput>;
};

export type UnitCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly points?: Maybe<Scalars['Int']>;
  readonly army?: Maybe<ArmyRelateToOneInput>;
  readonly battleFieldRole?: Maybe<Scalars['String']>;
};

export type UnitsCreateInput = {
  readonly data?: Maybe<UnitCreateInput>;
};

export type BattleInfoRelateToOneInput = {
  readonly create?: Maybe<BattleInfoCreateInput>;
  readonly connect?: Maybe<BattleInfoWhereUniqueInput>;
  readonly disconnect?: Maybe<BattleInfoWhereUniqueInput>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type BattleStatusType = 
  | 'planning'
  | 'inProgress'
  | 'completed';

/**  A keystone list  */
export type Battle = {
  readonly __typename: 'Battle';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Battle List config, or
   *  2. As an alias to the field set on 'labelField' in the Battle List config, or
   *  3. As an alias to a 'name' field on the Battle List (if one exists), or
   *  4. As an alias to the 'id' field on the Battle List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly army1: Maybe<BattleInfo>;
  readonly army2: Maybe<BattleInfo>;
  readonly points: Maybe<Scalars['Int']>;
  readonly mission: Maybe<Scalars['String']>;
  readonly setupDescription: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly status: Maybe<BattleStatusType>;
};

export type BattleWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<BattleWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<BattleWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly army1?: Maybe<BattleInfoWhereInput>;
  readonly army1_is_null?: Maybe<Scalars['Boolean']>;
  readonly army2?: Maybe<BattleInfoWhereInput>;
  readonly army2_is_null?: Maybe<Scalars['Boolean']>;
  readonly points?: Maybe<Scalars['Int']>;
  readonly points_not?: Maybe<Scalars['Int']>;
  readonly points_lt?: Maybe<Scalars['Int']>;
  readonly points_lte?: Maybe<Scalars['Int']>;
  readonly points_gt?: Maybe<Scalars['Int']>;
  readonly points_gte?: Maybe<Scalars['Int']>;
  readonly points_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly points_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly mission?: Maybe<Scalars['String']>;
  readonly mission_not?: Maybe<Scalars['String']>;
  readonly mission_contains?: Maybe<Scalars['String']>;
  readonly mission_not_contains?: Maybe<Scalars['String']>;
  readonly mission_starts_with?: Maybe<Scalars['String']>;
  readonly mission_not_starts_with?: Maybe<Scalars['String']>;
  readonly mission_ends_with?: Maybe<Scalars['String']>;
  readonly mission_not_ends_with?: Maybe<Scalars['String']>;
  readonly mission_i?: Maybe<Scalars['String']>;
  readonly mission_not_i?: Maybe<Scalars['String']>;
  readonly mission_contains_i?: Maybe<Scalars['String']>;
  readonly mission_not_contains_i?: Maybe<Scalars['String']>;
  readonly mission_starts_with_i?: Maybe<Scalars['String']>;
  readonly mission_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly mission_ends_with_i?: Maybe<Scalars['String']>;
  readonly mission_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly mission_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly mission_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly setupDescription?: Maybe<Scalars['String']>;
  readonly setupDescription_not?: Maybe<Scalars['String']>;
  readonly setupDescription_contains?: Maybe<Scalars['String']>;
  readonly setupDescription_not_contains?: Maybe<Scalars['String']>;
  readonly setupDescription_starts_with?: Maybe<Scalars['String']>;
  readonly setupDescription_not_starts_with?: Maybe<Scalars['String']>;
  readonly setupDescription_ends_with?: Maybe<Scalars['String']>;
  readonly setupDescription_not_ends_with?: Maybe<Scalars['String']>;
  readonly setupDescription_i?: Maybe<Scalars['String']>;
  readonly setupDescription_not_i?: Maybe<Scalars['String']>;
  readonly setupDescription_contains_i?: Maybe<Scalars['String']>;
  readonly setupDescription_not_contains_i?: Maybe<Scalars['String']>;
  readonly setupDescription_starts_with_i?: Maybe<Scalars['String']>;
  readonly setupDescription_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly setupDescription_ends_with_i?: Maybe<Scalars['String']>;
  readonly setupDescription_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly setupDescription_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly setupDescription_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  readonly description_ends_with?: Maybe<Scalars['String']>;
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly description_i?: Maybe<Scalars['String']>;
  readonly description_not_i?: Maybe<Scalars['String']>;
  readonly description_contains_i?: Maybe<Scalars['String']>;
  readonly description_not_contains_i?: Maybe<Scalars['String']>;
  readonly description_starts_with_i?: Maybe<Scalars['String']>;
  readonly description_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly description_ends_with_i?: Maybe<Scalars['String']>;
  readonly description_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly status?: Maybe<BattleStatusType>;
  readonly status_not?: Maybe<BattleStatusType>;
  readonly status_in?: Maybe<ReadonlyArray<Maybe<BattleStatusType>>>;
  readonly status_not_in?: Maybe<ReadonlyArray<Maybe<BattleStatusType>>>;
};

export type BattleWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBattlesBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'army1_ASC'
  | 'army1_DESC'
  | 'army2_ASC'
  | 'army2_DESC'
  | 'points_ASC'
  | 'points_DESC'
  | 'mission_ASC'
  | 'mission_DESC'
  | 'setupDescription_ASC'
  | 'setupDescription_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'status_ASC'
  | 'status_DESC';

export type BattleUpdateInput = {
  readonly army1?: Maybe<BattleInfoRelateToOneInput>;
  readonly army2?: Maybe<BattleInfoRelateToOneInput>;
  readonly points?: Maybe<Scalars['Int']>;
  readonly mission?: Maybe<Scalars['String']>;
  readonly setupDescription?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly status?: Maybe<BattleStatusType>;
};

export type BattlesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<BattleUpdateInput>;
};

export type BattleCreateInput = {
  readonly army1?: Maybe<BattleInfoRelateToOneInput>;
  readonly army2?: Maybe<BattleInfoRelateToOneInput>;
  readonly points?: Maybe<Scalars['Int']>;
  readonly mission?: Maybe<Scalars['String']>;
  readonly setupDescription?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly status?: Maybe<BattleStatusType>;
};

export type BattlesCreateInput = {
  readonly data?: Maybe<BattleCreateInput>;
};

export type ObjectiveRelateToOneInput = {
  readonly create?: Maybe<ObjectiveCreateInput>;
  readonly connect?: Maybe<ObjectiveWhereUniqueInput>;
  readonly disconnect?: Maybe<ObjectiveWhereUniqueInput>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ObjectiveRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<ObjectiveCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<ObjectiveWhereUniqueInput>>>;
  readonly disconnect?: Maybe<ReadonlyArray<Maybe<ObjectiveWhereUniqueInput>>>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type BattleInfo = {
  readonly __typename: 'BattleInfo';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BattleInfo List config, or
   *  2. As an alias to the field set on 'labelField' in the BattleInfo List config, or
   *  3. As an alias to a 'name' field on the BattleInfo List (if one exists), or
   *  4. As an alias to the 'id' field on the BattleInfo List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly army: Maybe<Army>;
  readonly primary: Maybe<Objective>;
  readonly secondaries: ReadonlyArray<Objective>;
  readonly _secondariesMeta: Maybe<_QueryMeta>;
  readonly CP: Maybe<Scalars['Int']>;
  readonly notes: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type BattleInfosecondariesArgs = {
  where: Maybe<ObjectiveWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortObjectivesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type BattleInfo_secondariesMetaArgs = {
  where: Maybe<ObjectiveWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortObjectivesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type BattleInfoWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<BattleInfoWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<BattleInfoWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly army?: Maybe<ArmyWhereInput>;
  readonly army_is_null?: Maybe<Scalars['Boolean']>;
  readonly primary?: Maybe<ObjectiveWhereInput>;
  readonly primary_is_null?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  readonly secondaries_every?: Maybe<ObjectiveWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly secondaries_some?: Maybe<ObjectiveWhereInput>;
  /**  condition must be false for all nodes  */
  readonly secondaries_none?: Maybe<ObjectiveWhereInput>;
  readonly CP?: Maybe<Scalars['Int']>;
  readonly CP_not?: Maybe<Scalars['Int']>;
  readonly CP_lt?: Maybe<Scalars['Int']>;
  readonly CP_lte?: Maybe<Scalars['Int']>;
  readonly CP_gt?: Maybe<Scalars['Int']>;
  readonly CP_gte?: Maybe<Scalars['Int']>;
  readonly CP_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly CP_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly notes_not?: Maybe<Scalars['String']>;
  readonly notes_contains?: Maybe<Scalars['String']>;
  readonly notes_not_contains?: Maybe<Scalars['String']>;
  readonly notes_starts_with?: Maybe<Scalars['String']>;
  readonly notes_not_starts_with?: Maybe<Scalars['String']>;
  readonly notes_ends_with?: Maybe<Scalars['String']>;
  readonly notes_not_ends_with?: Maybe<Scalars['String']>;
  readonly notes_i?: Maybe<Scalars['String']>;
  readonly notes_not_i?: Maybe<Scalars['String']>;
  readonly notes_contains_i?: Maybe<Scalars['String']>;
  readonly notes_not_contains_i?: Maybe<Scalars['String']>;
  readonly notes_starts_with_i?: Maybe<Scalars['String']>;
  readonly notes_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly notes_ends_with_i?: Maybe<Scalars['String']>;
  readonly notes_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly notes_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly notes_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type BattleInfoWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBattleInfosBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'army_ASC'
  | 'army_DESC'
  | 'primary_ASC'
  | 'primary_DESC'
  | 'secondaries_ASC'
  | 'secondaries_DESC'
  | 'CP_ASC'
  | 'CP_DESC'
  | 'notes_ASC'
  | 'notes_DESC';

export type BattleInfoUpdateInput = {
  readonly army?: Maybe<ArmyRelateToOneInput>;
  readonly primary?: Maybe<ObjectiveRelateToOneInput>;
  readonly secondaries?: Maybe<ObjectiveRelateToManyInput>;
  readonly CP?: Maybe<Scalars['Int']>;
  readonly notes?: Maybe<Scalars['String']>;
};

export type BattleInfosUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<BattleInfoUpdateInput>;
};

export type BattleInfoCreateInput = {
  readonly army?: Maybe<ArmyRelateToOneInput>;
  readonly primary?: Maybe<ObjectiveRelateToOneInput>;
  readonly secondaries?: Maybe<ObjectiveRelateToManyInput>;
  readonly CP?: Maybe<Scalars['Int']>;
  readonly notes?: Maybe<Scalars['String']>;
};

export type BattleInfosCreateInput = {
  readonly data?: Maybe<BattleInfoCreateInput>;
};

export type MissionForceSizeType = 
  | 'combatPatrol'
  | 'incursion'
  | 'strikeForce'
  | 'onslaught';

/**  A keystone list  */
export type Mission = {
  readonly __typename: 'Mission';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Mission List config, or
   *  2. As an alias to the field set on 'labelField' in the Mission List config, or
   *  3. As an alias to a 'name' field on the Mission List (if one exists), or
   *  4. As an alias to the 'id' field on the Mission List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly source: Maybe<Scalars['String']>;
  readonly briefing: Maybe<Scalars['String']>;
  readonly forceSize: Maybe<MissionForceSizeType>;
  readonly rules: Maybe<Scalars['String']>;
  readonly primary: Maybe<Objective>;
  readonly secondaries: ReadonlyArray<Objective>;
  readonly _secondariesMeta: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type MissionsecondariesArgs = {
  where: Maybe<ObjectiveWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortObjectivesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Mission_secondariesMetaArgs = {
  where: Maybe<ObjectiveWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortObjectivesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type MissionWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<MissionWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<MissionWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_i?: Maybe<Scalars['String']>;
  readonly name_not_i?: Maybe<Scalars['String']>;
  readonly name_contains_i?: Maybe<Scalars['String']>;
  readonly name_not_contains_i?: Maybe<Scalars['String']>;
  readonly name_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly source?: Maybe<Scalars['String']>;
  readonly source_not?: Maybe<Scalars['String']>;
  readonly source_contains?: Maybe<Scalars['String']>;
  readonly source_not_contains?: Maybe<Scalars['String']>;
  readonly source_starts_with?: Maybe<Scalars['String']>;
  readonly source_not_starts_with?: Maybe<Scalars['String']>;
  readonly source_ends_with?: Maybe<Scalars['String']>;
  readonly source_not_ends_with?: Maybe<Scalars['String']>;
  readonly source_i?: Maybe<Scalars['String']>;
  readonly source_not_i?: Maybe<Scalars['String']>;
  readonly source_contains_i?: Maybe<Scalars['String']>;
  readonly source_not_contains_i?: Maybe<Scalars['String']>;
  readonly source_starts_with_i?: Maybe<Scalars['String']>;
  readonly source_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly source_ends_with_i?: Maybe<Scalars['String']>;
  readonly source_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly source_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly source_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly briefing?: Maybe<Scalars['String']>;
  readonly briefing_not?: Maybe<Scalars['String']>;
  readonly briefing_contains?: Maybe<Scalars['String']>;
  readonly briefing_not_contains?: Maybe<Scalars['String']>;
  readonly briefing_starts_with?: Maybe<Scalars['String']>;
  readonly briefing_not_starts_with?: Maybe<Scalars['String']>;
  readonly briefing_ends_with?: Maybe<Scalars['String']>;
  readonly briefing_not_ends_with?: Maybe<Scalars['String']>;
  readonly briefing_i?: Maybe<Scalars['String']>;
  readonly briefing_not_i?: Maybe<Scalars['String']>;
  readonly briefing_contains_i?: Maybe<Scalars['String']>;
  readonly briefing_not_contains_i?: Maybe<Scalars['String']>;
  readonly briefing_starts_with_i?: Maybe<Scalars['String']>;
  readonly briefing_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly briefing_ends_with_i?: Maybe<Scalars['String']>;
  readonly briefing_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly briefing_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly briefing_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly forceSize?: Maybe<MissionForceSizeType>;
  readonly forceSize_not?: Maybe<MissionForceSizeType>;
  readonly forceSize_in?: Maybe<ReadonlyArray<Maybe<MissionForceSizeType>>>;
  readonly forceSize_not_in?: Maybe<ReadonlyArray<Maybe<MissionForceSizeType>>>;
  readonly rules?: Maybe<Scalars['String']>;
  readonly rules_not?: Maybe<Scalars['String']>;
  readonly rules_contains?: Maybe<Scalars['String']>;
  readonly rules_not_contains?: Maybe<Scalars['String']>;
  readonly rules_starts_with?: Maybe<Scalars['String']>;
  readonly rules_not_starts_with?: Maybe<Scalars['String']>;
  readonly rules_ends_with?: Maybe<Scalars['String']>;
  readonly rules_not_ends_with?: Maybe<Scalars['String']>;
  readonly rules_i?: Maybe<Scalars['String']>;
  readonly rules_not_i?: Maybe<Scalars['String']>;
  readonly rules_contains_i?: Maybe<Scalars['String']>;
  readonly rules_not_contains_i?: Maybe<Scalars['String']>;
  readonly rules_starts_with_i?: Maybe<Scalars['String']>;
  readonly rules_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly rules_ends_with_i?: Maybe<Scalars['String']>;
  readonly rules_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly rules_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly rules_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly primary?: Maybe<ObjectiveWhereInput>;
  readonly primary_is_null?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  readonly secondaries_every?: Maybe<ObjectiveWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly secondaries_some?: Maybe<ObjectiveWhereInput>;
  /**  condition must be false for all nodes  */
  readonly secondaries_none?: Maybe<ObjectiveWhereInput>;
};

export type MissionWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortMissionsBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'source_ASC'
  | 'source_DESC'
  | 'briefing_ASC'
  | 'briefing_DESC'
  | 'forceSize_ASC'
  | 'forceSize_DESC'
  | 'rules_ASC'
  | 'rules_DESC'
  | 'primary_ASC'
  | 'primary_DESC'
  | 'secondaries_ASC'
  | 'secondaries_DESC';

export type MissionUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly source?: Maybe<Scalars['String']>;
  readonly briefing?: Maybe<Scalars['String']>;
  readonly forceSize?: Maybe<MissionForceSizeType>;
  readonly rules?: Maybe<Scalars['String']>;
  readonly primary?: Maybe<ObjectiveRelateToOneInput>;
  readonly secondaries?: Maybe<ObjectiveRelateToManyInput>;
};

export type MissionsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<MissionUpdateInput>;
};

export type MissionCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly source?: Maybe<Scalars['String']>;
  readonly briefing?: Maybe<Scalars['String']>;
  readonly forceSize?: Maybe<MissionForceSizeType>;
  readonly rules?: Maybe<Scalars['String']>;
  readonly primary?: Maybe<ObjectiveRelateToOneInput>;
  readonly secondaries?: Maybe<ObjectiveRelateToManyInput>;
};

export type MissionsCreateInput = {
  readonly data?: Maybe<MissionCreateInput>;
};

/**  A keystone list  */
export type Objective = {
  readonly __typename: 'Objective';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Objective List config, or
   *  2. As an alias to the field set on 'labelField' in the Objective List config, or
   *  3. As an alias to a 'name' field on the Objective List (if one exists), or
   *  4. As an alias to the 'id' field on the Objective List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly score: Maybe<Scalars['Int']>;
  readonly rules: Maybe<Scalars['String']>;
};

export type ObjectiveWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<ObjectiveWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<ObjectiveWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_i?: Maybe<Scalars['String']>;
  readonly name_not_i?: Maybe<Scalars['String']>;
  readonly name_contains_i?: Maybe<Scalars['String']>;
  readonly name_not_contains_i?: Maybe<Scalars['String']>;
  readonly name_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly score?: Maybe<Scalars['Int']>;
  readonly score_not?: Maybe<Scalars['Int']>;
  readonly score_lt?: Maybe<Scalars['Int']>;
  readonly score_lte?: Maybe<Scalars['Int']>;
  readonly score_gt?: Maybe<Scalars['Int']>;
  readonly score_gte?: Maybe<Scalars['Int']>;
  readonly score_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly score_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly rules?: Maybe<Scalars['String']>;
  readonly rules_not?: Maybe<Scalars['String']>;
  readonly rules_contains?: Maybe<Scalars['String']>;
  readonly rules_not_contains?: Maybe<Scalars['String']>;
  readonly rules_starts_with?: Maybe<Scalars['String']>;
  readonly rules_not_starts_with?: Maybe<Scalars['String']>;
  readonly rules_ends_with?: Maybe<Scalars['String']>;
  readonly rules_not_ends_with?: Maybe<Scalars['String']>;
  readonly rules_i?: Maybe<Scalars['String']>;
  readonly rules_not_i?: Maybe<Scalars['String']>;
  readonly rules_contains_i?: Maybe<Scalars['String']>;
  readonly rules_not_contains_i?: Maybe<Scalars['String']>;
  readonly rules_starts_with_i?: Maybe<Scalars['String']>;
  readonly rules_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly rules_ends_with_i?: Maybe<Scalars['String']>;
  readonly rules_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly rules_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly rules_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type ObjectiveWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortObjectivesBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'score_ASC'
  | 'score_DESC'
  | 'rules_ASC'
  | 'rules_DESC';

export type ObjectiveUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly score?: Maybe<Scalars['Int']>;
  readonly rules?: Maybe<Scalars['String']>;
};

export type ObjectivesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<ObjectiveUpdateInput>;
};

export type ObjectiveCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly score?: Maybe<Scalars['Int']>;
  readonly rules?: Maybe<Scalars['String']>;
};

export type ObjectivesCreateInput = {
  readonly data?: Maybe<ObjectiveCreateInput>;
};

export type BattlefieldRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<BattlefieldCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<BattlefieldWhereUniqueInput>>>;
  readonly disconnect?: Maybe<ReadonlyArray<Maybe<BattlefieldWhereUniqueInput>>>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Planet = {
  readonly __typename: 'Planet';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Planet List config, or
   *  2. As an alias to the field set on 'labelField' in the Planet List config, or
   *  3. As an alias to a 'name' field on the Planet List (if one exists), or
   *  4. As an alias to the 'id' field on the Planet List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly battlefields: ReadonlyArray<Battlefield>;
  readonly _battlefieldsMeta: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type PlanetbattlefieldsArgs = {
  where: Maybe<BattlefieldWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattlefieldsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Planet_battlefieldsMetaArgs = {
  where: Maybe<BattlefieldWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattlefieldsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type PlanetWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<PlanetWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<PlanetWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_i?: Maybe<Scalars['String']>;
  readonly name_not_i?: Maybe<Scalars['String']>;
  readonly name_contains_i?: Maybe<Scalars['String']>;
  readonly name_not_contains_i?: Maybe<Scalars['String']>;
  readonly name_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly name_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  readonly battlefields_every?: Maybe<BattlefieldWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly battlefields_some?: Maybe<BattlefieldWhereInput>;
  /**  condition must be false for all nodes  */
  readonly battlefields_none?: Maybe<BattlefieldWhereInput>;
};

export type PlanetWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPlanetsBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'battlefields_ASC'
  | 'battlefields_DESC';

export type PlanetUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly battlefields?: Maybe<BattlefieldRelateToManyInput>;
};

export type PlanetsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<PlanetUpdateInput>;
};

export type PlanetCreateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly battlefields?: Maybe<BattlefieldRelateToManyInput>;
};

export type PlanetsCreateInput = {
  readonly data?: Maybe<PlanetCreateInput>;
};

export type BattleRelateToManyInput = {
  readonly create?: Maybe<ReadonlyArray<Maybe<BattleCreateInput>>>;
  readonly connect?: Maybe<ReadonlyArray<Maybe<BattleWhereUniqueInput>>>;
  readonly disconnect?: Maybe<ReadonlyArray<Maybe<BattleWhereUniqueInput>>>;
  readonly disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Battlefield = {
  readonly __typename: 'Battlefield';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Battlefield List config, or
   *  2. As an alias to the field set on 'labelField' in the Battlefield List config, or
   *  3. As an alias to a 'name' field on the Battlefield List (if one exists), or
   *  4. As an alias to the 'id' field on the Battlefield List.
   */
  readonly _label_: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly gridReference: Maybe<Scalars['String']>;
  readonly controller: Maybe<Army>;
  readonly battles: ReadonlyArray<Battle>;
  readonly _battlesMeta: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type BattlefieldbattlesArgs = {
  where: Maybe<BattleWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattlesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Battlefield_battlesMetaArgs = {
  where: Maybe<BattleWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattlesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type BattlefieldWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<Maybe<BattlefieldWhereInput>>>;
  readonly OR?: Maybe<ReadonlyArray<Maybe<BattlefieldWhereInput>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly gridReference?: Maybe<Scalars['String']>;
  readonly gridReference_not?: Maybe<Scalars['String']>;
  readonly gridReference_contains?: Maybe<Scalars['String']>;
  readonly gridReference_not_contains?: Maybe<Scalars['String']>;
  readonly gridReference_starts_with?: Maybe<Scalars['String']>;
  readonly gridReference_not_starts_with?: Maybe<Scalars['String']>;
  readonly gridReference_ends_with?: Maybe<Scalars['String']>;
  readonly gridReference_not_ends_with?: Maybe<Scalars['String']>;
  readonly gridReference_i?: Maybe<Scalars['String']>;
  readonly gridReference_not_i?: Maybe<Scalars['String']>;
  readonly gridReference_contains_i?: Maybe<Scalars['String']>;
  readonly gridReference_not_contains_i?: Maybe<Scalars['String']>;
  readonly gridReference_starts_with_i?: Maybe<Scalars['String']>;
  readonly gridReference_not_starts_with_i?: Maybe<Scalars['String']>;
  readonly gridReference_ends_with_i?: Maybe<Scalars['String']>;
  readonly gridReference_not_ends_with_i?: Maybe<Scalars['String']>;
  readonly gridReference_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly gridReference_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly controller?: Maybe<ArmyWhereInput>;
  readonly controller_is_null?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  readonly battles_every?: Maybe<BattleWhereInput>;
  /**  condition must be true for at least 1 node  */
  readonly battles_some?: Maybe<BattleWhereInput>;
  /**  condition must be false for all nodes  */
  readonly battles_none?: Maybe<BattleWhereInput>;
};

export type BattlefieldWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBattlefieldsBy = 
  | 'id_ASC'
  | 'id_DESC'
  | 'gridReference_ASC'
  | 'gridReference_DESC'
  | 'controller_ASC'
  | 'controller_DESC'
  | 'battles_ASC'
  | 'battles_DESC';

export type BattlefieldUpdateInput = {
  readonly gridReference?: Maybe<Scalars['String']>;
  readonly controller?: Maybe<ArmyRelateToOneInput>;
  readonly battles?: Maybe<BattleRelateToManyInput>;
};

export type BattlefieldsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: Maybe<BattlefieldUpdateInput>;
};

export type BattlefieldCreateInput = {
  readonly gridReference?: Maybe<Scalars['String']>;
  readonly controller?: Maybe<ArmyRelateToOneInput>;
  readonly battles?: Maybe<BattleRelateToManyInput>;
};

export type BattlefieldsCreateInput = {
  readonly data?: Maybe<BattlefieldCreateInput>;
};


export type _ListAccess = {
  readonly __typename: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  readonly create: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  readonly read: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  readonly update: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  readonly delete: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  readonly auth: Maybe<Scalars['JSON']>;
};

export type _ListQueries = {
  readonly __typename: '_ListQueries';
  /** Single-item query name */
  readonly item: Maybe<Scalars['String']>;
  /** All-items query name */
  readonly list: Maybe<Scalars['String']>;
  /** List metadata query name */
  readonly meta: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  readonly __typename: '_ListMutations';
  /** Create mutation name */
  readonly create: Maybe<Scalars['String']>;
  /** Create many mutation name */
  readonly createMany: Maybe<Scalars['String']>;
  /** Update mutation name */
  readonly update: Maybe<Scalars['String']>;
  /** Update many mutation name */
  readonly updateMany: Maybe<Scalars['String']>;
  /** Delete mutation name */
  readonly delete: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  readonly deleteMany: Maybe<Scalars['String']>;
};

export type _ListInputTypes = {
  readonly __typename: '_ListInputTypes';
  /** Input type for matching multiple items */
  readonly whereInput: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  readonly whereUniqueInput: Maybe<Scalars['String']>;
  /** Create mutation input type name */
  readonly createInput: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  readonly createManyInput: Maybe<Scalars['String']>;
  /** Update mutation name input */
  readonly updateInput: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  readonly updateManyInput: Maybe<Scalars['String']>;
};

export type _ListSchemaFields = {
  readonly __typename: '_ListSchemaFields';
  /** The path of the field in its list */
  readonly path: Maybe<Scalars['String']>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  readonly name: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  readonly type: Maybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  readonly __typename: '_ListSchemaRelatedFields';
  /** The typename as used in GraphQL queries */
  readonly type: Maybe<Scalars['String']>;
  /** A list of GraphQL field names */
  readonly fields: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type _ListSchema = {
  readonly __typename: '_ListSchema';
  /** The typename as used in GraphQL queries */
  readonly type: Maybe<Scalars['String']>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  readonly queries: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  readonly mutations: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  readonly inputTypes: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  readonly fields: Maybe<ReadonlyArray<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  readonly relatedFields: Maybe<ReadonlyArray<Maybe<_ListSchemaRelatedFields>>>;
};


export type _ListSchemafieldsArgs = {
  where: Maybe<_ListSchemaFieldsInput>;
};

export type _ListMeta = {
  readonly __typename: '_ListMeta';
  /** The Keystone list key */
  readonly key: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  readonly name: Maybe<Scalars['String']>;
  /** The list's user-facing description */
  readonly description: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  readonly label: Maybe<Scalars['String']>;
  /** The list's singular display name */
  readonly singular: Maybe<Scalars['String']>;
  /** The list's plural display name */
  readonly plural: Maybe<Scalars['String']>;
  /** The list's data path */
  readonly path: Maybe<Scalars['String']>;
  /** Access control configuration for the currently authenticated request */
  readonly access: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  readonly schema: Maybe<_ListSchema>;
};

export type _QueryMeta = {
  readonly __typename: '_QueryMeta';
  readonly count: Maybe<Scalars['Int']>;
};

export type _ksListsMetaInput = {
  readonly key?: Maybe<Scalars['String']>;
  /** Whether this is an auxiliary helper list */
  readonly auxiliary?: Maybe<Scalars['Boolean']>;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Maybe<Scalars['String']>;
};

export type unauthenticateUserOutput = {
  readonly __typename: 'unauthenticateUserOutput';
  /**
   * `true` when unauthentication succeeds.
   * NOTE: unauthentication always succeeds when the request has an invalid or missing authentication token.
   */
  readonly success: Maybe<Scalars['Boolean']>;
};

export type authenticateUserOutput = {
  readonly __typename: 'authenticateUserOutput';
  /**  Used to make subsequent authenticated requests by setting this token in a header: 'Authorization: Bearer <token>'.  */
  readonly token: Maybe<Scalars['String']>;
  /**  Retrieve information on the newly authenticated User here.  */
  readonly item: Maybe<User>;
};

export type Query = {
  readonly __typename: 'Query';
  /**  Search for all User items which match the where clause.  */
  readonly allUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  readonly User: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  readonly _allUsersMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  readonly _UsersMeta: Maybe<_ListMeta>;
  /**  Search for all Army items which match the where clause.  */
  readonly allArmies: Maybe<ReadonlyArray<Maybe<Army>>>;
  /**  Search for the Army item with the matching ID.  */
  readonly Army: Maybe<Army>;
  /**  Perform a meta-query on all Army items which match the where clause.  */
  readonly _allArmiesMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Army list.  */
  readonly _ArmiesMeta: Maybe<_ListMeta>;
  /**  Search for all Unit items which match the where clause.  */
  readonly allUnits: Maybe<ReadonlyArray<Maybe<Unit>>>;
  /**  Search for the Unit item with the matching ID.  */
  readonly Unit: Maybe<Unit>;
  /**  Perform a meta-query on all Unit items which match the where clause.  */
  readonly _allUnitsMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Unit list.  */
  readonly _UnitsMeta: Maybe<_ListMeta>;
  /**  Search for all Battle items which match the where clause.  */
  readonly allBattles: Maybe<ReadonlyArray<Maybe<Battle>>>;
  /**  Search for the Battle item with the matching ID.  */
  readonly Battle: Maybe<Battle>;
  /**  Perform a meta-query on all Battle items which match the where clause.  */
  readonly _allBattlesMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Battle list.  */
  readonly _BattlesMeta: Maybe<_ListMeta>;
  /**  Search for all BattleInfo items which match the where clause.  */
  readonly allBattleInfos: Maybe<ReadonlyArray<Maybe<BattleInfo>>>;
  /**  Search for the BattleInfo item with the matching ID.  */
  readonly BattleInfo: Maybe<BattleInfo>;
  /**  Perform a meta-query on all BattleInfo items which match the where clause.  */
  readonly _allBattleInfosMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BattleInfo list.  */
  readonly _BattleInfosMeta: Maybe<_ListMeta>;
  /**  Search for all Mission items which match the where clause.  */
  readonly allMissions: Maybe<ReadonlyArray<Maybe<Mission>>>;
  /**  Search for the Mission item with the matching ID.  */
  readonly Mission: Maybe<Mission>;
  /**  Perform a meta-query on all Mission items which match the where clause.  */
  readonly _allMissionsMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Mission list.  */
  readonly _MissionsMeta: Maybe<_ListMeta>;
  /**  Search for all Objective items which match the where clause.  */
  readonly allObjectives: Maybe<ReadonlyArray<Maybe<Objective>>>;
  /**  Search for the Objective item with the matching ID.  */
  readonly Objective: Maybe<Objective>;
  /**  Perform a meta-query on all Objective items which match the where clause.  */
  readonly _allObjectivesMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Objective list.  */
  readonly _ObjectivesMeta: Maybe<_ListMeta>;
  /**  Search for all Planet items which match the where clause.  */
  readonly allPlanets: Maybe<ReadonlyArray<Maybe<Planet>>>;
  /**  Search for the Planet item with the matching ID.  */
  readonly Planet: Maybe<Planet>;
  /**  Perform a meta-query on all Planet items which match the where clause.  */
  readonly _allPlanetsMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Planet list.  */
  readonly _PlanetsMeta: Maybe<_ListMeta>;
  /**  Search for all Battlefield items which match the where clause.  */
  readonly allBattlefields: Maybe<ReadonlyArray<Maybe<Battlefield>>>;
  /**  Search for the Battlefield item with the matching ID.  */
  readonly Battlefield: Maybe<Battlefield>;
  /**  Perform a meta-query on all Battlefield items which match the where clause.  */
  readonly _allBattlefieldsMeta: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Battlefield list.  */
  readonly _BattlefieldsMeta: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  readonly _ksListsMeta: Maybe<ReadonlyArray<Maybe<_ListMeta>>>;
  /** The version of the Keystone application serving this API. */
  readonly appVersion: Maybe<Scalars['String']>;
  readonly authenticatedUser: Maybe<User>;
};


export type QueryallUsersArgs = {
  where: Maybe<UserWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortUsersBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_allUsersMetaArgs = {
  where: Maybe<UserWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortUsersBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryallArmiesArgs = {
  where: Maybe<ArmyWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortArmiesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryArmyArgs = {
  where: ArmyWhereUniqueInput;
};


export type Query_allArmiesMetaArgs = {
  where: Maybe<ArmyWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortArmiesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryallUnitsArgs = {
  where: Maybe<UnitWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortUnitsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryUnitArgs = {
  where: UnitWhereUniqueInput;
};


export type Query_allUnitsMetaArgs = {
  where: Maybe<UnitWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortUnitsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryallBattlesArgs = {
  where: Maybe<BattleWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattlesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryBattleArgs = {
  where: BattleWhereUniqueInput;
};


export type Query_allBattlesMetaArgs = {
  where: Maybe<BattleWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattlesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryallBattleInfosArgs = {
  where: Maybe<BattleInfoWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattleInfosBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryBattleInfoArgs = {
  where: BattleInfoWhereUniqueInput;
};


export type Query_allBattleInfosMetaArgs = {
  where: Maybe<BattleInfoWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattleInfosBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryallMissionsArgs = {
  where: Maybe<MissionWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortMissionsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryMissionArgs = {
  where: MissionWhereUniqueInput;
};


export type Query_allMissionsMetaArgs = {
  where: Maybe<MissionWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortMissionsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryallObjectivesArgs = {
  where: Maybe<ObjectiveWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortObjectivesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryObjectiveArgs = {
  where: ObjectiveWhereUniqueInput;
};


export type Query_allObjectivesMetaArgs = {
  where: Maybe<ObjectiveWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortObjectivesBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryallPlanetsArgs = {
  where: Maybe<PlanetWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortPlanetsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryPlanetArgs = {
  where: PlanetWhereUniqueInput;
};


export type Query_allPlanetsMetaArgs = {
  where: Maybe<PlanetWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortPlanetsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryallBattlefieldsArgs = {
  where: Maybe<BattlefieldWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattlefieldsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type QueryBattlefieldArgs = {
  where: BattlefieldWhereUniqueInput;
};


export type Query_allBattlefieldsMetaArgs = {
  where: Maybe<BattlefieldWhereInput>;
  search: Maybe<Scalars['String']>;
  sortBy: Maybe<ReadonlyArray<SortBattlefieldsBy>>;
  orderBy: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};


export type Query_ksListsMetaArgs = {
  where: Maybe<_ksListsMetaInput>;
};

export type Mutation = {
  readonly __typename: 'Mutation';
  /**  Create a single User item.  */
  readonly createUser: Maybe<User>;
  /**  Create multiple User items.  */
  readonly createUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  readonly updateUser: Maybe<User>;
  /**  Update multiple User items by ID.  */
  readonly updateUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  readonly deleteUser: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  readonly deleteUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  /**  Create a single Army item.  */
  readonly createArmy: Maybe<Army>;
  /**  Create multiple Army items.  */
  readonly createArmies: Maybe<ReadonlyArray<Maybe<Army>>>;
  /**  Update a single Army item by ID.  */
  readonly updateArmy: Maybe<Army>;
  /**  Update multiple Army items by ID.  */
  readonly updateArmies: Maybe<ReadonlyArray<Maybe<Army>>>;
  /**  Delete a single Army item by ID.  */
  readonly deleteArmy: Maybe<Army>;
  /**  Delete multiple Army items by ID.  */
  readonly deleteArmies: Maybe<ReadonlyArray<Maybe<Army>>>;
  /**  Create a single Unit item.  */
  readonly createUnit: Maybe<Unit>;
  /**  Create multiple Unit items.  */
  readonly createUnits: Maybe<ReadonlyArray<Maybe<Unit>>>;
  /**  Update a single Unit item by ID.  */
  readonly updateUnit: Maybe<Unit>;
  /**  Update multiple Unit items by ID.  */
  readonly updateUnits: Maybe<ReadonlyArray<Maybe<Unit>>>;
  /**  Delete a single Unit item by ID.  */
  readonly deleteUnit: Maybe<Unit>;
  /**  Delete multiple Unit items by ID.  */
  readonly deleteUnits: Maybe<ReadonlyArray<Maybe<Unit>>>;
  /**  Create a single Battle item.  */
  readonly createBattle: Maybe<Battle>;
  /**  Create multiple Battle items.  */
  readonly createBattles: Maybe<ReadonlyArray<Maybe<Battle>>>;
  /**  Update a single Battle item by ID.  */
  readonly updateBattle: Maybe<Battle>;
  /**  Update multiple Battle items by ID.  */
  readonly updateBattles: Maybe<ReadonlyArray<Maybe<Battle>>>;
  /**  Delete a single Battle item by ID.  */
  readonly deleteBattle: Maybe<Battle>;
  /**  Delete multiple Battle items by ID.  */
  readonly deleteBattles: Maybe<ReadonlyArray<Maybe<Battle>>>;
  /**  Create a single BattleInfo item.  */
  readonly createBattleInfo: Maybe<BattleInfo>;
  /**  Create multiple BattleInfo items.  */
  readonly createBattleInfos: Maybe<ReadonlyArray<Maybe<BattleInfo>>>;
  /**  Update a single BattleInfo item by ID.  */
  readonly updateBattleInfo: Maybe<BattleInfo>;
  /**  Update multiple BattleInfo items by ID.  */
  readonly updateBattleInfos: Maybe<ReadonlyArray<Maybe<BattleInfo>>>;
  /**  Delete a single BattleInfo item by ID.  */
  readonly deleteBattleInfo: Maybe<BattleInfo>;
  /**  Delete multiple BattleInfo items by ID.  */
  readonly deleteBattleInfos: Maybe<ReadonlyArray<Maybe<BattleInfo>>>;
  /**  Create a single Mission item.  */
  readonly createMission: Maybe<Mission>;
  /**  Create multiple Mission items.  */
  readonly createMissions: Maybe<ReadonlyArray<Maybe<Mission>>>;
  /**  Update a single Mission item by ID.  */
  readonly updateMission: Maybe<Mission>;
  /**  Update multiple Mission items by ID.  */
  readonly updateMissions: Maybe<ReadonlyArray<Maybe<Mission>>>;
  /**  Delete a single Mission item by ID.  */
  readonly deleteMission: Maybe<Mission>;
  /**  Delete multiple Mission items by ID.  */
  readonly deleteMissions: Maybe<ReadonlyArray<Maybe<Mission>>>;
  /**  Create a single Objective item.  */
  readonly createObjective: Maybe<Objective>;
  /**  Create multiple Objective items.  */
  readonly createObjectives: Maybe<ReadonlyArray<Maybe<Objective>>>;
  /**  Update a single Objective item by ID.  */
  readonly updateObjective: Maybe<Objective>;
  /**  Update multiple Objective items by ID.  */
  readonly updateObjectives: Maybe<ReadonlyArray<Maybe<Objective>>>;
  /**  Delete a single Objective item by ID.  */
  readonly deleteObjective: Maybe<Objective>;
  /**  Delete multiple Objective items by ID.  */
  readonly deleteObjectives: Maybe<ReadonlyArray<Maybe<Objective>>>;
  /**  Create a single Planet item.  */
  readonly createPlanet: Maybe<Planet>;
  /**  Create multiple Planet items.  */
  readonly createPlanets: Maybe<ReadonlyArray<Maybe<Planet>>>;
  /**  Update a single Planet item by ID.  */
  readonly updatePlanet: Maybe<Planet>;
  /**  Update multiple Planet items by ID.  */
  readonly updatePlanets: Maybe<ReadonlyArray<Maybe<Planet>>>;
  /**  Delete a single Planet item by ID.  */
  readonly deletePlanet: Maybe<Planet>;
  /**  Delete multiple Planet items by ID.  */
  readonly deletePlanets: Maybe<ReadonlyArray<Maybe<Planet>>>;
  /**  Create a single Battlefield item.  */
  readonly createBattlefield: Maybe<Battlefield>;
  /**  Create multiple Battlefield items.  */
  readonly createBattlefields: Maybe<ReadonlyArray<Maybe<Battlefield>>>;
  /**  Update a single Battlefield item by ID.  */
  readonly updateBattlefield: Maybe<Battlefield>;
  /**  Update multiple Battlefield items by ID.  */
  readonly updateBattlefields: Maybe<ReadonlyArray<Maybe<Battlefield>>>;
  /**  Delete a single Battlefield item by ID.  */
  readonly deleteBattlefield: Maybe<Battlefield>;
  /**  Delete multiple Battlefield items by ID.  */
  readonly deleteBattlefields: Maybe<ReadonlyArray<Maybe<Battlefield>>>;
  /**  Authenticate and generate a token for a User with the Password Authentication Strategy.  */
  readonly authenticateUserWithPassword: Maybe<authenticateUserOutput>;
  readonly unauthenticateUser: Maybe<unauthenticateUserOutput>;
  readonly updateAuthenticatedUser: Maybe<User>;
};


export type MutationcreateUserArgs = {
  data: Maybe<UserCreateInput>;
};


export type MutationcreateUsersArgs = {
  data: Maybe<ReadonlyArray<Maybe<UsersCreateInput>>>;
};


export type MutationupdateUserArgs = {
  id: Scalars['ID'];
  data: Maybe<UserUpdateInput>;
};


export type MutationupdateUsersArgs = {
  data: Maybe<ReadonlyArray<Maybe<UsersUpdateInput>>>;
};


export type MutationdeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationdeleteUsersArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationcreateArmyArgs = {
  data: Maybe<ArmyCreateInput>;
};


export type MutationcreateArmiesArgs = {
  data: Maybe<ReadonlyArray<Maybe<ArmiesCreateInput>>>;
};


export type MutationupdateArmyArgs = {
  id: Scalars['ID'];
  data: Maybe<ArmyUpdateInput>;
};


export type MutationupdateArmiesArgs = {
  data: Maybe<ReadonlyArray<Maybe<ArmiesUpdateInput>>>;
};


export type MutationdeleteArmyArgs = {
  id: Scalars['ID'];
};


export type MutationdeleteArmiesArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationcreateUnitArgs = {
  data: Maybe<UnitCreateInput>;
};


export type MutationcreateUnitsArgs = {
  data: Maybe<ReadonlyArray<Maybe<UnitsCreateInput>>>;
};


export type MutationupdateUnitArgs = {
  id: Scalars['ID'];
  data: Maybe<UnitUpdateInput>;
};


export type MutationupdateUnitsArgs = {
  data: Maybe<ReadonlyArray<Maybe<UnitsUpdateInput>>>;
};


export type MutationdeleteUnitArgs = {
  id: Scalars['ID'];
};


export type MutationdeleteUnitsArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationcreateBattleArgs = {
  data: Maybe<BattleCreateInput>;
};


export type MutationcreateBattlesArgs = {
  data: Maybe<ReadonlyArray<Maybe<BattlesCreateInput>>>;
};


export type MutationupdateBattleArgs = {
  id: Scalars['ID'];
  data: Maybe<BattleUpdateInput>;
};


export type MutationupdateBattlesArgs = {
  data: Maybe<ReadonlyArray<Maybe<BattlesUpdateInput>>>;
};


export type MutationdeleteBattleArgs = {
  id: Scalars['ID'];
};


export type MutationdeleteBattlesArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationcreateBattleInfoArgs = {
  data: Maybe<BattleInfoCreateInput>;
};


export type MutationcreateBattleInfosArgs = {
  data: Maybe<ReadonlyArray<Maybe<BattleInfosCreateInput>>>;
};


export type MutationupdateBattleInfoArgs = {
  id: Scalars['ID'];
  data: Maybe<BattleInfoUpdateInput>;
};


export type MutationupdateBattleInfosArgs = {
  data: Maybe<ReadonlyArray<Maybe<BattleInfosUpdateInput>>>;
};


export type MutationdeleteBattleInfoArgs = {
  id: Scalars['ID'];
};


export type MutationdeleteBattleInfosArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationcreateMissionArgs = {
  data: Maybe<MissionCreateInput>;
};


export type MutationcreateMissionsArgs = {
  data: Maybe<ReadonlyArray<Maybe<MissionsCreateInput>>>;
};


export type MutationupdateMissionArgs = {
  id: Scalars['ID'];
  data: Maybe<MissionUpdateInput>;
};


export type MutationupdateMissionsArgs = {
  data: Maybe<ReadonlyArray<Maybe<MissionsUpdateInput>>>;
};


export type MutationdeleteMissionArgs = {
  id: Scalars['ID'];
};


export type MutationdeleteMissionsArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationcreateObjectiveArgs = {
  data: Maybe<ObjectiveCreateInput>;
};


export type MutationcreateObjectivesArgs = {
  data: Maybe<ReadonlyArray<Maybe<ObjectivesCreateInput>>>;
};


export type MutationupdateObjectiveArgs = {
  id: Scalars['ID'];
  data: Maybe<ObjectiveUpdateInput>;
};


export type MutationupdateObjectivesArgs = {
  data: Maybe<ReadonlyArray<Maybe<ObjectivesUpdateInput>>>;
};


export type MutationdeleteObjectiveArgs = {
  id: Scalars['ID'];
};


export type MutationdeleteObjectivesArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationcreatePlanetArgs = {
  data: Maybe<PlanetCreateInput>;
};


export type MutationcreatePlanetsArgs = {
  data: Maybe<ReadonlyArray<Maybe<PlanetsCreateInput>>>;
};


export type MutationupdatePlanetArgs = {
  id: Scalars['ID'];
  data: Maybe<PlanetUpdateInput>;
};


export type MutationupdatePlanetsArgs = {
  data: Maybe<ReadonlyArray<Maybe<PlanetsUpdateInput>>>;
};


export type MutationdeletePlanetArgs = {
  id: Scalars['ID'];
};


export type MutationdeletePlanetsArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationcreateBattlefieldArgs = {
  data: Maybe<BattlefieldCreateInput>;
};


export type MutationcreateBattlefieldsArgs = {
  data: Maybe<ReadonlyArray<Maybe<BattlefieldsCreateInput>>>;
};


export type MutationupdateBattlefieldArgs = {
  id: Scalars['ID'];
  data: Maybe<BattlefieldUpdateInput>;
};


export type MutationupdateBattlefieldsArgs = {
  data: Maybe<ReadonlyArray<Maybe<BattlefieldsUpdateInput>>>;
};


export type MutationdeleteBattlefieldArgs = {
  id: Scalars['ID'];
};


export type MutationdeleteBattlefieldsArgs = {
  ids: Maybe<ReadonlyArray<Scalars['ID']>>;
};


export type MutationauthenticateUserWithPasswordArgs = {
  email: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
};


export type MutationupdateAuthenticatedUserArgs = {
  data: Maybe<UserUpdateInput>;
};

export interface TSGQLDocuments extends Record<string, import('@ts-gql/tag').TypedDocumentNode<import('@ts-gql/tag').BaseDocumentTypes>> {}