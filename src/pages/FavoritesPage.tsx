import { Typography } from "@material-ui/core";
import AppFrame from "components/app/AppFrame";
import React from "react";

function FavoritesPage() {
  return (
    <AppFrame>
      <Typography variant="h1" fontSize={"4rem"} marginLeft={5} marginBottom = {5}>Favorites</Typography>
    </AppFrame>
  );
}

export default FavoritesPage;
