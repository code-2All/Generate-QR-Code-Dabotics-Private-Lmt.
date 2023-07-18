let imgBox = document.getElementById("imgBox");

let qrimg = document.getElementById("qrimg");

let qrText = document.getElementById("qrText");

const downloadBtb = document.getElementById('downloadBtb')

downloadBtb.addEventListener('click',()=>{
    let img=document.querySelector('.qr_body img');
   
    if(img!==null){
        let imgAttr = img.getAttribute('src');
        downloadBtb.setAttribute("href",imgAttr);
    }else{
        downloadBtb.setAttribute("href", `${document.querySelector('Download').toDataURL()}`);
    }
});

function generateQR() {
    if (qrText.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }

}