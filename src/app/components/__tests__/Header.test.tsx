import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header", () => {
    it("Renders properly with title prop", () => {
        render(<Header title="Test Heading"/>);

        const header = screen.getByRole('heading');

        expect(header).toHaveTextContent("Test Heading");
    })
})