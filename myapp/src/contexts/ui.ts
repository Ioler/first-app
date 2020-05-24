import React from 'react';

export enum Status{
  MODE_SELECT = 'modeSelect',
  PRACTICE = 'practice',
  RESULT = 'result',
}

export function createApplicationInitialState(): Status{
  return Status.MODE_SELECT;
}

export const Context = React.createContext({
  applicationState: createApplicationInitialState(),
  setApplicationState:(_: Status) => {},
})