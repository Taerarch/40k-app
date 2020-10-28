// ts-gql-integrity:c73d1c9e805acd997c2fc157fffcc633
/*
ts-gql-meta-begin
{
  "hash": "2e45ae7d12794c1ef337287d8e1cbe31"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type getAuthedUser1QueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


type getAuthedUser1Query = (
  { readonly __typename: 'Query' }
  & { readonly authenticatedUser: SchemaTypes.Maybe<(
    { readonly __typename: 'User' }
    & Pick<SchemaTypes.User, 'id' | 'name'>
  )> }
);


export type type = TypedDocumentNode<{
  type: "query";
  result: getAuthedUser1Query;
  variables: getAuthedUser1QueryVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    getAuthedUser1: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"getAuthedUser1\"},\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"authenticatedUser\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}]}")
