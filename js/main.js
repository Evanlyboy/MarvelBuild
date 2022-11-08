// import components first
import ImportHeroThumbnail from './components/TheHeroThumbnail.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            // always get your remote data here
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.heroData = data)
                .catch(error => console.error(error));
        },

        data() {
            return {
                heroData: {}
            }
        },

        components: {
            // must be lower case
            herothumbnail: ImportHeroThumbnail
        }
    }).mount('#app')
})()