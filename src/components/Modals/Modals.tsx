import { useContext } from 'react';
import { ModalListState, ModalsStateContext } from '@/contexts/ModalsContext';

const Modals = () => {
  const openedModals = useContext(ModalsStateContext) as ModalListState;
  // const { close } = useContext(ModalsDispatchContext) as ModalsDispatch;
  return (
    <>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const { onSubmit, onClose, ...restProps } = props;

        const handleSubmit = async (value?: string) => {
          if (typeof onSubmit === 'function') await onSubmit(value);
          onClose();
        };

        return (
          <Component key={index} onSubmit={handleSubmit} onClose={onClose} restProps={restProps} />
        );
      })}
    </>
  );
};

export default Modals;
