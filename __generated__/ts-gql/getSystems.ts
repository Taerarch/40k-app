// ts-gql-integrity:f263846f7c919da27af4b4a8b45f448f
/*
ts-gql-meta-begin
{
  "hash": "d60882c109f8562bf3ae5365d416ca80"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type getSystemsQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


type getSystemsQuery = (
  { readonly __typename: 'Query' }
  & { readonly allPlanets: SchemaTypes.Maybe<ReadonlyArray<SchemaTypes.Maybe<(
    { readonly __typename: 'Planet' }
    & Pick<SchemaTypes.Planet, 'id' | 'name'>
    & { readonly battlefields: ReadonlyArray<(
      { readonly __typename: 'Battlefield' }
      & Pick<SchemaTypes.Battlefield, 'id' | 'gridReference'>
      & { readonly controller: SchemaTypes.Maybe<(
        { readonly __typename: 'Army' }
        & Pick<SchemaTypes.Army, 'id' | 'name'>
      )> }
    )> }
  )>>> }
);


export type type = TypedDocumentNode<{
  type: "query";
  result: getSystemsQuery;
  variables: getSystemsQueryVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    getSystems: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"getSystems\"},\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"allPlanets\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"battlefields\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"gridReference\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"controller\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}]}}]}}]}")
