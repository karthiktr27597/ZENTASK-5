// print odd number

let input = [4,7,10,15,30,19,45,74,99]
// let input = [2,4,6,88,98,91]

let oddNumber = (input) => {
for(let i of input)
{
    if(i%2 !== 0)
    {
        console.log(i);
    }
}
}
oddNumber(input);


