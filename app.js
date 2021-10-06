const input = document.querySelectorAll('.input');

function focusFune(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}


function blurFune(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}


input.forEach(input => {
    input.addEventListener('focus', focusFune);
    input.addEventListener('blur', blurFune);

});