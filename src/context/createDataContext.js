import React from 'react';

/**
 * This function automatize the creation of React Context
 * @param reducer a reducer function.
 * @param actions contains all the callbacks we need to be available and  to the children in the Context so that they can dispatch them
 * @param initialState
 */
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const boundActions = {};
    for (let type in actions) {
      boundActions[type] = actions[type](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
