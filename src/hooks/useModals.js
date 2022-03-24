import { useContext } from 'react';
import { ModalsDispatchContext } from '@context/ModalsContext';

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);
  const preventScroll = () => (document.body.style.overflow = 'hidden');
  const ableScroll = () => (document.body.style.overflow = 'scroll');

  const openModal = (Component, props) => {
    open(Component, props);
    preventScroll();
  };

  const closeModal = (Component) => {
    close(Component);
    ableScroll();
  };

  return {
    openModal,
    closeModal,
  };
}
