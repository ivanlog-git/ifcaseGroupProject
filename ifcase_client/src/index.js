import { Example2 } from "./classes/Example2";
import { Example } from "./Example";

const body = document.querySelector('body');



const ex = new Example();
const ex2 = new Example();
const ex3 = new Example();
body.append(ex.el);
body.append(ex2.el);
body.append(ex3.el);


body.append(new Example2().el);