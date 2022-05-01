import Header from "./Header";
import { shallow } from "enzyme";

describe("Header Tests", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});