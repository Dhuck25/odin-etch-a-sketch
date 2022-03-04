
let x = (16 * 16) - 1;

const container = document.querySelector('.grid-container');

/*let sqr = document.createElement("div");
sqr.classList.add('eGrid');



container.appendChild(sqr);*/

let i = 0;
do {
    let sqr = document.createElement("div");
    sqr.classList.add('eGrid');
    sqr.innerHTML = "add";
    container.appendChild(sqr);
    i++;
}
while (i <= x);