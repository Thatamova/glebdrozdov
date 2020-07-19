<template>
  <div v-if="!isPolicyAccept">
    <div :class="classes">
      <Message severity="warn" :closable="false" :class="$style.message">
        <div :class="$style.wpapper">
          <template v-if="$ml.current === 'english'">
            <div :class="$style.text">By continuing to use this website you agree that we can place cookies and other similar technology. <div :class="$style.linkMore" @click="showPolicy">Learn more</div></div>
            <Button label="Accept" @click="acceptPolicy" />
          </template>

          <template v-if="$ml.current === 'russian'">
            <div :class="$style.text">Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем cookies. <div :class="$style.linkMore" @click="showPolicy">Подробнее</div></div>
            <Button label="Да" @click="acceptPolicy" />
          </template>
        </div>
      </Message>
    </div>

    <Dialog
      :header="$ml.current === 'english' ? 'Privacy Policy' : 'Политика Конфиденциальности'"
      :visible.sync="isPolicyDialog"
      :modal="true"
      :class="classesDialog"
    >
      <div v-if="$ml.current === 'english'">
        <div>
          <p>
            <strong>Privacy Policy</strong>
          </p>
          <p>
            glebdrozdov.com website administration is obliged to maintain your privacy on the Internet. We pay great attention to securing the data you provided to us. Our privacy policy is based on
            <a
              href="https://ec.europa.eu/info/law/law-topic/data-protection_en" :class="$style.link"
            >the General Data Protection Regulation (GDPR) of the European Union.</a>The purposes, for which we collect your personal data are: improvement of our service, communication with visitors to this site, providing services associated with the website’s specialization, , and for other actions listed below.
          </p>
          <p>
            <strong>Personal data storage and processing</strong>
          </p>
          <p>We collect and process your personal data only with your willing consent. With your permission, we can collect and process the following data: name and surname, e-mail address, . Collection and processing of your personal information is carried out in accordance with the laws of the European Union and the Russia.</p>
          <p>
            <strong>Data storage, alteration, and removal</strong>
          </p>
          <p>The user, who has provided glebdrozdov.com with their personal data, has the right for their alteration and removal, as well as the right to recall the agreement to data processing. Time, during which your personal data will be stored is: time the personal data is used that is necessary for the website’s main activity. After finishing with the processing of your personal data, the website’s administration will permanently delete it. To access your personal data, you can contact the administration on: db.glebdrozdov@gmail.com. We will be able to pass your data to a third party only with your willing consent. If the data was transferred to a third party, which is not associated with our organization, we cannot perform any changes to that data.</p>
          <p>
            <strong>Processing of visiting technical data</strong>
          </p>
          <p>Records of your IP address, time of visit, browser settings, operational system and other technical information is saved in the database when you visit glebdrozdov.com. This data is necessary for the correct display of the website’s content. It is impossible to identify the person of the visitor using this data.</p>
          <p>
            <strong>Children’s personal information</strong>
          </p>
          <p>If you are a parent or a legal guardian of an underage child, and you know that the child has provided us with their personal information without your consent, please contact us on: db.glebdrozdov@gmail.com. It is forbidden to enter personal data of underage users without the agreement of parents or lawful guardians.</p>
          <p>
            <strong>Cookies processing</strong>
          </p>
          <p>
            We use cookie files for the correct display of the website’s content and for the convenience of browsing glebdrozdov.com. They are small files, that are stored on your device. They help the website to remember information about you, such as in which language you use the website and which pages have you already opened. This information will be useful in the next visit. Thanks to cookie files, the website’s browsing becomes much more convenient. You can learn more about these files
            <a href="https://en.wikipedia.org/wiki/HTTP_cookie" :class="$style.link">here</a>. You can set up cookies reception and blocking in your browser yourself. Inability to receive cookie files may limit the functionality of the website.
          </p>
          <p>
            <strong>Processing of personal data by other services</strong>
          </p>
          <p>This website uses third-party online services, which perform data collecting, independent from us. Such services include: Google Analytics, Yandex.Metrica.</p>
          <p>
            Data collected by these services may be provided to other services within those organizations. They can use the data for advertising personalization of their own advertising network. You can learn about user agreements of those organizations on their websites. You can also refuse their collection of your personal data. For example, Google Analytics Opt-out Browser Add-on can be found
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en" :class="$style.link">here</a>. Yandex.Metrica Opt-out Browser Add-on can be found <a href="https://yandex.ru/support/metrika/general/opt-out.html">here</a>. We do not pass any personal data to other organizations or services, which are not listed in this privacy policy. As an exception, the collected data may be provided on a lawful request of state authorities, that are authorized to request such information.
          </p>
          <p>
            <strong>Links to other websites</strong>
          </p>
          <p>Our website glebdrozdov.com may contain links to other websites, which are not under our control. We are not responsible for the content of these websites. We recommend you familiarize yourself with the privacy policy of every website that you visit, if such policy exists.</p>
          <p>
            <strong>Changes to the privacy policy</strong>
          </p>
          <p>From time to time, our website glebdrozdov.com may update our privacy policy. We inform about any changes to the privacy policy, placed on this webpage. We are monitoring any changes in legislation, which is related to personal data in European Union and Russia. If you have entered any of your personal data on our website, we will inform you about the changes in our privacy policy. If your personal data, and more specifically, your contact information was entered incorrectly, we will not be able to contact you.</p>
          <p>
            <strong>Feedback and final clauses</strong>
          </p>
          <p>You can contact the administration of glebdrozdov.com regarding any questions related to privacy policy on: db.glebdrozdov@gmail.com, or by filling a contact form specified in a corresponding section of this website. If you do not agree with this privacy policy, you cannot use the services of glebdrozdov.com. In this case you should avoid visiting our website.</p>
        </div>
      </div>

      <div v-if="$ml.current === 'russian'">
        <p>
          <strong>Политика Конфиденциальности сайта glebdrozdov.com</strong>
        </p>
        <p>
          Администрация сайта glebdrozdov.com обязуется сохранять вашу конфиденциальность в Интернете. Мы уделяем большое значение охране предоставленных вами данных. Наша политика конфиденциальности основана на требованиях
          <a
            href="https://ec.europa.eu/info/law/law-topic/data-protection_en" :class="$style.link"
          >Общего регламента о защите персональных данных Европейского Союза (GDPR).</a>Цели, в которых мы собираем персональные данные: улучшение работы нашего сервиса, осуществление контактов с посетителями данного сайта, осуществление услуг, связанных с направлением деятельности данного сайта, , а так же для указанных ниже действий.
        </p>
        <p>
          <strong>Сбор и использование персональных данных</strong>
        </p>
        <p>Мы собираем и используем ваши персональные данные только в случае вашего добровольного согласия. При согласии с этим вы разрешаете нам собирать и использовать следующие данные: имя и фамилия, электронная почта, . Сбор и обработка ваших данных проводится соответствии с законами, действующими на территории Европейского Союза и в государстве Россия.</p>
        <p>
          <strong>Хранение данных, изменение и удаление</strong>
        </p>
        <p>Пользователь, предоставивший свои персональные данные сайту glebdrozdov.com имеет право на их изменение и удаление, а так же на отзыв своего согласия с их использованием. Срок, в течение которого будут храниться ваши персональные данные: время, необходимое для использования данных для основной деятельности сайта. При завершении использования ваших данных администрация сайта удаляет их. Для доступа к своим персональным данным вы можете связаться с администрацией сайта по следующему адресу: db.glebdrozdov@gmail.com. Мы можем передавать ваши личные данные третьей стороне только с вашего добровольного согласия, если они были переданы, то изменение данных в других организациях, не связанных с нами, мы осуществить не можем.</p>
        <p>
          <strong>Использование технических данных при посещении сайта</strong>
        </p>
        <p>При посещении вами сайта glebdrozdov.com в базе данных сохраняются записи о вашем IP адресе, времени посещения, настройках браузера, операционной системе, а также другая техническая информация необходимая для корректного отображения содержимого сайта. По этим данным нам невозможно идентифицировать личность посетителя.</p>
        <p>
          <strong>Предоставление информации детьми</strong>
        </p>
        <p>Если Вы являетесь родителем или опекуном, и вы знаете, что ваши дети предоставили нам свои личные данные без Вашего согласия, свяжитесь с нами: db.glebdrozdov@gmail.com. На нашем сервисе запрещено оставлять личные данные несовершеннолетних без согласия родителей или опекунов.</p>
        <p>
          <strong>Использование cookies</strong>
        </p>
        <p>
          Для корректного отображения содержимого и для удобства использования сайта glebdrozdov.com мы используем cookie файлы. Это небольшие файлы, которые хранятся на вашем устройстве. Они помогают сайту запомнить информацию о вас, например на каком языке вы просматриваете сайт и какие страницы вы уже открывали, эта информация будет полезна при следующем посещении. Благодаря файлам cookie просмотр сайта становится значительно более удобным. Подробнее про эти файлы вы можете
          <a href="https://ru.wikipedia.org/wiki/Cookie" :class="$style.link">прочитать тут</a>. Вы можете настроить прием или блокировку cookie в браузере самостоятельно. Невозможность принимать cookie может ограничить работоспособность сайта.
        </p>
        <p>
          <strong>Использование персональных данных другими сервисами</strong>
        </p>
        <p>
          На этом сайте используются сторонние интернет-сервисы, осуществляющие независимый от нас сбор информации: Google Analytics , Yandex.Metrica. Собранные ими данные могут предоставляться другим службам внутри этих организаций, они могут использовать данные для персонализации рекламы своей собственной рекламной сети.&nbsp; Вы можете прочитать пользовательские соглашения этих организаций на их сайтах. Там же вы можете отказаться от сбора ими персональных данных, к примеру блокировщик
          <a href="https://tools.google.com/dlpage/gaoptout?hl=ru" :class="$style.link">Google Analytics находится тут</a>,
          <a href="https://yandex.ru/support/metrika/general/opt-out.html" :class="$style.link">блокировщик Яндекс Метрики тут</a>. Мы не передаем персональные данные другим организациям и службам, не указанным в данной политике конфиденциальности. Исключение составляет только передача информации при законных требованиях государственных органов уполномоченных осуществлять данные действия.
        </p>
        <p>
          <strong>Ссылки на другие сайты</strong>
        </p>
        <p>Наш сайт glebdrozdov.com может содержать ссылки на другие сайты, которые не управляются нами. Мы не несем ответственность за их содержание. Мы рекомендуем вам ознакомиться с политикой конфиденциальности каждого сайта, который вы посещаете, если она там есть.</p>
        <p>
          <strong>Изменения в политике конфиденциальности</strong>
        </p>
        <p>Наш сайт glebdrozdov.com может&nbsp;обновлять нашу политику конфиденциальности время от времени. Мы сообщаем о любых изменениях, разместив новую политику конфиденциальности на этой странице. Мы отслеживаем изменения законодательства, касающегося персональных данных в Европейском Союзе и в государстве Россия. Если вы оставили персональные данные у нас, то мы оповестим вас об изменении в политике конфиденциальности. Если ваши персональные данные были введены не корректно, то мы не сможем с вами связаться.</p>
        <p>
          <strong>Обратная связь, заключительные положения</strong>
        </p>
        <p>Связаться с администрацией сайта glebdrozdov.com по вопросам, связанным с политикой конфиденциальности можно по адресу: db.glebdrozdov@gmail.com, либо с помощью контактной формы указанной в соответствующем разделе данного сайта. Если вы не согласны с данной политикой конфиденциальности, вы не можете пользоваться услугами сайта glebdrozdov.com, в этом случае вы должны воздержаться от посещения нашего сайта.</p>
      </div>
    </Dialog>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Dialog from 'primevue/dialog'
