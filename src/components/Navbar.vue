<template>
  <nav>
    <VAppBar flat class="bg-grey-lighten-4 text-grey">
      <VAppBarNavIcon @click.stop="drawer = !drawer" />
      <VAppBarTitle class="text-uppercase text-grey">
        <span class="font-weight-light">Todo</span>
        <span>Vuetify</span>
      </VAppBarTitle>
      <VBtn flat color="grey" append-icon="mdi-logout">
        <span> Sign Out </span>
        <!-- <VIcon>mdi-logout</VIcon> -->
      </VBtn>
    </VAppBar>

    <!-- Navigation Drawer -->
    <VNavigationDrawer class="bg-primary" v-model="drawer">
      <VRow class="align-center">
        <VCol cols="12" class="mt-5 text-center">
          <VAvatar size="100" class="bg-grey-lighten-2" image="/avatar-1.png" />
          <div class="text-subtitle-1 text-white mt-1">Khaled Mostafa</div>
          <!-- <div class="text-caption text-white">Frontend Developer</div> -->
        </VCol>
      </VRow>
      <VList class="text-white">
        <VListItem
          v-for="link in links"
          :key="link.title"
          router
          :to="link.to"
          exact
        >
          <template v-slot:prepend>
            <VIcon>{{ link.icon }}</VIcon>
          </template>
          <VListItemTitle>{{ link.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VNavigationDrawer>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

const links = [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    to: "/",
  },
  {
    title: "My Projects",
    icon: "mdi-folder-multiple",
    to: "/projects",
  },
  {
    title: "Team",
    icon: "mdi-account-group",
    to: "/team",
  },
];
</script>
