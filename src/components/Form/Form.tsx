import { useState } from 'react';
import styled from '@emotion/styled';
import { Center, VerticalAlign } from '@/styles/common';
import FormInput from '@/components/Form/FormInput';
import useModals from '@/hooks/useModals';
import SampleModal from '../Sample/SampleModal';

const initialFormData = {
  id: '',
  pw: '',
  confirmPw: '',
};
export interface FormDataType {
  id: string;
  pw: string;
  confirmPw: string;
  [index: string]: string;
}

const Form = () => {
  const [errorData, setErrorData] = useState<FormDataType>(initialFormData);
  const [formData, setFormData] = useState<FormDataType>(initialFormData);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(errorData).every((value) => {
      if (typeof value === 'string') return false;
      else if (typeof value === 'boolean') return value;
    });
    isValid && console.log('valid');
  };

  const { openModal, closeModal } = useModals();

  const handleModalOpen = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    openModal(SampleModal, {
      onSubmit: (e) => handleSubmit(e),
      onClose: () => closeModal(SampleModal),
      restProps: {
        formData,
      },
    });
  };

  return (
    <FormWrapper>
      <form id="form" autoComplete="off" onSubmit={handleModalOpen}>
        <FormInput
          id={'id'}
          label={'아이디'}
          errorData={errorData}
          setErrorData={setErrorData}
          formData={formData}
          setFormData={setFormData}
          inputProps={{
            type: 'text',
            placeholder: '아이디를 입력해주세요.',
            autoFocus: true,
          }}
        />
        <FormInput
          id={'pw'}
          label={'비밀번호'}
          errorData={errorData}
          setErrorData={setErrorData}
          formData={formData}
          setFormData={setFormData}
          inputProps={{
            type: 'password',
            placeholder: '비밀번호를 입력해주세요',
            autoFocus: false,
          }}
        />
        <FormInput
          id={'confirmPw'}
          label={'비밀번호 확인'}
          errorData={errorData}
          setErrorData={setErrorData}
          formData={formData}
          setFormData={setFormData}
          inputProps={{
            type: 'password',
            placeholder: '비밀번호 확인을 입력해주세요.',
            autoFocus: false,
          }}
        />
        <div className="flex items-center justify-center">
          <input id="submit" type="submit" value="가입하기" />
        </div>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.section`
  ${Center}
  width: 100vw;
  height: 100vh;

  form {
    font-size: 15px;
    width: 30%;
    height: 30%;
    ${VerticalAlign}
    justify-content: space-between;

    & > .input-wrap {
      ${VerticalAlign}
    }
  }
`;

export default Form;
