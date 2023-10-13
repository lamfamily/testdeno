import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";

import Person, { sayHello } from "./common_module.ts";

Deno.test("sayHello function", () => {
    const grace: Person = {
        lastName: "Hopper",
        firstName: "Grace",
    };

    assertEquals("Hello, Grace!", sayHello(grace));
});

// run with: deno test --allow-net test_remote_module.ts
