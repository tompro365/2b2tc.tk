// let copyText = document.querySelector(".copy-text");
// copyText.querySelector("button").addEventListener("click", function(){
//     let input = document.querySelector("input.text");
//     input.select();
//     document.execCommand("copy");
//     copyText.classList.add("active");
//     window.getSelection().removeAllRanges();
//     setTimeout(function(){
//         copyText.classList.remove("active");
//     },2500)
// });

// document.querySelector(".fa-clone").addEventListener("click", () => {
//     let input = document.querySelector(".copy-text input");
//     navigator.clipboard.writeText(input.value);
//     console.log("copied "+input.valueu)
//   })


function introduce() {
    window.location = '/introduce/introduce.html';
}