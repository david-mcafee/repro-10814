/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sections {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSessions = /* GraphQL */ `
  query SyncSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        sections {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSessionSection = /* GraphQL */ `
  query GetSessionSection($id: ID!) {
    getSessionSection(id: $id) {
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
export const listSessionSections = /* GraphQL */ `
  query ListSessionSections(
    $filter: ModelSessionSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncSessionSections = /* GraphQL */ `
  query SyncSessionSections(
    $filter: ModelSessionSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessionSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getSession2 = /* GraphQL */ `
  query GetSession2($id: ID!) {
    getSession2(id: $id) {
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
export const listSession2s = /* GraphQL */ `
  query ListSession2s(
    $filter: ModelSession2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSession2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sections {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSession2s = /* GraphQL */ `
  query SyncSession2s(
    $filter: ModelSession2FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSession2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        sections {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSessionSection2 = /* GraphQL */ `
  query GetSessionSection2($id: ID!) {
    getSessionSection2(id: $id) {
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
export const listSessionSection2s = /* GraphQL */ `
  query ListSessionSection2s(
    $filter: ModelSessionSection2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionSection2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncSessionSection2s = /* GraphQL */ `
  query SyncSessionSection2s(
    $filter: ModelSessionSection2FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessionSection2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const sessionSectionsBySessionIDAndStart = /* GraphQL */ `
  query SessionSectionsBySessionIDAndStart(
    $sessionID: ID!
    $start: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSessionSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionSectionsBySessionIDAndStart(
      sessionID: $sessionID
      start: $start
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const sessionSection2sBySessionID = /* GraphQL */ `
  query SessionSection2sBySessionID(
    $sessionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionSection2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionSection2sBySessionID(
      sessionID: $sessionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
