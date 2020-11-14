import React from 'react';
import { Card, CardContent, Button } from '@material-ui/core';

const Counter = () => {
  return (
    <>
      <Card>
        <CardContent>
          Counter
          <div>
            <Button onClick={increment} variant='contained' color='primary'>
              +1
            </Button>
            <Button onClick={descriment} variant='contained' color='secondary'>
              -1
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

const increment = () => {
  console.log(1);
}

const descriment = () => {
  console.log(-1);
}

export default Counter;
