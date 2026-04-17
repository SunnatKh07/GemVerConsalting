<template>
  <div>
    <!-- Hero -->
    <SectionWrapper bgColor="bg-white overflow-hidden pt-8 md:pt-12">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-[#1E40AF]">
            {{ i18n.t('hero.title') }}
          </h1>
          <p class="text-base text-[#64748B] max-w-lg leading-relaxed">
            {{ i18n.t('hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <Button variant="primary" size="md" class="px-8">
              {{ i18n.t('hero.consultation') }}
            </Button>
            <Button variant="outline" size="md">
              {{ i18n.t('nav.about') }}
            </Button>
          </div>
          <!-- Stats -->
          <div class="pt-8 flex items-center gap-8 border-t border-gray-100">
            <div>
              <p class="text-2xl font-bold">500+</p>
              <p class="text-sm text-gray-500">Клиентов</p>
            </div>
            <div class="w-px h-10 bg-gray-200"></div>
            <div>
              <p class="text-2xl font-bold">98%</p>
              <p class="text-sm text-gray-500">Одобрений</p>
            </div>
            <div class="w-px h-10 bg-gray-200"></div>
            <div>
              <p class="text-2xl font-bold">5+</p>
              <p class="text-sm text-gray-500">Лет опыта</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img 
              src="https://picsum.photos/seed/travel/1200/1500" 
              alt="Hero image" 
              class="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <!-- Decorative elements -->
          <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[200px]">
            <p class="text-sm font-bold text-blue-600 mb-1">USA Visa</p>
            <p class="text-xs text-gray-500 italic">"Everything was fast and easy. Highly recommended!"</p>
          </div>
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Services -->
    <SectionWrapper :title="i18n.t('services.title')" subtitle="Мы предоставляем полный спектр услуг по иммиграции и международному консалтингу.">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card v-for="(s, index) in services" :key="index" :variant="index % 2 === 0 ? 'elevated' : 'flat'">
          <template #header>
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <component :is="s.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {{ s.title }}
            </h3>
          </template>
          <p class="text-sm text-gray-500 mb-4 line-clamp-2">
            Краткое описание услуги и то, как мы помогаем вам достичь желаемого результата.
          </p>
          <template #footer>
            <router-link to="/services" class="text-sm font-bold flex items-center text-gray-900 group-hover:text-blue-600 transition-colors">
              Подробнее <ArrowRight class="w-4 h-4 ml-2" />
            </router-link>
          </template>
        </Card>
      </div>
    </SectionWrapper>

    <!-- How we work -->
    <SectionWrapper :title="i18n.t('howItWorks.title')" bgColor="bg-gray-900 text-white" subtitle="Прозрачный и понятный процесс от первой консультации до переезда.">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        <!-- Connecting lines -->
        <div class="hidden lg:block absolute top-12 left-0 w-full h-px bg-white/10 -z-0"></div>
        
        <div v-for="(step, i) in i18n.t('howItWorks.steps')" :key="i" class="relative z-10 space-y-4">
          <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white mb-6 border-4 border-gray-900 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
            {{ i + 1 }}
          </div>
          <h3 class="text-xl font-bold">{{ step.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ step.desc }}</p>
        </div>
      </div>
    </SectionWrapper>

    <!-- Advantages -->
    <SectionWrapper>
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <img 
            src="https://picsum.photos/seed/workspace/1000/1000" 
            alt="Advantages" 
            class="rounded-3xl shadow-lg ring-8 ring-gray-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div class="space-y-10">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {{ i18n.t('advantages.title') }}
            </h2>
            <div class="grid gap-6">
              <div v-for="(adv, i) in i18n.t('advantages.items')" :key="i" class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Check class="w-3.5 h-3.5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">{{ adv }}</h4>
                  <p class="text-sm text-gray-500 mt-1">
                    Мы гарантируем высокое качество услуг и поддержку на каждом этапе.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Who it's for -->
    <SectionWrapper :title="i18n.t('whoItIsFor.title')" bgColor="bg-gray-50">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div 
          v-for="(item, i) in whoItIsFor" 
          :key="i" 
          class="aspect-square bg-white rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-default group border border-gray-100"
        >
          <component :is="item.icon" class="w-10 h-10 text-gray-400 group-hover:text-blue-600 transition-colors" />
          <h3 class="text-lg font-bold text-gray-900">{{ item.label }}</h3>
        </div>
      </div>
    </SectionWrapper>

    <!-- Countries -->
    <SectionWrapper :title="i18n.t('countries.title')">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(cn, i) in countryCards" :key="i" class="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
          <img 
            :src="cn.img" 
            :alt="cn.name" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-10 left-10 text-white">
            <h3 class="text-3xl font-bold mb-2">{{ cn.name }}</h3>
            <p class="text-gray-300 text-sm max-w-xs">{{ cn.desc }}</p>
            <div class="mt-4 flex items-center text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              Выбрать программу <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- CTA -->
    <SectionWrapper bgColor="bg-blue-600 text-white text-center">
      <div class="max-w-2xl mx-auto space-y-8">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">
          {{ i18n.t('cta.consult') }}
        </h2>
        <p class="text-lg text-blue-100">
          Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для подробной консультации.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="lg" class="px-12">
            {{ i18n.t('cta.apply') }}
          </Button>
          <Button variant="outline" size="lg" class="border-white/20 text-white hover:bg-white/10">
            Связаться в Telegram
          </Button>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup>
import { ArrowRight, FileText, Award, Calendar, Globe, GraduationCap, Briefcase, FileSearch, Check, Plane, Building2, Map, Users } from 'lucide-vue-next';
import { i18n } from '@/locales/i18n';
import SectionWrapper from '@/components/ui/SectionWrapper.vue';
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';

const services = [
  { title: i18n.t('services.ds160'), icon: FileText },
  { title: i18n.t('services.greenCard'), icon: Award },
  { title: i18n.t('services.embassy'), icon: Calendar },
  { title: i18n.t('services.visas'), icon: Globe },
  { title: i18n.t('services.education'), icon: GraduationCap },
  { title: i18n.t('services.business'), icon: Briefcase },
  { title: i18n.t('services.docs'), icon: FileSearch },
  { title: 'Консультации', icon: Users }
];

const whoItIsFor = [
  { label: 'Переезд', icon: Plane },
  { label: 'Обучение', icon: GraduationCap },
  { label: 'Бизнес', icon: Building2 },
  { label: 'Путешествия', icon: Map }
];

const countryCards = [
  { 
    name: 'США', 
    desc: 'Огромные возможности для карьеры и жизни.', 
    img: 'https://picsum.photos/seed/usa/1000/800' 
  },
  { 
    name: 'Канада', 
    desc: 'Лояльная иммиграционная политика и высокий уровень жизни.', 
    img: 'https://picsum.photos/seed/canada/1000/800' 
  },
  { 
    name: 'Великобритания', 
    desc: 'Традиции, образование и финансовый центр мира.', 
    img: 'https://picsum.photos/seed/london/1000/800' 
  },
  { 
    name: 'Европа', 
    desc: 'Удобство перемещения и культурное разнообразие.', 
    img: 'https://picsum.photos/seed/europe/1000/800' 
  }
];
</script>
