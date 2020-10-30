// ts-gql-integrity:58fd74bd5aa4ba2ef61cb461513bd233
/*
ts-gql-meta-begin
{
  "hash": "71afedb5b061a9a20db015c83725f4ad"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type preBattleUpdateInfoMutationVariables = SchemaTypes.Exact<{
  armyInfoID: SchemaTypes.Scalars['ID'];
  notes: SchemaTypes.Scalars['String'];
}>;


type preBattleUpdateInfoMutation = (
  { readonly __typename: 'Mutation' }
  & { readonly updateBattleInfo: SchemaTypes.Maybe<(
    { readonly __typename: 'BattleInfo' }
    & Pick<SchemaTypes.BattleInfo, 'id' | 'notes'>
  )> }
);


export type type = TypedDocumentNode<{
  type: "mutation";
  result: preBattleUpdateInfoMutation;
  variables: preBattleUpdateInfoMutationVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    preBattleUpdateInfo: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"name\":{\"kind\":\"Name\",\"value\":\"preBattleUpdateInfo\"},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"armyInfoID\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"notes\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"updateBattleInfo\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"armyInfoID\"}}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"data\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"notes\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"notes\"}}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"notes\"},\"arguments\":[],\"directives\":[]}]}}]}}]}")
