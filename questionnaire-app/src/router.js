import { createRouter, createWebHistory } from "vue-router";
import Profile from "./components/views/Profile.vue";
import QAcheck from "./components/views/QAcheck.vue";
import Consul from "./components/views/Consul.vue";
import ResultForm from "./components/views/ResultForm.vue";

const routes = [
    {
        path: "/",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/qacheck",
        name: "QAcheck",
        component: QAcheck,
    },
    {
        path: "/consul",
        name: "Consul",
        component: Consul,
    },
    {
        path: "/resultform",
        name: "ResultForm",
        component: ResultForm,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
