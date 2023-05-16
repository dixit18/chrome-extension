// contentScript.js
function appendParagraph() {
    var paragraph = document.createElement("p");
    paragraph.textContent = "This is a new paragraph.";
  
    var h2 = document.querySelector("h2");
    if (h2) {
      var parentDiv = h2.parentNode;
      parentDiv.insertBefore(paragraph, h2.nextSibling);
    }
  }
  
  // Listen for a message from the popup
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message === "appendParagraph") {
      appendParagraph();
      sendResponse("Paragraph appended successfully.");
    }
  });
  