/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
      id
      name
      sections {
        items {
          id
          sessionID
          start
          end
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
      id
      name
      sections {
        items {
          id
          sessionID
          start
          end
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
      id
      name
      sections {
        items {
          id
          sessionID
          start
          end
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSessionSection = /* GraphQL */ `
  subscription OnCreateSessionSection(
    $filter: ModelSubscriptionSessionSectionFilterInput
  ) {
    onCreateSessionSection(filter: $filter) {
      id
      sessionID
      start
      end
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSessionSection = /* GraphQL */ `
  subscription OnUpdateSessionSection(
    $filter: ModelSubscriptionSessionSectionFilterInput
  ) {
    onUpdateSessionSection(filter: $filter) {
      id
      sessionID
      start
      end
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSessionSection = /* GraphQL */ `
  subscription OnDeleteSessionSection(
    $filter: ModelSubscriptionSessionSectionFilterInput
  ) {
    onDeleteSessionSection(filter: $filter) {
      id
      sessionID
      start
      end
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
