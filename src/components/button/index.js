import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 25px;
  border: solid 6px;
  border-color: ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.darkGrey};
  width: 200px;
  height: 64px;
  font-size: ${({ theme }) => theme.fontSize.desktop.s};
  transition: color 100ms ease-in;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.lightGrey};
  }
`;

export default Button;
