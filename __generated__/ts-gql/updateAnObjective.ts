// ts-gql-integrity:61308d5cb8609412b3aa9fab170e3f5c
/*
ts-gql-meta-begin
{
  "hash": "54401eeac57ca64cdcfe4fd4c78322cb"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type updateAnObjectiveMutationVariables = SchemaTypes.Exact<{
  objID: SchemaTypes.Scalars['ID'];
  rulesID: SchemaTypes.Scalars['ID'];
}>;


type updateAnObjectiveMutation = (
  { readonly __typename: 'Mutation' }
  & { readonly updateObjective: SchemaTypes.Maybe<(
    { readonly __typename: 'Objective' }
    & Pick<SchemaTypes.Objective, 'id'>
  )> }
);


export type type = TypedDocumentNode<{
  type: "mutation";
  result: updateAnObjectiveMutation;
  variables: updateAnObjectiveMutationVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    updateAnObjective: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"name\":{\"kind\":\"Name\",\"value\":\"updateAnObjective\"},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"objID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"rulesID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"updateObjective\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"objID\"}}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"data\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"selection\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"connect\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"rulesID\"}}}]}}]}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]}]}}]}}]}")
