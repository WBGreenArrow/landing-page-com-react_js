import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

import Home from "../Home";

/*eslint-disable*/

test("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);
  const headinngContainer = screen.getByRole("heading", {
    name: "Hello World",
  }).parentElement;
  expect(headinngContainer).toHaveStyle({ background: theme.colors.mainBg });

  //expect(headinngContainer).toHaveStyleRule("background", "green");

  expect(headinngContainer).toMatchSnapshot();
});
