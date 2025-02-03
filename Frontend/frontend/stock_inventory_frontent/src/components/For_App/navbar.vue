<template>
    <div class="navbar-start">
        <nav class="navbar navbar-expand-lg bg-body-tertiary custom-navbar px-2 py-2">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{{ this.currentRouteName }}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item nav-item-custom" :class="{ 'active': isActive('home') }">
                            <a class="nav-link" href="/">Home</a>
                        </li>

                        <li class="nav-item nav-item-custom">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Testing
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/testing">Testing One</a></li>
                                <li><a class="dropdown-item" href="/testingTwo">Testing Two</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item nav-item-custom">
                            <a class="nav-link" href="/login">Sign in</a>
                        </li>

                    </ul>
                    <v-btn @click="dialog = true" :color="dialog ? '#4cabe7' : 'surface-variant'"
                        :variant="dialog ? 'flat' : 'outlined'" text>
                        <v-icon left class="mt-1 me-2">mdi-magnify</v-icon>
                        Search
                    </v-btn>
                </div>
            </div>
        </nav>

        <!-- Dialog Component -->
        <v-dialog v-model="dialog" max-width="500" transition="dialog-top-transition">
            <v-card>
                <v-toolbar title="Search content" class="background-blue">
                    <div class="d-flex justify-space-between">

                        <div>
                            <v-btn icon @click="dialog = false">
                                <v-icon color="black">mdi-close</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-toolbar>

                <v-card-text>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button color="#4cabe7" class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </v-card-text>


            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'NavbarT',
    data() {
        return {
            dialog: false,
        }
    },

    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },

    methods: {
        isActive(routeName) {
            return this.currentRouteName === routeName;
        }
    },
}
</script>
