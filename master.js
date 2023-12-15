document.querySelector("button").addEventListener("click", (e) => {
    let _num = e.target.previousElementSibling.value
    let _div = document.getElementById("div")
    if (_num <= 0) {
        alert('Please enter a number greater than zero!')
    } else {
        while (_div.firstChild) {
            _div.removeChild(_div.firstChild);
        }

        for (let i = 1; i <= _num; i++) {
            let _p = document.createElement("p")
            _p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum sit ut itaque odio omnis delectus odit fugit, blanditiis quis magni eveniet, consequatur ullam reprehenderit! Alias quidem ab laboriosam mollitia!"
            _div.appendChild(_p)
        }
    }
})