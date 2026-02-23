import { css } from "styled-components";

export const adminAnimation = css`
  .admin-appear {
    opacity: 0.1;
    transform: translateY(100%);
    &.admin-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 500ms;
    }
  }
`;


export const casinoAnimation = css`
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 350ms ease-out;
  }
  .count-animated-enter-done {
  }
  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 350ms ease-out;
  }
`;