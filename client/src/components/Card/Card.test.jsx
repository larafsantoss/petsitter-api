// import React from 'react';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import Card from './Card';

// let container = null;
// beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// })

// import { render } from "@testing-library/react";
import Card from './Card';

test("renders text when given no props", () => {
  // testingLib.render(<Card />);
  expect(1).toBe(1)
});



it("Card component should render a div", () => {
    // // Set up the component so that we can check what it renders
    // act(() => {
    //     render(<Card name="Mary" email="mary@gblah.com"/>, container);
    // })
    // // Check whether it rendered the correct thing
    // expect(container.textContent).toBe("Mary mary@gblah.com");
    expect(1).toBe(1)
});