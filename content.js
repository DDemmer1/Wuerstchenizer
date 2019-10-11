var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Terror/gi, 'Wurst');
            replacedText = replacedText.replace(/Wolf/gi, 'Würstchen');
            replacedText = replacedText.replace(/Terrorist/gi, 'Würstchen');
            replacedText = replacedText.replace(/Attentäter/gi, 'Würstchen');
            replacedText = replacedText.replace(/Täter/gi, 'Würstchen');
            replacedText = replacedText.replace(/Attentat/gi, 'Würstchen');
            replacedText = replacedText.replace(/Anschlag/gi, 'Würstchen');
            replacedText = replacedText.replace(/Todesschütze/gi, 'Würstchen');
            replacedText = replacedText.replace(/Wölfe/gi, 'Würstchen');
            replacedText = replacedText.replace(/Terror/gi, 'Würstchen');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}