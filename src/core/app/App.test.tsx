import { render, screen } from "@testing-library/react";
import React from "react";
import { Header } from "../../pages/header/header";
testing("renders learn react link", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Welcome to GOT game/i);
  expect(linkElement).tobeInTheDocument();
});
function expect(linkElement: HTMLElement) {
  throw new Error("Function not implemented.");
}
function testing(arg0: string, arg1: () => void) {
  throw new Error("Function not implemented.");
}
