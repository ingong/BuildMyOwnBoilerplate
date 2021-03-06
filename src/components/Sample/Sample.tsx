import { useState, useReducer } from 'react';
import { reducer } from '@/shared/Component.reducer';
import { getSearchCat } from '@/api/cat';
import { CatCardType } from '@/shared/type';
import styled from '@emotion/styled';
import IntersectionArea from './IntersectionArea';
import useModals from '@/hooks/useModals';
import SampleModal from './SampleModal';

const Sample = () => {
  const [page, setPage] = useState<string>('abc');
  const [state, dispatch] = useReducer(reducer<CatCardType[]>(), { _TAG: 'IDLE' });
  const { openModal, closeModal } = useModals();

  const handleModalOpen = () => {
    openModal(SampleModal, {
      onSubmit: (v) => setPage(v),
      onClose: () => closeModal(SampleModal),
    });
  };

  const handleClick = async () => {
    dispatch({
      _TAG: 'FETCH',
    });

    const response = await getSearchCat();
    if (response?.isError) {
      return dispatch({
        _TAG: 'FAILED',
      });
    }
    if (!response?.isError && response.data) {
      const list = response.data as CatCardType[];
      return dispatch({ _TAG: 'SUCCESS', payload: list.slice(0, 5) });
    }
  };

  const darkonOff = () => {
    if (document.getElementsByTagName('html')[0].classList.contains('ui-dark')) {
      document.getElementsByTagName('html')[0].classList.remove('ui-dark');
    } else {
      document.getElementsByTagName('html')[0].classList.add('ui-dark');
    }
  };

  return (
    <SampleWrapper>
      <div>{page}</div>
      <button onClick={handleModalOpen}>on/off darkMode</button>
      {(() => {
        switch (state._TAG) {
          case 'IDLE':
            return 'IDLE';
          case 'LOADING':
            return 'LOADING';
          case 'ERROR':
            return 'ERROR';
          case 'OK':
            return state.payload?.map((v) => <DivWrapper key={v.id}>{v.title}</DivWrapper>);
        }
      })()}
      <IntersectionArea />
    </SampleWrapper>
  );
};

const SampleWrapper = styled.div`
  width: 200px;
  height: 400px;
  background-color: ${({ theme }) => theme.mainColor};
`;

const DivWrapper = styled.div`
  height: 200px;
  font-size: 40px;
`;

export default Sample;
