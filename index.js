document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function(){
        const btn = document.querySelector("#color").value;
        if(btn === "Red"){
            alert(`THE COLOR IS ${btn}`);
        }
       else if(btn === "Green"){
            alert(`THE COLOR IS ${btn}`);
        }
        if(btn === "Blue"){
            alert(`THE COLOR IS ${btn}`);
        }
        if(btn === "Yellow"){
            alert(`THE COLOR IS ${btn}`);
        }
        if(btn === "Black"){
            alert(`THE COLOR IS ${btn}`);
        }
        if(btn === "White"){
            alert(`THE COLOR IS ${btn}`);
        }
    }
})
