import React, { FC } from 'react';
import { CardFirst } from './Widgets/CardFirst/CardFirst';
import style from './WidgetsContainer.module.css';

export const WidgetsContainer:FC = () => {
  return (
        <div className={style.container}>
            <CardFirst text='1' />
            <CardFirst text='2' />
            <CardFirst text='3' />
            <CardFirst text='4' />
        </div>
  );
}
