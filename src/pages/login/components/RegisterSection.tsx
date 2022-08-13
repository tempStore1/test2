import React, { useState } from 'react';
import styled from '@emotion/styled';
import InputGroup from 'components/InputGroup';

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  > button {
    font-weight: 700;
  }
`;

const RegisterBtn = styled.button`
  color: #fff;
  background-color: #333333;
  border-radius: 10px;
  padding: 12px 48px;
  margin-bottom: 24px;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

const LoginBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  &:hover {
    text-decoration: underline;
  }
`;

interface RegisterSectionProps {
  setCurrentDisplay: (v: CurrentDisplay) => void;
}

const RegisterSection: React.FC<RegisterSectionProps> = ({ setCurrentDisplay }) => {
  const [account, setAccout] = useState();
  return (
    <div>
      <Title>註冊帳號</Title>
      <InputGroup>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" id="email" placeholder="請輸入Email" />
          <span>此欄位不可為空</span>
        </label>
      </InputGroup>
      <InputGroup>
        <label htmlFor="name">
          <p>您的暱稱</p>
          <input type="text" id="name" placeholder="請輸入您的暱稱" />
          <span>此欄位不可為空</span>
        </label>
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">
          <p>密碼</p>
          <input type="password" id="password" placeholder="請輸入密碼" />
          <span>此欄位不可為空</span>
        </label>
      </InputGroup>
      <InputGroup>
        <label htmlFor="passwordCheck">
          <p>再次輸入密碼</p>
          <input type="password" id="passwordCheck" placeholder="請再次輸入密碼" />
          <span>此欄位不可為空</span>
        </label>
      </InputGroup>
      <ButtonGroup>
        <RegisterBtn>註冊帳號</RegisterBtn>
        <LoginBtn onClick={() => setCurrentDisplay('login')}>登入</LoginBtn>
      </ButtonGroup>
    </div>
  );
};

export default RegisterSection;
