import { CSSReset, ThemeProvider } from "@chakra-ui/core";

function App({ children }) {
  return (
    <div>
      <ThemeProvider>
        <CSSReset />
        {children}
      </ThemeProvider>
    </div>
  );
}

export default App;
