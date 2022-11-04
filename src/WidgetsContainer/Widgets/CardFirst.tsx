import { Button, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import Draggable from 'react-draggable';
import style from './CardFirst.module.css';

type CardFirstProps = {
    text: string
}
export const CardFirst:FC<CardFirstProps> = ({text}) => {
  return (
    <Draggable>
      <div className={style.widget}>
          <Typography variant='h4'>{text}</Typography>
          <Button className={style.click} variant='text'>Click!</Button>
      </div>
    </Draggable>
  );
}
