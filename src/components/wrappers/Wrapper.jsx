import React from "react";
import { View, NotFoundBoundary, useLoadingRoute } from "react-navi";
import { Grommet } from "grommet";

import theme from "../../config/theme";
import NotFound from "../../views/NotFound.mdx";
import { MDXProvider } from "@mdx-js/tag";
import HorizontalSpinner from "../generics/HorizontalSpinner";
import Splash from "../generics/Splash.jsx";

const styles = {
  container: {
    overflowX: "hidden"
  }
};

export default () => {
  let loadingRoute = useLoadingRoute();

  return (
    <Grommet theme={theme} full style={styles.container}>
      <Splash />
      <NotFoundBoundary render={() => <NotFound />}>
        <HorizontalSpinner visibility={loadingRoute} />
        <MDXProvider>
          <View />
        </MDXProvider>
      </NotFoundBoundary>
    </Grommet>
  );
};
