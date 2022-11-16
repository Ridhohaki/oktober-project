const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("img"),
fileInput = uploadBox.querySelector("input"),
widthInput = document.querySelector(".width input"),
heightInput = document.querySelector(".height input"),
ratioInput = document.querySelector(".ratio input"),
qualityInput = document.querySelector(".quality input"),
downloadBtn = document.querySelector(".download-btn");

let ogImageRatio;

const loadFile=(e)=>{
    const file =e.target[0];
    if(!file) return;
    previewImg.src=URL.createObjectURL(file);
    previewImg.addEventListener("load",() =>{
        widthInput.value=previewImg.naturalWidth;
        heightInput.value=performance.naturalHeight;
        ogImageRatio=previewImg.naturalWidth/previewImg.naturalHeight;
        document.querySelector(".wrapper").classList.add("active")
    });
}

widthInput.addEventListener("keyup",() =>{
    const height=ratioInput.checked?widthInput.value/ogImageRatio:height
    heightInput.value=Math.floor(height);
});

heightInput.addEventListener("keyup",() =>{
    const width=ratioInput.checked?widthInput.value/ogImageRatio:width
    heightInput.value=Math.floor(width);
});

const resizeAndDownload= ()=>{
    const canvas =document.createElement("canvas");
    const a =document.createElement("a");
    const ctx =canvas.getContext("2d");


    const imgQuality=qualityInput.checked? 0.5:1.0;
    canvas.width=widthInput.value;
    canvas.height=heightInput.value;

    ctx.drawImage(previewImg, 0,0, canvas.width,canvas.height);
    a.href =canvas.toDataURL("image/jpg",imgQuality);
    a.download=new Date().getTime();
}

downloadBtn.addEventListener("click",resizeAndDownload);
fileInput.addEventListener("change",loadFile);
uploadBox.addEventListener("click",() =>fileInput.click())
