// import React from "react";
import { Box } from "grommet";

import Footer from "../components/generics/Footer.jsx";
// // import Layer from "../specifics/Layer.jsx";
// // import Toolbar from "../components/generics/Toolbar.jsx";

// export default () => {
//   return (
//     <Box>
//       <Box height="xsmall" />
//       {/* <Toolbar withButton /> */}
//       {/* <Layer visibility={true} /> */}
//       <Footer />
//     </Box>
//   );
// };
import React from "react";

function Home() {
  return (
    <Box>
      <Box height="xsmall" />
      {/* <Toolbar withButton /> */}
      {/* <Layer visibility={true} /> */}
      <Footer />{" "}
    </Box>
  );
}

export default Home;
