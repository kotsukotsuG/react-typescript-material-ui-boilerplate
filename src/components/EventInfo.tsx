import React, { FC } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Event } from '../types';

type Props = {
  event: Event;
  deleteHandleClick: () => void;
};
const EventInfoComponent: FC<Props> = ({ event, deleteHandleClick }) => {
  return (
    <TableRow>
      <TableCell>{event.id}</TableCell>
      <TableCell>{event.title}</TableCell>
      <TableCell>{event.body}</TableCell>
      <TableCell>
        <Button
          type="button"
          color="secondary"
          size="medium"
          variant="outlined"
          onClick={deleteHandleClick}
        >
          削除
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default EventInfoComponent;
