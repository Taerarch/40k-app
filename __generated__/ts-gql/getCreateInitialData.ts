// ts-gql-integrity:e00056a49ec496e99aa2d9824df897e5
/*
ts-gql-meta-begin
{
  "hash": "dd9099938c5972b45f5f4bd06691ebf4"
}
ts-gql-meta-end
*/

import * as SchemaTypes from "./@schema";
import { TypedDocumentNode } from "@ts-gql/tag";

type getCreateInitialDataQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


type getCreateInitialDataQuery = (
  { readonly __typename: 'Query' }
  & { readonly allMissions: SchemaTypes.Maybe<ReadonlyArray<SchemaTypes.Maybe<(
    { readonly __typename: 'Mission' }
    & Pick<SchemaTypes.Mission, 'id' | 'name' | 'forceSize'>
  )>>>, readonly allArmies: SchemaTypes.Maybe<ReadonlyArray<SchemaTypes.Maybe<(
    { readonly __typename: 'Army' }
    & Pick<SchemaTypes.Army, 'id' | 'name' | 'faction'>
    & { readonly owner: SchemaTypes.Maybe<(
      { readonly __typename: 'User' }
      & Pick<SchemaTypes.User, 'id' | 'name'>
    )> }
  )>>> }
);


export type type = TypedDocumentNode<{
  type: "query";
  result: getCreateInitialDataQuery;
  variables: getCreateInitialDataQueryVariables;
  documents: SchemaTypes.TSGQLDocuments;
}>

declare module "./@schema" {
  interface TSGQLDocuments {
    getCreateInitialData: type;
  }
}

export const document = JSON.parse("{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"getCreateInitialData\"},\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"allMissions\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"forceSize\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"allArmies\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"faction\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"owner\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}]}}]}")
