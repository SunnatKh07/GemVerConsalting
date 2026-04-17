import { reactive, watch } from 'vue';

const translations = {
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      countries: 'Страны',
      news: 'Новости',
      contacts: 'Контакты',
      program: 'Подобрать программу'
    },
    hero: {
      title: 'Помогаем получить визу и переехать за границу',
      description: 'Полное сопровождение на каждом этапе — от выбора страны до полной адаптации после переезда.',
      consultation: 'Получить консультацию'
    },
    services: {
      title: 'Наши услуги',
      ds160: 'DS-160 / DS-260',
      greenCard: 'Green Card',
      embassy: 'Запись в посольство',
      visas: 'Визы / ВНЖ',
      education: 'Обучение',
      business: 'Бизнес и финансы',
      docs: 'Документы'
    },
    howItWorks: {
      title: 'Как мы работаем',
      steps: [
        { title: 'Анализ ситуации', desc: 'Изучаем вашу историю и цели' },
        { title: 'Подбор решения', desc: 'Выбираем лучший путь для вас' },
        { title: 'Подготовка документов', desc: 'Собираем и проверяем все бумаги' },
        { title: 'Сопровождение', desc: 'Помогаем до самого результата' }
      ]
    },
    advantages: {
      title: 'Наши преимущества',
      items: [
        'Проверенные партнеры',
        'Экономия расходов',
        'Сопровождение',
        'Индивидуальный подход'
      ]
    },
    whoItIsFor: {
      title: 'Кому это подходит',
      items: ['Переезд', 'Обучение', 'Бизнес', 'Путешествия']
    },
    countries: {
      title: 'Популярные страны',
      list: ['США', 'Канада', 'Великобритания', 'Европа']
    },
    cta: {
      consult: 'Получите консультацию',
      apply: 'Оставить заявку'
    },
    footer: {
      company: 'Map & Key Consulting',
      info: 'Иммиграционный консалтинг'
    },
    common: {
      search: 'Поиск...',
      aboutTitle: 'О компании',
      main: 'Главная',
      send: 'Отправить'
    }
  },
  uz: {
    nav: {
      about: 'Biz haqimizda',
      services: 'Xizmatlar',
      countries: 'Davlatlar',
      news: 'Yangiliklar',
      contacts: 'Kontaktlar',
      program: 'Dastur tanlash'
    },
    hero: {
      title: 'Viza olish va chet elga ko\'chib o\'tishda yordam beramiz',
      description: 'Har bir bosqichda to\'liq hamrohlik - mamlakat tanlashdan to ko\'chib o\'tgandan keyingi moslashuvgacha.',
      consultation: 'Maslahat olish'
    },
    services: {
      title: 'Bizning xizmatlar',
      ds160: 'DS-160 / DS-260',
      greenCard: 'Green Card',
      embassy: 'Elchixonaga yozilish',
      visas: 'Vizalar / YASHASH GUVOHNOMASI',
      education: 'O\'qish',
      business: 'Biznes va moliya',
      docs: 'Hujjatlar'
    },
    howItWorks: {
      title: 'Biz qanday ishlaymiz',
      steps: [
        { title: 'Vaziyat tahlili', desc: 'Sizning tarixingiz va maqsadlaringizni o\'rganamiz' },
        { title: 'Yechim tanlash', desc: 'Siz uchun eng yaxshi yo\'lni tanlaymiz' },
        { title: 'Hujjatlarni tayyorlash', desc: 'Barcha hujjatlarni yig\'amiz va tekshiramiz' },
        { title: 'Hamrohlik', desc: 'Natijagacha yordam beramiz' }
      ]
    },
    advantages: {
      title: 'Bizning afzalliklarimiz',
      items: [
        'Tekshirilgan hamkorlar',
        'Xarajatlarni tejash',
        'Hamrohlik',
        'Individual yondashuv'
      ]
    },
    whoItIsFor: {
      title: 'Kimga mos keladi',
      items: ['Ko\'chib o\'tish', 'O\'qish', 'Biznes', 'Sayohat']
    },
    countries: {
      title: 'Ommabop davlatlar',
      list: ['AQSH', 'Kanada', 'Buyuk Britaniya', 'Yevropa']
    },
    cta: {
      consult: 'Maslahat oling',
      apply: 'Ariza qoldirish'
    },
    footer: {
      company: 'Map & Key Consulting',
      info: 'Immigratsiya konsaltingi'
    },
    common: {
      search: 'Qidiruv...',
      aboutTitle: 'Kompaniya haqida',
      main: 'Bosh sahifa',
      send: 'Yuborish'
    }
  }
};

const savedLang = localStorage.getItem('lang') || 'ru';

export const i18n = reactive({
  lang: savedLang,
  t: (keyPath) => {
    const keys = keyPath.split('.');
    let result = translations[i18n.lang];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return key;
      }
    }
    return result;
  },
  toggleLang: () => {
    i18n.lang = i18n.lang === 'ru' ? 'uz' : 'ru';
    localStorage.setItem('lang', i18n.lang);
  }
});
