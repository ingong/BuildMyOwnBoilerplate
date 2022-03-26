import { useContext } from 'react';
import { ModalsStateContext } from '@/contexts/ModalsContext';
import { ModalListStateType } from '@/components/Modals/modal.type';

const Modals = () => {
  const openedModals = useContext(ModalsStateContext) as ModalListStateType;

  return (
    <>
      {openedModals?.map((modal, index) => {
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
