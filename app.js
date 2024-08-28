window.addEventListener('load', function () {
    const codeReader = new ZXing.BrowserBarcodeReader();
    const videoElement = document.getElementById('video');
    const resultText = document.getElementById('resultText');
    const copyButton = document.getElementById('copyButton');

    codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
        if (result) {
            resultText.textContent = result.text;
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
            console.error(err);
        }
    });

    // Fonction pour copier le texte dans le presse-papiers
    copyButton.addEventListener('click', () => {
        if (resultText.textContent) {
            navigator.clipboard.writeText(resultText.textContent)
                .then(() => {
                    alert('Result copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        } else {
            alert('No result to copy');
        }
    });
});
