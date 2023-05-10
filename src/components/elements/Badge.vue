<template>
    <span :class="[...badgeClasses, ...classes]">
        <slot />
    </span>
</template>

<script lang="ts" setup>
    import { Colors } from '@/constants/Colors';
    import { computed } from 'vue';

    interface Props {
        color?: Colors,
        outline?: boolean,
        rounded?: boolean,
        classes?: Array<string>,
    }

    const props = withDefaults(defineProps<Props>(), {
        color: Colors.PRIMARY,
        outline: false,
        rounded: false,
        classes: [],
    })

    const badgeClasses = computed((): Array<string> => {
        const listOfClasses: Array<string> = ['badge'];

        listOfClasses.push(
            props.outline ? `badge-outline-${props.color}` : `badge-${props.color}`
        )
        if (props.rounded) listOfClasses.push(`rounded-full`)

        return listOfClasses
    })

</script>

<style scoped>

</style>
