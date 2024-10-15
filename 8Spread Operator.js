// let example1 = [1, 2, 3, 4, 5, 6]
// let example2 = [...example1]

// example2.push(7)

// console.log(example1) //[1, 2, 3, 4, 5, 6]
// console.log(example2) //[1, 2, 3, 4, 5, 6,7]

let example1 = {
    firstName: 'Dylan'
}

let example2 = {
    ...example1
}

console.log(example2)