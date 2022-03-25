export type State<T> =
  | {
      _TAG: 'IDLE';
    }
  | {
      _TAG: 'LOADING';
    }
  | {
      _TAG: 'ERROR';
    }
  | {
      _TAG: 'OK';
      payload: T;
    };

export type Action<T> =
  | {
      _TAG: 'FETCH';
    }
  | {
      _TAG: 'FAILED';
    }
  | {
      _TAG: 'SUCCESS';
      payload: T;
    };

export const reducer =
  <T>() =>
  (prevState: State<T>, action: Action<T>): State<T> => {
    switch (prevState._TAG) {
      case 'IDLE':
        if (action._TAG === 'FETCH') {
          return {
            _TAG: 'LOADING',
          };
        }
        break;
      case 'LOADING':
        if (action._TAG === 'FAILED') {
          return {
            _TAG: 'ERROR',
          };
        }
        if (action._TAG === 'SUCCESS') {
          return {
            _TAG: 'OK',
            payload: action.payload,
          };
        }
        break;
      case 'OK':
        if (action._TAG === 'FETCH') {
          return {
            _TAG: 'LOADING',
          };
        }
        if (action._TAG === 'SUCCESS') {
          return {
            _TAG: 'IDLE',
          };
        }
        break;
      default:
        throw new Error(`Unknown action type: ${action._TAG}`);
    }
    return prevState;
  };
