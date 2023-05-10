<template>
    <button type='button' :class="[...buttonClasses, ...classes]">
        <slot />
    </button>
</template>

<script lang="ts" setup>
    import { Sizes } from '@/constants/Sizes';
    import { Colors } from '@/constants/Colors';
    import { computed } from 'vue';

    interface Props {
        size?: Sizes,
        color?: Colors,
        outline?: boolean,
        rounded?: boolean,
        block?: boolean,
        classes?: Array<string>,
    }

    const props = withDefaults(defineProps<Props>(), {
        size: Sizes.MD,
        color: Colors.PRIMARY,
        outline: false,
        rounded: false,
        block: false,
        classes: [],
    })

    const buttonClasses = computed((): Array<string> => {
        const listOfClasses: Array<string> = ['btn', 'my-1', 'inline mx-1'];

        if (props.size) listOfClasses.push(`btn-${props.size}`)
        if (props.color) {
            listOfClasses.push(
                props.outline ? `btn-outline-${props.color}` : `btn-${props.color}`
            )
        }
        if (props.rounded) listOfClasses.push(`rounded-full`)
        if (props.block) listOfClasses.push(`w-full`)

        return listOfClasses
    })

</script>

<style scoped>

</style>
