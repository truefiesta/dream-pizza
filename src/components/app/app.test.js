import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`App snapshot`, () => {
    it(`should render`, () => {
        const tree = renderer.create(
            <App />
        )
        .toJSON();

        expect(tree).toMatchSnapshot();
    })
})