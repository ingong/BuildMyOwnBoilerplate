import { ReactPortal } from 'react';

type onSubmitType = (value: any) => Promise<void> | void;

export type ModalPropType = {
  onSubmit: onSubmitType;
  onClose: () => void;
  restProps?: {};
};

export type ModalType = {
  Component: (props?: ModalPropType) => ReactPortal | JSX.Element;
  props: ModalPropType;
};

export type ModalListStateType = Array<ModalType>;

export type ModalsDispatchType = {
  open: (Component: () => ReactPortal | JSX.Element, props: ModalPropType) => void;
  close: (Component: () => ReactPortal | JSX.Element) => void;
};
