// constants
const ADD1 = "ADD1";
const ADD2 = "ADD2";
const ADD3 = "ADD3";
const MINUS1 = "MINUS1";
const MINUS2 = "MINUS2";
const MINUS3 = "MINUS3";
// action creators
const add1 = () => ({ type: ADD1 });
const add2 = () => ({ type: ADD2 });
const add3 = () => ({ type: ADD3 });
const minus1 = () => ({ type: MINUS1 });
const minus2 = () => ({ type: MINUS2 });
const minus3 = () => ({ type: MINUS3 });
// reducers
const add = (state = 0, action) => {
  switch (action.type) {
    case ADD1:
      return state + 1;
    case ADD2:
      return state + 2;
    case ADD3:
      return state + 3;
    default:
      return state;
  }
};
const minus = (state = 0, action) => {
  switch (action.type) {
    case MINUS1:
      return state - 1;
    case MINUS2:
      return state - 2;
    case MINUS3:
      return state - 3;
    default:
      return state;
  }
};
// redux object
const Redux = (() => {
  createStore = (reducer) => {
    let state = {};
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    };

    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };

    return {
      getState,
      subscribe,
      dispatch,
    };
  };
  combineReducers = (reducers) => {
    const reducerKeys = Object.keys(reducers);
    return (combination = (state = {}, action) => {
      const nextState = {};
      for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i];
        const reducer = reducers[key];
        const previousStateForKey = state[key];
        const nextStateForKey = reducer(previousStateForKey, action);
        nextState[key] = nextStateForKey;
      }
      return nextState;
    });
  };
  return {
    createStore,
    combineReducers,
  };
})();
// store object
const store = Redux.createStore(
  Redux.combineReducers({
    theAdd: add,
    theMinus: minus,
  })
);
store.subscribe(() => {
  console.log("the new state is: ", store.getState());
});

const unsubscribe = store.subscribe(() => {
  console.log("the store changed");
});
unsubscribe();

store.dispatch(add1());
store.dispatch(add2());
store.dispatch(add3());
store.dispatch(minus1());
store.dispatch(minus2());
store.dispatch(minus3());
