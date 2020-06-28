import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'russian',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('english').create({
      titleHome: 'Home',
      titleBiography: 'Biography',
      titleDouble: 'Double basses',
      titleCellos: 'Cellos',
      titleViolins: 'Violins',
      titleWorkshop: 'Workshop',
      titleСontacts: 'Сontacts',
      location: 'Russia, Saint Peterburg',
      nameHeader: 'Music Instrumental Maker',
      formName: 'Name',
      formText: 'Your message',
      formButton: 'Send',
      formError: 'Error. Please try again',
      formSuccess: 'Your message was sent successfully',
      name: 'Drozdov Gleb Petrovich',
      dateBirth: 'Date of birth: June 17, 1967',
      listOne: '- violin, cellos and double basses maker',
      listTwo: '- instrument restorer in orchestra',
      listTree: '- works at the Mariinsky Theatre',
      descriptionOne: 'He graduated from the Arkhangelsk Music School on the specialty «trumpet». He graduated from the Saint Petersburg Conservatory. N.A. Roman-Korsakov on the specialty «trumpet» (1986-1993). He studied trumpet playing at the Stuttgart Higher School of Music and Theatre (Germany).',
      descriptionTwo: 'He learned the basics of the construction of violin instruments in the workshop of W. Lakeberg (USA, Mr. Cincinnati, 1993-1995). From 1994 to 1995 in the same city he worked as a violin master in «Antonio violins» shop. The first violin was made in 1994.',
      descriptionThree: 'Since 1997, he has been working as a guest master at the Mariinsky Theater. Since 2004, he has been on the staff of permanent masters',
      descriptionFour: 'He worked as a master in the symphony orchestras Karlsruhe (Germany, 1999-2004) and Stavanger (Norway, 2009-2014), and collaborated with bassist Wolfgang Guttler. In 2009-2012, he taught a course on the restoration and production of musical instruments at the Damascus Institute of Cinematography and Music.',
      descriptionFive: 'A total of 21 violins, 11 violas, 7 cellos and 6 double basses were created by the master. He designed his own solo double bass model and works on creating a complete line of large instruments.',
      descriptionSix: 'His instruments are played by musicians from the USA, Germany, Syria, Turkey, Azerbaijan, Russia (Moscow Philharmonic, Mariinsky Theater, Yakut Philharmonic, Novosibirsk, Saratov, Ryazan and other cities). The bass made by Gleb Drozdov for the Saint Petersburg Conservatory is used for competitive programs.'
    }),

    new MLanguage('russian').create({
      titleHome: 'Главная',
      titleBiography: 'Биография',
      titleDouble: 'Контрабасы',
      titleCellos: 'Виолончели',
      titleViolins: 'Скрипки',
      titleWorkshop: 'Мастерская',
      titleСontacts: 'Контакты',
      location: 'Россия, Санкт-Петербург',
      nameHeader: 'Мастер Музыкальных Инструментов',
      formName: 'Имя',
      formText: 'Ваше сообщение',
      formButton: 'Отправить',
      formError: 'Ошибка оправки. Попробуйте еще раз',
      formSuccess: 'Ваше сообщение успешно отправлено',
      name: 'Дроздов Глеб Петрович',
      dateBirth: 'Дата рождения: 17 июня 1967 г.',
      listOne: '- скрипичный мастер',
      listTwo: '- реставратор оркестрa',
      listTree: '- работает в Мариинском театре',
      descriptionOne: 'Окончил Архангельское музыкальное училище по специальности «труба». Выпускник Санкт-Петербургской Консерватории им. Н.А. Римского-Корсакова по специальности «труба» (1986-1993 гг.). Обучался игре на трубе в Штутгартской высшей школе музыки и театра (Германия).',
      descriptionTwo: 'Основы построения скрипичных инструментов постигал в мастерской У. Лэйкберга (США, г. Цинциннати, 1993-1995 гг.). С 1994 г. по 1995 г. в том же городе работал скрипичным мастером в магазине «Antonio violins».  Первую скрипку изготовил в 1994 г.',
      descriptionThree: 'С 1997 г. работал в качестве приглашенного мастера в Мариинском театре, с 2004 г. вошёл в штат постоянных мастеров.',
      descriptionFour: 'Работал мастером в симфонических оркестрах Карлсруэ (Германия, 1999-2004 гг.) и Ставангера (Норвегия, 2009-2014 гг.), сотрудничал с контрабасистом Вольфгангом Гюттлером. В 2009 - 2012 гг. преподавал курс реставрации и изготовления музыкальных инструментов в Институте кинематографии и музыки Дамаска.',
      descriptionFive: 'Всего мастером созданы 21 скрипка, 11 альтов, 7 виолончелей и 6 контрабасов. Спроектировал собственную модель сольного контрабаса и работает над созданием полной линейки больших инструментов.',
      descriptionSix: 'На его инструментах играют музыканты из США, Германии, Сирии, Турции, Азербайджана, России (Московской филармонии, Мариинского театра, Якутской филармонии, Новосибирска, Саратова, Рязани и других городов). Контрабас, изготовленный Глебом Дроздовым для Санкт-Петербургской Консерватории, используется для игры на конкурсных программах.'
    })
  ]
})
