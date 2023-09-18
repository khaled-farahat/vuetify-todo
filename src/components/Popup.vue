<template>
  <VDialog width="600">
    <template v-slot:activator="{ props }">
      <VBtn
        v-bind="props"
        class="text-white text-capitalize"
        text="Add new project"
        flat
        color="#3cd1c2"
      />
    </template>
    <template v-slot:default="{ isActive }">
      <VCard title="Add a New Project">
        <VCardText>
          <VForm
            @submit.prevent="handleSubmit(isActive)"
            ref="formRef"
            class="px-3"
          >
            <VTextField
              label="Title"
              v-model="title"
              prepend-inner-icon="mdi-folder"
              :rules="inputRules"
            />
            <VTextarea
              label="Information"
              v-model="content"
              prepend-inner-icon="mdi-pencil"
              :rules="inputRules"
            />
            <VMenu :close-on-content-click="false" v-model="menu">
              <template v-slot:activator="{ props }">
                <VTextField
                  label="Due by"
                  :model-value="formattedDate"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="props"
                  :rules="inputRules"
                />
              </template>
              <VDatePicker
                color="primary"
                show-adjacent-months
                v-model="due"
                @click:cancel="menu = false"
                @click:save="menu = false"
              />
            </VMenu>

            <VBtn
              type="submit"
              flat
              color="#3cd1c2"
              class="mx-0 mt-3 text-white"
              text="Add Project"
              :disabled="!title || !content || !due"
              :loading="loading"
            />
          </VForm>
        </VCardText>
      </VCard>
    </template>
  </VDialog>
</template>

<script setup>
import format from "date-fns/format";
import { ref, computed } from "vue";

import db from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

const title = ref("");
const content = ref("");
const due = ref(null);
const menu = ref(false);
const formRef = ref(null);
const loading = ref(false);

const emit = defineEmits(["projectAdded"]);

const inputRules = [
  (v) => !!v || "required",
  (v) => (v && v.length >= 3) || "can't be less than 3 characters",
];

const formattedDate = computed({
  get: () => {
    return due.value ? format(due.value, "do MMM yyyy") : null;
  },
  set: (newValue) => {
    due.value = newValue ? new Date(newValue) : null;
  },
});

const handleSubmit = async (isActive) => {
  // if (!(await formRef.value.validate().valid)) return;
  const { valid } = await formRef.value.validate();
  if (!valid) return;

  const project = {
    title: title.value,
    content: content.value,
    due: formattedDate.value,
    status: "ongoing",
    person: "Khaled Mostafa",
  };

  const colRef = collection(db, "projects");

  loading.value = true;
  await addDoc(colRef, project);
  loading.value = false;

  formRef.value.reset();
  formattedDate.value = "";
  isActive.value = false;
  emit("projectAdded");
};
</script>
