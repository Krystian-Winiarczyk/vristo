import MenuIcon from 'vue-material-design-icons/Menu.vue';
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue';

export function registerGlobalComponents(app) {
    app.component('menu-icon', MenuIcon);
    app.component('users-icon', AccountGroup);
}
