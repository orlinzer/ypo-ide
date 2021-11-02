
import React from 'react';

/**
 *
 * @param { React.ComponentProps } props
 * @param { string[] } values
 * @param { React.ComponentState } defaultState
 * @returns { React.ComponentState }
 */
export function generateState (props, defaultState, values) {
  let state = {};

  if (typeof (defaultState) === 'object') {
      state = { ...defaultState };
  }

  if (typeof (props) === 'object') {
    if (Array.isArray(values)) {
      for (let val of values) {
        state[val] = props[val];
      }
    } else {
      state = { ...state, ...props };
      delete state.children;
    }
  }

  return state;
}

export default this;
