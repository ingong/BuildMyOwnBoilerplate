import { useContext } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from '@context/ModalsContext';

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);
  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;
    const onClose = () => {
      close(Component);
    };

    const handleSubmit = async (value) => {
      if (typeof onSubmit === 'function') await onSubmit(value);
      onClose();
    };

    return (
      <Component key={index} onSubmit={handleSubmit} onClose={onClose} restProps={restProps} />
    );
  });
};

export default Modals;
