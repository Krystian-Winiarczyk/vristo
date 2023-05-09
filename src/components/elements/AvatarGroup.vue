<template>
    <div :class="[...avatarGroupClasses, ...classes]">
        <slot />
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    interface Props {
        src?: string,
        size?: number,
        rounded?: boolean,
        animate?: boolean,
        classes?: Array<string>,
    }

    const props = withDefaults(defineProps<Props>(), {
        vertical: false,
        classes: [],
    })

    const avatarComponent = computed(() => {
        return props.src ? 'img' : 'span'
    })

    const avatarGroupClasses = computed(() => {
        return ['flex', 'items-center', 'justify-center', '-space-x-4 ', 'rtl:space-x-reverse ', 'text-white']
    })
</script>

<style scoped>

</style>
