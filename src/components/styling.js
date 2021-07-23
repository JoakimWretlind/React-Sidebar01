import { css } from 'styled-components';

export const PageSection = css`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageH1 = css`
  font-size: clamp(2rem, 6vw, 6rem);
  text-transform: uppercase;
  letter-spacing: .3rem;
`;