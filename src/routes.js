import appMain from "./components/Main.vue";
import Start from "./components/Start.vue";
import AutoSkup from "./components/AutoSkup.vue";
import AutoSpa from "./components/AutoSpa.vue";
import Kontakt from "./components/Kontakt.vue";

export const routes = [
    {
        path: '',
        components: {
            default: appMain
        },
        children: [
            {path: '', component: Start},
            {path: '/autoskup', component: AutoSkup}
        ]
    },
    {path: '/autospa', component: AutoSpa},
    {path: '/kontakt', component: Kontakt},
    {path: '*', redirect: '/'}
];

