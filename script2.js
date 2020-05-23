// my solution

const fs = require('fs');

// const sumParenthesis = (data) => {
//     const dataP = data.toString();
//     let floor = 0, i = 0;
//     for( c of dataP){
//         c === '(' ? floor++ : floor--;
//         i++;
//         if(floor === -1) {
//             break;
//         }
//     }
//     return(
//         console.log(floor + ' and ' + i)
//         )
// }


// fs.readFile('data.txt', (err, data) => {
//     console.time('santa')
//     sumParenthesis(data);
//     console.timeEnd('santa')
// })



// andrei's solution:

function question2() {
    fs.readFile('./data.txt', (err, data) => {
        console.time('santa');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1
            } else if (currentItem ===')'){
                accumulator -= 1
            }
            counter ++
            return accumulator < 0;
        })
        console.log('basement entered at:', counter)
        console.timeEnd('santa');
    })
}

question2();