import { useState, useEffect, useCallback } from "react";
import { DataStore, Predicates } from "aws-amplify";
import { Session, SessionSection } from "../../models";
import { ulid } from "ulid";
import DataStoreOperations from "../DataStoreOperations";

let subscriptions: any[] = [];

function SessionSectionComponent() {
  const [sessions, setSessions] = useState<any>([]);
  const [sessionSections, setSessionSections] = useState<any>([]);
  const [currentSession, setCurrentSession] = useState<any>(null);

  const initSubs = useCallback(() => {
    if (subscriptions.length) {
      unsubSubs();
    }

    // Observe Session
    subscriptions.push(
      DataStore.observe(Session).subscribe((msg: any) => {
        console.log("observe", msg);
        getSessions();
      })
    );

    // Observe SessionSection
    subscriptions.push(
      DataStore.observe(SessionSection).subscribe((msg) => {
        console.log("observe", msg);
        getSessionSections();
      })
    );
  }, []);

  useEffect(() => {
    initSubs();
    getLatest();

    return () => {
      unsubSubs();
    };
  }, [initSubs]);

  function unsubSubs() {
    subscriptions &&
      subscriptions.length &&
      subscriptions.forEach((sub) => sub.unsubscribe());
  }

  //#region Session 21
  // Query
  async function getSessions() {
    const _sessions = await DataStore.query(Session);
    setSessions(_sessions);
    console.log("Sessions", _sessions);
  }

  // Query by PK Predicate
  // async function getSessionByPkPredicate() {
  //   const [_session] = await DataStore.query(Session);
  //   console.log("first query:", _session);
  //   if (!_session) return;

  //   const session = await DataStore.query(Session, (c) => c.id.eq(_session.id));

  //   console.log("by PK Predicate", session);
  //   setSessions(session);
  // }

  // Query by ALL
  async function getSessionByAll() {
    const session = await DataStore.query(Session, Predicates.ALL);
    console.log("Query ALL", session);
    if (!session) return;
    setSessions(session);
  }

  async function getLatest() {
    const [session] = await DataStore.query(Session);
    if (session) {
      setCurrentSession(session);
    }
  }

  // Create
  async function createCurrentSession() {
    try {
      const session = await DataStore.save(
        new Session({
          // id: ulid(),
          name: `Session ${Date.now()}`,
        })
      );

      setCurrentSession(session);
      console.log("Session created:", session);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // Update
  // async function updateSession() {
  //   const [session] = await DataStore.query(Session);

  //   try {
  //     const sessionSection = await DataStore.save(
  //       Session.copyOf(session, (updated: any) => {
  //         updated.name = "UPDATED NAME";
  //       })
  //     );

  //     console.log("Session updated:", sessionSection);
  //   } catch (error) {
  //     console.error("Save failed:", error);
  //   }
  // }

  // Delete
  async function deleteSession() {
    const [session] = await DataStore.query(Session);
    if (!session) return;

    await DataStore.delete(session);
  }

  // Delete by PK Predicate
  // async function deleteSessionByPkPredicate() {
  //   const [session] = await DataStore.query(Session);
  //   if (!session) return;

  //   try {
  //     const result = await DataStore.delete(Session, (c) =>
  //       c.id.eq(session.id)
  //     );
  //     console.log("Session deleted:", result);
  //   } catch (error) {
  //     console.error("Delete failed:", error);
  //   }
  // }

  // Delete by PK + SK Predicate
  // async function deleteSessionByPkSkPredicate() {
  //   const [session] = await DataStore.query(Session);
  //   if (!session) return;

  //   try {
  //     await DataStore.delete(Session, (c) =>
  //       c.and((inner) => [inner.id.eq(session.id), inner.name.eq(session.name)])
  //     );
  //   } catch (error) {
  //     console.error("Delete failed:", error);
  //   }
  // }

  //#endregion

  //#region SessionSection
  // Query
  async function getSessionSections() {
    const _sessionSections = await DataStore.query(SessionSection);
    setSessionSections(_sessionSections);
    console.log("sessionSections", _sessionSections);
  }

  // Query by PK Predicate
  // async function getSessionSectionByPkPredicate() {
  //   const [_sessionSection] = await DataStore.query(SessionSection);
  //   console.log("first query:", _sessionSection);
  //   if (!_sessionSection) return;

  //   const sessionSection = await DataStore.query(SessionSection, (c: any) =>
  //     c.customSessionSectionId.eq(_sessionSection.customSessionSectionId)
  //   );
  //   console.log("by PK Predicate", sessionSection);
  //   setSessionSections(sessionSection);
  // }

  // Query by PK + SK Predicate
  // async function getSessionSectionsbyPKSKPredicate() {
  //   const [_sessionSection] = await DataStore.query(SessionSection);
  //   console.log("result of first query:", _sessionSection);
  //   if (!_sessionSection) return;

  //   const sessionSections = await DataStore.query(SessionSection, (c: any) =>
  //     c.and((p) => [
  //       p.customSessionSectionId.eq(_sessionSection.customSessionSectionId),
  //       p.content.eq(_sessionSection.content),
  //     ])
  //   );

  //   console.log("PK + SK Predicate:", sessionSections);
  //   setSessionSections(sessionSections);
  // }

  // Query by ALL
  async function getSessionSectionByAll() {
    const sessionSection = await DataStore.query(
      SessionSection,
      Predicates.ALL
    );
    console.log("Query ALL by PK", sessionSection);
    if (!sessionSection) return;
    setSessionSections(sessionSection);
  }

  async function createSessionSection() {
    try {
      const sessionSection = await DataStore.save(
        new SessionSection({
          sessionID: currentSession.id,
          start: 1,
          end: 2,
        })
      );

      console.log("SessionSection created:", sessionSection);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // async function updateSessionSection() {
  //   const [originalSessionSection] = await DataStore.query(SessionSection);
  //   try {
  //     const sessionSection = await DataStore.save(
  //       SessionSection.copyOf(originalSessionSection, (updated: any) => {
  //         updated.rating = 5;
  //       })
  //     );

  //     console.log("sessionSection created:", sessionSection);
  //   } catch (error) {
  //     console.error("Save failed:", error);
  //   }
  // }

  // Delete
  async function deleteSessionSection() {
    const [sessionSection] = await DataStore.query(SessionSection);
    if (!sessionSection) return;
    await DataStore.delete(sessionSection);
  }

  // Delete by PK Predicate
  // async function deleteSessionSectionByPkPredicate() {
  //   const [sessionSection] = await DataStore.query(SessionSection);
  //   if (!sessionSection) return;

  //   await DataStore.delete(SessionSection, (c) =>
  //     c.customSessionSectionId.eq(sessionSection.customSessionSectionId)
  //   );
  // }

  // Delete by PK OL
  // async function deleteSessionSectionByOl() {
  //   const [sessionSection] = await DataStore.query(SessionSection);
  //   console.log(sessionSection);
  //   if (!sessionSection) return;

  //   await DataStore.delete(SessionSection, {
  //     customSessionSectionId: sessionSection.customSessionSectionId,
  //     content: sessionSection.content,
  //   });
  // }

  // Should not error
  // async function deleteSessionSectionByIncorrectOl() {
  //   const [sessionSection] = await DataStore.query(SessionSection);
  //   if (!sessionSection) return;

  //   const result = await DataStore.delete(SessionSection, {
  //     customSessionSectionId: sessionSection.customSessionSectionId,
  //   });
  //   console.log(result);
  // }

  // Delete by PK + SK Predicate
  // async function deleteSessionSectionByPkSkPredicate() {
  //   const [sessionSection] = await DataStore.query(SessionSection);
  //   if (!sessionSection) return;

  //   await DataStore.delete(SessionSection, (c) =>
  //     c.and((p) => [
  //       p.customSessionSectionId.eq(sessionSection.customSessionSectionId),
  //       p.content.eq(sessionSection.content),
  //     ])
  //   );
  // }

  //#endregion

  //#region Delete ALL

  function deleteAll() {
    DataStore.delete(Session, Predicates.ALL);
    DataStore.delete(SessionSection, Predicates.ALL);
  }

  //#endregion

  //#region Relational CRUD
  // Query by PK filter
  async function getCurrentSessionSessionSectionsByPkFilter() {
    const sessionSections = (await DataStore.query(SessionSection)).filter(
      (c) => c.sessionID === currentSession.id
    );
    setSessionSections(sessionSections);
    console.log("SessionSections", sessionSections);
  }

  // Query by PK Predicate
  // async function getCurrentSessionSessionSectionByPkPredicate() {
  //   if (!currentSession) return;
  //   const sessionSections = await DataStore.query(SessionSection, (c) =>
  //     c.sessionSessionSectionsid.eq(currentSession.id)
  //   );
  //   console.log("by PK Predicate", sessionSections);
  //   setSessionSections(sessionSections);
  // }

  // Delete by PK Predicate
  // async function deleteCurrentSessionSessionSectionByPkPredicate() {
  //   await DataStore.delete(SessionSection, (c) => c.id.eq(currentSession.id));
  // }

  //#endregion

  return (
    <div className="App">
      <header className="App-header">
        <h1>SessionSection (original schema)</h1>
        <DataStoreOperations initSubs={initSubs} deleteAll={deleteAll} />
        <p>{`Current sessionSection: ${currentSession}`}</p>
        {/* <DataStoreOperations initSubs={initSubs} deleteAll={deleteAll} /> */}
        <span>SessionSection:</span>
        <div className="buttons">
          <button onClick={getSessionSections} data-test="datastore-query-21">
            Query
          </button>
          {/* <button disabled onClick={getSessionSections}>
            Query by PK
          </button> */}
          {/* <button onClick={getSessionSectionByPkPredicate}>
            Query by PK Pred
          </button>
          <button onClick={getSessionSectionsbyPKSKPredicate}>
            Query by PK + SK Predicate
          </button> */}
          {/* <button disabled>Query by PK OL</button> */}
          <button onClick={getSessionSectionByAll}>Query by ALL</button>
          <button
            disabled={!currentSession}
            onClick={createSessionSection}
            data-test="datastore-create-21"
          >
            Create for Cur Session
          </button>
          {/* <button
            onClick={updateSessionSection}
            data-test="datastore-update-21"
          >
            Update Last
          </button> */}
          <button onClick={deleteSessionSection}>Delete Last</button>
          {/* <button disabled>Delete by PK</button> */}
          {/* <button onClick={deleteSessionSectionByPkPredicate}>
            Delete by PK Pred
          </button> */}
          {/* <button onClick={deleteSessionSectionByOl}>Delete by PK OL</button>
          <button onClick={deleteSessionSectionByIncorrectOl}>
            Delete by Incorrect PK OL (no error)
          </button>
          <button onClick={deleteSessionSectionByPkSkPredicate}>
            Delete by PK + SK Pred
          </button> */}
        </div>
        <span>Relational operations:</span>
        <div className="buttons">
          <button
            disabled={!currentSession}
            onClick={getCurrentSessionSessionSectionsByPkFilter}
          >
            get SessionSections for Cur. Proj - PkFilter
          </button>
          {/* <button
            disabled={!currentSession}
            onClick={getCurrentSessionSessionSectionByPkPredicate}
          >
            get SessionSection for Cur. Session - PkPredicate
          </button> */}
          {/* <button
            disabled
            onClick={deleteCurrentSessionSessionSectionByPkPredicate}
          >
            Del SessionSection for Cur. Session - PkPred
          </button> */}
        </div>
        <span>Independent Session operations:</span>
        <div className="buttons">
          <button data-test="datastore-query-22" onClick={getSessions}>
            Query
          </button>
          <button onClick={getSessions}>Query by PK</button>
          {/* <button onClick={getSessionByPkPredicate}>Query by PK Pred</button> */}
          {/* <button disabled>Query by PK OL</button> */}
          <button onClick={getSessionByAll}>Query by ALL</button>
          <button
            onClick={createCurrentSession}
            data-test="datastore-create-22"
          >
            Create (Cur. Session)
          </button>
          {/* <button onClick={updateSession} data-test="datastore-update-22">
            Update Last
          </button> */}
          <button onClick={deleteSession} data-test="datastore-delete-22">
            Delete Last
          </button>
          {/* <button disabled>Delete by PK</button> */}
          {/* <button onClick={deleteSessionByPkPredicate}>
            Delete by PK Pred
          </button>
          <button disabled>Delete by PK OL</button>
          <button onClick={deleteSessionByPkSkPredicate}>
            Delete by PK + SK Pred
          </button> */}
        </div>
        <div className="container">
          <div className="section">
            <pre>
              <span>Session:</span>
              <pre data-test="datastore-output-22">
                {JSON.stringify(sessions, null, 2)}
              </pre>
            </pre>
          </div>
          <div className="section">
            <pre>
              <span>SessionSection:</span>

              <pre data-test="datastore-output-21">
                {JSON.stringify(sessionSections, null, 2)}
              </pre>
            </pre>
          </div>
        </div>
      </header>
    </div>
  );
}

export default SessionSectionComponent;
