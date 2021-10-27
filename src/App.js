import { Editor, Frame, Element } from '@craftjs/core';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { SettingsPanel } from './components/SettingsPanel';
import { Toolbox } from './components/Toolbox';
import { Topbar } from './components/Topbar';

import { Button } from './components/user/Button';
import { Container } from './components/user/Container';
import { Text } from './components/user/Text';
import { Picture } from './components/user/Picture';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: 'rgb(252, 253, 253)',
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <div style={{ margin: '0 auto', width: '1100px' }}>
      <Typography style={{ margin: '20px 0' }} variant="h5" align="center">
        I am editabble area
      </Typography>
      
      <Editor
        resolver={{
          Button,
          Text,
          Container,
          Picture,
        }}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: '10px' }}>
          <Grid item xs={8}>
            <Frame>
              <Element
                canvas
                is={Container}
                padding={5}
                background="#eeeeee"
                data-cy="root-container"
              >
                <Button text="I am BUTTON" size="small" data-cy="frame-button" />
                <Text fontSize={20} text="I am TEXT" data-cy="frame-text" />
                <Element
                  canvas
                  is={Container}
                  padding={6}
                  background="#999999"
                  data-cy="frame-container"
                >
                  <Text
                    size="small"
                    text="I am TEXT in Container"
                    data-cy="frame-container-text"
                  />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}