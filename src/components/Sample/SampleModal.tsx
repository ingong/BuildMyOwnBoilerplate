import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Center } from '@/styles/common';
import { ModalPropType } from '@/components/Modals/modal.type';

const SampleModal = (props?: ModalPropType) => {
  const root = document.getElementById('root') ?? document.body;
  const { onSubmit, onClose } = props as ModalPropType;
  const handleSubmitBtn = async () => {
    await onSubmit('onSubmitResult');
  };
  const ModalContent = (
    <Styled.Container>
      <Styled.Body>
        <Styled.Title size="SMALL">Title 입니다</Styled.Title>
        <Styled.Content>내용</Styled.Content>
        <button onClick={handleSubmitBtn}>버튼버튼</button>
      </Styled.Body>
      <Styled.Overlay onClick={onClose} />
    </Styled.Container>
  );
  return ReactDOM.createPortal(ModalContent, root);
};

type SizeType = 'SMALL' | 'MEDIUM';

const Styled = {
  Container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    ${Center}

    width: 100vw;
    height: 100vh;
    z-index: 900;
  `,
  Overlay: styled.div`
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    opacity: 0.5;
    background-color: lightgray;
  `,
  Title: styled.h3<{ size: SizeType }>`
    margin-bottom: 8px;
    font-size: 12px;
  `,
  Body: styled.div`
    position: relative;
    background-color: white;
    border-radius: 8px;
    z-index: 999;
  `,
  Content: styled.div`
    width: 500px;
    height: 500px;
  `,
  ButtonWrapper: styled.div`
    ${Center}

    button {
      width: calc(50% - 16px);
      & + & {
        margin-left: 16px;
      }
    }
  `,
};

export default SampleModal;
