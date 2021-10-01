import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme, light }) => {
    return css`
      color: ${light ? theme.colors.white : theme.colors.primaryColor};
    `;
  }}
`;
