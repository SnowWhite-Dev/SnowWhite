<template>
  <div class="main-login-page">
    <div class="container" :class="{ active: isActive }" id="container">
      <div class="form-container sign-up">
        <form>
          <h2 class="color-blue mb-4">Create Account</h2>

          <v-text-field :error="nameError" v-model="username" rounded="lg" label="Name" variant="outlined"
            density="compact" @focus="NamehandleFocus" hide-details="auto" class="custom-field"
            :append-inner-icon="upiconName" @blur="reformatInput"></v-text-field>
          <v-text-field :error="mailError" v-model="upemail" rounded="lg" label="Email" variant="outlined"
            density="compact" @focus="MailhandleFocus" hide-details="auto" class="custom-field my-3"
            :append-inner-icon="upiconMail" @blur="reformatInput"></v-text-field>
          <v-text-field :error="passError" :type="show1 ? 'text' : 'password'" v-model="uppassword" rounded="lg"
            label="Password" variant="outlined" density="compact" @focus="PasshandleFocus" hide-details="auto"
            class="custom-field" :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="show1 = !show1" :rules="[validatePassword]"></v-text-field>

          <button type="button" @click="signUpFun" class="mt-4">Sign Up</button>

        </form>
      </div>
      <div class="form-container sign-in">
        <form>
          <h2 class="color-blue mb-4">Sign In</h2>

          <v-text-field :error="inMailError" v-model="inemail" rounded="lg" label="Email" variant="outlined"
            density="compact" @focus="inMailhandleFocus" hide-details="auto" class="custom-field"
            :append-inner-icon="iniconMail"></v-text-field>

          <v-text-field :error="inPassError" :type="show1 ? 'text' : 'password'" v-model="inpassword" rounded="lg"
            label="Password" variant="outlined" density="compact" @focus="inPasshandleFocus" hide-details="auto"
            class="custom-field my-3" :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="show1 = !show1" :rules="[validatePassword]"></v-text-field>

          <!-- <v-text-field v-model="inemail" rounded="lg" label="Email" variant="outlined" density="compact"
            hide-details="auto" class="custom-field"></v-text-field> -->
          <!-- <v-text-field v-model="inpassword" rounded="lg" label="Password" variant="outlined" density="compact"
            hide-details="auto" class="custom-field"></v-text-field> -->


          <a href="#" class="color-blue mt-3">Forget Your Password?</a>
          <button type="button" @click="signInFun()">Sign In</button>
        </form>
      </div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h2>Welcome Sir!</h2>
            <p>Register here to get fully access of our services.</p>
            <button type="button" class="hidden" @click="toggleSignIn(), clearSignIn()">Sign In
              <v-icon>mdi-menu-right</v-icon></button>
          </div>
          <div class="toggle-panel toggle-right">
            <h2>Hello, Friend!</h2>
            <p>Login here and let's get fun.</p>
            <button type="button" class="hidden"
              @click="toggleSignUp(), clearSignUp()"><v-icon>mdi-menu-left</v-icon>Sign Up</button>
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="maindialog" max-width="400" persistent>
      <v-card rounded="lg" elevation="20">
        <v-progress-linear v-if="mainloading" color="#2fa3ea" indeterminate :height="4"></v-progress-linear>

        <v-card-text class="pb-0">
          <div class="d-flex justify-space-between align-items-center">

            <h5>
              <span v-if="mainChecking">Checking Info ..... </span>
              <span v-if="!mainChecking && mainsuccess">
                <div style="color: red;">Waiting Response .... </div>
              </span>
              <span v-if="!mainChecking && !mainsuccess && mainNoti">
                <div style="color: blue">
                  <div style="color: green;">Registration Successful</div>
                </div>
              </span>
              <span v-if="!mainChecking && !mainsuccess && !mainNoti && !mainerror && mainNotiMessage">
                <div style="color: red;">{{ mainNotiMessage }}</div>
              </span>
              <span v-if="!mainChecking && !mainsuccess && mainerror && mainerrorMessage">
                <div style="color: red;">{{ mainerrorMessage }}</div>
              </span>
            </h5>

            <div>

              <div v-if="!mainloading">
                <!-- <v-icon style="cursor: pointer;">mdi-close</v-icon> -->
                <v-progress-circular class="py-0 my-0" :model-value="countValue" :rotate="360" :size="35" :width="4"
                  color="#2fa3ea">
                  <v-icon style="cursor:pointer; color: red;" @click="closeDialogFun">mdi-close</v-icon>
                </v-progress-circular>
              </div>
              <!-- <div v-if="loading">
                <v-progress-circular indeterminate color="green"></v-progress-circular>
              </div>

              <div v-if="!loading && success">
                <v-icon color="green" size="x-large">mdi-check-circle</v-icon>
              </div>

              <div v-if="!loading && !success && error">
                <v-icon color="red" size="x-large">mdi-alert-circle</v-icon>
              </div> -->


            </div>
          </div>
        </v-card-text>

        <hr class="py-0" style="height: 5px; background-color: #2fa3ea;">

        <!-- for username -->
        <v-card-text v-if="nstart" class="py-0">

          <div class="d-flex justify-space-between align-items-center w-100">
            <div>"{{ username }}"</div>
            <div>
              <div v-if="nloading">
                <v-progress-circular indeterminate color="#2fa3ea" :size="22" :width="3"></v-progress-circular>
              </div>

              <div v-if="!nloading && nsuccess">
                <v-icon color="green" size="large">mdi-check</v-icon>
              </div>

              <div v-if="!nloading && !nsuccess && nerror" class="py-0 my-0">
                <v-icon color="danger" size="large" class="py-0 my-0">mdi-alert-circle</v-icon>
              </div>

            </div>
          </div>

          <div class="text-start" v-if="!nloading && !nsuccess && nerror && nerror != ''">
            <div style="color: red; font-weight: bold;">{{ nerror }}</div>
          </div>

        </v-card-text>
        <hr>
        <!-- for up email -->
        <v-card-text v-if="estart" class="py-0 ">

          <div class="d-flex justify-space-between align-items-center w-100">
            <div>"{{ upemail }}"</div>
            <div>
              <div v-if="eloading">
                <v-progress-circular indeterminate color="#2fa3ea" :size="22" :width="3"></v-progress-circular>
              </div>

              <div v-if="!eloading && esuccess">
                <v-icon color="green" size="large">mdi-check</v-icon>
              </div>

              <div v-if="!eloading && !esuccess && eerror" class="py-0 my-0">
                <v-icon color="danger" size="large" class="py-0 my-0">mdi-alert-circle</v-icon>
              </div>

            </div>
          </div>

          <div class="text-start" v-if="!eloading && !esuccess && eerror && eerror != ''">
            <div style="color: red; font-weight: bold;">{{ eerror }}</div>
          </div>

        </v-card-text>
        <hr>
        <!-- for up password -->
        <v-card-text v-if="pstart" class="py-0 pb-3">

          <div class="d-flex justify-space-between align-items-center w-100">
            <div>"{{ uppassword }}"</div>
            <div>
              <div v-if="ploading">
                <v-progress-circular indeterminate color="#2fa3ea" :size="22" :width="3"></v-progress-circular>
              </div>

              <div v-if="!ploading && psuccess">
                <v-icon color="green" size="large">mdi-check</v-icon>
              </div>

              <div v-if="!ploading && !psuccess && perror" class="py-0 my-0">
                <v-icon color="danger" size="large" class="py-0 my-0">mdi-alert-circle</v-icon>
              </div>

            </div>
          </div>

          <div class="text-start" v-if="!ploading && !psuccess && perror && perror != ''">
            <div style="color: red; font-weight: bold;">{{ perror }}</div>
          </div>

        </v-card-text>

        <!-- <v-card-actions>
          <v-btn @click="dialog = false" text>Close</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>

    <!-- error dialog -->
    <v-dialog v-model="errorDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Validation Error</v-card-title>
        <v-card-text>{{ spaceErrorMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="errorDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // to change page
      redirect: false,

      // to auto close dialog
      countValue: 100,
      countInterval: null,

      // display password stuff
      show1: false,

      isActive: false,

      // login stuff
      inemail: '',
      inpassword: '',
      iniconMail: '',
      inMailError: false,
      inPassError: false,

      // sign up stuff 
      upemail: '',
      uppassword: '',
      username: '',
      upiconName: '',
      upiconMail: '',
      nameError: false,
      mailError: false,
      passError: false,

      // space error stuff
      errorDialog: false,
      spaceErrorMessage: '',

      // for main stuff check all info
      maindialog: false,
      mainloading: false,
      mainChecking: false,
      mainsuccess: false,
      mainNoti: false,
      mainNotiMessage: '',
      mainerror: false,
      mainerrorMessage: '',

      // for only username check in main
      nstart: false,
      nloading: false,
      nsuccess: false,
      nerror: '',

      // for only upemail(sign up) check in main
      estart: false,
      eloading: false,
      esuccess: false,
      eerror: '',

      // for only uppassword(Sign up) check in main
      pstart: false,
      ploading: false,
      psuccess: false,
      perror: '',


    };
  },
  mounted() {
    this.redirect = false;
  },
  beforeUnmount() {
    clearInterval(this.countInterval);
  },
  methods: {

    // Store JWT token
    storeToken(token) {
      localStorage.setItem('jwtToken', token);
    },

    // Retrieve JWT token
    retrieveToken() {
      return localStorage.getItem('jwtToken');
    },

    // Clear JWT token
    clearToken() {
      localStorage.removeItem('jwtToken');
    },


    startCountdown() {
      this.countValue = 100;
      this.countInterval = setInterval(() => {
        if (this.countValue <= 0) {
          this.closeDialogFun();
        } else {
          this.countValue -= 20;
        }
      }, 1000);
    },

    closeDialogFun() {
      clearInterval(this.countInterval);
      this.maindialog = false;
      this.mainloading = false;

      if (this.redirect) {
        this.$router.push({ name: 'home' });
      }
    },

    reformatInput() {
      this.username = this.username.trimEnd().trimStart();
      this.upemail = this.upemail.trimEnd().trimStart();
    },

    // for error dialog to detect space in password fields
    validatePassword(value) {
      if (/\s/.test(value)) {
        this.spaceErrorMessage = "Password cannot contain any spaces in start or between. I suggest you should use some Capital letter to get a strong password like 'helloWorld'.";
        this.inpassword = '';
        this.inPassError = true;

        this.uppassword = '';
        this.passError = true;
        this.errorDialog = true;
        return false;
      }
      return true;
    },

    toggleSignUp() {
      this.isActive = true;
    },
    toggleSignIn() {
      this.isActive = false;
    },
    clearSignIn() {
      this.username = '';
      this.upemail = '';
      this.uppassword = '';

      this.upiconName = '';
      this.upiconMail = '';

      this.nameError = false;
      this.mailError = false;
      this.passError = false;
      this.inPassError = false;
    },

    clearSignUp() {
      this.inemail = '';
      this.inpassword = '';

      this.iniconMail = '';

      this.inMailError = false;
      this.inPassError = false;
      this.passError = false;
    },

    NamehandleFocus() {
      this.upiconName = '';
      this.nameError = false;
    },

    MailhandleFocus() {
      this.upiconMail = '';
      this.mailError = false;
    },

    inMailhandleFocus() {
      this.iniconMail = '';
      this.inMailError = false;
    },

    PasshandleFocus() {
      this.passError = false;
    },

    inPasshandleFocus() {
      this.inPassError = false;
    },

    async signInFun() {
      if (!this.inemail || !this.inpassword || !this.inemail.trim() || !this.inpassword.trim()) {
        if (!this.inemail || !this.inemail.trim()) {
          this.iniconMail = 'mdi-alert-circle';
          this.inemail = '';
          this.inMailError = true;
        }
        if (!this.inpassword || !this.inpassword.trim()) {
          this.inpassword = '';
          this.inPassError = true;
        }
        return;
      } else {

        // this is login section 
        try {
          const response = await axios.post('http://localhost:8084/auth/login', {
            email: this.inemail,
            password: this.inpassword,
          });

          if (response.status === 200 || response.status === 202) {

            this.$route.push("/home");
            alert("login successful!");
          }


        } catch (error) {
          if (error.response) {
            alert("User Not found!");
          }

        }
      }
    },

    async signUpFun() {

      if (!this.username || !this.upemail || !this.uppassword || !this.username.trim() || !this.upemail.trim() || !this.uppassword.trim()) {
        if (!this.username || !this.username.trim()) {
          this.upiconName = 'mdi-alert-circle';
          this.username = '';
          this.nameError = true;
        }
        if (!this.upemail || !this.upemail.trim()) {
          this.upiconMail = 'mdi-alert-circle';
          this.upemail = '';
          this.mailError = true;
        }
        if (!this.uppassword || !this.uppassword.trim()) {
          this.uppassword = '';
          this.passError = true;
        }

        return;

      } else {

        this.mainloading = true;
        this.mainChecking = true;
        this.maindialog = true;

        // make sure this things
        this.nsuccess = false;
        this.esuccess = false;
        this.psuccess = false;
        this.mainsuccess = false;
        this.mainNoti = false;
        this.mainNotiMessage = '';
        this.mainerrorMessage = '';

        // Validation ( check username length, email format and password strength )

        // const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.upemail);
        // const passwordValid = this.uppassword.length > 5;

        // username stuff
        if (this.username) {
          this.nstart = true;
          // Validation 
          const nameValid = this.username.length >= 6;

          if (!nameValid) {
            this.nloading = true;
            this.nerror = 'Too short!';


            setTimeout(() => {
              this.nloading = false;
            }, 1500);
          } else {
            this.nloading = true;

            setTimeout(() => {
              this.nloading = false;
              this.nsuccess = true;
            }, 1500);
          }
        }

        // Up Email stuff
        if (this.upemail) {
          this.estart = true;
          // Email Validation 
          const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.upemail);

          if (!emailValid) {
            this.eloading = true;
            this.eerror = 'Invalid format!';

            setTimeout(() => {
              this.eloading = false;
            }, 1500);
          } else {
            this.eloading = true;

            setTimeout(() => {
              this.eloading = false;
              this.esuccess = true;
            }, 1500);
          }
        }

        // Up password stuff
        if (this.uppassword) {
          this.pstart = true;
          const passwordValid = this.uppassword.length > 5;


          if (!passwordValid) {
            this.ploading = true;
            this.perror = 'Too weak';

            setTimeout(() => {
              this.ploading = false;
            }, 1500);
          } else {
            this.ploading = true;

            setTimeout(() => {
              this.ploading = false;
              this.psuccess = true;
            }, 1500);
          }

        }


        setTimeout(async () => {

          // if some of them happened error!
          if (!this.nsuccess || !this.esuccess || !this.psuccess) {

            this.mainloading = false;
            this.startCountdown();


            this.mainerror = true;
            this.mainsuccess = false;
            this.mainChecking = false;
            this.mainerrorMessage = 'Invalid Inputs!';

            // make sure mainNotiMessage empty, becoz if your get already exist once and then input short name, can happen error.
            this.mainNotiMessage = '';



            return;

          } else {

            // this.mainloading = false;
            this.mainChecking = false;
            this.mainsuccess = true;


            // connect to backend and wait response

            try {
              const response = await axios.post('http://localhost:8084/auth/register', {
                username: this.username,
                email: this.upemail,
                password: this.uppassword,
              });

              if (response.status === 200 || response.status === 202) {
                this.mainChecking = false;
                this.mainsuccess = false;
                this.mainNoti = true;

                this.mainloading = false;
                this.startCountdown();

                this.redirect = true;
              }


            } catch (error) {
              if (error.response) {
                console.log("Arrived");
                this.mainloading = false;
                this.startCountdown();
                this.mainChecking = false;
                this.mainsuccess = false;
                this.mainNoti = false;

                this.mainerror = false;

                this.mainNotiMessage = "User already Exists!";
              }

            }



          }
        }, 1700);

      }
      // else end

    },
  },
};
</script>
