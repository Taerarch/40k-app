// ts-gql-integrity:56a73c81e4ea970d9f2facfa0faa91f0
/*
ts-gql-meta-begin
{
  "hash": "91bfe751954d012807380bb8866efe5a"
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
