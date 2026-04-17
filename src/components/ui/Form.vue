<template>
  <form @submit.prevent="$emit('submit', formData)" class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-2">
      <label class="text-sm font-medium text-gray-700">Имя</label>
      <input 
        v-model="formData.firstName" 
        type="text" 
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        placeholder="Иван"
        required
      />
    </div>
    <div class="space-y-2">
      <label class="text-sm font-medium text-gray-700">Фамилия</label>
      <input 
        v-model="formData.lastName" 
        type="text" 
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        placeholder="Иванов"
        required
      />
    </div>
    <div class="space-y-2">
      <label class="text-sm font-medium text-gray-700">Email</label>
      <input 
        v-model="formData.email" 
        type="email" 
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        placeholder="email@example.com"
        required
      />
    </div>
    <div class="space-y-2">
      <label class="text-sm font-medium text-gray-700">Телефон</label>
      <input 
        v-model="formData.phone" 
        type="tel" 
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        placeholder="+7 (999) 000-00-00"
        required
      />
    </div>
    <div class="space-y-2 md:col-span-2">
      <label class="text-sm font-medium text-gray-700">Мессенджер</label>
      <select 
        v-model="formData.messenger" 
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
      >
        <option value="telegram">Telegram</option>
        <option value="whatsapp">WhatsApp</option>
      </select>
    </div>
    <div class="space-y-2 md:col-span-2">
      <label class="text-sm font-medium text-gray-700">Сообщение</label>
      <textarea 
        v-model="formData.message" 
        rows="4" 
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        placeholder="Опишите ваш вопрос..."
      ></textarea>
    </div>
    <div class="md:col-span-2">
      <Button variant="accent" size="lg" class="w-full md:w-auto">
        Оставить заявку
      </Button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import Button from './Button.vue';

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  messenger: 'telegram',
  message: ''
});

defineEmits(['submit']);
</script>
