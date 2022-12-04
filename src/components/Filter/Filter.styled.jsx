import styled from '@emotion/styled';
export const Field = styled.div`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 22px;
  margin: 20px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0.8vw;
  background: linear-gradient(
    225deg,
    #94949490 0%,
    #5656562f 60%,
    #6969691f 70%,
    #949494b9 100%
  );
  padding: 1vw 2.4vw;
`;

export const Input = styled.input`
  display: block;
  border-radius: 0.4vw;
  border: none;
  padding: 8px;
  margin-top: 8px;
`;
