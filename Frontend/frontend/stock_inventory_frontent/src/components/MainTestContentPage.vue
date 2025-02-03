<template>

    <div class="for-mainContent">
        <h1 class="text-center mt-4 color-blue">{{ text_change() }}</h1>
        <v-breadcrumbs :items="items" class="py-2 m-0" style=" background-color: #ddd;">
            <template v-slot:title="{ item }">
                <span @click="removeBreadcrumb(item)" style="cursor: pointer;">
                    {{ item.text }}
                </span>
            </template>
        </v-breadcrumbs>

        <!--      for main three contents-->
        <div v-if="mainOpen">
            <v-container>
                <v-row no-gutters>
                    <v-col xl="4" md="4" sm="12" class="p-1" data-aos="fade-up">

                        <v-card elevation="4" rounded="lg">
                            <v-card-title class="color-blue">
                                Kanji Testing
                            </v-card-title>
                            <v-card-subtitle>
                                test your kanji skill
                            </v-card-subtitle>
                            <v-card-text>
                                hello kanji
                            </v-card-text>
                            <v-card-actions>
                                <v-btn variant="outlined" class="color-blue"
                                    @click="addBreadcrumb('Kanji test', 'tempKanji')">
                                    Start testing
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-col>
                    <v-col xl="4" md="4" sm="12" class="p-1" data-aos="fade-up">

                        <v-card elevation="4" rounded="lg">
                            <v-card-title class="color-blue">
                                Grammar Testing
                            </v-card-title>
                            <v-card-subtitle>
                                test your grammar skill
                            </v-card-subtitle>
                            <v-card-text>
                                Hello Grammar
                            </v-card-text>
                            <v-card-actions>
                                <v-btn variant="outlined" class="color-blue"
                                    @click="addBreadcrumb('Grammar test', 'Grammar')">
                                    Start testing
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-col>
                    <v-col xl="4" md="4" sm="12" class="p-1" data-aos="fade-up">

                        <v-card elevation="4" rounded="lg">
                            <v-card-title class="color-blue">
                                Vocabulary Testing
                            </v-card-title>
                            <v-card-subtitle>
                                test your vocabulary skill
                            </v-card-subtitle>
                            <v-card-text>
                                hello Vocabulary
                            </v-card-text>
                            <v-card-actions>
                                <v-btn variant="outlined" class="color-blue"
                                    @click="addBreadcrumb('Vocabulary test', 'vocabulary')">
                                    Start testing
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-col>
                </v-row>
            </v-container>
        </div>

        <!--      for kanji testing-->

        <div v-if="tempKanji">
            <v-container>
                <v-row no-gutters>
                    <v-col cols="12" md="6" sm="12" lg="6" class="p-1" data-aos="fade-up">
                        <v-card elevation="4" rounded="lg">
                            <v-card-title class="color-blue">
                                Kanji to Hiragana
                            </v-card-title>
                            <v-card-text>
                                hello world
                            </v-card-text>
                            <v-card-actions>
                                <v-btn variant="outlined" class="color-blue"
                                    @click="addBreadcrumb('Kanji to Hiragana', 'Kanji')">
                                    Start testing
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6" sm="12" lg="6" class="p-1" data-aos="fade-up">
                        <v-card elevation="4" rounded="lg">
                            <v-card>
                                <v-card-title class="color-blue">
                                    Hiragana to Kanji
                                </v-card-title>
                                <v-card-text>
                                    hello world
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn variant="outlined" class="color-blue"
                                        @click="addBreadcrumb('Hiragana to kanji', 'Kanji')">
                                        start testing
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

        </div>
        <div v-if="kanjiOpen">
            <kanjiTest />

        </div>

        <!--      for vocabulary testing-->
        <div v-if="vocabOpen">
            <vocabTest />
        </div>

        <!--      for Grammar testing-->
        <div v-if="grammarOpen">
            <grammarTest />
        </div>

    </div>
</template>

