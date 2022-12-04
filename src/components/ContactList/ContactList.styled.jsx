import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  padding: 5px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
`;

export const Contact = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContactName = styled.span`
  font-weight: 700;
  font-size: 22px;
`;
export const Button = styled.button`
  border-radius: 3px;
  border: 0;
  padding: 4px 24px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  border-radius: 0.4vw;
  background: linear-gradient(
    135deg,
    #b7b7b72e 0%,
    #212121a7 30%,
    #e7e7e741 100%
  );
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;
