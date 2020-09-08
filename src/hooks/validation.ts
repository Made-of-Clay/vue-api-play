import { reactive, ref, watch } from '@vue/composition-api';
import { formData, nameFields } from './formData';

interface IndexableBootstrapState {
    [index: string]: boolean | null;
}

const initValid: IndexableBootstrapState = {};

// NOTE: watch out for nameField's .value trickiness (it's a ref, not reactive)
for (const key in nameFields.value) {
    initValid[key] = null;
}

export const valid: IndexableBootstrapState = reactive(initValid);
export const error = ref('');

export function checkReq(which: string): void {
    valid[which] = !!formData[which];
}
export function checkValid(): void {
    for (const key in valid) {
        checkReq(key);
        if (!valid[key]) {
            error.value = 'Make sure all fields are valid';
        }
    }
}
watch(
    formData,
    () => {
        if (error.value) {
            error.value = '';
        }
    },
    { deep: true }
);
