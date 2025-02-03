<template>
    <div class="content_one_container">
        <div class="custom_container">

            <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :pagination="{
            clickable: true,
        }" :navigation="true" :loop="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="b_box"></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="b_box"></div>
                </swiper-slide>
                <swiper-slide>
                    <!-- <v-img :src="show_img" cover></v-img> -->
                     <div class="b_box"></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import showImg from '@assets/img/login.jpg';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    name: 'mainContent',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },

    data: () => ({
        title: 'Content One',
        show_img: require('@/assets/img/login.jpg'),
    }),
}

</script>