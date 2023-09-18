<template>
  <h1 class="text-subtitle-1 text-grey">Projects</h1>
  <VContainer class="my-5">
    <VExpansionPanels>
      <VExpansionPanel
        v-for="project in myProjects"
        :key="project.title"
        :title="project.title"
      >
        <VExpansionPanelText class="px-4 text-grey">
          <div class="font-weight-bold">due by {{ project.due }}</div>
          <div>{{ project.content }}</div>
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </VContainer>
</template>

<script setup>
import { ref } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import db from "@/firebase";

const myProjects = ref([]);

onSnapshot(collection(db, "projects"), (snapshot) => {
  myProjects.value = [];
  snapshot.forEach((doc) => {
    if (doc.data().person === "Khaled Mostafa")
      myProjects.value.push(doc.data());
  });
});
</script>
