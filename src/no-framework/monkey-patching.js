const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

//Your code:
//monkey patch

const winner = thumbWar("Corey Hammond", "Eisley Jo");
assert.strictEqual(winner, "Corey Hammond");

// Your code:
// cleanup
