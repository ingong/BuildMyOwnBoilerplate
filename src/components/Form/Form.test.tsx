import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './Form';

const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
};

describe('<Form>', () => {
  it('Error Message Occurs when Empty Input', () => {
    const { getByLabelText } = render(<Form />);
    const id = getByLabelText('아이디');

    fireEvent.blur(id, { target: { value: '' } });
    expect(screen.getByText(ERROR_MSG.required)).toBeInTheDocument();
  });
});
