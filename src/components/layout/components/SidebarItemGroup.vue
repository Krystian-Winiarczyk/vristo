<template>
    <li class="menu nav-item">
        <button
            type="button"
            class="nav-link group w-full"
            :class="{ active: activeDropdown === 'dashboard' }"
            @click="activeDropdown === 'dashboard' ? (activeDropdown = null) : (activeDropdown = 'dashboard')"
        >
            <div class="flex items-center">
                <users-icon />

                <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                    {{ $t('dashboard') }}
                </span>
            </div>
            <div class="rtl:rotate-180" :class="{ '!rotate-90': activeDropdown === 'dashboard' }">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </button>
        <vue-collapsible :isOpen="activeDropdown === 'dashboard'">
            <ul class="sub-menu text-gray-500">
                <li>
                    <router-link to="/" @click="$emit('toggle-mobile-menu')">{{ $t('sales') }}</router-link>
                </li>
                <li>
                    <router-link to="/analytics" @click="$emit('toggle-mobile-menu')">{{ $t('analytics') }}</router-link>
                </li>
                <li>
                    <router-link to="/finance" @click="$emit('toggle-mobile-menu')">{{ $t('finance') }}</router-link>
                </li>
                <li>
                    <router-link to="/crypto" @click="$emit('toggle-mobile-menu')">{{ $t('crypto') }}</router-link>
                </li>
            </ul>
        </vue-collapsible>
    </li>
</template>

<script>
    import VueCollapsible from 'vue-height-collapsible/vue3';

    export default {
        name: 'SidebarItemGroup',
        components: { VueCollapsible },
        props: {
            activeDropdown: {
                default: null,
                required: true
            }
        }
    };
</script>

<style scoped>

</style>
