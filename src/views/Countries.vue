<template>
  <div>
    <SectionWrapper title="Страны" subtitle="Выберите страну, которая вас интересует, чтобы увидеть доступные программы переезда.">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="animate-pulse bg-gray-100 h-64 rounded-3xl"></div>
      </div>
      <div class="mt-20 text-center text-gray-400 space-y-4">
        <Globe class="w-16 h-16 mx-auto opacity-20" />
        <p class="text-xl">Этот раздел находится в разработке</p>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup>
import { Globe } from 'lucide-vue-next';
import SectionWrapper from '@/components/ui/SectionWrapper.vue';
</script>
