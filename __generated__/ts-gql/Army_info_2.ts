// ts-gql-integrity:7a14078e3b0b5d905c10794cc453af3e
/*
ts-gql-meta-begin
{
  "hash": "b9dc27475d86ec09a500d30865f322cb"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type Army_info_2Fragment = (
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
);


export type type = TypedDocumentNode<{
  type: "fragment";
  result: Army_info_2Fragment;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    Army_info_2: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Army_info_2\"},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"BattleInfo\"}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"primary\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"secondaries\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"army\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"faction\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"owner\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}]}}]}")
