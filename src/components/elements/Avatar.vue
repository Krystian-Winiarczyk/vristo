<template>
    <component :is="avatarComponent" :src="src" :class="[...avatarClasses, ...classes]">
        <slot />
    </component>
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
        size: 12,
        rounded: true,
        animate: true,
        classes: [],
    })

    const avatarComponent = computed(() => {
        return props.src ? 'img' : 'span'
    })

    const avatarClasses = computed(() => {
        const listOfClasses = ['overflow-hidden', 'object-cover', 'ring-2', 'ring-white', 'dark:ring-white-dark'];

        listOfClasses.push(`w-${props.size || 12} h-${props.size || 12}`)

        if (props.rounded) listOfClasses.push('rounded-full')
        if (props.animate) listOfClasses.push('relative transition-all duration-300 hover:hover:translate-y-2')

        return listOfClasses
    })
</script>

<style scoped>

</style>
