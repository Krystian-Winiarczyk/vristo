import MenuIcon from 'vue-material-design-icons/Menu.vue';
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue';

import Button from '@/components/elements/Button.vue'
import ButtonGroup from '@/components/elements/ButtonGroup.vue';
import Badge from '@/components/elements/Badge.vue';
import Avatar from '@/components/elements/Avatar.vue';
import AvatarGroup from '@/components/elements/AvatarGroup.vue';
import Spinner from '@/components/elements/Spinner.vue';
import Alert from '@/components/elements/Alert.vue';

export async function registerGlobalComponents(app) {
    // Icon
    app.component('menu-icon', MenuIcon);
    app.component('users-icon', AccountGroup);

    // Elements
    app.component('mw-button', Button)
    app.component('mw-button-group', ButtonGroup)
    app.component('mw-badge', Badge)
    app.component('mw-spinner', Spinner)
    app.component('mw-alert', Alert)
    app.component('mw-avatar', Avatar)
    app.component('mw-avatar-group', AvatarGroup)
    // Components
    app.component('mw-modal', Button)
}