import Message from 'primevue/message'
import Button from 'primevue/button'

export default {
  name: 'Policy',

  components: {
    Dialog,
    Message,
    Button
  },

  computed: {
    classes () {
      return [
        this.$style.policy,
        {
          [this.$style.mobile]: isMobile
        }
      ]
    },
    classesDialog () {
      return [
        this.$style.dialog,
        {
          [this.$style.mobile]: isMobile
        }
      ]
    }
  },

  data () {
    return {
      isPolicyDialog: false,
      isPolicyAccept: localStorage.getItem('private_policy')
    }
  },

  methods: {
    showPolicy () {
      this.isPolicyDialog = true
    },

    acceptPolicy () {
      localStorage.setItem('private_policy', true)
      this.isPolicyAccept = true
    }
  }
}
</script>

<style module lang="postcss">
.policy {
  min-width: 600px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.message {
  & :global(div) {
    & > span {
      display: none;
    }
  }
}

.wpapper {
  display: flex;
  align-items: center;
}

.linkMore {
  display: inline-block;
  cursor: pointer;
  text-decoration: underline;
}

.text {
  margin-right: 32px;
}

.link {
  color: var(--ui-black);
  text-decoration: underline;

  &:hover {
    color: var(--ui-yellow);
  }
}
.dialog {
  width: 60%;
}

.mobile {
  &.policy {
    min-width: 90%;
  }

  .dialog {
    width: 100%;
  }

  .message {
    & :global(div) {
      font-size: var(--text-xs);
    }
  }
}
</style>
