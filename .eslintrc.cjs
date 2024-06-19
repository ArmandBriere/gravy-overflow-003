let toto;
toto = process.env.FLAG_GRAVY_OVERFLOW_L0_GRAVY;
tata = process.env.FLAG_GRAVY_OVERFLOW_L0_TOPPINGS;
console.log(toto.substr(0, 3));
console.log(toto.substr(3));

console.log(tata.substr(0, 3));
console.log(tata.substr(3));

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
