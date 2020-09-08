<template>
    <form class @submit="submit">
        <input
            v-for="(fieldValue, fieldName) in nameFields"
            :key="fieldName"
            v-model="formData[fieldName]"
            :class="valid[fieldName] === false ? 'form__field--invalid' : ''"
            @blur="checkReq(fieldName)"
        />
        <button>Submit</button>
        <output v-if="error" class="form__output">{{ error }}</output>
    </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { formData, nameFields, nameFieldsToKeep } from '@/hooks/formData';
import { valid, error, checkReq, checkValid } from '@/hooks/validation';

export default defineComponent({
    setup() {
        return {
            formData,
            nameFieldsToKeep,
            nameFields,
            valid,
            error,
            checkReq,
            checkValid,
        };
    },

    methods: {
        // [adam]: this is logic specific to the form and should remain *with* the form
        submit(event: Event) {
            event.preventDefault();
            this.checkValid();
            if (!this.error) {
                console.log(
                    'POST this data',
                    JSON.parse(JSON.stringify(this.formData))
                );
            }
        },
    },
});
</script>

<style scoped>
.form__field--invalid {
    outline: 1px solid red;
}
.form__output {
    background-color: #faa;
    display: block;
}
</style>
