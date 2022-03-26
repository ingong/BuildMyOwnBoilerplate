import styled from '@emotion/styled';
import { Center, VerticalAlign } from '@/styles/common';
import useInput from '@/hooks/useInput';

// form 에서 상태 관리
// 객체로 갖는다
// 제어 메서드를 formInput에게 전달, 상태를 최신화시킨다
// Form - FormInput / 유효성검사 -> onBlur 일 때, 상태 변경은 setState 로 하되 debouncing 을 걸어서 한다
// 에러 메세지 전달도 props 로 전달하자.
// onSubmit 클릭 시 유효성 검사 (특정 조건에 부합하도록 Custom Hook 을 써서 할까)
// submit 버튼도 만들어야해요!

const Form = () => {
  const { value, onChange } = useInput('');
  console.log(value);
  return (
    <FormWrapper>
      <form id="form" autoComplete="off">
        <div className="input-wrap">
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={onChange}
          ></input>
          <div id="id-msg"></div>
        </div>
        <div className="input-wrap">
          <label htmlFor="pw">비밀번호</label>
          <input
            id="pw"
            type="text"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
          ></input>
          <div id="pw-msg"></div>
        </div>
        <div className="input-wrap">
          <label htmlFor="pw-check">비밀번호 확인</label>
          <input
            id="pw-check"
            type="text"
            placeholder="비밀번호 확인을 입력해주세요."
            autoComplete="off"
          ></input>
          <div id="pw-check-msg"></div>
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
