const audio = document.getElementById('background-audio');
audio.volume = 0.4;

audio.addEventListener('error', (e) => {
    console.error('Errore nel caricamento del file audio:', e);
});
