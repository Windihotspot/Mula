<template>
    <ion-page>
      <ion-content>
        <ion-card>
          
          <div class="login-container">
            <div class="title">
              <h2>Create an account now!</h2>
              
            </div>
          
          <div class="form-group">
            <div class="email-input">
              <ion-input
                label="Enter email address"
                type="email"
                fill="outline"
                label-placement="floating"
              ></ion-input>
            </div>
            <br>
            <div class="password-input">
              <ion-input
                label="Enter Password"
                type="password"
                fill="outline"
                label-placement="floating"
              ></ion-input>
            </div>
            <br>
            <div class="password-input">
              <ion-input
                label="Confirm Password"
                type="password"
                fill="outline"
                label-placement="floating"
              ></ion-input>
            </div>
          </div>
          <br>
          <div class="submit">
            <ion-button>Submit</ion-button>
          </div>
  
          <div class="footer">
            <p>You have an account? <span class="login">Login here</span></p>
          </div>
        </div>
        </ion-card>
       
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { IonPage, IonContent, IonInput } from "@ionic/vue";
  
  export default defineComponent({
    components: {
      IonPage,
      IonContent,
      IonInput,
    },
  });
  </script>
  
  <style scoped>
  .login-container{
    width: 80%;
    margin:auto;
    text-align: center;
    padding: 50% 0%;
  }
  .login{
    color: var(--ion-color-primary);
  }
  </style>
  