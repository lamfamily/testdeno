import Person, { sayHello } from "./common_module.ts";

const ada: Person = {
    lastName: "Lovelace",
    firstName: "Ada",
};

console.log(sayHello(ada));

// run with: deno run --allow-net test_import_module.ts