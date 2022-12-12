import styled from '@emotion/styled';
export const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Button = styled.button`
  padding: 4px 24px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
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
  &:active,
  &:hover {
    opacity: 0.8;
  }
`;

export const User = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
