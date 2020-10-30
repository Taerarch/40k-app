// ts-gql-integrity:2476be721cbe5a4502d82b76242356fb
/*
ts-gql-meta-begin
{
  "hash": "6483df49942a1a770a3669b1b202efee"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type getBattleQueryVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['ID'];
}>;


type getBattleQuery = (
  { readonly __typename: 'Query' }
  & { readonly Battle: SchemaTypes.Maybe<(
    { readonly __typename: 'Battle' }
    & Pick<SchemaTypes.Battle, 'status' | 'id'>
    & { readonly army1: SchemaTypes.Maybe<(
      { readonly __typename: 'BattleInfo' }
      & Pick<SchemaTypes.BattleInfo, 'id' | 'CP' | 'notes'>
      & { readonly primary: SchemaTypes.Maybe<(
        { readonly __typename: 'Objective' }
        & Pick<SchemaTypes.Objective, 'id' | 'score'>
        & { readonly selection: SchemaTypes.Maybe<(
          { readonly __typename: 'ObjectiveOption' }
          & Pick<SchemaTypes.ObjectiveOption, 'id' | 'name'>
        )> }
      )>, readonly secondaries: ReadonlyArray<(
        { readonly __typename: 'Objective' }
        & Pick<SchemaTypes.Objective, 'id' | 'score'>
        & { readonly selection: SchemaTypes.Maybe<(
          { readonly __typename: 'ObjectiveOption' }
          & Pick<SchemaTypes.ObjectiveOption, 'id' | 'name' | 'category'>
        )> }
      )>, readonly army: SchemaTypes.Maybe<(
        { readonly __typename: 'Army' }
        & Pick<SchemaTypes.Army, 'id' | 'name' | 'faction'>
        & { readonly owner: SchemaTypes.Maybe<(
          { readonly __typename: 'User' }
          & Pick<SchemaTypes.User, 'id' | 'name'>
        )> }
      )> }
    )>, readonly army2: SchemaTypes.Maybe<(
      { readonly __typename: 'BattleInfo' }
      & Pick<SchemaTypes.BattleInfo, 'id' | 'CP' | 'notes'>
      & { readonly primary: SchemaTypes.Maybe<(
        { readonly __typename: 'Objective' }
        & Pick<SchemaTypes.Objective, 'id' | 'score'>
        & { readonly selection: SchemaTypes.Maybe<(
          { readonly __typename: 'ObjectiveOption' }
          & Pick<SchemaTypes.ObjectiveOption, 'id' | 'name'>
        )> }
      )>, readonly secondaries: ReadonlyArray<(
        { readonly __typename: 'Objective' }
        & Pick<SchemaTypes.Objective, 'id' | 'score'>
        & { readonly selection: SchemaTypes.Maybe<(
          { readonly __typename: 'ObjectiveOption' }
          & Pick<SchemaTypes.ObjectiveOption, 'id' | 'name' | 'category'>
        )> }
      )>, readonly army: SchemaTypes.Maybe<(
        { readonly __typename: 'Army' }
        & Pick<SchemaTypes.Army, 'id' | 'name' | 'faction'>
        & { readonly owner: SchemaTypes.Maybe<(
          { readonly __typename: 'User' }
          & Pick<SchemaTypes.User, 'id' | 'name'>
        )> }
      )> }
    )> }
  )> }
);


export type type = TypedDocumentNode<{
  type: "query";
  result: getBattleQuery;
  variables: getBattleQueryVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    getBattle: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"getBattle\"},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"Battle\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"where\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"}}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"status\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"army1\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"Army_info\"},\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"army2\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"Army_info\"},\"directives\":[]}]}}]}}]}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Army_info\"},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"BattleInfo\"}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"CP\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"notes\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"primary\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"selection\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"secondaries\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"selection\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"category\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"army\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"faction\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"owner\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}]}}]}")
