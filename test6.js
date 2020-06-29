const serviceData = require("./serviceData");
const config = serviceData.config;
let overAllData = serviceData.data;
const applyConfig = (data) => {
  let obj = {};
  config.forEach((el) => {
    obj[el.HeaderName] =
      typeof el.Column == "function" ? el.Column(data) : data[el.HeaderName];
  });
  return obj;
};
overAllData = overAllData.map((el) => {
  return (el = applyConfig(el));
});
const output = overAllData.reduce((result, item) => {
  const app = (result[item.Organization] = result[item.Organization] || {});
  const type = (app[item.Department] = app[item.Department] || {});
  const user = (type[item.UserName] = type[item.UserName] || []);
  user.push(item);
  return result;
}, {});

console.log(JSON.stringify(output));
