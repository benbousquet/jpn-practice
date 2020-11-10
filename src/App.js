import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from "@chakra-ui/core";

function App({ children }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          {children}
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
