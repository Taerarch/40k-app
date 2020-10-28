// ts-gql-integrity:e8edeb4ef1ae1863e60308f79d3f32ca
/*
ts-gql-meta-begin
{
  "hash": "de6d9fb0e2224d0a4cd7091eea1e7786"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type Army_infoFragment = (
  { readonly __typename: 'BattleInfo' }
  & Pick<SchemaTypes.BattleInfo, 'id' | 'CP'>
  & { readonly primary: SchemaTypes.Maybe<(
    { readonly __typename: 'Objective' }
    & Pick<SchemaTypes.Objective, 'id' | 'name' | 'score'>
  )>, readonly secondaries: ReadonlyArray<(
    { readonly __typename: 'Objective' }
    & Pick<SchemaTypes.Objective, 'id' | 'name' | 'score'>
  )>, readonly army: SchemaTypes.Maybe<(
    { readonly __typename: 'Army' }
    & Pick<SchemaTypes.Army, 'id' | 'name' | 'faction'>
    & { readonly owner: SchemaTypes.Maybe<(
      { readonly __typename: 'User' }
      & Pick<SchemaTypes.User, 'id' | 'name'>
    )> }
  )> }
);


export type type = TypedDocumentNode<{
  type: "fragment";
  result: Army_infoFragment;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    Army_info: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Army_info\"},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"BattleInfo\"}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"CP\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"primary\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"secondaries\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"army\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"faction\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"owner\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}]}}]}")