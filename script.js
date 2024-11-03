const inputField = document.getElementById('userInput');
const outputSpan = document.getElementById('output');

inputField.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        translateText();
    }
});

const replacements = {
    'a':'b',
    'b':'c'
}

function translateText(){
    const regex = new RegExp(Object.keys(replacements).join('|'), 'g');
    const inputText = inputField.value;
    const transformedText = inputText.replace(regex,(matched) => replacements[matched]);
    outputSpan.innerText = transformedText;
}