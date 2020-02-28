import React, { FC, Dispatch } from 'react';
import EventInfoComponent from '../components/EventInfo';
import { DELETE_EVENT } from '../actions';
import { Event, Action } from '../types';

type Props = {
  event: Event;
  dispatch: Dispatch<Action>;
};
const EventInfoContainer: FC<Props> = ({ event, dispatch }) => {
  const deleteHandleClick = () => {
    const result = window.confirm(
      `イベントID${event.id}を本当に削除して良いですか？`
    );
    if (result) dispatch({ id: event.id, type: DELETE_EVENT });
  };

  return (
    <EventInfoComponent event={event} deleteHandleClick={deleteHandleClick} />
  );
};

export default EventInfoContainer;
