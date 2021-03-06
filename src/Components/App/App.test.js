import App from "./App";
import { shallow } from "enzyme";

describe("APP TESTS", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
