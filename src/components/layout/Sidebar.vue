<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
            <div class="bg-white dark:bg-[#0e1726] h-full">
                <div class="flex justify-between items-center px-4 py-3">
                    <sidebar-logo />
                </div>

                <perfect-scrollbar
                    :options="{
                        swipeEasing: true,
                        wheelPropagation: false,
                    }"
                    class="h-[calc(100vh-80px)] relative"
                >
                    <ul class="relative font-semibold space-y-0.5 p-4 py-0">
                        <template v-for="sidebarItem in sidebarItems">
                            <sidebar-item-group
                                v-if="SidebarItemTypes.SIDEBAR_ITEM_GROUP === sidebarItem.type"
                                :item="sidebarItem"
                                :active-dropdown.async="activeDropdown"
                                @toggle-mobile-menu="toggleMobileMenu"
                                @set-active-menu="activeDropdown = $event"
                            />

                            <sidebar-item
                                v-else-if="SidebarItemTypes.SIDEBAR_ITEM_LINK === sidebarItem.type"
                                @toggle-mobile-menu="toggleMobileMenu"
                                @set-active-menu="activeDropdown = $event"
                                :item="sidebarItem"
                            />

                            <sidebar-title v-else-if="SidebarItemTypes.SIDEBAR_TITLE === sidebarItem.type" :item="sidebarItem" />
                        </template>
                    </ul>
                </perfect-scrollbar>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';

    import { useAppStore } from '@/stores/index';
    import VueCollapsible from 'vue-height-collapsible/vue3';
    import SidebarLogo from '@/components/layout/components/SidebarLogo.vue';
    import SidebarItemGroup from '@/components/layout/components/SidebarItemGroup.vue';
    import SidebarItem from '@/components/layout/components/SidebarItem.vue';
    import SidebarTitle from '@/components/layout/components/SidebarTitle.vue';
    import { SidebarItemTypes } from '@/constants/SidebarItemTypes';
    const store = useAppStore();
    const activeDropdown: any = ref('');
    const subActive: any = ref('');

    onMounted(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 1024) {
            store.toggleSidebar();
        }
    };


    // Navbar Items
    const sidebarItems = [
        { type: SidebarItemTypes.SIDEBAR_ITEM_LINK, label: 'Users', to: 'users', icon: 'users-icon' },
        { type: SidebarItemTypes.SIDEBAR_TITLE, label: 'TEST 2' },
        { type: SidebarItemTypes.SIDEBAR_ITEM_GROUP, label: 'Others', icon: 'menu-icon',
            children: [
                { label: 'Error404', to: 'error404' },
                { label: 'Signin', to: 'signin' },
            ]
        },
    ]
</script>
