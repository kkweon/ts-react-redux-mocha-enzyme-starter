import * as React from "react";
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import App from "../../src/components/App";

describe("<App />", () => {
  it("has Hello World", () => {
    const wrapper = Enzyme.render(<App />);
    expect(wrapper.text()).contains("Hello World");
  });
});
