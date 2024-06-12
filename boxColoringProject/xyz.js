// var c=100;
// function x(){
//     var c=30;
//     console.log(c);
// }
// x();

// // {
// //     var c=30;
// //     console.log(c);
// // }
// console.log(c);

// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }console.log("Namaste Js");
// }
// x();


// function x(){
//     for(var i=1; i<=5; i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i*1000);
//         }
//         close(i);
//     }console.log("Namaste Js");
// }
// x();



// function changeColor() {
//     const inputValue = parseInt(document.getElementById('inputValue').value);
//     if (inputValue < 1 || inputValue > 9 || isNaN(inputValue)) {
//       alert('Please enter a number between 1 and 9');
//       return;
//     }
  
//     const boxes = document.querySelectorAll('.box');
//     boxes.forEach((box, index) => {
//       if (parseInt(box.textContent) === inputValue) {
//         box.style.backgroundColor = 'green';
//       }
//     });
//   }


function changeColor() {
    const inputValue = parseInt(document.getElementById('inputValue').value);
    if (inputValue < 1 || inputValue > 9 || isNaN(inputValue)) {
        alert('Please enter a number between 1 and 9');
        return;
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        if (parseInt(box.textContent) === inputValue) {
            box.style.backgroundColor = 'green';
        } else {
            box.style.backgroundColor = ''; // Reset previous colors
        }
    });
}


