import { ReactPortal } from 'react';

type onSubmitType = (value: any) => Promise<void> | void;

export type ModalPropType = {
  onSubmit: onSubmitType;
  onClose: () => void;
  restProps?: {};
};

export type ModalType = {
  Component: (props?: ModalPropType) => ReactPortal;
  props: ModalPropType;
};

export type ModalListStateType = Array<ModalType>;

export type ModalsDispatchType = {
  open: (Component: () => ReactPortal, props: ModalPropType) => void;
  close: (Component: () => ReactPortal) => void;
};
