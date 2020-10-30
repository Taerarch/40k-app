// ts-gql-integrity:41363680890c9e6baf9c462e6b49a88d
/*
ts-gql-meta-begin
{
  "hash": "f2b032311aebec1e11835cd41a03bd0a"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type getAvailableSecondariesQueryVariables = SchemaTypes.Exact<{
  missionID: SchemaTypes.Scalars['ID'];
}>;


type getAvailableSecondariesQuery = (
  { readonly __typename: 'Query' }
  & { readonly allObjectiveOptions: SchemaTypes.Maybe<ReadonlyArray<SchemaTypes.Maybe<(
    { readonly __typename: 'ObjectiveOption' }
    & Pick<SchemaTypes.ObjectiveOption, 'id' | 'name' | 'category'>
  )>>>, readonly Mission: SchemaTypes.Maybe<(
    { readonly __typename: 'Mission' }
    & Pick<SchemaTypes.Mission, 'id'>
    & { readonly secondary: SchemaTypes.Maybe<(
      { readonly __typename: 'ObjectiveOption' }
      & Pick<SchemaTypes.ObjectiveOption, 'id' | 'name' | 'category'>
    )> }
  )> }
);


export type type = TypedDocumentNode<{
  type: "query";
  result: getAvailableSecondariesQuery;
  variables: getAvailableSecondariesQueryVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    getAvailableSecondaries: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"getAvailableSecondaries\"},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"missionID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"allObjectiveOptions\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"where\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"category_not\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"missionSecondary\",\"block\":false}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"category\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"Mission\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"where\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"missionID\"}}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"secondary\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"category\"},\"arguments\":[],\"directives\":[]}]}}]}}]}}]}")