<script>
import kanjiTest from '@/components/For_Testing_Collection/kanjiTesting.vue'
import grammarTest from '@/components/For_Testing_Collection/grammarTesting.vue'
import vocabTest from '@/components/For_Testing_Collection/vocabTesting.vue'
import AOS from 'aos';
export default {
  name: 'HelloWorld',

  data:()=>({
      // main stuff
      mainOpen: true,

      // Kanji stuff
    kanjiOpen: false,
      tempKanji: false,

      // Vacab Stuff
      tempVocab: false,
    vocabOpen: false,

      // Grammar Stuff
      tempGrammar: false,
    grammarOpen: false,

    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/home',
      },
      {
        text: 'Main testing',
      }
    ],

  }),

    mounted() {
        if(sessionStorage.getItem('mainOpen')) {
            this.loadState();
        }

        
        AOS.init({
            duration: 600,
            once: false,
        })
        
    },

    methods:{
      text_change() {
          if(this.mainOpen) {
              return "Welcome to testing section";
          }else if(this.kanjiOpen || this.tempKanji) {
              return "Kanji testing"
          }else if(this.grammarOpen || this.tempGrammar){
              return "Grammar testing"
          }else {
              return "Vocabulary testing"
          }
      },

    addBreadcrumb(title, data) {
      if (!this.items.find(item => item.text === title)) {
        this.items.push({ text: title});
        if(data === 'tempKanji') {
            this.tempKanjiClick();
        }
        if(data === 'Kanji') {
            this.kanjiClick();
        }
        if(data === 'Grammar') {
            this.grammarClick();
        }
        if (data === 'vocabulary') {
            this.vocabClick();
        }
        this.saveState();
      }
    },

    removeBreadcrumb(item) {
      const index = this.items.indexOf(item) + 1;
      this.items.splice(index, this.items.length - index);
      if(item.text === 'Main testing') {
          this.mainClick();
      }
      if(item.text === 'Kanji test') {
          this.tempKanjiClick();
      }
      this.saveState();
    },

        saveState() {
            sessionStorage.setItem('mainOpen', this.mainOpen);
            sessionStorage.setItem('tempKanji', this.tempKanji);
            sessionStorage.setItem('kanjiOpen', this.kanjiOpen);
            sessionStorage.setItem('vocabOpen', this.vocabOpen);
            sessionStorage.setItem('grammarOpen', this.grammarOpen);
            sessionStorage.setItem('items', JSON.stringify(this.items));
        },

        loadState() {
            this.mainOpen = sessionStorage.getItem('mainOpen') === 'true';
            this.tempKanji = sessionStorage.getItem('tempKanji') === 'true';
            this.kanjiOpen = sessionStorage.getItem('kanjiOpen') === 'true';
            this.vocabOpen = sessionStorage.getItem('vocabOpen') === 'true';
            this.grammarOpen = sessionStorage.getItem('grammarOpen') === 'true';
            const items = sessionStorage.getItem('items');
            if (items) {
                this.items = JSON.parse(items);
            }
        },

        tempKanjiClick() {
            this.mainOpen = false;
            this.kanjiOpen = false;
            this.tempKanji = true;
            this.vocabOpen = false;
            this.grammarOpen = false;
            this.saveState();
        },

    kanjiClick(){
        this.mainOpen = false;
      this.kanjiOpen = true;
        this.tempKanji = false;
      this.vocabOpen = false;
      this.grammarOpen = false;
        this.saveState();
    },
    vocabClick() {
        this.mainOpen = false;
      this.kanjiOpen = false;
      this.vocabOpen = true;
        this.tempKanji = false;
      this.grammarOpen = false;
        this.saveState();
    },
    grammarClick() {
        this.mainOpen = false;
      this.kanjiOpen = false;
      this.vocabOpen = false;
        this.tempKanji = false;
      this.grammarOpen = true;
        this.saveState();
    },
      mainClick() {
        this.mainOpen = true;
          this.kanjiOpen = false;
          this.vocabOpen = false;
          this.tempKanji = false;
          this.grammarOpen = false;
          this.saveState();
      }
  },

  components: {
    kanjiTest,
    grammarTest,
    vocabTest
  }

}
</script>

<style scoped lang="scss">

.add_style {
  background-color: red;
  color: #fff;
}
</style>