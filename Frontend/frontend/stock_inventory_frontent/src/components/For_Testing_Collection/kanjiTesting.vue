<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" sm="12" xl="4" v-for="(data, index) in question" :key="index" data-aos="fade-up">
                <v-card rounded="lg" elevation="5">
                    <v-card-title>
                        <v-img
                                :src="data.image"
                                class="mr-4"
                                max-width="100"
                        ></v-img>
                        <span>({{ index + 1 }}) {{ data.text }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="data.selectedAnswer">
                            <v-radio
                                    v-for="(answer, idx) in data.answers"
                                    :key="idx"
                                    :label="answer"
                                    :value="answer"
                            ></v-radio>
                        </v-radio-group>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AOS from 'aos';
export default {
    data() {
        return {
            question: [
                {
                    image: require('@/assets/logo.png'),
                    text: 'What is the capital of France?',
                    answers: ['Paris', 'London', 'Rome', 'Berlin'],
                    selectedAnswer: '',
                },
                {
                    image: require('@/assets/logo.png'),
                    text: 'What is the capital of Myanmar?',
                    answers: ['NayPyiTaw', 'Yangon', 'Mandalay', 'Bagan'],
                    selectedAnswer: '',
                },
                {
                    image: require('@/assets/logo.png'),
                    text: 'What is the capital of Brazil?',
                    answers: ['Brasilia', 'Rio de Janeiro', 'São Paulo', 'Salvador'],
                    selectedAnswer: '',
                },
                {
                    image: require('@/assets/logo.png'),
                    text: 'What is the capital of the USA?',
                    answers: ['Washington, D.C.', 'New York', 'Los Angeles', 'Chicago'],
                    selectedAnswer: '',
                },
            ],
        }

    },

    mounted() {
        AOS.init({
            duration: 600,
            once: false,
        });
    },
}
</script>
