import { render } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Test', () => {
  it('should render Counter', () => {
    render(<Counter />);
  });
});
