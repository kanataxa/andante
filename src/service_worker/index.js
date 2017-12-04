export default {
    init: () => {
        if (!navigator.serviceWorker) {
            return;
        }
        navigator.serviceWorker.register('sw.js', /*{ scope: '/andante/' }*/)
            .catch(e => { console.log(e); });
    }
}