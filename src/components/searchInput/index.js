import styled from 'styled-components';

const SearchInput = styled.input`
  width: 25%;
  height: 72px;
  background-color: transparent;
  border-radius: 25px;
  text-align: center;
  border: solid 6px;
  border-color: ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.desktop.s};
  transition: filter 200 ease-in;

  &:focus {
    filter: drop-shadow(8px 8px 20px rgba(0, 0, 0, 0.25));
  }

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 700px) {
    height: 48px;
    width: 60%;
    border-radius: 15px;
    border-width: 4px;
  }
`;

export default SearchInput;
