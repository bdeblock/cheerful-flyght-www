<script setup>
  const { ref, computed } = Vue
  const revealDiscoverUs1 = ref(false)
  const revealDiscoverUs2 = ref(false)
</script>

<template>
  <v-sheet id="nousConnaitre">
    <v-card class="text-justify bg-primary-lighten-3 elevation-0">
      <div class="d-flex  flex-wrap flex-sm-nowrap justify-space-between">
        <div class="align-self-center">
          <v-card-title class="text-center text-h6">Qui sommes nous ?
          </v-card-title>

          <v-card-text class="text-medium-emphasis">
            Venus de Champagne, Gaëtan DIEUSAERT et sa famille  ont  créé  le  Domaine  L’Envolée  en  2022, suite à la reprise d’un vignoble de 6 ha majoritairement situé sur les beaux terroirs d’Ardenay à Chaudefonds sur Layon, un plateau ouvert  sur  la  vallée  du  Layon  et  les  bocages  du pays des Mauges. Pour ce domaine engagé en viticulture biologique dès sa création, la biodiversité permise grâce aux zones naturelles préservées et la présence d’une mare sont des atouts indéniables  pour  une viticulture  épanouie  au sein de son environnement.
          </v-card-text>

          <v-card-actions>
          <v-btn
            color="primary-lighten-2"
            text="En savoir plus"
            variant="text"
            @click="revealDiscoverUs1 = true"
          ></v-btn>
          </v-card-actions>
        </div>
        <v-avatar
              class="ma-auto ma-sm-3 mx-lg-12"
              rounded="0"
              size="360"
            >
              <v-img src="src/images/carteDeFrance.png"></v-img>
        </v-avatar>
      </div>

      <v-expand-transition class="overflow-auto">
        <v-card
          v-if="revealDiscoverUs1"
          class="position-absolute w-100 pb-0 text-justify bg-primary-lighten-3 elevation-0"
          height="100%"
          style="bottom: 0;"
        >
          <div class="d-flex  flex-wrap flex-sm-nowrap justify-space-between">
            <div class="align-self-center">
              <v-card-title class="text-center text-h6">Chalonnes / Loire, notre Diversité
              </v-card-title>

              <v-card-text class="text-medium-emphasis">
                Le site classé de la corniche angevine offre de  magnifiques paysages sur la vallée du Layon. <br />
                L’exposition du vignoble et sa richesse géologique permettent indéniablement une approche parcellaire du terroir avec une grande diversité d’expression des vins : une qualité des terroirs indéniable ainsi que la diversité des cépages  présents  sur  l’exploitation  permettent  d’élaborer une jolie gamme de vins diversifiés.<br />
                Le chenin s’exprime dans toute sa diversité, complété par le Cabernet Franc, du Pineau d’Aunis (cépage ancien de la Loire), le Chardonnay, le Gamay et du Grolleau Noir.
              </v-card-text>

              <v-card-actions class="mt-n2">
              <v-btn
                color="primary-lighten-2"
                text="Retour"
                variant="text"
                @click="revealDiscoverUs1 = false"
              ></v-btn>
              <v-btn
                color="primary-lighten-2"
                text="Suivant"
                variant="text"
                @click="revealDiscoverUs1 = false; revealDiscoverUs2 = true"
              ></v-btn>
              </v-card-actions>
            </div>
            <v-avatar
              class="ma-auto ma-sm-3 mx-lg-12"
              rounded="0"
              size="360"
            >
              <v-img src="src/images/carteDuVignoble.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
        <v-card
          v-if="revealDiscoverUs2"
          class="position-absolute w-100 pb-0 text-justify bg-primary-lighten-3 elevation-0"
          height="100%"
          style="bottom: 0;"
        >
          <div class="d-flex  flex-wrap flex-sm-nowrap justify-space-between">
            <div class="align-self-center">
              <v-card-title class="text-center text-h6">Nos Valeurs
              </v-card-title>

              <v-card-text class="text-medium-emphasis">
                PARTAGE : Partage du vin bien sûr mais également de sa passion et d’un savoir faire artisanal. Un produit artisanal et unique ! <br />
                NATUREL : Une viticulture épanouie au sein de son environnement : des raisins sains et cueillis à juste maturité nous permettent de produire des vins avec un minimum d’intrants. <br />
                CONVIVALITÉ : Le vin rassemble et favorise les échanges réciproques : accueil, découverte, plaisir : l’Envolée Domaine Anjoué !
              </v-card-text>
              <v-card-actions>
              <v-btn
                color="primary-lighten-2"
                text="Retour"
                variant="text"
                @click="revealDiscoverUs2 = false"
              ></v-btn>
              </v-card-actions>
            </div>
            <v-avatar
              class="ma-auto ma-sm-3 mx-lg-12"
              rounded="0"
              size="360"
            >
              <v-img class="imgVignoble" src="src/images/vignoble2_red2.jpg"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-sheet>
</template>

<style scoped>
.imgVignoble {
    filter: sepia(80%);
  }
</style>