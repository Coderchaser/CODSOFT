// const downloadLinks = document.querySelectorAll("[download]");

// downloadLinks.forEach(button => {
//     const id = button.download;
//     const image = document.getElementsByClassName("left-section").children[2];
//     const a = document.createElement("a");

//     a.href = image.src;
//     a.download = "";
//     a.style.display = "none";

//     button.addEventListener("click", () => {
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//     });
// });
function download() {
    var iframe = document.getElementById('invisible');
    iframe.src = "Prachi Badekar Resume.pdf";
}