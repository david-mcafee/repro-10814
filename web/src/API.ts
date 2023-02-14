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

export type CreateSession2Input = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelSession2ConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSession2ConditionInput | null > | null,
  or?: Array< ModelSession2ConditionInput | null > | null,
  not?: ModelSession2ConditionInput | null,
};

export type Session2 = {
  __typename: "Session2",
  id: string,
  name?: string | null,
  sections?: ModelSessionSectionConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSession2Input = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteSession2Input = {
  id: string,
  _version?: number | null,
};

export type CreateSessionSection2Input = {
  id?: string | null,
  sessionID: string,
  start: number,
  end: number,
  _version?: number | null,
};

export type ModelSessionSection2ConditionInput = {
  sessionID?: ModelIDInput | null,
  start?: ModelFloatInput | null,
  end?: ModelFloatInput | null,
  and?: Array< ModelSessionSection2ConditionInput | null > | null,
  or?: Array< ModelSessionSection2ConditionInput | null > | null,
  not?: ModelSessionSection2ConditionInput | null,
};

export type SessionSection2 = {
  __typename: "SessionSection2",
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

export type UpdateSessionSection2Input = {
  id: string,
  sessionID?: string | null,
  start?: number | null,
  end?: number | null,
  _version?: number | null,
};

export type DeleteSessionSection2Input = {
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

export type ModelSession2FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSession2FilterInput | null > | null,
  or?: Array< ModelSession2FilterInput | null > | null,
  not?: ModelSession2FilterInput | null,
};

export type ModelSession2Connection = {
  __typename: "ModelSession2Connection",
  items:  Array<Session2 | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSessionSection2FilterInput = {
  id?: ModelIDInput | null,
  sessionID?: ModelIDInput | null,
  start?: ModelFloatInput | null,
  end?: ModelFloatInput | null,
  and?: Array< ModelSessionSection2FilterInput | null > | null,
  or?: Array< ModelSessionSection2FilterInput | null > | null,
  not?: ModelSessionSection2FilterInput | null,
};

export type ModelSessionSection2Connection = {
  __typename: "ModelSessionSection2Connection",
  items:  Array<SessionSection2 | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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

export type ModelSubscriptionSession2FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSession2FilterInput | null > | null,
  or?: Array< ModelSubscriptionSession2FilterInput | null > | null,
};

export type ModelSubscriptionSessionSection2FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sessionID?: ModelSubscriptionIDInput | null,
  start?: ModelSubscriptionFloatInput | null,
  end?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionSessionSection2FilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionSection2FilterInput | null > | null,
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

export type CreateSession2MutationVariables = {
  input: CreateSession2Input,
  condition?: ModelSession2ConditionInput | null,
};

export type CreateSession2Mutation = {
  createSession2?:  {
    __typename: "Session2",
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

export type UpdateSession2MutationVariables = {
  input: UpdateSession2Input,
  condition?: ModelSession2ConditionInput | null,
};

export type UpdateSession2Mutation = {
  updateSession2?:  {
    __typename: "Session2",
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

export type DeleteSession2MutationVariables = {
  input: DeleteSession2Input,
  condition?: ModelSession2ConditionInput | null,
};

export type DeleteSession2Mutation = {
  deleteSession2?:  {
    __typename: "Session2",
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

export type CreateSessionSection2MutationVariables = {
  input: CreateSessionSection2Input,
  condition?: ModelSessionSection2ConditionInput | null,
};

export type CreateSessionSection2Mutation = {
  createSessionSection2?:  {
    __typename: "SessionSection2",
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

export type UpdateSessionSection2MutationVariables = {
  input: UpdateSessionSection2Input,
  condition?: ModelSessionSection2ConditionInput | null,
};

export type UpdateSessionSection2Mutation = {
  updateSessionSection2?:  {
    __typename: "SessionSection2",
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

export type DeleteSessionSection2MutationVariables = {
  input: DeleteSessionSection2Input,
  condition?: ModelSessionSection2ConditionInput | null,
};

export type DeleteSessionSection2Mutation = {
  deleteSessionSection2?:  {
    __typename: "SessionSection2",
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

export type GetSession2QueryVariables = {
  id: string,
};

export type GetSession2Query = {
  getSession2?:  {
    __typename: "Session2",
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

export type ListSession2sQueryVariables = {
  filter?: ModelSession2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSession2sQuery = {
  listSession2s?:  {
    __typename: "ModelSession2Connection",
    items:  Array< {
      __typename: "Session2",
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

export type SyncSession2sQueryVariables = {
  filter?: ModelSession2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSession2sQuery = {
  syncSession2s?:  {
    __typename: "ModelSession2Connection",
    items:  Array< {
      __typename: "Session2",
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

export type GetSessionSection2QueryVariables = {
  id: string,
};

export type GetSessionSection2Query = {
  getSessionSection2?:  {
    __typename: "SessionSection2",
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

export type ListSessionSection2sQueryVariables = {
  filter?: ModelSessionSection2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionSection2sQuery = {
  listSessionSection2s?:  {
    __typename: "ModelSessionSection2Connection",
    items:  Array< {
      __typename: "SessionSection2",
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

export type SyncSessionSection2sQueryVariables = {
  filter?: ModelSessionSection2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionSection2sQuery = {
  syncSessionSection2s?:  {
    __typename: "ModelSessionSection2Connection",
    items:  Array< {
      __typename: "SessionSection2",
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

export type SessionSection2sBySessionIDQueryVariables = {
  sessionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionSection2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionSection2sBySessionIDQuery = {
  sessionSection2sBySessionID?:  {
    __typename: "ModelSessionSection2Connection",
    items:  Array< {
      __typename: "SessionSection2",
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

export type OnCreateSession2SubscriptionVariables = {
  filter?: ModelSubscriptionSession2FilterInput | null,
};

export type OnCreateSession2Subscription = {
  onCreateSession2?:  {
    __typename: "Session2",
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

export type OnUpdateSession2SubscriptionVariables = {
  filter?: ModelSubscriptionSession2FilterInput | null,
};

export type OnUpdateSession2Subscription = {
  onUpdateSession2?:  {
    __typename: "Session2",
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

export type OnDeleteSession2SubscriptionVariables = {
  filter?: ModelSubscriptionSession2FilterInput | null,
};

export type OnDeleteSession2Subscription = {
  onDeleteSession2?:  {
    __typename: "Session2",
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

export type OnCreateSessionSection2SubscriptionVariables = {
  filter?: ModelSubscriptionSessionSection2FilterInput | null,
};

export type OnCreateSessionSection2Subscription = {
  onCreateSessionSection2?:  {
    __typename: "SessionSection2",
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

export type OnUpdateSessionSection2SubscriptionVariables = {
  filter?: ModelSubscriptionSessionSection2FilterInput | null,
};

export type OnUpdateSessionSection2Subscription = {
  onUpdateSessionSection2?:  {
    __typename: "SessionSection2",
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

export type OnDeleteSessionSection2SubscriptionVariables = {
  filter?: ModelSubscriptionSessionSection2FilterInput | null,
};

export type OnDeleteSessionSection2Subscription = {
  onDeleteSessionSection2?:  {
    __typename: "SessionSection2",
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
