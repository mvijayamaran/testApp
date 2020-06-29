const ioObjects = require("./ioObjects");
const flattenObject = (obj) => {
  const isObject = (val) => typeof val === "object" && !Array.isArray(val);
  const mergePath = (a, b) => (a ? [...a, b] : b);
  const outputObject = [];
  const paths = (obj = {}, head = []) => {
    return Object.entries(obj).reduce((product, [key, value]) => {
      const keyFullPath = mergePath(head, key);
      if (isObject(value)) {
        return product.concat(paths(value, keyFullPath));
      } else {
        outputObject.push({
          key: keyFullPath,
          value: value,
        });
        return product.concat(keyFullPath);
      }
    }, []);
  };
  paths(obj);
  return outputObject;
};
// To compare two objects converted the I/O objects to JSON strings
console.log(
  JSON.stringify(flattenObject(ioObjects.input1)) ===
    JSON.stringify(ioObjects.output1),
  JSON.stringify(flattenObject(ioObjects.input2)) ===
    JSON.stringify(ioObjects.output2)
);
