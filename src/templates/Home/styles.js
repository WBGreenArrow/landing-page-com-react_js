import styled, { css } from "styled-components";

export const Wapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
  `}
`;
