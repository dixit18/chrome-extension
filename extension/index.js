const getSo = () =>{
    console.log("hello there")
}
function appendParagraph() {
    var paragraph = document.createElement("p");
    paragraph.textContent = "This is a new paragraph.";
  
    var h2 = document.querySelector("h2");
    if (h2) {
      var parentDiv = h2.parentNode;
      parentDiv.insertBefore(paragraph, h2.nextSibling);
    }
  }
window.addEventListener("load",()=>{
    getSo()
    appendParagraph()
    chrome.windows.
})