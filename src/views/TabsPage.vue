<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/dashboard">
          <ion-icon aria-hidden="true" :icon="homeOutline"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="transactions" href="/transactions">
          <ion-icon aria-hidden="true" :icon="documentTextOutline" />
          <ion-label>Transactions</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/settings">
          <ion-icon aria-hidden="true" :icon="settingsOutline" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="accounts" href="/accounts">
          <ion-icon aria-hidden="true" :icon="personOutline" />
          <ion-label>Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs> 
    6
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTitle, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { personOutline,homeOutline,documentTextOutline, settingsOutline, } from 'ionicons/icons';
import {defineComponent} from "vue";

export default defineComponent({
 name:'tabspage',
 components: {
  IonTabBar, IonTitle, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet
 },
 setup() {



  return{
  personOutline, homeOutline, documentTextOutline, settingsOutline,personOutline
  }
 }

})
</script>
