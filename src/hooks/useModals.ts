import { ReactPortal, useContext } from 'react';
import { ModalsDispatchContext } from '@/contexts/ModalsContext';
import { ModalPropType } from '../components/Modals/modal.type';

const useModals = () => {
  const { open, close } = useContext(ModalsDispatchContext);
  const preventScroll = () => (document.body.style.overflow = 'hidden');
  const ableScroll = () => (document.body.style.overflow = 'scroll');

  const openModal = (Component: () => ReactPortal, props: ModalPropType) => {
    open(Component, props);
    preventScroll();
  };

  const closeModal = (Component: () => ReactPortal) => {
    close(Component);
    ableScroll();
  };

  return {
    openModal,
    closeModal,
  };
};

export default useModals;
