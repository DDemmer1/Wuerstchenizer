//for static content
wuerstchenize();

//for dynamically loaded content
setInterval(function () {
    wuerstchenize();
}, 2000);

function wuerstchenize(){
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;

                var replacedText = text.replace(/Terror|Wolf|Terrorist|Attentäter|Täter|Attentat|Täter|Attentat|Anschlag|Todesschütze|Wölfe/gi, 'Würstchen');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
