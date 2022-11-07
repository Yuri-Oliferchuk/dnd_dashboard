import { FC } from 'react';
import style from './CardAddOneMore.module.css';
import SelectModal from './SelectModal';

type CardAddOneMoreProps = {
  onClickAdd: () => void
}

export const CardAddOneMore:FC<CardAddOneMoreProps> = ({onClickAdd}) => {
  return (
      <div className={style.oneMore}>
          <SelectModal onClickAdd={onClickAdd} />
      </div>
  );
}
