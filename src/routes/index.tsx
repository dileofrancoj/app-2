import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ProductsProvider } from "../contexts/ProductsContext";

import ProductView from "../views/Product/Product";
import ProductsView from "../views/Products/Products";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ProductsProvider>
          <Route path="/products" exact component={ProductsView} />
          <Route path="/products/:id" component={ProductView} />
        </ProductsProvider>
        <Redirect to="/products" />
      </Switch>
    </Router>
  );
};

export default Routes;
