import { useState, createContext } from 'react';

export const ModalsStateContext = createContext(null);
export const ModalsDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

export default function ModalsProvider({ children }) {
  const [openedModals, setOpenedModals] = useState([]);
  const open = (Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = { open, close };

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>{children}</ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
