import { reactive, ref, computed } from '@vue/composition-api';
import { IndexableObject } from '../models';

export interface FormData extends IndexableObject {
    firstName?: string;
    lastName?: string;
    age?: number;
}

const formData: FormData = reactive({
    firstName: '',
    lastName: '',
    age: 0,
});

const nameFieldsToKeep = ref(['firstName', 'lastName']);

const nameFields = computed(() => {
    const filteredData: IndexableObject = {};
    for (const key in formData) {
        if (nameFieldsToKeep.value.includes(key)) {
            filteredData[key] = formData[key];
        }
    }
    return filteredData;
});

export { formData, nameFieldsToKeep, nameFields };
