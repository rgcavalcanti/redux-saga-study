import { Reducer } from 'redux';
import { UsersState, UserTypes } from './types';

const INITIAL_STATE: UsersState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case UserTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case UserTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    default:
      return { ...state };
  }
};

export default reducer;
