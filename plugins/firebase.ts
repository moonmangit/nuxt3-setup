import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectStorageEmulator, getStorage } from "firebase/storage";

export default defineNuxtPlugin(
  async ({
    $config: {
      public: { firebase: firebaseConf },
    },
  }) => {
    const app = initializeApp(firebaseConf);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const storage = getStorage(app);
    const functions = getFunctions(app);

    if (process.env.NODE_ENV === "development") {
      // connect to emulators
      connectAuthEmulator(auth, "http://localhost:9099", {
        disableWarnings: true,
      });
      connectFunctionsEmulator(functions, "localhost", 5001);
      connectFirestoreEmulator(db, "localhost", 8080);
      connectStorageEmulator(storage, "localhost", 9199);
    }

    return {
      provide: {
        firebase: {
          app,
          db,
          auth,
          storage,
          functions,
        },
      },
    };
  }
);
