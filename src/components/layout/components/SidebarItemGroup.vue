<template>
    <li class="menu nav-item">
        <button
            type="button"
            class="nav-link group w-full"
            :class="{ active: activeDropdown === item.key }"
            @click="activeDropdown === item.key ? (activeDropdown = null) : (activeDropdown = item.key)"
        >
            <div class="flex items-center">
                <component :is="item.icon" />

                <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                    {{ $t(item.label) }}
                </span>
            </div>
            <div class="rtl:rotate-180" :class="{ '!rotate-90': activeDropdown === item.key }">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </button>
        <vue-collapsible :isOpen="activeDropdown === item.key">
            <ul class="sub-menu text-gray-500">
                <li v-for="child in item.children" :key="item.key + ' ' + child.to">
                    <router-link
                        :class="{ 'active': activeRoute === child.to }"
                        :to="{ name: child.to }"
                        @click="$emit('toggle-mobile-menu')"
                    >
                        {{ $t(child.label) }}
                    </router-link>
                </li>
            </ul>
        </vue-collapsible>
    </li>
</template>

<script lang="ts" setup>
    import VueCollapsible from 'vue-height-collapsible/vue3';
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';

    const props = defineProps<{
        item: {
            children: Array<{ label: string, to: string }>,
            label: string,
            key: string,
            icon: string
        },
        activeDropdown: boolean,
    }>();

    const route = useRoute();

    const activeRoute = computed(() => {
        return route.name
    })
</script>

<style scoped>

</style>
