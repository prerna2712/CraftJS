import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
} from "@material-ui/core";
import { Element, useEditor } from "@craftjs/core";
import { Text } from "./user/Text";
import { Button } from "./user/Button";
import { Picture } from "./user/Picture";
import { Container } from "./user/Container";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>

        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(ref, <Button text="I am button" size="small" />)
            }
            variant="contained"
            data-cy="toolbox-button"
          >
            Button
          </MaterialButton>
        </Grid>

        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Text text="I am text" />)}
            variant="contained"
          >
            Text
          </MaterialButton>
        </Grid>

        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Picture text="http://some-domain/image1.jpg" />)}
            variant="contained"
          >
            Image
          </MaterialButton>
        </Grid>

        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Element canvas is={Container} padding={20} />
              )
            }
            variant="contained"
            data-cy="toolbox-container"
          >
            Container
          </MaterialButton>
        </Grid>

        {/* <Grid container direction="column" item>
          <MaterialButton variant="contained">Card</MaterialButton>
        </Grid> */}
      </Grid>
    </Box>
  );
};
