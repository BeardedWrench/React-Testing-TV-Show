import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import mockData from ".//utils/mockData";
import { fetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

test("Renders without errors", () => {
    fetchShow.mockResolvedValueOnce({ data: mockData });
  render(<App />);
});

test("display state if no data", () => {
    fetchShow.mockResolvedValueOnce({ data: null });
  render(<App />);

  const isLoading = screen.queryByText(/Fetching data.../i);
  expect(isLoading).toBeInTheDocument();
});