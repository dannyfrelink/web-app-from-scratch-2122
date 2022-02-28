import { header, barcodeSection, videoDiv, loader } from "./variables.js"

const stopDetecting = () => {
    header.classList.remove('hidden');
    barcodeSection.classList.remove('infaden');
    videoDiv.innerHTML = '';
    loader.classList.add('hidden');
}

document.querySelector('#close_button').addEventListener('click', stopDetecting);