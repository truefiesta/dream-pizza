import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`Pass`, () => {
  // it(`should work`, () => {
  //   expect(2+2).toEqual(4);
  // })

    it(`should render`, () => {
        const tree = renderer.create(
            <App />
        )
        .toJSON();

        expect(tree).toMatchSnapshot();
    })
})
