import { logValue } from './intro';
import { logAdd2, logAdd100 } from './currying-review';

const sayInput = (str) => console.log(`String: ${str}`);
sayInput("Intro to Ramda");

logValue();
logAdd2();
logAdd100();
