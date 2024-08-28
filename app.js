window.addEventListener('load', function () {
    const codeReader = new ZXing.BrowserBarcodeReader();
    const videoElement = document.getElementById('video');

    codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
        if (result) {
            document.getElementById('output').textContent = result.text;
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
            console.error(err);
        }
    });
});
