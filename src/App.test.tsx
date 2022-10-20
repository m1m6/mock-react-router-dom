import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import App from "./App";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe("App", () => {
  it("has a button and does navigate to other component", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Testing navigating using the button
    expect(
      screen.getByText("Post 1 - Using useNavigate hook")
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText("Post 1 - Using useNavigate hook"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/post-1');
  });
});
