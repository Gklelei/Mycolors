document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('form').onsubmit = (event)=>{
        event.preventDefault();
        var btncolor =document.querySelector('#color').value;
        const txtcolor = document.querySelector(`option[value="${btncolor}"]`).dataset.color;
        if (btncolor) {
            document.querySelector('#myh1').style.color =btncolor;
        }
    }
})