const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.removeAttribute('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEv = window.deferredPrompt;
    if (!promptEv) {
        return;
    }
    promptEv.prompt();
    const result = await promptEv.userChoice;
    if (result.outcome === 'accepted') {
        console.log('Jate installed');
    }
    else {
        console.log('Jate not installed');
    }
    window.deferredPrompt = null;
    butInstall.setAttribute('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Jate installed completely', event);
});
