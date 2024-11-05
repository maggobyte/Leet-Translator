const inputField = document.getElementById('userInput');
const outputSpan = document.getElementById('output');

inputField.addEventListener('input', function(event){
    if (inputField.value.includes('\n')){
        translateText();
        inputField.value.replace('\n','');
    }
});
inputField.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        translateText();
    }
});

const replacements = {
    'a':'4',
    'b':'8',
    'c':'C',
    'd':'D',
    'e':'3',
    'f':'F',
    'g':'6',
    'h':'H',
    'i':'1',
    'j':'J',
    'k':'K',
    'l':'1',
    'm':'M',
    'n':'N',
    'o':'Ø',
    'p':'P',
    'q':'Q',
    'r':'R',
    's':'5',
    't':'7',
    'u':'U',
    'v':'V',
    'w':'W',
    'x':'X',
    'y':'Y',
    'z':'Z'


}

function translateText(){
    const regex = new RegExp(Object.keys(replacements).join('|'), 'gi');
    const inputText = inputField.value;

    const transformedText = inputText.replace(regex,(matched) => {
        const lowerMatched = matched.toLowerCase();

        if (lowerMatched in replacements){
            return matched == matched.toUpperCase() ?
                replacements[lowerMatched].toUpperCase() :
                replacements[lowerMatched];
        }
        return matched;
    });
    outputSpan.innerText = transformedText;
}