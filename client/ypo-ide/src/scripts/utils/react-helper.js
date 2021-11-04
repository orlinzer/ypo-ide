
// import React from 'react';

// import React from "react";

/**
 *
 * @param { React.Component } component
 * @param { string[] } values
 *
 * @returns { React.ComponentState }
 */
export function generateState (component, values) {
  if (!component || !component.state || !component.props) { return; }

  if (Array.isArray(values)) {
    for (let val of values) {
      if (component.props[val]) {
        component.state[val] = component.props[val];
      }
    }
  } else {
    component.state = { ...component.state, ...component.props };
  }

  if (component.state.children) {
    delete component.state.children;
  }
}



/**
 *
 * @param { React.Component } component
 * @param { string[] } classes
 *
 * @returns { string }
 */
export function generateClasses (component, classes) {

  console.log(component.state);


  return '';
}

export default this;
