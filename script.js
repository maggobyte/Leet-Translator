const inputField = document.getElementById('userInput');
const outputSpan = document.getElementById('output');

inputField.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        translateText();
    }
});

function translateText(){
    const inputText = inputField.value;
    const transformedText = inputText.toUpperCase();
    outputSpan.innerText = transformedText;
}