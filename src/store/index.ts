import { createStore, Store } from "redux";
import { UsersState } from "./ducks/users/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  users: UsersState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
