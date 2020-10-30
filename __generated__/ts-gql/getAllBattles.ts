// ts-gql-integrity:93b2f5fece185d25ab1001fa5a0bec83
/*
ts-gql-meta-begin
{
  "hash": "29ebe37507a8780b5d05faa65329c5f7"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type getAllBattlesQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


type getAllBattlesQuery = (
  { readonly __typename: 'Query' }
  & { readonly allBattles: SchemaTypes.Maybe<ReadonlyArray<SchemaTypes.Maybe<(
    { readonly __typename: 'Battle' }
    & Pick<SchemaTypes.Battle, 'id' | 'status'>
    & { readonly army1: SchemaTypes.Maybe<(
      { readonly __typename: 'BattleInfo' }
      & Pick<SchemaTypes.BattleInfo, 'id'>
      & { readonly primary: SchemaTypes.Maybe<(
        { readonly __typename: 'Objective' }
        & Pick<SchemaTypes.Objective, 'id' | 'score'>
      )>, readonly secondaries: ReadonlyArray<(
        { readonly __typename: 'Objective' }
        & Pick<SchemaTypes.Objective, 'id' | 'score'>
      )>, readonly army: SchemaTypes.Maybe<(
        { readonly __typename: 'Army' }
        & Pick<SchemaTypes.Army, 'id' | 'faction' | 'name'>
        & { readonly owner: SchemaTypes.Maybe<(
          { readonly __typename: 'User' }
          & Pick<SchemaTypes.User, 'id' | 'name'>
        )> }
      )> }
    )>, readonly army2: SchemaTypes.Maybe<(
      { readonly __typename: 'BattleInfo' }
      & Pick<SchemaTypes.BattleInfo, 'id'>
      & { readonly primary: SchemaTypes.Maybe<(
        { readonly __typename: 'Objective' }
        & Pick<SchemaTypes.Objective, 'id' | 'score'>
      )>, readonly secondaries: ReadonlyArray<(
        { readonly __typename: 'Objective' }
        & Pick<SchemaTypes.Objective, 'id' | 'score'>
      )>, readonly army: SchemaTypes.Maybe<(
        { readonly __typename: 'Army' }
        & Pick<SchemaTypes.Army, 'id' | 'faction' | 'name'>
        & { readonly owner: SchemaTypes.Maybe<(
          { readonly __typename: 'User' }
          & Pick<SchemaTypes.User, 'id' | 'name'>
        )> }
      )> }
    )> }
  )>>> }
);


export type type = TypedDocumentNode<{
  type: "query";
  result: getAllBattlesQuery;
  variables: getAllBattlesQueryVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    getAllBattles: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"getAllBattles\"},\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"allBattles\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"status\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"army1\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"Army_info_2\"},\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"army2\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"Army_info_2\"},\"directives\":[]}]}}]}}]}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Army_info_2\"},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"BattleInfo\"}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"primary\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"secondaries\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"army\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"faction\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"owner\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}]}}]}")
