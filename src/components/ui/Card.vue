<template>
  <div 
    :class="[
      'group overflow-hidden rounded-xl transition-all duration-300 border',
      variant === 'elevated' ? 'bg-white border-[#E2E8F0] hover:border-[#1E40AF]' : 'bg-[#F8FAFC] border-transparent'
    ]"
  >
    <div v-if="$slots.image" class="aspect-[4/3] overflow-hidden bg-[#E2E8F0]">
      <slot name="image" />
    </div>
    <div class="p-5 md:p-6">
      <slot name="header" />
      <div class="mt-2 text-sm text-[#64748B] leading-relaxed">
        <slot />
      </div>
      <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-[#E2E8F0]">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'elevated' // elevated, flat
  }
});
</script>
