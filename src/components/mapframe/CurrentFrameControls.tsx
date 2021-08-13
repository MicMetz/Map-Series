import { Box, Button, Tooltip } from '@material-ui/core';
import ReloadIcon from "@material-ui/icons/Refresh";
import StarIcon from "@material-ui/icons/Star";
import * as React from "react";
import { useRefreshCurrentFrame } from "store/currentFrame";

interface Props {}

export function CurrentFrameControls(props: Props) {
  const {} = props;
  const refreshFrame = useRefreshCurrentFrame();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <Button
        variant="contained"
        startIcon={<ReloadIcon />}
        onClick={refreshFrame}
      >
        New Frame
      </Button>

      <Box marginRight={2}>
        <Tooltip title="Here you can add this Frame to your favorites. This feature will come later.">
          <Button variant="outlined" startIcon={<StarIcon />}>
            Favorite
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
