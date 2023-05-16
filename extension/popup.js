// popup.js
document.getElementById("appendButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "appendParagraph", function (response) {
        console.log(response);
      });
    });
  });
  