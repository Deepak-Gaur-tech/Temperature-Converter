let celsius=document.querySelector("#celsius");
let kelvin=document.querySelector("#kelvin");
let farenheit=document.querySelector("#farenheit");

celsius.addEventListener("input",()=>{
    let c=parseFloat(celsius.value);
    
        

    let f=(c*9/5)+32.;
    let k=c+273.15;
    farenheit.value=f;
    kelvin.value=k;

    
})

kelvin.addEventListener("input",()=>{
    let k=parseFloat(kelvin.value);
    let c=k-273.15;
    let f=(k-273.15)*9/5+32;
    celsius.value=c;
    farenheit.value=f;
})

farenheit.addEventListener("input",()=>{
    let f=parseFloat(farenheit.value);
    let c=(f-32)*5/9;
    let k=(f-32)*5/9+273.15;
    celsius.value=c;
    kelvin.value=k;
})