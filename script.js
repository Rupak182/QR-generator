
let qr = document.querySelector(".qr");
let url ;


let togglePage = ()=>{
    let page1=document.querySelector(".contain");
    page1.classList.toggle("hidden");

    let page2=document.querySelector(".contain-2");
    page2.classList.toggle("hidden");

}


const formData = ()=>{
    let form = document.querySelector("form");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        url = document.querySelector(".url").value;

        console.log(url);
        if(url !="")
        {
            togglePage();
            generateQR(url);

        }

  
    })
}



let generateQR = (url)=>{
     
    new QRCode(qr, url);
    let qrlink= qr.children[1];
    let down= document.querySelector(".down")
    qrlink.classList.add("ok");
    
    download();

}

let copy= ()=>{
    
    let share = document.querySelector(".share");
    share.addEventListener("click",()=>{
        navigator.clipboard.writeText(url);
    });
}

let download = ()=>{
    setTimeout(() => {
        let qrlink= qr.children[1].src;
        let down= document.querySelector(".down")
        console.log(qrlink);
        down.setAttribute('href',qrlink);
        down.setAttribute('download','QR.png');
        down.removeAttribute('hidden');
    }, 500);
    

}


formData();
copy();



