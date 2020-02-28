import React, { FC } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Event, Action } from '../types';
import EventInfoContainer from '../container/EventInfo';

type Props = {
  state: Event[];
  dispatch: React.Dispatch<Action>;
};

const Events: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        イベント一覧
      </Typography>
      <Table className="table table-hover">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>ボディ</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {state.map((event: Event) => (
            <EventInfoContainer event={event} dispatch={dispatch} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Events;
