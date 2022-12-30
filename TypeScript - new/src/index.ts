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
let employee: {
    readonly id: number,
    name: string
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'Alex'
    retire: (date: Date) => {
        console.log(date);
    } 
};
