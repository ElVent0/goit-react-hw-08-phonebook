import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 260px;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 700;
`;

export const Input = styled.input`
  display: block;
  border-radius: 0.4vw;
  border: none;
  padding: 8px;
  margin-top: 8px;
`;

export const AddButton = styled.button`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0.4vw;
  background: linear-gradient(
    225deg,
    #94949490 0%,
    #5656562f 60%,
    #6969691f 70%,
    #949494b9 100%
  );
  padding: 0.4vw 3vw;
  border: none;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;
