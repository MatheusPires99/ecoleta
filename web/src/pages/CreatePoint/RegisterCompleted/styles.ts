import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9998;
  background: #0e0a14;
  opacity: 0.95;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 64px;
    height: 64px;
    color: #34cb79;
  }

  h1 {
    font-size: 36px;
    line-height: 42px;
    color: #f0f0f5;
    margin-top: 32px;
  }
`;
