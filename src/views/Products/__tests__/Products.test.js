import {
  render as baseRender,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { ProductsProvider } from "../../../contexts/ProductsContext";
import ProductsView from "../Products";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Search component", () => {
  const render = (Component) => {
    baseRender(
      <Router>
        <ProductsProvider>{Component}</ProductsProvider>
      </Router>
    );
  };

  test("Should render loading and default message", async () => {
    var mock = new MockAdapter(axios, { delayResponse: 2000 });
    const data = { response: true };
    mock
      .onGet("https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=5")
      .reply(200, data);

    render(<ProductsView />);
    const searchBox = screen.getByTestId("search");
    fireEvent.change(searchBox, { target: { value: "iphone" } });
    await waitFor(() => {
      fireEvent.keyDown(searchBox, {
        key: "Enter",
        code: "Enter",
        charCode: 13,
        keyCode: 13,
      });
    });
    expect(screen.getByText(/cargando.../i)).not.toBeInTheDocument();
  });
});
