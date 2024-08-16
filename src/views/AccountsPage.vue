<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Accounts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-content>
          <div class="wallet-balance">
            <h3>Wallet balance</h3>
            <h3>0.00</h3>
            <hr />
          </div>
          <div class="features">
            <div class="transaction-details">
              <div class="icon">
                <img src="../assets/book.png" alt="" />
              </div>
              <div class="features-text">Transaction details</div>
            </div>
            <div class="transaction-details">
              <div class="icon">
                <img src="../assets/withdrawal.png" alt="" />
              </div>
              <div class="features-text">Transaction details</div>
            </div>
            <div class="withdrawal-fund">
              <div class="icon">
                <img src="../assets/wallet.png" alt="" />
              </div>
              <div class="features-text">Transaction details</div>
            </div>
          </div>
        </ion-card-content>
        <div class="list-links">
          <ion-list>
            <ion-item>
              <div class="row">
                <div class="icon-label">
                  <div class="label-icon">
                    <img src="../assets/user.png" alt="" />
                  </div>
                  <ion-label>Profile</ion-label>
                </div>
                <div class="forward-arrow">
                  <img src="../assets/forward.png" alt="" />
                </div>
              </div>
            </ion-item>
            <ion-item>
              <div class="row">
                <div class="icon-label">
                  <div class="label-icon">
                    <img src="../assets/user.png" alt="" />
                  </div>
                  <ion-label>Sub-customers</ion-label>
                </div>
                <div class="forward-arrow">
                  <img src="../assets/forward.png" alt="" />
                </div>
              </div>
            </ion-item>
            <ion-item>
              <div class="row">
                <div class="icon-label">
                  <div class="label-icon">
                    <img src="../assets/user.png" alt="" />
                  </div>
                  <ion-label>Affiliates</ion-label>
                </div>
                <div class="forward-arrow">
                  <img src="../assets/forward.png" alt="" />
                </div>
              </div>
            </ion-item>
            <ion-item>
              <div class="row">
                <div class="icon-label">
                  <div class="label-icon">
                    <img src="../assets/user.png" alt="" />
                  </div>
                  <ion-label>Refer</ion-label>
                </div>
                <div class="forward-arrow">
                  <img src="../assets/forward.png" alt="" />
                </div>
              </div>
            </ion-item>
            <ion-item>
              <div class="row">
                <div class="icon-label">
                  <div class="label-icon">
                    <img src="../assets/user.png" alt="" />
                  </div>
                  <ion-label>Support</ion-label>
                </div>
                <div class="forward-arrow">
                  <img src="../assets/forward.png" alt="" />
                </div>
              </div>
            </ion-item>
          </ion-list>
        </div>
      </ion-card>
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
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonList,
  },
  setup() {},
});
</script>

<style scoped>
.features {
  display: flex;
  justify-content: space-between;
}
.icon-label {
  display: flex;
  justify-content: space-between;
}
.row{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
