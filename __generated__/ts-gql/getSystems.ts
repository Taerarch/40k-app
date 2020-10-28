// ts-gql-integrity:3fb901049ca65918bc5fe28ac1224920
/*
ts-gql-meta-begin
{
  "hash": "6723300c57a1650102288df42b2c1e06"
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
