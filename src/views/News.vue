<template>
  <div>
    <SectionWrapper title="Новости компании" subtitle="Актуальные изменения в визовом законодательстве и новости из мира иммиграции.">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="space-y-4">
          <div class="aspect-video bg-gray-100 rounded-2xl"></div>
          <div class="h-4 bg-gray-100 rounded w-2/3"></div>
          <div class="h-4 bg-gray-100 rounded w-full"></div>
        </div>
      </div>
      <div class="mt-20 text-center text-gray-400 space-y-4">
        <Newspaper class="w-16 h-16 mx-auto opacity-20" />
        <p class="text-xl">Свежие новости появятся здесь в ближайшее время</p>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup>
import { Newspaper } from 'lucide-vue-next';
import SectionWrapper from '@/components/ui/SectionWrapper.vue';
</script>
