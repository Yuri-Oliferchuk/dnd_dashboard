import { Typography } from '@material-ui/core';
import { FC } from 'react';
import style from './CardAddOneMore.module.css';

type CardAddOneMoreProps = {
  onClickAdd: () => void
}

export const CardAddOneMore:FC<CardAddOneMoreProps> = ({onClickAdd}) => {
  return (
      <div className={style.oneMore} onClick={onClickAdd}>
          <Typography variant='h1'>+</Typography>
      </div>
  );
}
