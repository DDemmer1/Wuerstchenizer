function wuerstchenize(){
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;

                var replacedText = text.replace(/Björn Höcke|BjoernHoecke|Gauland|Alice Weidel|einsamer Wolf|einsamen Wolf|einsame Wölfe|Einzeltäter/,"Würstchen");
                replacedText=replacedText.replace(/#AfD|#AFD/, '#rechteWürstchen');
                replacedText=replacedText.replace(/AfD|AFD/, 'rechte Würstchen');
                replacedText=replacedText.replace(/Neonazi|Nazi|Terror|Terrorist|Attentäter|Täter|Todesschütze|afd/gi, 'Würstchen');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

//for static content onPageLoad
wuerstchenize();

//for dynamically loaded content
setInterval(function () {
    wuerstchenize();
}, 2000);
