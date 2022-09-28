import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

describe('test App component', () => {
  test('renders App component', () => {
    const component = render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

