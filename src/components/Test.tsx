import { useReducer } from 'react';
import { reducer } from '@/shared/Component.reducer';
import { getSearchCat } from '@/api/cat';
import { CatCardType } from '@/shared/type';

const Test = () => {
  const [state, dispatch] = useReducer(reducer<CatCardType[]>(), { _TAG: 'IDLE' });

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
      return dispatch({ _TAG: 'SUCCESS', payload: response.data as CatCardType[] });
    }
  };

  return (
    <div onClick={() => handleClick()}>
      {(() => {
        switch (state._TAG) {
          case 'IDLE':
            return 'IDLE';
          case 'LOADING':
            return 'LOADING';
          case 'ERROR':
            return 'ERROR';
          case 'OK':
            return state.payload.map((v) => <div key={v.id}>{v.id}</div>);
        }
      })()}
    </div>
  );
};

export default Test;
