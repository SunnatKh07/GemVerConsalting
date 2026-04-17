<template>
  <div>
    <!-- Breadcrumbs & Title -->
    <div class="bg-gray-50 border-b border-gray-100 py-12">
      <div class="container-custom">
        <nav class="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
          <router-link to="/" class="hover:text-blue-600 transition-colors">{{ i18n.t('common.main') }}</router-link>
          <span>/</span>
          <span class="text-gray-900">{{ i18n.t('common.aboutTitle') }}</span>
        </nav>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
          {{ i18n.t('common.aboutTitle') }}
        </h1>
      </div>
    </div>

    <!-- Intro Content -->
    <SectionWrapper>
      <div class="grid lg:grid-cols-2 gap-16">
        <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
          <h2 class="text-2xl font-bold text-gray-900">Иммиграционный консалтинг «Map & Key Consulting»</h2>
          <p>
            Мы — команда специалистов по визам, обучению и переезду за границу. Помогаем клиентам пройти весь путь: от выбора страны до адаптации после переезда.
          </p>
          <p>
            Работаем с 2018 года и за это время выстроили систему, которая позволяет минимизировать ошибки и ускорить процесс оформления документов.
          </p>
          <p class="font-bold text-gray-900">
            Мы не просто консультируем — мы сопровождаем и берем на себя ключевые этапы:
          </p>
          <ul class="space-y-4">
            <li v-for="item in steps" :key="item" class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/office1/600/800" alt="Office" class="rounded-2xl" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/office2/600/800" alt="Consultation" class="rounded-2xl mt-8" referrerPolicy="no-referrer" />
        </div>
      </div>
    </SectionWrapper>

    <!-- Services Section -->
    <SectionWrapper title="С чем мы помогаем" bgColor="bg-gray-50">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="s in itemsHelp" :key="s" class="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <h4 class="text-xl font-bold mb-4">{{ s }}</h4>
          <p class="text-sm text-gray-500">
            Полный цикл сопровождения по данному направлению с гарантией качества и сроков.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <!-- Task Section -->
    <SectionWrapper bgColor="bg-blue-600 text-white">
      <div class="max-w-4xl mx-auto text-center space-y-10">
        <h2 class="text-3xl md:text-5xl font-black italic tracking-tight">Наша задача</h2>
        <p class="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
          Сделать процесс визовых и иммиграционных процедур максимально прозрачным и простым для наших клиентов, обеспечивая при этом наивысший стандарт профессионализма.
        </p>
      </div>
    </SectionWrapper>

    <!-- CTA -->
    <SectionWrapper>
      <div class="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center space-y-8 overflow-hidden relative">
        <div class="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Готовы начать свой путь?</h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Свяжитесь с нами сегодня, чтобы оценить свои шансы и получить персональный план переезда.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="lg">Получить консультацию</Button>
          <Button variant="outline" size="lg" class="border-white/20 text-white hover:bg-white/10">Оставить заявку</Button>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup>
import { i18n } from '@/locales/i18n';
import SectionWrapper from '@/components/ui/SectionWrapper.vue';
import Button from '@/components/ui/Button.vue';

const steps = [
  'подбор направления',
  'подготовка документов',
  'подача',
  'помощь после переезда'
];

const itemsHelp = [
  'Визы и ВНЖ',
  'Обучение',
  'Трудоустройство',
  'Подбор жилья',
  'Бизнес-иммиграция',
  'Адаптация'
];
</script>
