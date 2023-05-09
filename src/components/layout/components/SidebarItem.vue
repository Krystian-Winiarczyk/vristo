<template>
    <li class="nav-item">
        <router-link :to="{ name: item.to }" class="group" @click="$emit('toggle-mobile-menu')">
            <div class="flex items-center">
                <component :is="item.icon" />

                <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                    {{ item.label }}
                </span>
            </div>
        </router-link>
    </li>
</template>

<script lang="ts" setup>
    const props = defineProps<{ item: { to: string, label: string, icon: string } }>()
</script>

<style scoped>

</style>
