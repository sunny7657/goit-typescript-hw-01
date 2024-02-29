import { concatenation } from "./concatenation";

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    })
}

// let total: number = 100;
// let name: string = 'job';
// let active: boolean = false;
// let und: undefined = undefined;

// name = '5';

// const numbers: number[] = [1, 2, 5, 8, 2, 2];

// numbers.push(2)

// const user:{name: string, age: number} = {
//     name: 'ana',
//     age: 12
// }


// type eventType = 'lesson' | 'deadline';

// const event: eventType = 'deadline';

// let age: unknown = 10;
// age = 'bob';
// age = false;

// type size = 'small' | 'medium' | 'large';

// enum Sizes {
//     small = 'small',
//     medium = 'medium',
//     large = 'large'
// }


// const button1: size = 'large';
// const button2: Sizes = Sizes.large;

// function add(num1: number, num2: number): string{
//     return `${num1} + ${num2}`;
// }

//  add(2, 3);

// function add(num1: number, num2: number): void{
//     console.log( `${num1}` + `${num2}`);;
// }

// type User={
//     name:string
// }

// function great(user:User) :void{
//     console.log('object');
// }

// type Us = {
//     name: string;
//     age: number;
//     hobby: string;
// }

// function userConstructor(name:string, age:number, hobby:string):Us {
//     return{name, age, hobby}
// }
