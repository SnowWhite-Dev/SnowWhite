
  <template>
    <div>
      <v-btn @click="addBreadcrumb('Apple')">Apple</v-btn>
      <v-btn @click="addBreadcrumb('Banana')">Banana</v-btn>
      <v-btn @click="addBreadcrumb('Mango')">Mango</v-btn>
      <v-breadcrumbs :items="items" class="m-0" style="background-color: #ddd;">
        <template v-slot:title="{ item }">
        <span @click="removeBreadcrumb(item)">
          {{ item.text }}
        </span>
        </template>
      </v-breadcrumbs>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          items: [
            {
              text: 'Main testing',
              href: '/home'
            },
            {
              text: 'Main testing',
            }
          ],
        };
      },
      methods: {
        addBreadcrumb(title) {
          if (!this.items.find(item => item.text === title)) {
            this.items.push({ text: title, href: `/home` });

          }
        },
        removeBreadcrumb(item) {
          const index = this.items.indexOf(item) + 1;
          this.items.splice(index, this.items.length - index);
        },
      },
    };
  </script>


