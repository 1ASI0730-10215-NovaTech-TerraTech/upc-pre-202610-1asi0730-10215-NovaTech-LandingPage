import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./shared/presentation/views/home-view.vue";
import AboutView from "./shared/presentation/views/about-view.vue";
import SubscriptionView from "./shared/presentation/views/subscription-view.vue";

const routes = [
    { path: "/", redirect: '/home' },
    { path: '/home', name: 'home', component: HomeView, meta: { title: 'HomeView' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'AboutView' } },
    { path: '/subscription', name: 'subscription', component: SubscriptionView, meta: { title: 'SubscriptionView' } },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    });

export default router;