<template>
    <div class="mb-5">
        <!-- Trigger -->
        <div class="flex items-center justify-center">
            <button type="button" class="btn btn-primary" @click="$emit('update:modelValue', true)">Launch modal</button>
            {{ modelValue }}
        </div>

        <!-- Modal -->
        <TransitionRoot appear :show="modelValue" as="template">
            <Dialog as="div" @close="$emit('update:modelValue', false)" class="relative z-50">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-start justify-center px-4 py-8">
                        <wTransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full text-black dark:text-white-dark" :class='[sizeClass]'>
                                <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="$emit('update:modelValue', false)">
                                    <svg> ... </svg>
                                </button>
                                <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
                                <div class="p-5">
                                    <slot />

                                    <div class="flex justify-end items-center mt-8">
                                        <button type="button" @click="$emit('update:modelValue', false)" class="btn btn-outline-danger">Discard</button>
                                        <button type="button" @click="$emit('update:modelValue', false)" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </wTransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script lang="ts" setup>
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
    import { Sizes } from '@/constants/Sizes';
    import { computed } from 'vue';
    import { Colors } from '@/constants/Colors';

    interface Props {
        modelValue: boolean,
        showTrigger: boolean,
        triggerText?: string,
        title?: string,

        okText?: string,
        hideOk?: boolean,
        okColor?: Colors,
        cancelText?: string,
        hideCancel?: boolean,
        hideColor?: Colors,

        size?: Sizes,
        classes?: Array<string>,
    }

    const props = withDefaults(defineProps<Props>(), {
        modelValue: false,
        showTrigger: true,
        triggerText: 'Lunch modal',
        title: 'Modal',

        okText: 'Ok',
        hideOk: false,
        okColor: Colors.PRIMARY,
        cancelText: 'Cancel',
        hideCancel: false,
        hideColor: Colors.DANGER,

        size: Sizes.LG,
        classes: [],
    })

    const emits = defineEmits(['update:modelValue'])

    const sizeClass = computed(() => {
        if (props.size === Sizes.XL) return 'max-w-5xl'
        if (props.size === Sizes.LG) return 'max-w-xl'
        if (props.size === Sizes.SM) return 'max-w-sm'

        return 'max-w-xl'
    })

</script>

<style scoped>

</style>
