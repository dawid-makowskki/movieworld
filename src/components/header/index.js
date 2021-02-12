import styled from 'styled-components';

const Header = styled.h1`
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.desktop.xl};

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.xl};
  }
`;

export default Header;
