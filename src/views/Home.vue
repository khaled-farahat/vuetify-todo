<template>
  <h1 class="text-subtitle-1 text-grey">Home</h1>
  <VContainer class="my-5">
    <VRow class="mb-3 pl-2">
      <VBtn
        flat
        variant="text"
        color="grey"
        size="small"
        prepend-icon="mdi-folder"
        @click="sortBy('title')"
      >
        <span class="caption text-lowercase">By project name</span>
        <VTooltip
          activator="parent"
          location="top"
          location-strategy="connected"
          >Sort projects by projects name</VTooltip
        >
      </VBtn>
      <VBtn
        flat
        variant="text"
        color="grey"
        size="small"
        prepend-icon="mdi-account"
        @click="sortBy('person')"
      >
        <span class="caption text-lowercase">By person</span>
        <VTooltip
          activator="parent"
          location="top"
          location-strategy="connected"
          >Sort projects by person
        </VTooltip>
      </VBtn>
    </VRow>
    <VCard flat v-for="project in projects" :key="project.title">
      <VRow no-gutters :class="`pa-3 project ${project.status}`">
        <VCol cols="12" md="6">
          <div class="text-caption text-grey">Project Title</div>
          <div>{{ project.title }}</div>
        </VCol>
        <VCol cols="6" sm="4" md="2">
          <div class="text-caption text-grey">Person</div>
          <div>{{ project.person }}</div>
        </VCol>
        <VCol cols="6" sm="4" md="2">
          <div class="text-caption text-grey">Due by</div>
          <div>{{ project.due }}</div>
        </VCol>
        <VCol cols="2" sm="4" md="2" class="d-flex">
          <div class="ml-auto">
            <VChip
              size="small"
              :class="`${project.status} text-white caption my-2`"
              >{{ project.status }}</VChip
            >
          </div>
        </VCol>
      </VRow>
      <VDivider />
    </VCard>
  </VContainer>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "Design a new website",
    person: "John Doe",
    due: "1st jan 2019",
    status: "ongoing",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae eaque, optio quaerat tempora voluptatum earum autem accusamus inventore dolores placeat! Cumque ad tempora tempore voluptatum repudiandae nostrum! Repudiandae, quam?",
  },
  {
    title: "Code up the homepage",
    person: "Chun Li",
    due: "10th jan 2019",
    status: "complete",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae eaque, optio quaerat tempora voluptatum earum autem accusamus inventore dolores placeat! Cumque ad tempora tempore voluptatum repudiandae nostrum! Repudiandae, quam?",
  },
  {
    title: "Design a new logo",
    person: "John Doe",
    due: "1st feb 2019",
    status: "ongoing",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae eaque, optio quaerat tempora voluptatum earum autem accusamus inventore dolores placeat! Cumque ad tempora tempore voluptatum repudiandae nostrum! Repudiandae, quam?",
  },
  {
    title: "Create a new landing page",
    person: "Noop Li",
    due: "1st feb 2019",
    status: "overdue",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae eaque, optio quaerat tempora voluptatum earum autem accusamus inventore dolores placeat! Cumque ad tempora tempore voluptatum repudiandae nostrum! Repudiandae, quam?",
  },
]);

const sortBy = (prop) => {
  projects.value.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  /* border-left: 4px solid #fbbd08; */
  border-left: 4px solid orange;
}

.project.overdue {
  /* border-left: 4px solid #ff3860; */
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background-color: #3cd1c2;
}

.v-chip.ongoing {
  /* background-color: #fbbd08; */
  background-color: orange;
}

.v-chip.overdue {
  /* background-color: #ff3860; */
  background-color: tomato;
}
</style>
