<template>
  <ion-page>
    <ion-content>
      <div class="page">
        <div class="header">
          <div class="menu-icon">
            <img src="../assets/icons/icons8-menu-50.png" alt="">
          </div>
          <div class="support">
            <div class="notifcation-icon">
              <img src="../assets/icons/icons8-notification-50.png" alt="">
            </div>
            <div class="message-icon">
              <img src="../assets/icons/icons8-chat-50.png" alt="">
            </div>
            
          </div>
        </div>
        <ion-card class="page-card">
          <ion-card-header>
            <ion-card-title>Track your shipment</ion-card-title>
          </ion-card-header>
          <div>
            <ion-searchbar
              show-clear-button="focus"
              class="search-bar"
              placeholder="Enter order or Tracking ID"
            ></ion-searchbar>
          </div>
          <div class="estimate">
            <ion-button>Get Estimate</ion-button>
          </div>

          <ion-card-content>
            <div class="container">
              <ion-card class="ship-local">
                <div class="card-icon">
                  <img src="../assets/bag.png" alt="" />
                </div>
                <ion-card-header>
                  <h3>Ship local</h3>
                </ion-card-header>

                <ion-card-content>
                  Book delivery and pickup within the same city

                  <div class="start">
                    <h4>Start here</h4>
                    <div class="arrow">
                      <img src="../assets/black-arrow.png" alt="" />
                    </div>
                  </div>
                </ion-card-content>
              </ion-card>
              <ion-card class="orders">
                <div class="card-icon">
                  <img src="../assets/order.png" alt="" />
                </div>
                <ion-card-header>
                  <h3>My orders</h3>
                </ion-card-header>

                <ion-card-content>
                  View status of all your orders from a single page
                </ion-card-content>
              </ion-card>
            </div>

            <div class="container">
              <ion-card class="subscription">
                <div class="card-icon">
                  <img src="../assets/buy.png" alt="" />
                </div>
                <ion-card-header>
                  <h3>Buy for me</h3>
                </ion-card-header>

                <ion-card-content>
                  Too busy to shop? let us run your errands delivered same day
                </ion-card-content>
              </ion-card>
              <ion-card class="inter-state">
                <div class="card-icon">
                  <img src="../assets/subscription.png" alt="" />
                </div>
                <ion-card-header>
                  <h3>Subscription</h3>
                </ion-card-header>

                <ion-card-content>
                  Have lots of deliveries daily? Subscribe and get huge
                  discounts
                </ion-card-content>
              </ion-card>
            </div>
          </ion-card-content>
        </ion-card>
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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonSearchbar,
  IonButton
} from "@ionic/vue";
import { menuOutline, notificationsOutline } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "home",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonSearchbar,
    IonButton
  },
  setup() {
    return { menuOutline, notificationsOutline };
  },
});
</script>

<style scoped>
.page {
  background-color: black;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
.support{
  display: flex;
  justify-content: space-between;
}
.container {
  display: flex;
  justify-content: space-between;
}
.start {
  display: flex;
  justify-content: space-between;
}
.page-card {
  margin-top:30px;
  
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
ion-searchbar {
  --border-radius: 30px;
}
.ship-local{
  background-color: #181c32;
}
.orders{
  background-color: #009ef7;
}
.inter-state{
  background-color: #f1416c;
}
.subscription{
  background-color: #1bc5bd;
}
</style>
