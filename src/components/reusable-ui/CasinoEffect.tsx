import { createRef, useRef, type RefObject } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({
  count,
  className,
}: {
  count: string | number;
  className?: string;
}) {
  const refsByKey = useRef(new Map<string, RefObject<HTMLSpanElement | null>>());
  const transitionKey = String(count);

  if (!refsByKey.current.has(transitionKey)) {
    refsByKey.current.set(transitionKey, createRef<HTMLSpanElement>());
  }

  const nodeRef = refsByKey.current.get(transitionKey)!;

  return (
    <CasinoEffectStyled>
      <TransitionGroup component={null}>
        <CSSTransition
          classNames={"count-animated"}
          timeout={1000}
          key={transitionKey}
          nodeRef={nodeRef}
        >
          <span ref={nodeRef} className={className}>
            {count}
          </span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectStyled>
  );
}

export const CasinoEffectStyled = styled.div`
  display: inline-grid;
  overflow: hidden;
  position :relative ;
  span {
    display: inline-block;
    grid-area: 1 / 1;
    white-space: nowrap;
    will-change: transform;
    
  }
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 1s;
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
    transition: 1s;
  }
`;
