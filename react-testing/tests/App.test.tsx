import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

// Tests
describe("App test", async () => {
  it("Should render the page correctly", async () => {
    render(<App />);
    const h1 = screen.queryByText("HELLO WORLD");
    expect(h1).not.toBeNull();
  });
});
