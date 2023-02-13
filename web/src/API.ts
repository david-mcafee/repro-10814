/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSessionInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelSessionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Session = {
  __typename: "Session",
  id: string,
  name?: string | null,
  sections?: ModelSessionSectionConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSessionSectionConnection = {
  __typename: "ModelSessionSectionConnection",
  items:  Array<SessionSection | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SessionSection = {
  __typename: "SessionSection",
  id: string,
  sessionID: string,
  start: number,
  end: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSessionInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteSessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionSectionInput = {
  id?: string | null,
  sessionID: string,
  start: number,
  end: number,
  _version?: number | null,
};

export type ModelSessionSectionConditionInput = {
  sessionID?: ModelIDInput | null,
  start?: ModelFloatInput | null,
  end?: ModelFloatInput | null,
  and?: Array< ModelSessionSectionConditionInput | null > | null,
  or?: Array< ModelSessionSectionConditionInput | null > | null,
  not?: ModelSessionSectionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSessionSectionInput = {
  id: string,
  sessionID?: string | null,
  start?: number | null,
  end?: number | null,
  _version?: number | null,
};

export type DeleteSessionSectionInput = {
  id: string,
  _version?: number | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSessionSectionFilterInput = {
  id?: ModelIDInput | null,
  sessionID?: ModelIDInput | null,
  start?: ModelFloatInput | null,
  end?: ModelFloatInput | null,
  and?: Array< ModelSessionSectionFilterInput | null > | null,
  or?: Array< ModelSessionSectionFilterInput | null > | null,
  not?: ModelSessionSectionFilterInput | null,
};

export type ModelFloatKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSessionSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sessionID?: ModelSubscriptionIDInput | null,
  start?: ModelSubscriptionFloatInput | null,
  end?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionSessionSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionSectionFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    name?: string | null,
    sections?:  {
      __typename: "ModelSessionSectionConnection",
      items:  Array< {
        __typename: "SessionSection",
        id: string,
        sessionID: string,
        start: number,
        end: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    name?: string | null,
    sections?:  {
      __typename: "ModelSessionSectionConnection",
      items:  Array< {
        __typename: "SessionSection",
        id: string,
        sessionID: string,
        start: number,
        end: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    name?: string | null,
    sections?:  {
      __typename: "ModelSessionSectionConnection",
      items:  Array< {
        __typename: "SessionSection",
        id: string,
        sessionID: string,
        start: number,
        end: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSessionSectionMutationVariables = {
  input: CreateSessionSectionInput,
  condition?: ModelSessionSectionConditionInput | null,
};

export type CreateSessionSectionMutation = {
  createSessionSection?:  {
    __typename: "SessionSection",
    id: string,
    sessionID: string,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSessionSectionMutationVariables = {
  input: UpdateSessionSectionInput,
  condition?: ModelSessionSectionConditionInput | null,
};

export type UpdateSessionSectionMutation = {
  updateSessionSection?:  {
    __typename: "SessionSection",
    id: string,
    sessionID: string,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSessionSectionMutationVariables = {
  input: DeleteSessionSectionInput,
  condition?: ModelSessionSectionConditionInput | null,
};

export type DeleteSessionSectionMutation = {
  deleteSessionSection?:  {
    __typename: "SessionSection",
    id: string,
    sessionID: string,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    name?: string | null,
    sections?:  {
      __typename: "ModelSessionSectionConnection",
      items:  Array< {
        __typename: "SessionSection",
        id: string,
        sessionID: string,
        start: number,
        end: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      name?: string | null,
      sections?:  {
        __typename: "ModelSessionSectionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionsQuery = {
  syncSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      name?: string | null,
      sections?:  {
        __typename: "ModelSessionSectionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSessionSectionQueryVariables = {
  id: string,
};

export type GetSessionSectionQuery = {
  getSessionSection?:  {
    __typename: "SessionSection",
    id: string,
    sessionID: string,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSessionSectionsQueryVariables = {
  filter?: ModelSessionSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionSectionsQuery = {
  listSessionSections?:  {
    __typename: "ModelSessionSectionConnection",
    items:  Array< {
      __typename: "SessionSection",
      id: string,
      sessionID: string,
      start: number,
      end: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSessionSectionsQueryVariables = {
  filter?: ModelSessionSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionSectionsQuery = {
  syncSessionSections?:  {
    __typename: "ModelSessionSectionConnection",
    items:  Array< {
      __typename: "SessionSection",
      id: string,
      sessionID: string,
      start: number,
      end: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SessionSectionsBySessionIDAndStartQueryVariables = {
  sessionID: string,
  start?: ModelFloatKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionSectionsBySessionIDAndStartQuery = {
  sessionSectionsBySessionIDAndStart?:  {
    __typename: "ModelSessionSectionConnection",
    items:  Array< {
      __typename: "SessionSection",
      id: string,
      sessionID: string,
      start: number,
      end: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    name?: string | null,
    sections?:  {
      __typename: "ModelSessionSectionConnection",
      items:  Array< {
        __typename: "SessionSection",
        id: string,
        sessionID: string,
        start: number,
        end: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    name?: string | null,
    sections?:  {
      __typename: "ModelSessionSectionConnection",
      items:  Array< {
        __typename: "SessionSection",
        id: string,
        sessionID: string,
        start: number,
        end: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    name?: string | null,
    sections?:  {
      __typename: "ModelSessionSectionConnection",
      items:  Array< {
        __typename: "SessionSection",
        id: string,
        sessionID: string,
        start: number,
        end: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSessionSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionSectionFilterInput | null,
};

export type OnCreateSessionSectionSubscription = {
  onCreateSessionSection?:  {
    __typename: "SessionSection",
    id: string,
    sessionID: string,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSessionSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionSectionFilterInput | null,
};

export type OnUpdateSessionSectionSubscription = {
  onUpdateSessionSection?:  {
    __typename: "SessionSection",
    id: string,
    sessionID: string,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSessionSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionSectionFilterInput | null,
};

export type OnDeleteSessionSectionSubscription = {
  onDeleteSessionSection?:  {
    __typename: "SessionSection",
    id: string,
    sessionID: string,
    start: number,
    end: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
