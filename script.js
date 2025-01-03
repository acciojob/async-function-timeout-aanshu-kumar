//your JS code here. If required.

let btn = document.getElementById("btn");
let output = document.getElementById("output");
let text = document.getElementById("text");
let number = document.getElementById("delay");


let promiseOne =()=>{ 

    return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve (text.value);
    },Number(number.value))
})
}


btn.addEventListener("click", async () => {
let data;
try{
    data = await promiseOne();
}
catch(e){
    console.log(e);
}
   
    output.innerHTML = data;

});