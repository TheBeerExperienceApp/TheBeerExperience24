import { createApp } from 'vue'
import './assets/styles/main.scss'
import router from './router'
import App from './App.vue'

import "vuetify/styles";
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi } from 'vuetify/iconsets/mdi';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { beerLightTheme } from './plugins/vuetify';

const vuetify = createVuetify({ 
    components,
    directives,
    icons: {
        aliases,
        defaultSet: "fa",
        sets: { fa, mdi }
    },
    theme: {
        defaultTheme: "beerLightTheme",
        themes: {
            beerLightTheme
        }
    }
});

const app = createApp(App);

app.use(vuetify).use(router).mount('#app');
