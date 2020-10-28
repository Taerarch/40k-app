// ts-gql-integrity:37e7ada4c15528202d88bb980f6fa9bc
/*
ts-gql-meta-begin
{
  "hash": "76a99fe9d6afae1b65ad9007b2f7ef36"
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
