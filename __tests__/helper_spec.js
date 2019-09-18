const axios = require("axios");
const Helper = require("../helper");
jest.mock("axios");

describe("test", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("integration", async () => {
    const helper = new Helper();
    const result = await helper.getData(42932);
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

  test("spy", async () => {
    axios.get.mockResolvedValue({})
    const helper = new Helper();
    const result = await helper.getData(123456789);
    expect(axios.get.mock.calls[0][0]).toBe("http://dummy.restapiexample.com/api/v1/employee/123456789");
  });
});
