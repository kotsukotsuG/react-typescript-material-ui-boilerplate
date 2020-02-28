/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, MouseEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

interface Props {
  addEvent: (event: MouseEvent<Element>) => void;
  deleteAllEvents: (event: MouseEvent<Element>) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  body: string;
}

const EventFormComponent: FC<Props> = ({
  addEvent,
  deleteAllEvents,
  setTitle,
  setBody,
  title,
  body,
}) => {
  return (
    <form noValidate>
      <Box
        component="div"
        display="inline"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <TextField
          required
          id="title"
          label="タイトル"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Box>
      <Box
        component="div"
        display="inline"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <TextField
          id="body"
          label="ボディ"
          multiline
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </Box>
      <Box
        component="div"
        display="inline"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <Button
          color="primary"
          size="medium"
          variant="outlined"
          onClick={addEvent}
        >
          作成
        </Button>
      </Box>
      <Box
        component="div"
        display="inline"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <Button
          color="secondary"
          size="medium"
          variant="outlined"
          onClick={deleteAllEvents}
        >
          削除
        </Button>
      </Box>
    </form>
  );
};

export default EventFormComponent;
