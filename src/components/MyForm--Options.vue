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
import Vue from 'vue';
// import { defineComponent } from '@vue/composition-api';
// import { formData, nameFields, nameFieldsToKeep } from '@/hooks/formData';
// import { valid, error, checkReq, checkValid } from '@/hooks/validation';

interface IndexableObject {
    [index: string]: number | string;
}

// things this component is doing:
// validation
// field filtering

// TODO split validation logic into different use* funcs
// TODO split field filtering into other func
// TODO use setup() to pull together
export default Vue.extend({
    data: () => ({
        formData: {
            firstName: '',
            lastName: '',
            age: 0,
        } as IndexableObject,
        nameFieldsToKeep: ['firstName', 'lastName'],
        valid: {} as IndexableObject,
        error: '',
    }),
    computed: {
        nameFields() {
            const filteredData: IndexableObject = {};
            for (const key in this.formData) {
                if (this.nameFieldsToKeep.includes(key)) {
                    filteredData[key] = this.formData[key];
                }
            }
            return filteredData;
        },
    },

    watch: {
        formData: {
            handler() {
                // TODO fix ref/reactive issue here
                if (this.error) {
                    this.error = '';
                }
            },
            deep: true,
        },
    },
    created() {
        for (const key in this.nameFields) {
            this.$set(this.valid, key, null);
        }
    },

    methods: {
        checkReq(which: string) {
            this.$set(this.valid, which, !!this.formData[which]);
        },

        checkValid() {
            for (const key in this.valid) {
                this.checkReq(key);
                if (!this.valid[key]) {
                    this.error = 'Make sure all fields are valid';
                }
            }
        },

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
