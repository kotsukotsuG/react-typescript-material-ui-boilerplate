import { Event, Action } from '../types';
import { DELETE_ALL_EVENTS, DELETE_EVENT, CREATE_EVENT } from '../actions';

const events = (state: Event[] = [], action: Action): Event[] => {
  switch (action.type) {
    case CREATE_EVENT: {
      const numberOfStates: number = state.length;
      const id: number =
        numberOfStates === 0 ? 0 : state[numberOfStates - 1].id + 1;
      const event: Event = {
        id,
        title: action.title,
        body: action.body,
      };

      return [...state, event];
    }
    case DELETE_EVENT: {
      return state.filter(event => event.id !== action.id);
    }
    case DELETE_ALL_EVENTS: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default events;
