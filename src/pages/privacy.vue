<template>
  <div class="mx-4 my-10 flex flex-row justify-center">
    <Card
      title="Datenschutzerklärung"
      :icon="ClipboardDocumentCheckIcon"
      class="w-full align-middle lg:w-2/3"
    >
      <Faq
        :faqs="[
          {
            question: 'Welche Daten werden von dieser Website erfasst?',
            answer: 'Diese Website erfasst keine Daten von dir. Der im Impressum angegebene Betreiber erfährt nur von dir, wenn du ihm eine E-Mail schreibst. Dadurch erfährt der Betreiber deine E-Mail-Adresse und deinen Namen. Diese Daten werden nur für die Beantwortung deiner Anfrage verwendet und nicht an Dritte weitergegeben.',
          },
          {
            question: 'Analytics/Cookies/Externe-Ressourcen u.ä.?',
            answer: 'Diese Website verwendet kein analytisches Tracking jeglicher Art. Diese Website verwendet Cookies. Das sind kleine Textdateien, die der Webbrowser auf dem Endgerät speichert. Cookies helfen dabei, das Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende der Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis diese händisch selbst gelöscht werden. Solche Cookies helfen bei Rückkehr auf die Website gemachte Einstellungen wiederzuverwenden. Mit einem modernen Webbrowser kann das Setzen von Cookies überwacht, einschränkt oder unterbunden werden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität der Website zur Folge haben.',
          },
          {
            question: 'Was sind meine Rechte?',
            answer: 'Nach DSGVO und BDSG kannst du jederzeit Auskunft, Aktualisierung, Sperrung oder Löschung aller deiner Daten verlangen. Dein Ansprechpartner hierfür ist der oben genannte Betreiber dieser Webseite. Außerdem bin ich verpflichtet, dich an dein Recht zu erinnern, dieser Zustimmung jederzeit zu widersprechen und dich ggf. bei einer Aufsichtsbehörde über mich zu beschweren.',
          },
        ]"
      />
    </Card>
  </div>
</template>

<script lang="ts">
import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'privacy',
  methods: {
    ClipboardDocumentCheckIcon,
  },
  data() {
    return {};
  },
});
</script>
