/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
export const createSessionSection = /* GraphQL */ `
  mutation CreateSessionSection(
    $input: CreateSessionSectionInput!
    $condition: ModelSessionSectionConditionInput
  ) {
    createSessionSection(input: $input, condition: $condition) {
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
export const updateSessionSection = /* GraphQL */ `
  mutation UpdateSessionSection(
    $input: UpdateSessionSectionInput!
    $condition: ModelSessionSectionConditionInput
  ) {
    updateSessionSection(input: $input, condition: $condition) {
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
export const deleteSessionSection = /* GraphQL */ `
  mutation DeleteSessionSection(
    $input: DeleteSessionSectionInput!
    $condition: ModelSessionSectionConditionInput
  ) {
    deleteSessionSection(input: $input, condition: $condition) {
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
export const createSession2 = /* GraphQL */ `
  mutation CreateSession2(
    $input: CreateSession2Input!
    $condition: ModelSession2ConditionInput
  ) {
    createSession2(input: $input, condition: $condition) {
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
export const updateSession2 = /* GraphQL */ `
  mutation UpdateSession2(
    $input: UpdateSession2Input!
    $condition: ModelSession2ConditionInput
  ) {
    updateSession2(input: $input, condition: $condition) {
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
export const deleteSession2 = /* GraphQL */ `
  mutation DeleteSession2(
    $input: DeleteSession2Input!
    $condition: ModelSession2ConditionInput
  ) {
    deleteSession2(input: $input, condition: $condition) {
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
export const createSessionSection2 = /* GraphQL */ `
  mutation CreateSessionSection2(
    $input: CreateSessionSection2Input!
    $condition: ModelSessionSection2ConditionInput
  ) {
    createSessionSection2(input: $input, condition: $condition) {
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
export const updateSessionSection2 = /* GraphQL */ `
  mutation UpdateSessionSection2(
    $input: UpdateSessionSection2Input!
    $condition: ModelSessionSection2ConditionInput
  ) {
    updateSessionSection2(input: $input, condition: $condition) {
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
export const deleteSessionSection2 = /* GraphQL */ `
  mutation DeleteSessionSection2(
    $input: DeleteSessionSection2Input!
    $condition: ModelSessionSection2ConditionInput
  ) {
    deleteSessionSection2(input: $input, condition: $condition) {
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
