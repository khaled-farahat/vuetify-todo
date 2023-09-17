<template>
  <h1 class="text-subtitle-1 text-grey">Team</h1>
  <VContainer class="my-5">
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="person in team"
        :key="person.name"
      >
        <VCard flat class="text-center ma-3">
          <VResponsive class="pt-4">
            <VAvatar
              :image="person.avatar"
              size="100"
              class="bg-grey-lighten-2"
            />
          </VResponsive>
          <VCardText>
            <div class="text-subtitle-1">{{ person.name }}</div>
            <div class="text-grey">{{ person.role }}</div>
            <VCardActions>
              <VBtn flat color="grey" prepend-icon="mdi-message-processing">
                Message
              </VBtn>
            </VCardActions>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { ref } from "vue";

const team = ref([
  {
    name: "Khaled Mostafa",
    role: "Frontend Developer",
    avatar: "/avatar-1.png",
  },
  { name: "Ahmed Mohamed", role: "Backend Developer", avatar: "/avatar-2.png" },
  {
    name: "Mohamed Ahmed",
    role: "Fullstack Developer",
    avatar: "/avatar-3.png",
  },
  { name: "Mostafa Khaled", role: "DevOps Engineer", avatar: "/avatar-4.png" },
  { name: "Mohamed Mostafa", role: "UI/UX Designer", avatar: "/avatar-5.png" },
]);
</script>
