import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Provider } from "mobx-react";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import HomePage from "./components/HomePage/HomePage";

const stores = {};
const App: React.FC = () => {
  return (
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <Provider {...stores}>
         <HomePage/>
        </Provider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
