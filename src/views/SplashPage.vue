<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Splash screen</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="image-container">
        <img src="../assets/rocket.gif" alt="">
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  useIonRouter,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
  },
  setup() {
    const router = useIonRouter();

    const navigateToNextPage = () => {
      // Use the router instance to navigate to the next page
      router.push("/loginpage");
    };

    onMounted(() => {
      // Set a timeout to navigate to the next page after 5 seconds (5000 milliseconds)
      setTimeout(() => {
        navigateToNextPage();
      }, 5000);
    });

    return {
      navigateToNextPage,
    };
  },
});
</script>

<style>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
}

.image-container img {
  max-width: 70%;
  max-height: 100%;
}
</style>