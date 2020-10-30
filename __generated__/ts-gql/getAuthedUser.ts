// ts-gql-integrity:9acbc653cf9764f4f05242bb3eaa22c7
/*
ts-gql-meta-begin
{
  "hash": "c2222111c6af7df07fc872daa2864cf5"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type getAuthedUserQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


type getAuthedUserQuery = (
  { readonly __typename: 'Query' }
  & { readonly authenticatedUser: SchemaTypes.Maybe<(
    { readonly __typename: 'User' }
    & Pick<SchemaTypes.User, 'id'>
  )> }
);


export type type = TypedDocumentNode<{
  type: "query";
  result: getAuthedUserQuery;
  variables: getAuthedUserQueryVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    getAuthedUser: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"getAuthedUser\"},\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"authenticatedUser\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]}]}}]}}]}")
