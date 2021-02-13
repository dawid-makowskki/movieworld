import styled from 'styled-components';

const Error = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.desktop.s};

  @media (max-width: 100px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.s};
  }
`;

export default Error;
