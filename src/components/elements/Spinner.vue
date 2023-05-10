<template>
    <span :class="[...spinnerClasses, ...classes]" class="animate-spin border-4 border-l-transparent rounded-full inline-block align-middle m-auto mb-10"></span>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import { Colors } from '@/constants/Colors';

    interface Props {
        color?: Colors,
        size?: number,
        classes?: Array<string>,
    }

    const props = withDefaults(defineProps<Props>(), {
        color: Colors.PRIMARY,
        size: 12,
        classes: [],
    })

    const spinnerClasses = computed((): Array<string> => {
        const listOfClasses: Array<string> = [];

        listOfClasses.push(`w-${props.size || 12} h-${props.size || 12}`)

        if (props.color) listOfClasses.push(`border-${props.color}`)


        return listOfClasses
    })
</script>

<style scoped>

</style>
