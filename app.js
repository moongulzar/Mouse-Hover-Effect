const headingElement = document.querySelector("#heading");

headingElement.addEventListener('mouseover', function () {
    headingElement.innerText = 'Moon';
});

headingElement.addEventListener('mouseout', function () {
    headingElement.innerText = 'Hello';
});