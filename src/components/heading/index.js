import styled, { css } from 'styled-components';

const Headings = css`
  color: ${({ theme }) => theme.color.darkGrey};
  text-align: center;
`;
export const LargeHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.desktop.xl};
  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.xl};
  }

  ${() => Headings}
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.desktop.m};
  @media (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
  }
  ${() => Headings}
`;
