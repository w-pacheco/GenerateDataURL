import './node_modules/bootstrap/dist/js/bootstrap.js';

document.title = 'GenerateDataURL';

const init = function init(){

    const textarea = document.querySelector('textarea');
    const CopyButton = document.querySelector('button[data-copy]');

    // Get a reference to the file input
    const fileInput = document.querySelector('input');

    // Listen for the change event so we can capture the file
    fileInput.addEventListener('change', (e) => {
        // Get a reference to the file
        const file = e.target.files[0];

        // Encode the file using the FileReader API
        const reader = new FileReader();
        reader.onloadend = () => {
            // console.log(reader.result);
            // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
            textarea.value = reader.result;
        };
        reader.readAsDataURL(file);
    });

    CopyButton.addEventListener('click', function(event){
        navigator.clipboard.writeText(textarea.value);
        CopyButton.innerText = 'Copied!';
        setTimeout(function(){
            CopyButton.innerText = 'Copy';
        }, 800);

    });

}

window.onload = init;