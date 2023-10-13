import json_data from './test.json' with { type: "json" };

console.log(json_data);

// or async
const module = await import('./test.json', {
    with: { type: "json" }
});

console.log(module, module.default.author);

// run with: deno run --allow-read test_import_json.ts