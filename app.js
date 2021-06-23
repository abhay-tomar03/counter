// set intial count

let count = 0;

// Selecting the content that to be changed

const value = document.querySelector("#value");


const btns = document.querySelectorAll(".btn")

// now selecting each button element

btns.forEach(function(btn) {

    console.log(btn)

    btn.addEventListener("click", function(e) {

     const values =    e.currentTarget.classList;

     if (values.contains('decrease')) {

        count--;    
     } else if (values.contains('increase')) {

        count++;
     } else {


        count = 0;
    }

    if (count>0) {
        value.style.color = "green"
    }  else if(count <0) {
        value.style.color = "red"

    } else {
        value.style.color = "black"
    }

    value.textContent = count;
});
})







