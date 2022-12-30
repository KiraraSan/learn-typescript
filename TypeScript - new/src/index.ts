/* any */
// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published = true;
// let level;
// level = 1;
// level = 'a';

// function render(document) {
//     console.log(document);
// }

/* array */
// let numbers: number[] = [];
// numbers.forEach(n => n.toExponential);

/* tuples */
// 1, 'Alex'
// let user: [number, string, boolean, number] = [1, 'Alex', true, 0];

/* enums */
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
// const enum Size { Small = 1, Medium , Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);

/* functions */
// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000);

/* objects */
// let employee: {
//     readonly id: number,
//     name: string
//     retire: (date: Date) => void
// } = { 
//     id: 1, 
//     name: 'Alex',
//     retire: (date: Date) => {
//         console.log(date);
//     } 
// };

/* ============================================= */
/* Advanced Types */

/* type aliases */
// type Employee = {
//     readonly id: number,
//     name: string
//     retire: (date: Date) => void
// }

// let employee: Employee = { 
//     id: 1, 
//     name: 'Alex',
//     retire: (date: Date) => {
//         console.log(date);
//     } 
// };

/* Union Type */
// function kg_to_lbs(weight: number | string): number {
//     // Narrowing
//     if (typeof weight === 'number') 
//         return weight * 2.2;
//     else 
//         return parseInt(weight) * 2.2;
// }

// kg_to_lbs(10);
// kg_to_lbs('10 kg');

/* intersection types */
// type Draggable = {
//     drag: () => void
// };

// type Resizeable = {
//     resize: () => void
// };

// type UIWidget = Draggable & Resizeable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

/* literal types */
// Literal (exact, spesific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';

/* nullable types */
// function greet(name: string | null | undefined) {
//     if (name)
//         console.log(name.toUpperCase());
//     else   
//         console.log('Hola!');
// }

// greet(undefined);

/* optional chaining */
type Customer = {
    birthday?: Date
};

function get_customer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = get_customer(1);
// if (customer !== null && customer !== undefined)
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call 
let log: any = null;
log?.('a');

