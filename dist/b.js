if (Math.random() >= 0.5) {
    import('./c').then(c => console.log(c.lambda));
}
import { alpha as greatAlpha, beta, coolGamma, cosTheta, sinTheta } from "./a";
import { findLength, numFunctions } from "./barrel";
import * as config from './config.json';
import * as Jq from 'jquery'; // We installed jquery and then also installed @types/jquery as dev dependency
console.log(Jq);
import { specialStr } from 'deep/special';
console.log(specialStr);
import { findCube } from "cube";
console.log(findCube(10));
//import * as aExports from './a';
console.log(greatAlpha);
console.log(beta);
console.log(coolGamma);
console.log(cosTheta);
console.log(sinTheta);
//console.log(lambda);
console.log(findLength("Ramya"));
console.log(numFunctions.isOdd(10));
console.log(numFunctions.isOdd(13));
console.log(numFunctions.isEven(8));
console.log(config);
// console.log(aExports.alpha);
// console.log(aExports.beta);
// console.log(aExports.coolGamma);
// console.log(aExports.cosTheta);
// console.log(aExports.sinTheta)
// console.log(aExports.lambda)
