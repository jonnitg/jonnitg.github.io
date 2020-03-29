import { createContext, useState, useReducer } from 'react';

const ADD_TITLE_CLASS = 'ADD_TITLE_CLASS';
const ADD_NAV_CLASS = 'ADD_NAV_CLASS';
const ADD_LINK_CLASS = 'ADD_LINK_CLASS';
const RESET_CLASSES = 'RESET_CLASSES';

const initState = {};

const reducer = (state = {}, action) => {
  const { props, type } = action;

  switch (type) {
    case ADD_TITLE_CLASS:
      return { ...state, 'pointer__cursor--is-on-title': true };
    case ADD_NAV_CLASS:
      return { ...state, 'pointer__cursor--is-on-nav': true, ...props };
    case ADD_LINK_CLASS:
      return { ...state, 'pointer__cursor--is-on-link': true };
    case RESET_CLASSES:
      return initState;
    default:
      return state;
  }
};

const PointerClassesContext = createContext(null);

function PointerClassesProvider({ children }) {
  const [pointerClasses, dispatchClasses] = useReducer(reducer, initState);
  // const [classes, setClasses] = useState(initState);

  return (
    <PointerClassesContext.Provider value={{ pointerClasses, dispatchClasses }}>
      {children}
    </PointerClassesContext.Provider>
  );
}

const addTitleClassAction = () => {
  return {
    type: ADD_TITLE_CLASS,
    props: {},
  };
};

const addNavClassAction = (extraClass) => {
  return {
    type: ADD_NAV_CLASS,
    props: {
      ...extraClass,
    },
  };
};

const addLinkClassAction = () => {
  return {
    type: ADD_LINK_CLASS,
    props: {},
  };
};

const resetClasses = () => {
  return {
    type: RESET_CLASSES,
    props: {},
  };
};

export {
  PointerClassesContext,
  PointerClassesProvider,
  addTitleClassAction,
  addNavClassAction,
  addLinkClassAction,
  resetClasses,
};
