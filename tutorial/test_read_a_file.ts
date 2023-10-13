const filenames = Deno.args; // Deno.args is an array of command line arguments

for (const filename of filenames) {
    const file = await Deno.open(filename);
    await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });
}

// Run this program with:
// deno run --allow-read test_read_a_file.ts /etc/hosts /etc/timezone