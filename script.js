
// my solution:

const fs = require('fs');

const sumParenthesis = (data) => {
    const dataP = data.toString();
    let open = [];
    let closed =[];

    for (let i = 0; i < dataP.length; i++) {
        if(dataP[i] === '(') {
            open.push(dataP[i]);
        } else if (dataP[i] === ')') {
            closed.push(dataP[i]);
        }
    }
    return(
        console.log(open.length - closed.length)
        )
}




fs.readFile('data.txt', (err, data) => {
    console.time('santa')
    sumParenthesis(data);
    console.timeEnd('santa')
})


// more elegent solution:

// const fs = require('fs');
 
// fs.readFile('./santa.txt', (err, data) => {
//     console.time('santa');
//     const content = data.toString();
//     let floor = 0;
//     for(chr of content){
//         chr === "(" ? floor++ : floor--;
//     }
//     console.timeEnd('santa');
//     console.log(floor);
// });



// andrei's solution:

// const fs = require('fs');



function question1() {
    fs.readFile("./data.txt", (err, data) => {
        console.time('santaTime')
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.log('floor:', answer)
        console.timeEnd('santaTime')
    })
}


question1()
