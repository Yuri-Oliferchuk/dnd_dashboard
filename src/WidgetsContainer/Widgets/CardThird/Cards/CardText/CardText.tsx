import { Button, Typography } from '@material-ui/core';
import { FC } from 'react';
import style from './CardText.module.css';

type CardTextProps = {
    id: number
    text: string
    onClickRemove: (e: any) => void
}
export const CardText:FC<CardTextProps> = ({id, text, onClickRemove}) => {
  return (
      <div className={style.widget} >
          <Typography variant='h4'>{text}</Typography>
          <Button id={`${id}`} className={style.click} variant='text' onClick={onClickRemove}>Remove</Button>
      </div>
  );
}
