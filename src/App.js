import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Navbar } from "./components/Navbar";
import { createTheme } from "@mui/material";
import { AddButton } from "./components/Add";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff7000",
        light: "orange",
      },
      secondary: {
        main: "#00b2e7",
      },
      otherColor: {
        main: "#999",
      },
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddButton />
      </Box>
    </ThemeProvider>
  );
};

export default App;
