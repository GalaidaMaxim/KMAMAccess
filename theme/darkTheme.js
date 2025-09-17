import { createTheme, responsiveFontSizes } from "@mui/material";

export let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: "36px",
      fontWeight: 700,
    },

    h2: {
      fontSize: "32px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1280,
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme, {
  breakpoints: ["mobile", "tablet", "laptop"],
  factor: 2,
});

// darkTheme.typography.h1 = {
//   [darkTheme.breakpoints.up("laptop")]: {
//     fontSize: "36px",
//   },
//   [darkTheme.breakpoints.up("tablet")]: {
//     fontSize: "24px",
//   },
//   [darkTheme.breakpoints.up("mobile")]: {
//     fontSize: "24px",
//   },
//   fontWeight: 700,
// };

// darkTheme.typography.h2 = {
//   [darkTheme.breakpoints.up("laptop")]: {
//     fontSize: "36px",
//   },
//   [darkTheme.breakpoints.up("tablet")]: {
//     fontSize: "24px",
//   },
//   [darkTheme.breakpoints.up("mobile")]: {
//     fontSize: "24px",
//   },
//   fontWeight: 700,
// };

darkTheme.palette.whiteButton = darkTheme.palette.augmentColor({
  color: {
    main: darkTheme.palette.text.primary,
  },
  name: "whiteButton",
});
