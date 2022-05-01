import Form from "./Form";
import { shallow } from "enzyme";

describe("Form Tests", () => {
  it("renders without crashing", () => {
    shallow(<Form />);
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<Form />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when handleChange is invoked', () => {
    const wrapper = shallow(<Form />);
    const mockEvent = { target: { value: 'abc', name: 'username' } };

    wrapper.instance().handleChange(mockEvent);
    const results = wrapper.state('username');

    expect(results).toEqual('abc');
  });
});