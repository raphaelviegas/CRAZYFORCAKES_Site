<template>
  <main class="w-full h-screen flex items-center justify-center flex-col bg-background relative">
    <img :src="mobileBgUrl" alt="" class="absolute inset-0 object-cover lg:hidden z-0">
    <img :src="desktopBgUrl" alt="" class="absolute inset-0 object-cover hidden lg:block z-0">
    <img data-not-lazy src="~/assets/img/logo.png" alt="" class="w-3/5 mx-auto lg:w-52 relative z-10">
    <div class="grid gap-4 mt-16 relative z-10">
      <a :href="whatsappLink" target="_blank" rel="noopener" class="bg-whatsapp flex items-center justify-center flex-col px-10 lg:px-12 py-2 text-white tracking-widest">
        <Whatsapp class="fill-current h-10 lg:h-12  mb-1"/>
        <span class="text-sm ">pedidos e informações</span>
      </a>
      <a :href="instagramLink" target="_blank" rel="noopener" class="bg-instagram flex items-center justify-center flex-col px-10 lg:px-12 py-2 lg:py-3 text-white tracking-widest">
       <Instagram class="fill-current h-9 lg:h-10  mb-1"/>
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
    Instagram
  },
  data() {
    return {
      whatsappLink: 'https://api.whatsapp.com/send?phone=5511991448512',
      instagramLink:  'https://www.instagram.com/crazyforcakes/',
      mobileBgUrl: '/mobile-background.jpg',
      desktopBgUrl: 'desktop-background.jpg'
    }
  },
}
</script>
