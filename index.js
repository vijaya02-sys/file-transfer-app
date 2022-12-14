const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browseBtn = document.querySelector(".browseBtn");

const host = "https://inshare-d2-01.herokuapp.com/";
const uploadURL = `${host}api/files`;


dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (dropZone.classList.contains("dragged")) {
        dropZone.classList.add("dragged");
    }
    
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    console.table(files);
    
    if (files.length) {
        fileInput.files = files;
        uploadFile();
    }
});

browseBtn.addEventListener("click", () => {
    fileInput.click();
});

const uploadFile = () => {

    const files = fileInput.files[0];
    const formData = new FormData();
    formData.append("myfile", file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    };

    xhr.open("POST", uploadURL);
    xhr.send("myfile", formData);

};