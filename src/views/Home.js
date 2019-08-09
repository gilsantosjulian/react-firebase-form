// import React from "react";
import { Box } from "grommet";

import Footer from "../components/generics/Footer.jsx";
import RegisterForm from "../components/specifics/RegisterForm.jsx";
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
      <RegisterForm visibility={true} />
      <Footer />{" "}
    </Box>
  );
}

export default Home;
