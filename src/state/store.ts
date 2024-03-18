// ReduxStore.ts

import { configureStore, Store } from '@reduxjs/toolkit';
// import messagesSlices from '../slices/messagesSlices';

import skillSlices from './slices/skillSlices';

interface RootState {
    // messagesStore: ReturnType<typeof messagesSlices>;
  // Add other slices' states here if needed
}

class AppStore {
  private store: Store<RootState>;

  constructor() {
    this.store = configureStore({
      reducer: {
        skillStore: skillSlices
      }
    //     messagesStore: messagesSlices,
    //     // Add other slices' reducers here if needed
    //   },
      // Add middleware or enhancers if needed
    });
  }

  getStore() {
    return this.store;
  }
}

export default new AppStore().getStore();
