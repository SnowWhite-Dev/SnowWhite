<template>
    <div class="login-page">
        <div class="container">
            <div class="left-column">
                <img :src="login_image" alt="Image" class="responsive-image">

                <!-- <form @submit.prevent="submitForm">
                    <v-text-field clearable density="compact" v-model="username" :rules="rules" label="Username"
                        variant="outlined" class="mb-2"></v-text-field>
               
                    <v-text-field variant="outlined" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                        hint="At least 8 characters" label="Normal with hint text" name="input-10-1" counter
                        @click:append="show1 = !show1"></v-text-field>
                    

                    <button type="submit" class="btn btn-primary">Login</button>
                </form> -->
            </div>
            <div class="right-column">
                <!-- Placeholder image for demonstration -->
                <h2 class="mb-4 color-blue">Login</h2>
                <div class="text-subtitle-1 text-medium-emphasis">Gmail address</div>

                <v-text-field density="compact" v-model="username" placeholder="Email address"
                    prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Password

                    <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                        target="_blank">
                        Forgot login password?</a>
                </div>

                <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                    prepend-inner-icon="mdi-lock-outline" variant="outlined"
                    @click:append-inner="visible = !visible"></v-text-field>

                <!-- <v-btn @click="submitForm" class="mb-6 mt-3" color="blue" size="large" variant="tonal" block>
                    Login
                </v-btn>
                <v-btn @click="submitForm" class="mb-6 mt-3" color="blue" size="large" variant="tonal" block>
                    Login
                </v-btn> -->

                <div class="row mb-6 mt-3">
                    <div class="col-6">
                        <v-btn @click="submitForm" color="blue" size="large" variant="tonal" block>
                            Login
                        </v-btn>
                    </div>
                    <div class="col-6">
                        <v-btn to="/home" color="danger" size="large" variant="tonal" block>
                            back
                        </v-btn>
                    </div>

                </div>

                <div class="d-flex justify-content-center">


                    <div class="d-flex ">
                        <p>If you don't have an account.</p>

                        <router-link to="/register" class="ms-2 text-blue text-decoration-none m-0 p-0">
                            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>

                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            visible: false,
            login_image: require('@/assets/img/login.jpg'),

            // rules: [
            //     value => !!value || 'Required.',
            //     value => (value && value.length >= 5) || 'Min 5 characters',
            // ],
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        };
    },
    methods: {
        submitForm() {
            alert(`Username: ${this.username}, Password: ${this.password}`);
        }
    }
}
</script>
