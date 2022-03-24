export function reducer(prevState, action) {
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
          error: action.error,
        };
      }
      if (action._TAG === 'SUCCESS') {
        return {
          _TAG: 'OK',
          message: action.message,
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
}
