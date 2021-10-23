import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { FavoritesProvider } from "../contexts/FavoritesContext";
import { ProductsProvider } from "../contexts/ProductsContext";

import Search from "../components/Search";
import Navbar from "../components/Navbar/Navbar";
import ProductView from "../views/Product/Product";
import ProductsView from "../views/Products/Products";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ProductsProvider>
          <FavoritesProvider>
            <Navbar />
            <Search />
            <Route path="/products" exact component={ProductsView} />
            <Route path="/products/:id" component={ProductView} />
          </FavoritesProvider>
        </ProductsProvider>

        <Redirect to="/products" />
      </Switch>
    </Router>
  );
};

export default Routes;
