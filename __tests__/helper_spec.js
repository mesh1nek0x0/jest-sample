const axios = require("axios");
const Helper = require("../helper");
jest.mock("axios");

describe("test", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("integration", async () => {
    const helper = new Helper();
    const result = await helper.getData();
    expect(result.body.id).toBe("42932");
  });

  test("unit success", async () => {
    const users = { id: "123456789" };
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    const helper = new Helper();
    const result = await helper.getData();
    expect(result.body.id).toBe("123456789");
  });

  test("unit failure", async () => {
    axios.get.mockRejectedValue(new Error("mocking error"));

    const helper = new Helper();
    const result = await helper.getData();
    expect(result.code).toBe(1);
  });

  test("spy", () => {
    const cb = jest.fn();
    setTimeout('hoge', cb('test test'), 100);
    expect(cb.mock.calls[0][0]).toBe('test test');
  });
});
