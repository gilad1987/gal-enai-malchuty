import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Provider } from "mobx-react";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import HomePage from "./components/pages/HomePage/HomePage";
import CategoryPage from "./components/pages/CategoryPage/CategoryPage";
import Header from "./components/Header/Header/Header";
import ResultPage from "./components/pages/ResultPage/ResultPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BooksStore } from "./stores/BooksStore";
import Api from "./services/Api";

const api = new Api();
const booksStore = new BooksStore(api);
const stores = { booksStore };



const App: React.FC = () => {
  return (
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <Provider {...stores}>
          <Router  basename="/gal-enai-malchuty" >
            <Header />
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/books" exact>
                <CategoryPage />
              </Route>
              <Route path="/books/:id">
                <ResultPage />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
