<template>
  <section :class="['py-12 md:py-20 lg:py-24', bgColor]">
    <div class="container-custom">
      <div v-if="title || subtitle" class="mb-10 md:mb-12 max-w-2xl">
        <div v-if="title" class="text-xs uppercase tracking-widest font-bold text-[#1E40AF] mb-4">
          {{ title }}
        </div>
        <p v-if="subtitle" class="text-xl md:text-2xl font-bold text-[#0F172A] leading-[1.1] tracking-tight">
          {{ subtitle }}
        </p>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  bgColor: {
    type: String,
    default: 'bg-white'
  }
});
</script>
