<template>
    <div class="page-setup">
        <v-container>
            <div class="row">
                <div class="col-md-4 col-sm-12 col-lg-4" data-aos="fade-up" data-aos-delay="50">
                    <v-card rounded="lg" elevation="10">
                        <v-progress-linear v-if="loading[1]" color="#2fa3ea" indeterminate :height="3"></v-progress-linear>

                        <div class="py-2 px-3">
                            <v-card-title class="p-0 color-blue">
                                Learning
                            </v-card-title>
                            <v-card-subtitle class="p-0">
                                Easy learning steps
                            </v-card-subtitle>
                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur radicalising elit. Voluptates obcaecati ex at placeat
                                suspicious vitae voluptuous exception explicable. Nobs at squamous fuga labore illum,
                                perspiciatis et asperiores praesentium fugiat? Voluptatem.
                            </v-card-text>
                            <v-card-actions class="p-0">
                                <v-btn @click="startLoading(1)" color="primary" variant="tonal">
                                    Start learning <v-icon icon="mdi-chevron-right" class="mt-1"></v-icon>
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </v-card>
                </div>
                <div class="col-md-4 col-sm-12 col-lg-4 page-2" data-aos="fade-up" data-aos-delay="150">
                    <v-card rounded="lg" elevation="10" >
                        <v-progress-linear v-if="loading[2]" color="#2fa3ea" indeterminate :height="3"></v-progress-linear>

                       <div class="px-3 py-2">
                           <v-card-title class="p-0 color-blue">
                               Practice
                           </v-card-title>
                           <v-card-subtitle class="p-0">
                               practice your skills
                           </v-card-subtitle>
                           <v-card-text>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati ex at placeat
                               suscipit vitae voluptatibus excepturi explicabo. Nobis at quisquam fuga labore illum,
                               perspiciatis et asperiores praesentium fugiat? Voluptatem.
                           </v-card-text>
                           <v-card-actions class="p-0">
                               <v-btn @click="startLoading(2)" color="primary" variant="tonal">
                                   Let's practice <v-icon icon="mdi-chevron-right" class="mt-1"></v-icon>
                               </v-btn>
                           </v-card-actions>
                       </div>
                    </v-card>
                </div>
                <div class="col-md-4 col-sm-12 col-lg-4 " data-aos="fade-up" data-aos-delay="250">
                    <v-card rounded="lg" elevation="10" >
                        <v-progress-linear v-if="loading[3]" color="#2fa3ea" indeterminate :height="3"></v-progress-linear>

                        <div class="py-2 px-3">
                            <v-card-title class="p-0 color-blue">
                                Test Exam
                            </v-card-title>
                            <v-card-subtitle class="p-0">
                                test your skills
                            </v-card-subtitle>
                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati ex at placeat
                                suscipit vitae voluptatibus excepturi explicabo. Nobis at quisquam fuga labore illum,
                                perspiciatis et asperiores praesentium fugiat? Voluptatem.
                            </v-card-text>
                            <v-card-actions class="p-0">
                                <v-btn @click="startLoading(3)" color="primary" variant="tonal">
                                    Start testing<v-icon icon="mdi-chevron-right" class="mt-1"></v-icon>
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </v-card>
                </div>
            </div>
        </v-container>
    </div>
</template>


<script>
import AOS from 'aos';

// import Components
export default {
    name: 'MainContent',
    data() {
        return {
            loading: {
                1: false,
                2: false,
                3: false
            },
        };
    },

    mounted() {
        // Initialize AOS with custom settings when the component is mounted
        AOS.init({
            duration: 600,
            once: false,
        });
    },
    methods: {
        startLoading(cardNumber) {
            // Set all loading states to false
            Object.keys(this.loading).forEach(key => {
                this.loading[key] = false;
            });

            // Set the selected card loading state to true
            this.loading[cardNumber] = true;

            // Simulate a 2-second loading process
            setTimeout(() => {
                // After 2 seconds, set the loading state to false
                this.loading[cardNumber] = false;

                // Redirect to the login page
                this.$router.push('/mainTestPage');
            }, 1500);

        }
    }
}
</script>