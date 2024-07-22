let mode= 0;

function changemode(){
    switch(mode){
        case 0:
            mode = 1;
            document.body.style.backgroundColor = "#010126";
            document.body.style.color = "white";
            document.getElementById("ngt").className = "bi bi-brightness-high";
            break;
        case 1:
                mode = 0;
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                document.getElementById("ngt").className = "bi bi-moon";
                break;
    }

}