import { useState, useReducer } from 'react';
import { reducer } from '@/shared/Component.reducer';
import { getSearchCat } from '@/api/cat';
import { CatCardType } from '@/shared/type';
import styled from '@emotion/styled';
import IntersectionArea from './IntersectionArea';

const Sample = () => {
  const [page, setPage] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer<CatCardType[]>(), { _TAG: 'IDLE' });

  const handleClick = async () => {
    dispatch({
      _TAG: 'FETCH',
    });

    const response = await getSearchCat();
    console.log(response.data);
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
    <SampleWrapper onClick={handleClick}>
      <button
        onClick={(e) => {
          darkonOff();
          e.stopPropagation();
        }}
      >
        on/off darkMode
      </button>
      {(() => {
        switch (state._TAG) {
          case 'IDLE':
            return 'IDLE';
          case 'LOADING':
            return 'LOADING';
          case 'ERROR':
            return 'ERROR';
          case 'OK':
            return state.payload.map((v) => <DivWrapper key={v.id}>{v.title}</DivWrapper>);
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
