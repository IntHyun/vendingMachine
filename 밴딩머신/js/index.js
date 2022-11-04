import ColaGenerator from './components/colaGenerator.js';
// import ColaGenerator2 from './components/prac.js';
// import VendingMachine from './components/vendingmachine.js';
import Vendingmachine from './components/vending.js';

// const colaGenerator = new ColaGenerator();
const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

// await 을 사용하려면 메서드에 async가 붙어있어야됨

// (async () => {
//     await colaGenerator.setup();
//     vendingmachine.setup();
// })();

await colaGenerator.setup();
vendingmachine.setup();
