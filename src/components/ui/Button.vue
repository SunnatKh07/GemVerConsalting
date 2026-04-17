<template>
  <button
    :class="[
      'inline-flex items-center justify-center transition-all duration-200 font-semibold rounded-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
      variantClasses[variant],
      sizeClasses[size]
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary' // primary(accent), secondary, outline, accent
  },
  size: {
    type: String,
    default: 'md' // sm, md, lg
  }
});

const variantClasses = {
  primary: 'bg-[#22C55E] text-white hover:opacity-90',
  secondary: 'bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0]',
  outline: 'bg-transparent border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white',
  accent: 'bg-[#22C55E] text-white hover:opacity-90'
};


const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};
</script>
