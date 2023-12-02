import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  }
`;

function App() {
  
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </>
  )
}

export default App
