module.exports = {
  input1: {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  output1: [
    { key: ["id"], value: "0001" },
    { key: ["type"], value: "donut" },
    { key: ["name"], value: "Cake" },
    { key: ["ppu"], value: 0.55 },
    {
      key: ["batters", "batter"],
      value: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    {
      key: ["topping"],
      value: [
        { id: "5001", type: "None" },
        { id: "5002", type: "Glazed" },
        { id: "5005", type: "Sugar" },
        { id: "5007", type: "Powdered Sugar" },
        { id: "5006", type: "Chocolate with Sprinkles" },
        { id: "5003", type: "Chocolate" },
        { id: "5004", type: "Maple" },
      ],
    },
  ],
  input2: {
    employee: {
      name: {
        firstName: "nara",
        lastName: "simha",
      },
      address: [
        {
          street: "a",
          city: "b",
          state: "c",
        },
        {
          street: "a1",
          city: "b1",
          state: "c1",
        },
      ],
    },
  },
  output2: [
    {
      key: ["employee", "name", "firstName"],
      value: "nara",
    },
    {
      key: ["employee", "name", "lastName"],
      value: "simha",
    },
    {
      key: ["employee", "address"],
      value: [
        {
          street: "a",
          city: "b",
          state: "c",
        },
        {
          street: "a1",
          city: "b1",
          state: "c1",
        },
      ],
    },
  ],
};
