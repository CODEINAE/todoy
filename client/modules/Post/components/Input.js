import React from 'react';
import { Button, Popup, Grid } from 'semantic-ui-react';

export default () => {
  return (
    <div className="ui huge fluid action input">
      <Popup trigger={<Button>CTG</Button>} flowing hoverable>
        <Grid centered divided columns={3}>
          <Grid.Column textAlign="center">
            <Button>Work</Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button>Play</Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button>Etc</Button>
          </Grid.Column>
        </Grid>
      </Popup>
      <input type="text" placeholder="I want to..." />
      <button className="ui yellow icon button">Today</button>
      <button className="ui teal icon button">Later</button>
    </div>
  );
};
