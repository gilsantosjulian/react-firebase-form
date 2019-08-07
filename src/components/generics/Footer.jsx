import React from "react";
import { Box } from "grommet";

// const styles = {
//   paragraph: {
//     fontSize: 16
//   }
// };

// export default ({ background = "light-1" }) => {
//   const renderLogo = size => {
//     if (size !== "xsmall" && size !== "small")
//       return <Image src={require("")} />;
//   };

//   const getDirection = size => {
//     if (size === "xsmall" || size === "small" || size === "medium")
//       return "column";

//     return "row";
//   };

//   const getHeight = size => {
//     if (size === "xsmall" || size === "small" || size === "medium")
//       return "140px";

//     return "xsmall";
//   };

//   const getWidth = size => {
//     if (size === "xsmall" || size === "small" || size === "medium")
//       return "large";

//     return "small";
//   };

//   const getJustify = size => {
//     if (size === "xsmall" || size === "small" || size === "medium")
//       return "start";

//     return "around";
//   };

//   const getFill = size => {
//     if (size === "xsmall" || size === "small" || size === "medium")
//       return "horizontal";

//     return false;
//   };

//   return (
//     <ResponsiveContext.Consumer>
//       {size => {
//         return (
//           <Box
//             pad={getWidth(size)}
//             height={getHeight(size)}
//             direction={getDirection(size)}
//             background={background}
//             justify={getJustify(size)}
//             gap="medium"
//           >
//             <Box
//               fill={getFill(size)}
//               direction="row"
//               align="center"
//               justify="center"
//               gap="small"
//             >
//               {renderLogo(size)}
//               <Paragraph textAlign="center" style={styles.paragraph}>
//                 {"TXT_200"}
//               </Paragraph>
//             </Box>
//             <Box
//               fill={getFill(size)}
//               direction="row"
//               align="center"
//               justify="center"
//               gap="xsmall"
//             >
//               <Paragraph style={styles.paragraph}>{"TXT_201"}</Paragraph>
//               <Image src={require("")} />
//               <Paragraph style={styles.paragraph}>{"TXT_202"}</Paragraph>
//               <Image src={require("")} />
//             </Box>
//           </Box>
//         );
//       }}
//     </ResponsiveContext.Consumer>
//   );
// };

function Footer() {
  return (
    <Box>
      <Box height="xsmall" />
      Footer
      {/* <Toolbar withButton /> */}
      {/* <Layer visibility={true} /> */}
    </Box>
  );
}

export default Footer;
