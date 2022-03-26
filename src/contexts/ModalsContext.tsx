import { createContext } from 'react';

type ModalPropType = {
  onSubmit: (value: any) => Promise<void>;
  onClose: () => void;
  restProps?: {};
};

export type ModalType = {
  Component: (prop?: ModalPropType) => JSX.Element;
  props: ModalPropType;
};

export type ModalListState = Array<ModalType>;

export type ModalsDispatch = {
  open: (element: () => JSX.Element, props?: {}) => void;
  close: (element: () => JSX.Element) => void;
};

export const ModalsStateContext = createContext<ModalListState | null>(null);
export const ModalsDispatchContext = createContext<ModalsDispatch>({
  open: () => {},
  close: () => {},
});
