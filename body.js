document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = (event) => {
        event.preventDefault();
        var btncolor = document.querySelector('#color').value;
        const txtcolor = document.querySelector(`option[value="${btncolor}"]`).dataset.color;

        if (btncolor) {
            document.body.style.backgroundColor = txtcolor;
        }
        if(btncolor == "black"){
            document.body.style.color = 'white';
        }
       
        else{
            document.body.style.color = 'black';
        }
    }
});
