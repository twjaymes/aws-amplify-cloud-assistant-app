/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onCreateConversation(filter: $filter, owner: $owner) {
      id
      name
      user
      description
      createdAt
      utterances {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onUpdateConversation(filter: $filter, owner: $owner) {
      id
      name
      user
      description
      createdAt
      utterances {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onDeleteConversation(filter: $filter, owner: $owner) {
      id
      name
      user
      description
      createdAt
      utterances {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateUtterance = /* GraphQL */ `
  subscription OnCreateUtterance(
    $filter: ModelSubscriptionUtteranceFilterInput
    $owner: String
  ) {
    onCreateUtterance(filter: $filter, owner: $owner) {
      id
      text
      author
      conversationId
      data
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUtterance = /* GraphQL */ `
  subscription OnUpdateUtterance(
    $filter: ModelSubscriptionUtteranceFilterInput
    $owner: String
  ) {
    onUpdateUtterance(filter: $filter, owner: $owner) {
      id
      text
      author
      conversationId
      data
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUtterance = /* GraphQL */ `
  subscription OnDeleteUtterance(
    $filter: ModelSubscriptionUtteranceFilterInput
    $owner: String
  ) {
    onDeleteUtterance(filter: $filter, owner: $owner) {
      id
      text
      author
      conversationId
      data
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
