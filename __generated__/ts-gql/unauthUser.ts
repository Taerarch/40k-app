// ts-gql-integrity:dacd78bb7abf254ac6f1350f7873eee0
/*
ts-gql-meta-begin
{
  "hash": "5c7a98470664f96acaea8d4d36234546"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type unauthUserMutationVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


type unauthUserMutation = (
  { readonly __typename: 'Mutation' }
  & { readonly unauthenticateUser: SchemaTypes.Maybe<(
    { readonly __typename: 'unauthenticateUserOutput' }
    & Pick<SchemaTypes.unauthenticateUserOutput, 'success'>
  )> }
);


export type type = TypedDocumentNode<{
  type: "mutation";
  result: unauthUserMutation;
  variables: unauthUserMutationVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    unauthUser: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"name\":{\"kind\":\"Name\",\"value\":\"unauthUser\"},\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"unauthenticateUser\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"success\"},\"arguments\":[],\"directives\":[]}]}}]}}]}")
