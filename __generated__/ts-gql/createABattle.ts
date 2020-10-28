// ts-gql-integrity:71d023133e30a62588983072e0a1650b
/*
ts-gql-meta-begin
{
  "hash": "aea4c0cdca251512bee2ede717736a50"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type createABattleMutationVariables = SchemaTypes.Exact<{
  points: SchemaTypes.Scalars['Int'];
  description: SchemaTypes.Scalars['String'];
  mission: SchemaTypes.Maybe<SchemaTypes.Scalars['String']>;
  army1ID: SchemaTypes.Scalars['ID'];
  army2ID: SchemaTypes.Scalars['ID'];
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

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"name\":{\"kind\":\"Name\",\"value\":\"createABattle\"},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"points\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"description\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"mission\"}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"army1ID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"army2ID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"createBattle\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"data\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"points\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"points\"}}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"description\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"description\"}}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"mission\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"mission\"}}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"status\"},\"value\":{\"kind\":\"EnumValue\",\"value\":\"planning\"}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"army1\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"army\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"connect\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"army1ID\"}}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"primary\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"Primary\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"secondaries\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ListValue\",\"values\":[{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]},{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]},{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]}]}}]}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"army2\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"army\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"connect\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"army2ID\"}}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"primary\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"Primary\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]}}]}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"secondaries\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"create\"},\"value\":{\"kind\":\"ListValue\",\"values\":[{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]},{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]},{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"value\":{\"kind\":\"StringValue\",\"value\":\"\",\"block\":false}},{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"score\"},\"value\":{\"kind\":\"IntValue\",\"value\":\"0\"}}]}]}}]}}]}}]}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]}]}}]}}]}")
