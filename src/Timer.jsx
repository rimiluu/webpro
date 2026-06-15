import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  min-height: 100vh;
  background-color: #222;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimerBox = styled.div`
  text-align: center;
`;

const CountText = styled.h1`
  font-size: 64px;
  margin-bottom: 40px;
`;

const StopButton = styled.button`
  background-color: #111;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-size: 20px;
  cursor: pointer;
`;

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const handleStop = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  useEffect(() => {
    console.log(`countの値が変わりました: ${count}`);
  }, [count]);

  return (
    <Screen>
      <TimerBox>
        <CountText>{count} 秒経過</CountText>

        <StopButton onClick={handleStop}>
          ストップ
        </StopButton>
      </TimerBox>
    </Screen>
  );
};

export default Timer;