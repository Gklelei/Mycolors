document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function(){
        const btn = document.querySelector("#color").value;

        if(btn === "Red"){
            alert(`THE COLOR IS ${btn}`);
        }
        else{
            alert('Select another color');
        }
    }
})
