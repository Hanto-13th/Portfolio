//Here, the two functions to copy and paste mail and numberphone and display the panel which
//say the element has been copied


function copyMail() {
    //the navigator copy the text
    navigator.clipboard.writeText('antoninhidien@orange.fr')
        .then(() => {
            //and search the panel element in document
            const panel = document.getElementById('paste-panel');
            //to display him and remove after 2sec
            panel.classList.add('show');
            setTimeout(() => panel.classList.remove('show'), 2000);
        })
        //else display the error message
        .catch(err => console.error('Erreur copie :', err));
}

function copyPhone() {
    navigator.clipboard.writeText('06 78 13 78 67')
        .then(() => {
            const panel = document.getElementById('paste-panel');
            panel.classList.add('show');
            setTimeout(() => panel.classList.remove('show'), 2000);
        })
        .catch(err => console.error('Erreur copie :', err));
}