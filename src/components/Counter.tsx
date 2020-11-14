import React, { useState } from 'react';
import { Card, CardContent, Button } from '@material-ui/core';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const descriment = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Card>
        <CardContent>
          <h3>Counter</h3>
          <p>{count}</p>
          <p>
            <Button onClick={increment} variant='contained' color='primary'>
              +1
            </Button>
            <Button onClick={descriment} variant='contained' color='secondary'>
              -1
            </Button>
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default Counter;
