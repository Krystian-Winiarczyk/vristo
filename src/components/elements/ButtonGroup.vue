<template>
    <div :class="[...buttonGroupClasses, ...classes]">
        <slot />
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    interface Props {
        vertical?: boolean,
        classes?: Array<string>,
    }

    const props = withDefaults(defineProps<Props>(), {
        vertical: false,
        classes: [],
    })

    const buttonGroupClasses = computed(() => {
        return props.vertical
            ? 'relative inline-flex align-middle flex-col items-start justify-center'
            : 'relative inline-flex align-middle'
    })
</script>

<style scoped>

</style>
