import React, { FC } from 'react';
import EventsComponent from '../components/Events';
import { Action, Event } from '../types';

type Props = {
  state: Event[];
  dispatch: React.Dispatch<Action>;
};

const EventsContainer: FC<Props> = ({ state, dispatch }) => {
  return <EventsComponent state={state} dispatch={dispatch} />;
};

export default EventsContainer;
