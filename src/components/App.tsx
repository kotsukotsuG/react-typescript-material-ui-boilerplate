import React, { useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import reducer from '../reducers';
import Events from './Events';
import EventFormContainer from '../container/EventForm';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <EventFormContainer dispatch={dispatch} />
      </Grid>
      <Grid item xs={6}>
        <Events state={state} dispatch={dispatch} />
      </Grid>
    </Grid>
  );
};

export default App;
