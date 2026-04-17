<template>
  <div>
    <!-- Header -->
    <div class="bg-blue-600 text-white py-20">
      <div class="container-custom">
        <h1 class="text-4xl md:text-6xl font-black mb-8 tracking-tight">Визы</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
          Мы помогаем в подготовке всех документов для получения различных типов виз: от туристических и студенческих до долгосрочных ВНЖ и иммиграционных разрешений.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <SectionWrapper>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div v-for="cat in categories" :key="cat.title" class="space-y-6 p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
          <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600">
            <component :is="cat.icon" class="w-8 h-8" />
          </div>
          <h2 class="text-3xl font-bold text-gray-900">{{ cat.title }}</h2>
          <p class="text-gray-500">{{ cat.desc }}</p>
          <ul class="space-y-3">
            <li v-for="item in cat.items" :key="item" class="flex items-center space-x-3 text-sm text-gray-700">
              <Check class="w-4 h-4 text-green-500" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>

    <!-- Help List -->
    <SectionWrapper title="Как мы помогаем" bgColor="bg-gray-50">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div v-for="(h, i) in helpItems" :key="i" class="text-center space-y-4 group">
          <div class="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-xl font-bold text-blue-600 border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {{ i + 1 }}
          </div>
          <p class="font-bold text-gray-900">{{ h }}</p>
        </div>
      </div>
    </SectionWrapper>

    <!-- Important Notice -->
    <SectionWrapper>
      <div class="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex items-start space-x-6">
        <AlertTriangle class="w-8 h-8 text-amber-500 shrink-0 mt-1" />
        <div>
          <h3 class="text-xl font-bold text-amber-900 mb-2">Важная информация</h3>
          <p class="text-amber-800 leading-relaxed">
            Обращаем ваше внимание, что мы не оформляем визы «за вас». Окончательное решение о выдаче визы всегда принимает посольство или консульство соответствующей страны. Наша работа — максимизировать ваши шансы за счет идеальной подготовки кейса и минимизации технических ошибок.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <!-- CTA -->
    <SectionWrapper>
      <div class="text-center space-y-8">
        <h2 class="text-3xl font-bold">Оставьте заявку на разбор вашей ситуации</h2>
        <Button variant="accent" size="lg" class="px-12">Оставить заявку</Button>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup>
import { Check, Briefcase, GraduationCap, Map, Building2, AlertTriangle } from 'lucide-vue-next';
import SectionWrapper from '@/components/ui/SectionWrapper.vue';
import Button from '@/components/ui/Button.vue';

const categories = [
  { 
    title: 'Бизнес и инвестиции', 
    icon: Building2,
    desc: 'Визы для предпринимателей, инвесторов и открытия филиалов компаний за рубежом.',
    items: ['L-1 / E-2 для США', 'Инноваторская виза UK', 'Business Nomad']
  },
  { 
    title: 'Работа', 
    icon: Briefcase,
    desc: 'Рабочие визы по приглашению от работодателя или для высококвалифицированных специалистов.',
    items: ['H-1B / O-1 для США', 'Blue Card EU', 'Skilled Worker UK']
  },
  { 
    title: 'Образование', 
    icon: GraduationCap,
    desc: 'Студенческие визы и полное сопровождение при поступлении в зарубежные учебные заведения.',
    items: ['F-1 для США', 'Tier 4 UK', 'Student visa EU']
  },
  { 
    title: 'Туризм и визиты', 
    icon: Map,
    desc: 'Туристические визы, гостевые визиты для посещения родственников и медицинское обслуживание.',
    items: ['B1/B2 для США', 'Schengen visas', 'Standard Visitor UK']
  }
];

const helpItems = [
  'анализ ситуации',
  'подбор визы',
  'подготовка документов',
  'запись в посольство',
  'сопровождение'
];
</script>
