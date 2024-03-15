const btn = document.querySelector("#btn")
const h4 = document.querySelector("h4");
let toggle = 0;


btn.addEventListener('click', () =>{
    if (toggle === 0) {
        h4.innerHTML = "Friends";
        h4.style.color = "green"
        btn.innerHTML = "Remove"
        btn.style.backgroundColor = 'rgb(172, 172, 172)'
        btn.style.color = 'black'
        toggle=1;
    } else {
        h4.innerHTML = "Stranger";
        h4.style.color = "red"
        btn.innerHTML = "Add me"
        btn.style.backgroundColor = 'rgb(28, 175, 153)'
        btn.style.color = 'rgb(246, 246, 246)'
        toggle=0;
        
    }
})

// removeMe.addEventListener('click', () =>{
//     h4.innerHTML = "Stranger";
//     h4.style.color = "red"
// })
