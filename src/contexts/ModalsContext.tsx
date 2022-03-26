import { ReactPortal, ReactChild, createContext, useState } from 'react';
import { ModalListStateType, ModalsDispatchType } from '@/components/Modals/modal.type';
import { ModalPropType } from '@/components/Modals/modal.type';

export const ModalsStateContext = createContext<ModalListStateType | null>(null);
export const ModalsDispatchContext = createContext<ModalsDispatchType>({
  open: () => {},
  close: () => {},
});

export function ModalsProvider({ children }: { children: ReactChild | ReactChild[] }) {
  const [openedModals, setOpenedModals] = useState<ModalListStateType>([]);
  const open = (Component: () => ReactPortal, props: ModalPropType) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: () => ReactPortal) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch: ModalsDispatchType = { close, open };

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>{children}</ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
