<template>
  <footer class="bg-[#F8FAFC] border-t border-[#E2E8F0] py-8">
    <div class="container-custom text-center space-y-4">
      <div class="flex items-center justify-center space-x-2">
        <span class="text-xl font-extrabold tracking-tighter text-[#1E40AF]">MAPKEY</span>
      </div>
      <p class="text-[10px] text-[#64748B] uppercase tracking-widest font-bold">
        © 2026 {{ i18n.t('footer.company') }}. Иммиграционный консалтинг.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Send, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-vue-next';
import { i18n } from '@/locales/i18n';

const menuItems = [
  { label: 'nav.about', path: '/about' },
  { label: 'nav.services', path: '/services' },
  { label: 'nav.countries', path: '/countries' },
  { label: 'nav.news', path: '/news' },
  { label: 'nav.contacts', path: '/contacts' }
];

const servicesShort = [
  'DS-160 / DS-260',
  'Green Card',
  'Визы / ВНЖ',
  'Обучение',
  'Бизнес и финансы'
];
</script>
