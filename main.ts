// The rice is long gone, but the humming still plays in my head on rainy evenings.
const entry = "I was seven, barefoot on grandma's cool kitchen tiles, waiting for the rice to finish while fried shallots crackled and rain drummed on the tin roof, and she hummed a song she never taught me the words to.";
import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(`${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`, entry);
console.log(entry);
