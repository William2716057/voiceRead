document.getElementById('read-button').addEventListener('click', function () {
    var text = document.getElementById('text-to-read').value;
    var lang = document.getElementById('language-select').value;
    speak(text, lang);
});

function speak(text, lang) {
    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = lang; // Set the language
        window.speechSynthesis.speak(msg);
    } else {
        alert('Sorry, your browser does not support text-to-speech!');
    }
}