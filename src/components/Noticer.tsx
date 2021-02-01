import React, { useState } from 'react';
import { Card, CardContent, Button, TextField, CardActions } from '@material-ui/core';

function Noticer() {
  const [titleMessage, setTitleMessage] = useState('');

  const generateNotification = () => {
    console.log(titleMessage);
    if (titleMessage === '') return;
    const title   = titleMessage;
    const options = {
      // body : 'content',
      // icon : 'image path',
      // tag: "notification's tag",
      data : {
        foo : '任意のデータ'
      }
    };
    new Notification(title, options);
  }

  const setNotificationString = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleMessage(String(event.target.value));
  };

  return(
    <>
      <Card>
        <CardContent>
          <h2>通知出すよ～！</h2>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <TextField
            id='title'
            type='text'
            defaultValue={titleMessage}
            placeholder='文字列を入力してください'
            onChange={setNotificationString}
          />
        </CardContent>
        <CardActions>
          <Button onClick={generateNotification} variant='contained'>
            通知を出す！
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Noticer;
