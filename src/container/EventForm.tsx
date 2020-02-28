import React, { FC, Dispatch, useState, MouseEvent } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import EventFormComponent from '../components/EventForm';
import { Action } from '../types';

const EventFormContainer: FC<{ dispatch: Dispatch<Action> }> = ({
  dispatch,
}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (event: MouseEvent<Element>): void => {
    event.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (event: MouseEvent<Element>): void => {
    event.preventDefault();
    dispatch({
      type: DELETE_ALL_EVENTS,
    });
  };

  return (
    <EventFormComponent
      addEvent={addEvent}
      deleteAllEvents={deleteAllEvents}
      setTitle={setTitle}
      setBody={setBody}
      title={title}
      body={body}
    />
  );
};

export default EventFormContainer;
