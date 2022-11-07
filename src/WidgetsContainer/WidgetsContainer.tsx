import React, { FC } from 'react';
import { Container } from './Widgets/CardThird/Container';
// import { CardFirst } from './Widgets/CardFirst/CardFirst';
import style from './WidgetsContainer.module.css';
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import { DndProvider } from 'react-dnd';
// import { Container } from './Widgets/CardSecond/Container';

export const WidgetsContainer:FC = () => {
  return (
        <div className={style.container}>
          {/* <CardFirst text='1' />
          <CardFirst text='2' />
          <CardFirst text='3' />
          <CardFirst text='4' /> */}

          {/* <DndProvider backend={HTML5Backend}>
            <Container />
          </DndProvider> */}

          <Container />
        </div>
  );
}
