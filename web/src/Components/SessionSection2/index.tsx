import { useState, useEffect, useCallback } from "react";
import { DataStore, Predicates } from "aws-amplify";
import { Session2, Session2Section } from "../../models";
// import { ulid } from "ulid";
import DataStoreOperations from "../DataStoreOperations";

let subscriptions: any[] = [];

function Session2SectionComponent() {
  const [session2s, setSession2s] = useState<any>([]);
  const [session2Sections, setSession2Sections] = useState<any>([]);
  const [currentSession2, setCurrentSession2] = useState<any>(null);

  const initSubs = useCallback(() => {
    if (subscriptions.length) {
      unsubSubs();
    }

    // Observe Session2
    subscriptions.push(
      DataStore.observe(Session2).subscribe((msg: any) => {
        console.log("observe", msg);
        getSession2s();
      })
    );

    // Observe Session2Section
    subscriptions.push(
      DataStore.observe(Session2Section).subscribe((msg) => {
        console.log("observe", msg);
        getSession2Sections();
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

  //#region Session2 21
  // Query
  async function getSession2s() {
    const _session2s = await DataStore.query(Session2);
    setSession2s(_session2s);
    console.log("Session2s", _session2s);
  }

  // Query by PK Predicate
  // async function getSession2ByPkPredicate() {
  //   const [_session2] = await DataStore.query(Session2);
  //   console.log("first query:", _session2);
  //   if (!_session2) return;

  //   const session2 = await DataStore.query(Session2, (c) => c.id.eq(_session2.id));

  //   console.log("by PK Predicate", session2);
  //   setSession2s(session2);
  // }

  // Query by ALL
  async function getSession2ByAll() {
    const session2 = await DataStore.query(Session2, Predicates.ALL);
    console.log("Query ALL", session2);
    if (!session2) return;
    setSession2s(session2);
  }

  async function getLatest() {
    const [session2] = await DataStore.query(Session2);
    if (session2) {
      setCurrentSession2(session2);
    }
  }

  // Create
  async function createCurrentSession2() {
    try {
      const session2 = await DataStore.save(
        new Session2({
          // id: ulid(),
          name: `Session2 ${Date.now()}`,
        })
      );

      setCurrentSession2(session2);
      console.log("Session2 created:", session2);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // Update
  // async function updateSession2() {
  //   const [session2] = await DataStore.query(Session2);

  //   try {
  //     const session2Section = await DataStore.save(
  //       Session2.copyOf(session2, (updated: any) => {
  //         updated.name = "UPDATED NAME";
  //       })
  //     );

  //     console.log("Session2 updated:", session2Section);
  //   } catch (error) {
  //     console.error("Save failed:", error);
  //   }
  // }

  // Delete
  async function deleteSession2() {
    const [session2] = await DataStore.query(Session2);
    if (!session2) return;

    await DataStore.delete(session2);
  }

  // Delete by PK Predicate
  // async function deleteSession2ByPkPredicate() {
  //   const [session2] = await DataStore.query(Session2);
  //   if (!session2) return;

  //   try {
  //     const result = await DataStore.delete(Session2, (c) =>
  //       c.id.eq(session2.id)
  //     );
  //     console.log("Session2 deleted:", result);
  //   } catch (error) {
  //     console.error("Delete failed:", error);
  //   }
  // }

  // Delete by PK + SK Predicate
  // async function deleteSession2ByPkSkPredicate() {
  //   const [session2] = await DataStore.query(Session2);
  //   if (!session2) return;

  //   try {
  //     await DataStore.delete(Session2, (c) =>
  //       c.and((inner) => [inner.id.eq(session2.id), inner.name.eq(session2.name)])
  //     );
  //   } catch (error) {
  //     console.error("Delete failed:", error);
  //   }
  // }

  //#endregion

  //#region Session2Section
  // Query
  async function getSession2Sections() {
    const _session2Sections = await DataStore.query(Session2Section);
    setSession2Sections(_session2Sections);
    console.log("session2Sections", _session2Sections);
  }

  // Query by PK Predicate
  // async function getSession2SectionByPkPredicate() {
  //   const [_session2Section] = await DataStore.query(Session2Section);
  //   console.log("first query:", _session2Section);
  //   if (!_session2Section) return;

  //   const session2Section = await DataStore.query(Session2Section, (c: any) =>
  //     c.customSession2SectionId.eq(_session2Section.customSession2SectionId)
  //   );
  //   console.log("by PK Predicate", session2Section);
  //   setSession2Sections(session2Section);
  // }

  // Query by PK + SK Predicate
  // async function getSession2SectionsbyPKSKPredicate() {
  //   const [_session2Section] = await DataStore.query(Session2Section);
  //   console.log("result of first query:", _session2Section);
  //   if (!_session2Section) return;

  //   const session2Sections = await DataStore.query(Session2Section, (c: any) =>
  //     c.and((p) => [
  //       p.customSession2SectionId.eq(_session2Section.customSession2SectionId),
  //       p.content.eq(_session2Section.content),
  //     ])
  //   );

  //   console.log("PK + SK Predicate:", session2Sections);
  //   setSession2Sections(session2Sections);
  // }

  // Query by ALL
  async function getSession2SectionByAll() {
    const session2Section = await DataStore.query(
      Session2Section,
      Predicates.ALL
    );
    console.log("Query ALL by PK", session2Section);
    if (!session2Section) return;
    setSession2Sections(session2Section);
  }

  async function createSession2Section() {
    try {
      const session2Section = await DataStore.save(
        new Session2Section({
          session2ID: currentSession2.id,
          start: 1,
          end: 2,
        })
      );

      console.log("Session2Section created:", session2Section);
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  // async function updateSession2Section() {
  //   const [originalSession2Section] = await DataStore.query(Session2Section);
  //   try {
  //     const session2Section = await DataStore.save(
  //       Session2Section.copyOf(originalSession2Section, (updated: any) => {
  //         updated.rating = 5;
  //       })
  //     );

  //     console.log("session2Section created:", session2Section);
  //   } catch (error) {
  //     console.error("Save failed:", error);
  //   }
  // }

  // Delete
  async function deleteSession2Section() {
    const [session2Section] = await DataStore.query(Session2Section);
    if (!session2Section) return;
    await DataStore.delete(session2Section);
  }

  // Delete by PK Predicate
  // async function deleteSession2SectionByPkPredicate() {
  //   const [session2Section] = await DataStore.query(Session2Section);
  //   if (!session2Section) return;

  //   await DataStore.delete(Session2Section, (c) =>
  //     c.customSession2SectionId.eq(session2Section.customSession2SectionId)
  //   );
  // }

  // Delete by PK OL
  // async function deleteSession2SectionByOl() {
  //   const [session2Section] = await DataStore.query(Session2Section);
  //   console.log(session2Section);
  //   if (!session2Section) return;

  //   await DataStore.delete(Session2Section, {
  //     customSession2SectionId: session2Section.customSession2SectionId,
  //     content: session2Section.content,
  //   });
  // }

  // Should not error
  // async function deleteSession2SectionByIncorrectOl() {
  //   const [session2Section] = await DataStore.query(Session2Section);
  //   if (!session2Section) return;

  //   const result = await DataStore.delete(Session2Section, {
  //     customSession2SectionId: session2Section.customSession2SectionId,
  //   });
  //   console.log(result);
  // }

  // Delete by PK + SK Predicate
  // async function deleteSession2SectionByPkSkPredicate() {
  //   const [session2Section] = await DataStore.query(Session2Section);
  //   if (!session2Section) return;

  //   await DataStore.delete(Session2Section, (c) =>
  //     c.and((p) => [
  //       p.customSession2SectionId.eq(session2Section.customSession2SectionId),
  //       p.content.eq(session2Section.content),
  //     ])
  //   );
  // }

  //#endregion

  //#region Delete ALL

  function deleteAll() {
    DataStore.delete(Session2, Predicates.ALL);
    DataStore.delete(Session2Section, Predicates.ALL);
  }

  //#endregion

  //#region Relational CRUD
  // Query by PK filter
  async function getCurrentSession2Session2SectionsByPkFilter() {
    const session2Sections = (await DataStore.query(Session2Section)).filter(
      (c) => c.session2ID === currentSession2.id
    );
    setSession2Sections(session2Sections);
    console.log("Session2Sections", session2Sections);
  }

  // Query by PK Predicate
  // async function getCurrentSession2Session2SectionByPkPredicate() {
  //   if (!currentSession2) return;
  //   const session2Sections = await DataStore.query(Session2Section, (c) =>
  //     c.session2Session2Sectionsid.eq(currentSession2.id)
  //   );
  //   console.log("by PK Predicate", session2Sections);
  //   setSession2Sections(session2Sections);
  // }

  // Delete by PK Predicate
  // async function deleteCurrentSession2Session2SectionByPkPredicate() {
  //   await DataStore.delete(Session2Section, (c) => c.id.eq(currentSession2.id));
  // }

  //#endregion

  return (
    <div className="App">
      <header className="App-header">
        <h1>Session2Section (original schema)</h1>
        <DataStoreOperations initSubs={initSubs} deleteAll={deleteAll} />
        <p>{`Current session2Section: ${currentSession2}`}</p>
        {/* <DataStoreOperations initSubs={initSubs} deleteAll={deleteAll} /> */}
        <span>Session2Section:</span>
        <div className="buttons">
          <button onClick={getSession2Sections} data-test="datastore-query-21">
            Query
          </button>
          {/* <button disabled onClick={getSession2Sections}>
            Query by PK
          </button> */}
          {/* <button onClick={getSession2SectionByPkPredicate}>
            Query by PK Pred
          </button>
          <button onClick={getSession2SectionsbyPKSKPredicate}>
            Query by PK + SK Predicate
          </button> */}
          {/* <button disabled>Query by PK OL</button> */}
          <button onClick={getSession2SectionByAll}>Query by ALL</button>
          <button
            disabled={!currentSession2}
            onClick={createSession2Section}
            data-test="datastore-create-21"
          >
            Create for Cur Session2
          </button>
          {/* <button
            onClick={updateSession2Section}
            data-test="datastore-update-21"
          >
            Update Last
          </button> */}
          <button onClick={deleteSession2Section}>Delete Last</button>
          {/* <button disabled>Delete by PK</button> */}
          {/* <button onClick={deleteSession2SectionByPkPredicate}>
            Delete by PK Pred
          </button> */}
          {/* <button onClick={deleteSession2SectionByOl}>Delete by PK OL</button>
          <button onClick={deleteSession2SectionByIncorrectOl}>
            Delete by Incorrect PK OL (no error)
          </button>
          <button onClick={deleteSession2SectionByPkSkPredicate}>
            Delete by PK + SK Pred
          </button> */}
        </div>
        <span>Relational operations:</span>
        <div className="buttons">
          <button
            disabled={!currentSession2}
            onClick={getCurrentSession2Session2SectionsByPkFilter}
          >
            get Session2Sections for Cur. Proj - PkFilter
          </button>
          {/* <button
            disabled={!currentSession2}
            onClick={getCurrentSession2Session2SectionByPkPredicate}
          >
            get Session2Section for Cur. Session2 - PkPredicate
          </button> */}
          {/* <button
            disabled
            onClick={deleteCurrentSession2Session2SectionByPkPredicate}
          >
            Del Session2Section for Cur. Session2 - PkPred
          </button> */}
        </div>
        <span>Independent Session2 operations:</span>
        <div className="buttons">
          <button data-test="datastore-query-22" onClick={getSession2s}>
            Query
          </button>
          <button onClick={getSession2s}>Query by PK</button>
          {/* <button onClick={getSession2ByPkPredicate}>Query by PK Pred</button> */}
          {/* <button disabled>Query by PK OL</button> */}
          <button onClick={getSession2ByAll}>Query by ALL</button>
          <button
            onClick={createCurrentSession2}
            data-test="datastore-create-22"
          >
            Create (Cur. Session2)
          </button>
          {/* <button onClick={updateSession2} data-test="datastore-update-22">
            Update Last
          </button> */}
          <button onClick={deleteSession2} data-test="datastore-delete-22">
            Delete Last
          </button>
          {/* <button disabled>Delete by PK</button> */}
          {/* <button onClick={deleteSession2ByPkPredicate}>
            Delete by PK Pred
          </button>
          <button disabled>Delete by PK OL</button>
          <button onClick={deleteSession2ByPkSkPredicate}>
            Delete by PK + SK Pred
          </button> */}
        </div>
        <div className="container">
          <div className="section">
            <pre>
              <span>Session2:</span>
              <pre data-test="datastore-output-22">
                {JSON.stringify(session2s, null, 2)}
              </pre>
            </pre>
          </div>
          <div className="section">
            <pre>
              <span>Session2Section:</span>

              <pre data-test="datastore-output-21">
                {JSON.stringify(session2Sections, null, 2)}
              </pre>
            </pre>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Session2SectionComponent;
