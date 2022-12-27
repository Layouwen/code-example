jest.mock("../utils/People");

import { createPeople } from "../utils";
import People from "../utils/People";

describe("es6 Class", () => {
  test("create people exec inner function", () => {
    createPeople();
    expect(People).toHaveBeenCalled();
    const getNameMockFn = People.mock.instances[0].getName;
    expect(getNameMockFn).toHaveBeenCalled();
  });
});
