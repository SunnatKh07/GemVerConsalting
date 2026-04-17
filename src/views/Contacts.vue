<template>
  <div>
    <SectionWrapper title="Связаться с нами" subtitle="Мы всегда готовы ответить на ваши вопросы и помочь с выбором программы.">
      <div class="grid lg:grid-cols-3 gap-16">
        <!-- Contact info -->
        <div class="space-y-12">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold">Наши контакты</h3>
            <div class="space-y-4">
              <div v-for="item in contacts" :key="item.label" class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                  <component :is="item.icon" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{{ item.label }}</p>
                  <p class="text-gray-900 font-medium">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-8 bg-gray-900 rounded-3xl text-white space-y-4">
            <h4 class="text-lg font-bold">Режим работы</h4>
            <p class="text-gray-400 text-sm">Пн – Пт: 10:00 – 19:00</p>
            <p class="text-gray-400 text-sm">Сб – Вс: Выходной</p>
          </div>
        </div>

        <!-- Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <Form @submit="handleSubmit" />
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Map Placeholder -->
    <div class="h-96 bg-gray-100 relative">
      <div class="absolute inset-0 flex items-center justify-center flex-col space-y-4 text-gray-400">
        <MapPin class="w-12 h-12 opacity-20" />
        <p class="font-bold">Интерактивная карта</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Phone, Mail, Send, MapPin } from 'lucide-vue-next';
import SectionWrapper from '@/components/ui/SectionWrapper.vue';
import Form from '@/components/ui/Form.vue';

const contacts = [
  { label: 'Телефон', value: '+998 (99) 123-45-67', icon: Phone },
  { label: 'Email', value: 'info@mapkey.io', icon: Mail },
  { label: 'Telegram / WhatsApp', value: '@mapkey_consult', icon: Send },
  { label: 'Адрес', value: 'г. Ташкент, ул. Навои, 14', icon: MapPin }
];

const handleSubmit = (data) => {
  console.log('Form submitted:', data);
  alert('Сизнинг аризангиз қабул қилинди! / Ваша заявка принята!');
};
</script>
