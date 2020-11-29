import React, { useState } from 'react';
import { Card, CardContent, Button, TextField } from '@material-ui/core';

function Timer() {
  const [inputSecond, setInputSecond] = useState(0);
  const [inputMinute, setInputMinute] = useState(0);
  const [remainSeconds, setRemainSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const setSecondValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSecond(Number(event.target.value));
  };

  const setMinuteValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMinute(Number(event.target.value));
  };

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    const remain = inputMinute * 60 + inputSecond;
    setRemainSeconds(remain);
    const intervalId = window.setInterval(() => {
      update(remain);
    }, 1000);
    setIntervalId(intervalId);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  const reset = () => {
    console.log('reset');
  };

  const update = (remain: number) => {
    console.log(remain);
    if (remain > 0) {
      setRemainSeconds(remain - 1);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <h3>Timer</h3>
          <TextField
            id='second'
            type='number'
            defaultValue='0'
            onChange={setMinuteValue}
          />
          分
          <TextField
            id='minute'
            type='number'
            defaultValue='0'
            onChange={setSecondValue}
          />
          秒
          <p>
          </p>
          <p>
            <Button onClick={start} variant='contained' color='primary'>
              スタート
            </Button>
            <Button onClick={stop} variant='contained' color='secondary'>
              ストップ
            </Button>
            <Button onClick={reset} variant='contained'>
              リセット
            </Button>
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default Timer;
