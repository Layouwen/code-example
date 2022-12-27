import { getConfig } from "../utils";
describe("snapshot", () => {
  test("config", () => {
    expect(getConfig()).toMatchSnapshot();
  });

  test("inline snapshot", () => {
    expect({
      host: "localhost",
      port: 3001,
    }).toMatchInlineSnapshot(`
      {
        "host": "localhost",
        "port": 3001,
      }
    `);
  });
});
