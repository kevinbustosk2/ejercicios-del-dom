
let sourceDiv = document.getElementById('source');
let destinationDiv = document.getElementById('destination');

let sourceContent = sourceDiv.innerHTML;
let destinationContent = destinationDiv.innerHTML;

sourceDiv.innerHTML = destinationContent;
destinationDiv.innerHTML = sourceContent;