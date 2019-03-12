import { keyframes } from 'emotion';

export const SPIN = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const APPEAR = keyframes`
  from {
      opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
