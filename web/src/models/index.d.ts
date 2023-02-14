import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sections?: SessionSection[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sections: AsyncCollection<SessionSection>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session>) => MutableModel<Session> | void): Session;
}

type EagerSessionSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sessionID: string;
  readonly start: number;
  readonly end: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySessionSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sessionID: string;
  readonly start: number;
  readonly end: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SessionSection = LazyLoading extends LazyLoadingDisabled ? EagerSessionSection : LazySessionSection

export declare const SessionSection: (new (init: ModelInit<SessionSection>) => SessionSection) & {
  copyOf(source: SessionSection, mutator: (draft: MutableModel<SessionSection>) => MutableModel<SessionSection> | void): SessionSection;
}

type EagerSession2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sections?: SessionSection[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySession2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sections: AsyncCollection<SessionSection>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Session2 = LazyLoading extends LazyLoadingDisabled ? EagerSession2 : LazySession2

export declare const Session2: (new (init: ModelInit<Session2>) => Session2) & {
  copyOf(source: Session2, mutator: (draft: MutableModel<Session2>) => MutableModel<Session2> | void): Session2;
}

type EagerSessionSection2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionSection2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sessionID: string;
  readonly start: number;
  readonly end: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySessionSection2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionSection2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sessionID: string;
  readonly start: number;
  readonly end: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SessionSection2 = LazyLoading extends LazyLoadingDisabled ? EagerSessionSection2 : LazySessionSection2

export declare const SessionSection2: (new (init: ModelInit<SessionSection2>) => SessionSection2) & {
  copyOf(source: SessionSection2, mutator: (draft: MutableModel<SessionSection2>) => MutableModel<SessionSection2> | void): SessionSection2;
}