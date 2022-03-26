import { useRef, Dispatch } from 'react';
import { FormDataType } from '@/components/Form';

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$');
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$');

type AllowedKeys = 'required' | 'invalidId' | 'invalidPw' | 'invalidConfirmPw' | string;
type ERROR_MSG_Type = {
  [key in AllowedKeys]: string;
};
const ERROR_MSG: ERROR_MSG_Type = {
  required: '필수 정보입니다.',
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
};
interface FormInputType {
  id: string;
  label: string;
  errorData: FormDataType;
  formData: FormDataType;
  setErrorData: Dispatch<React.SetStateAction<FormDataType>>;
  setFormData: Dispatch<React.SetStateAction<FormDataType>>;
  inputProps: {
    type: string;
    placeholder: string;
    autoFocus: boolean;
  };
}

const FormInput = ({
  id,
  label,
  errorData,
  setErrorData,
  setFormData,
  formData,
  inputProps,
}: FormInputType) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const checkRegex = (inputId: string) => {
    const value = formData[inputId];
    let result: string | boolean = '';

    if (value?.length === 0) result = 'required';
    else {
      switch (inputId) {
        case 'id':
          result = ID_REGEX.test(value) ? true : 'invalidId';
          break;
        case 'pw':
          result = PW_REGEX.test(value) ? true : 'invalidPw';
          checkRegex('confirmPw');
          break;
        case 'confirmPw':
          result = value === formData['pw'] ? true : 'invalidConfirmPw';
          break;
        default:
          return;
      }
    }
    setErrorData((prev) => ({ ...prev, [inputId]: result } as FormDataType));
  };

  return (
    <div className="input-wrap">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={inputRef}
        value={formData[id] || ''}
        onChange={(e) => setFormData((prev) => ({ ...prev, [id]: e.target.value }))}
        onBlur={() => checkRegex(id)}
        {...inputProps}
      />
      <div className="error">{errorData[id] && ERROR_MSG[errorData[id]]}</div>
    </div>
  );
};

export default FormInput;
