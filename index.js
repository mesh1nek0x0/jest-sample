const Helper = require("./helper");

async function func1() {
  const helper = new Helper();
  const result = await helper.getData();
  console.log(result);
  return result;
}

func1();
