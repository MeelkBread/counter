
// document.getElementById('counter').innerHTML = function(){
//     setTimeout(){
//         count++;
//         1000
//     }
// }

// setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, "10000")

//   console.log("coucou.")

let counterDelay = setInterval(myCallback, 1000)
let count = 0

function myCallback()
{

    count++
    document.getElementById('counter').innerHTML = count
    console.log(count);

}




