import React, {  } from 'react';
import style from './CardAddOneMore.module.css';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';

import { Form, Formik } from 'formik';
import useModal from '../../../../../hooks/useModal';

type SelectModalProps = {
  onClickAdd: () => void
}

type ObjectType = {
  id: number 
  name: string 
  active: boolean
}

type StateType = {
  Widget1: ObjectType
  Widget2: ObjectType
  Widget3: ObjectType
}

let state: StateType = {
  Widget1: {id:1, name: 'Widget 1', active: false},
  Widget2: {id:2, name: 'Widget 2', active: false},
  Widget3: {id:3, name: 'Widget 3', active: false}
}

const SelectModal: React.FC<SelectModalProps> = ({onClickAdd}) => {
  
  const { handleClickOpen, isOpened, handleClose } = useModal();

  const onSubmit = (values: any) => {    

    state = {
      ...state,
      [values.target.parentNode.id]: {
        ...state[values.target.parentNode.id as keyof StateType],
        active: true
      }
    }
    
    
    console.log(state);
    // state[values.target.parentNode.id].active = true
    
    onClickAdd();
    handleClose();
  };

  // eslint-disable-next-line array-callback-return
  const mappedButton = Object.entries(state).map((element) => {
    if (!element[1].active) {
      return (
        <Button
          variant="contained"
          type="button"
          onClick={onSubmit}
          id={String(element[0])}
          key={element[1].id}
        >
          {element[0] + ' ' + element[1].name}
        </Button>
      )
    }    
  })

  return (
    <>
      <div>
        <Typography variant='h1' onClick={handleClickOpen}>+</Typography>
        <Dialog
          open={isOpened}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">Додавання віджетів</DialogTitle>
          <DialogContent dividers>
            <Formik
              initialValues={{
                newWidget: 'Додати віджет',
              }}
              onSubmit={onSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form className={style.selectForm}>
                  <DialogActions>
                    {mappedButton}
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default SelectModal;