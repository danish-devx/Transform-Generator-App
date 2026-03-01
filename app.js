let box = document.getElementById("box") ;

let rotate = document.getElementById("rotate") ;
let scale = document.getElementById("scale") ;
let translateX = document.getElementById("translateX") ;
let translateY = document.getElementById("translateY") ;
let skewX = document.getElementById("skewX") ;
let skewY = document.getElementById("skewY") ;

let cssCode = document.getElementById("cssCode") ;
let copyBtn = document.getElementById("copyBtn") ;

function transformGenerator() {

    let r = rotate.value ;
    let s = scale.value ;
    let tx = translateX.value ;
    let ty = translateY.value ;
    let sx = skewX.value ;
    let sy = skewY.value ;

    let transform = `rotate(${r}deg) scale(${s}) translate(${tx}px, ${ty}px) skew(${sx}deg, ${sy}deg)` ;

    box.style.transform = transform ;
    
    cssCode.innerText = `transform: ${transform};` ;
    
}

rotate.addEventListener("input" , transformGenerator) ;
scale.addEventListener("input" , transformGenerator) ;
translateX.addEventListener("input" , transformGenerator) ;
translateY.addEventListener("input" , transformGenerator) ;
skewX.addEventListener("input" , transformGenerator) ;
skewY.addEventListener("input" , transformGenerator) ;

transformGenerator();


copyBtn.addEventListener("click", function(){

    navigator.clipboard.writeText(cssCode.innerText);

       Swal.fire({
        title: "Copied!",
        text: "CSS Code successfully copied to clipboard",
        icon: "success",
        confirmButtonText: "OK"
    });
    
});
