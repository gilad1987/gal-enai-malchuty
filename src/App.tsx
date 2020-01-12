import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Provider } from "mobx-react";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
//import HomePage from "./components/pages/HomePage/HomePage";
//import CategoryPage from "./components/pages/CategoryPage/CategoryPage";
import Header from "./components/Header/Header/Header";
import ResultPage from "./components/pages/ResultPage/ResultPage";

const stores = {};
const App: React.FC = () => {
  return (
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <Provider {...stores}>
          <Header />
          {/* <HomePage/> */}
          {/* <CategoryPage /> */}
          <ResultPage/>
        </Provider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
