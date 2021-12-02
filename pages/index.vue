<template>
  <main class="relative flex flex-col items-center justify-center w-full h-screen bg-background">
    <img
      :src="pageData.acf.mobileBgUrl"
      alt=""
      class="absolute inset-0 z-0 object-cover w-full h-full lg:hidden"
    >
    <img
      :src="pageData.acf.desktopBgUrl"
      alt=""
      class="absolute inset-0 z-0 hidden object-cover w-full h-full lg:block"
    >
    <img
      data-not-lazy
      src="~/assets/img/logo@3x.png"
      alt=""
      class="relative z-10 w-3/5 mx-auto lg:w-52"
    >
    <div class="relative z-10 grid gap-4 mt-16">
      <a
        :href="pageData.acf.whatsappLink"
        target="_blank"
        rel="noopener"
        class="flex flex-col items-center justify-center px-10 py-2 tracking-widest text-white bg-whatsapp lg:px-12"
      >
        <Whatsapp class="h-10 mb-1 fill-current lg:h-12" />
        <span class="text-sm ">pedidos e informações</span>
      </a>
      <a
        :href="pageData.acf.instagramLink"
        target="_blank"
        rel="noopener"
        class="flex flex-col items-center justify-center px-10 py-2 tracking-widest text-white bg-instagram lg:px-12 lg:py-3"
      >
        <Instagram class="mb-1 fill-current h-9 lg:h-10" />
        <span class="text-sm "> veja nossos bolos</span>
      </a>
    </div>
  </main>
</template>

<script>
import Whatsapp from "~/assets/img/whatsapp.svg?inline";
import Instagram from "~/assets/img/instagram.svg?inline";
export default {
  components: {
    Whatsapp,
    Instagram,
  },
  async asyncData({ $axios }) {
    const url =
      "https://wp.crazyforcakes.com.br/wp-json/wp/v2/pages/12?_fields=title,acf,yoast_head,yoast_title,yoast_meta";
    const pageData = await $axios.$get(url);
    return { pageData };
  },
  head() {
    const metaArray = [];
    this.pageData.yoast_meta.map((ele) => {
      if (ele.property === "og:url") {
        metaArray.push({
          hid: ele.property,
          name: ele.property,
          content: `${this.$config.siteURL}${this.$route.fullPath}`,
        });
      } else {
        metaArray.push({
          hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      }
    });
    return {
      title: this.pageData.yoast_title,
      meta: metaArray,
    };
  },
  // data() {
  //   return {
  //     pageData:{
  //       acf: {
  //         whatsappLink: "https://api.whatsapp.com/send?phone=5511991448512",
  //         instagramLink: "https://www.instagram.com/crazyforcakes/",
  //         mobileBgUrl: "/mobile-background-min.jpeg",
  //         desktopBgUrl: "desktop-background-min.jpeg",
  //       }
  //     }
  //   };
  // },
};
</script>
