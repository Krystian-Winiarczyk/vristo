<template>
    <div class="flex items-center p-3.5 rounded text-white" :class="[...alertClasses, ...classes]">
        <slot />
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import { Colors } from '@/constants/Colors';

    interface Props {
        color?: Colors,
        classes?: Array<string>,
    }

    const props = withDefaults(defineProps<Props>(), {
        color: Colors.PRIMARY,
        classes: [],
    })

    const alertClasses = computed((): Array<string> => {
        const listOfClasses: Array<string> = [];

        if (props.color) listOfClasses.push(`bg-${props.color}`)

        return listOfClasses
    })
</script>

<style scoped>

</style>
