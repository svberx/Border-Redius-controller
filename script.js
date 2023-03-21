let shape =document.querySelector(".shape");
let allRange =document.querySelector(".all-input");
let topp = document.querySelector(".top");
let bottom =document.querySelector(".bottom");
let right =document.querySelector(".right");
let left =document.querySelector(".left");
let codeVal= document.querySelector(".code-value");
let range = document.querySelectorAll(".range");
let value = document.querySelectorAll(".value")
let topVal = document.querySelectorAll(".top-val")
let rightVal = document.querySelector(".right-val")
let bottomVal = document.querySelector(".bottom-val")
let leftVal = document.querySelector(".left-val")

//all
function changeAll(){
    value.forEach(value   => {
        value.textContent = allRange.value
        allRange.addEventListener("input", (event) => {
            value.textContent = event.target.value
            shape.style.borderRadius =value.textContent+'px';
        })  

 });}


range.forEach((inp)=>{
	inp.addEventListener("change", ()=>{
		codeVal.innerHTML = `${topp.value}px ${right.value}px ${bottom.value}px ${left.value}px`

		shape.style.borderRadius = `${topp.value}px ${right.value}px ${bottom.value}px ${left.value}px`
	})
})

//top
function changeTop (){
    topVal.forEach(value   => {
        topp.addEventListener("input", (event) => {
            value.textContent = event.target.value
        })  

 });}

//right
function changeRight (){
    rightVal.textContent = right.value
    right.addEventListener("input", (event) => {
      rightVal.textContent = event.target.value
    })
}

//bottom
function changeBottom (){
    bottomVal.textContent = bottom.value
    bottom.addEventListener("input", (event) => {
      bottomVal.textContent = event.target.value
    })
}

//left
function changeLeft (){
    leftVal.textContent = left.value
    left.addEventListener("input", (event) => {
      leftVal.textContent = event.target.value
    })
}

