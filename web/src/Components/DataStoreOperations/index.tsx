import { DataStore } from "aws-amplify";
import { Reachability } from "@aws-amplify/core";

//@ts-ignore
function DataStoreOperations({ initSubs, deleteAll }) {
  const goOnline = async () => {
    await (Reachability as any)._observerOverride({
      online: true,
    });
  };

  const goOffline = async () => {
    await (Reachability as any)._observerOverride({
      online: false,
    });
  };

  return (
    <div>
      <p>DS</p>
      <div className="buttons">
        <button
          data-test="datastore-start"
          onClick={async () => {
            await DataStore.start();
            initSubs();
          }}
        >
          Start
        </button>
        <button onClick={async () => await DataStore.stop()}>Stop</button>
        <button
          data-test="datastore-clear"
          onClick={async () => await DataStore.clear()}
        >
          Clear
        </button>
        <button
          onClick={deleteAll}
          data-test="datastore-delete-all"
          style={{ backgroundColor: "red" }}
        >
          Delete All Records
        </button>
        <button
          onClick={goOnline}
          data-test="go-online"
          style={{ backgroundColor: "green" }}
        >
          Go Online
        </button>
        <button
          onClick={goOffline}
          data-test="go-offline"
          style={{ backgroundColor: "red" }}
        >
          Go Offline
        </button>
      </div>
    </div>
  );
}

export default DataStoreOperations;
