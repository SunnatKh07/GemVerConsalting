<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <span class="text-2xl font-extrabold tracking-tighter text-[#1E40AF]">MAPKEY</span>
        </router-link>

        <!-- Desktop Menu -->
        <nav class="hidden lg:flex items-center space-x-8">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            class="text-sm font-semibold text-[#0F172A] hover:text-[#1E40AF] transition-colors"
            active-class="text-[#1E40AF]"
          >
            {{ i18n.t(item.label) }}
          </router-link>
        </nav>

        <!-- Actions -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Search -->
          <div class="relative group">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input 
              type="text" 
              :placeholder="i18n.t('common.search')"
              class="pl-10 pr-4 py-1.5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-md text-xs outline-none w-32 focus:w-48 transition-all focus:bg-white focus:border-[#1E40AF]"
            />
          </div>

          <!-- Language Toggle -->
          <div class="flex items-center border border-[#E2E8F0] rounded-md p-0.5 bg-white">
            <button 
              v-for="lang in ['ru', 'uz']" 
              :key="lang"
              @click="lang !== i18n.lang ? i18n.toggleLang() : null"
              :class="[
                'text-[10px] font-bold px-2 py-1 rounded transition-colors uppercase',
                i18n.lang === lang ? 'bg-[#1E40AF] text-white' : 'text-[#64748B] hover:bg-[#F1F5F9]'
              ]"
            >
              {{ lang }}
            </button>
          </div>

          <Button variant="primary" size="sm" class="py-1.5 px-4 text-xs">
            {{ i18n.t('nav.program') }}
          </Button>
        </div>

        <!-- Mobile Toggle -->
        <div class="flex items-center space-x-4 lg:hidden">
          <button 
            @click="i18n.toggleLang()"
            class="p-2 rounded-full bg-[#F1F5F9] text-[10px] font-bold uppercase border border-[#E2E8F0]"
          >
            {{ i18n.lang }}
          </button>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 text-[#0F172A] hover:bg-[#F1F5F9] rounded-md transition-colors">
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile MenuOverlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 top-20 z-[60] bg-white lg:hidden overflow-y-auto border-t border-[#E2E8F0]">
        <div class="p-8 space-y-10">
          <nav class="flex flex-col space-y-8">
            <router-link 
              v-for="item in menuItems" 
              :key="item.path" 
              :to="item.path"
              @click="mobileMenuOpen = false"
              class="text-3xl font-bold text-[#0F172A] hover:text-[#1E40AF] transition-colors"
              active-class="text-[#1E40AF]"
            >
              {{ i18n.t(item.label) }}
            </router-link>
          </nav>

          <div class="pt-10 border-t border-[#E2E8F0] space-y-6">
            <Button variant="primary" size="lg" class="w-full py-4 text-lg">
              {{ i18n.t('nav.program') }}
            </Button>
            
            <div class="flex justify-center space-x-8 mt-10">
              <a href="#" class="text-[#64748B] hover:text-[#1E40AF] transition-colors"><Send class="w-6 h-6" /></a>
              <a href="#" class="text-[#64748B] hover:text-[#1E40AF] transition-colors"><Youtube class="w-6 h-6" /></a>
              <a href="#" class="text-[#64748B] hover:text-[#1E40AF] transition-colors"><Instagram class="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { Search, Send, Youtube, Instagram, Menu, X, Globe } from 'lucide-vue-next';
import { i18n } from '@/locales/i18n';
import Button from '@/components/ui/Button.vue';

const mobileMenuOpen = ref(false);

const menuItems = [
  { label: 'nav.about', path: '/about' },
  { label: 'nav.services', path: '/services' },
  { label: 'nav.countries', path: '/countries' },
  { label: 'nav.news', path: '/news' },
  { label: 'nav.contacts', path: '/contacts' }
];
</script>
