
let characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","z","t","u","v","w","x","y","z",
"1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let pass1 = ""
let pass2 = ""
let pass3 = ""
let pass4 = ""

function generate() {
    for (let i = 0; i < 12; i++)
    {
        let randomNum = Math.floor(Math.random() * characters.length)
        pass1+= characters[randomNum]
    }
    for (let i = 0; i < 12; i++)
    {
        let randomNum = Math.floor(Math.random() * characters.length)
        pass2+= characters[randomNum]
    }
    for (let i = 0; i < 12; i++)
    {
        let randomNum = Math.floor(Math.random() * characters.length)
        pass3+= characters[randomNum]
    }
    for (let i = 0; i < 12; i++)
    {
        let randomNum = Math.floor(Math.random() * characters.length)
        pass4+= characters[randomNum]
    }
    document.getElementById("pass1").innerText = pass1;
    document.getElementById("pass2").innerText = pass2;
    document.getElementById("pass3").innerText = pass3;
    document.getElementById("pass4").innerText = pass4;
    pass1 = ""
    pass2 = ""
    pass3 = ""
    pass4 = ""
}

