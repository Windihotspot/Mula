<template>
  <ion-page>
    <ion-content>
      <ion-card>
        <div class="card-icon">
          <img src="../assets/bag.png" alt="" />
        </div>
        <ion-card-header>
          <h3>Ship local</h3>
        </ion-card-header>

        <ion-card-content>
          Book delivery and pickup within the same city
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
  },
  setup() {},
});
</script>
