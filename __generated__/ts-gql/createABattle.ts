// ts-gql-integrity:10f8837b588d7848856c06bc8c8d9f12
/*
ts-gql-meta-begin
{
  "hash": "5bf966e3562f87e2ca3ce356b1ff6d2e"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type createABattleMutationVariables = SchemaTypes.Exact<{
  points: SchemaTypes.Scalars['Int'];
  description: SchemaTypes.Scalars['String'];
  missionID: SchemaTypes.Scalars['ID'];
  army1ID: SchemaTypes.Scalars['ID'];
  army2ID: SchemaTypes.Scalars['ID'];
  startingCP: SchemaTypes.Scalars['Int'];
}>;


type createABattleMutation = (
  { readonly __typename: 'Mutation' }
  & { readonly createBattle: SchemaTypes.Maybe<(
    { readonly __typename: 'Battle' }
    & Pick<SchemaTypes.Battle, 'id'>
  )> }
);


export type type = TypedDocumentNode<{
  type: "mutation";
  result: createABattleMutation;
  variables: createABattleMutationVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    createABattle: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"name\":{\"kind\":\"Name\",\"value\":\"createABattle\"},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"points\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"description\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"missionID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"army1ID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"army2ID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"startingCP\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"createBattle\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"data\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"points\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"points\"}}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"description\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"description\"}}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"mission\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"connect\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"missionID\"}}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"status\"},\"value\":{\"kind\":\"EnumValue\",\"value\":\"planning\"}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"army1\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"army\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"connect\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"army1ID\"}}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"primary\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"Primary\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"CP\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"startingCP\"}}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"secondaries\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ListValue\",\"values\":[{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]},{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]},{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]}]}}]}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"army2\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"army\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"connect\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"army2ID\"}}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"primary\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"Primary\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"CP\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"startingCP\"}}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"secondaries\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ListValue\",\"values\":[{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]},{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]},{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]}]}}]}}]}}]}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]}]}}]}}]}")
