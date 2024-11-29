<script setup>
  
  const wines = [{title: 'Murmuration', srcVine:"src/images/murmuration_vigne.jpg", srcBottle:"src/images/murmuration_bouteille-removebg.png",
      subtitle:"Chardonnay - IGP Val de Loire 2022"+
        "<br/>Schisto-gréseux sur Ardenay"+
        "<br/>Chaudefonds sur Layon",
      tastes:[{name:"Acidité (tonique)&nbsp;:", notation:"● ● ● ● ○"}, {name:"Rondeur (suave)&nbsp;:", notation:"● ● ● ○ ○"},
        {name:"Sucrosité :", notation:"● ○ ○ ○ ○"}, {name:"Gourmandise (fruité)&nbsp;:", notation:"● ● ● ● ○"}],
      text1:"ACCORDS : Fromages, saveurs iodées, végétales ou fumées",
      text2:"Très  jolie  robe  avec  une  pointe  or  signe d’une belle maturité. L’attaque en nez est percutante et suave à la fois. On retrouve une impression de fruits blancs et jaunes (pommes poires, pêches), des notes légères de noisettes et une suavité finement boisée et vanillée."+
        "</br>La  bouche  est  suave  et  fraîche  à  la  fois avec un bel équilibre gustatif et une finale tonique.",
      color: "lime-darken-3"},

      {title: 'Melting Pop', srcVine:"src/images/meltingPop_vigne.jpg", srcBottle:"src/images/meltingPop_bouteille-removebg.png",
      subtitle:"Pétillant naturel rosé"+
        "<br/>Schisto-gréseux sur Ardenay"+
        "<br/>Chaudefonds sur Layon",
      tastes:[{name:"Acidité (fraîcheur)&nbsp;:", notation:"● ● ● ● ○"}, {name:"Rondeur (bouche souple)&nbsp;:", notation:"● ● ● ○ ○"},
        {name:"Sucrosité :", notation:"● ○ ○ ○ ○"}, {name:"Gourmandise (fruité)&nbsp;:", notation:"● ● ● ● ○"}],
      text1:"ACCORDS : Autour du melon, de fraises, gougères et plats conviviaux",
      text2:"Assemblage  judicieux  de  pineau  d’Aunis (75%), de grolleau noir et de carbernet franc.  La  robe  rose  saumon  présente  de délicats reflets jaunes."+
        "</br>Bien  frais,  le  nez  explose  sur  les  arômes de  pamplemousse  et  de  poivre  blanc puis très vite, on retrouve les arômes de fraise,  de  framboise,  une  touche florale et végétale.",
      color: "lime-darken-3"},

      {title: 'Cuvée des Meuniers', srcVine:"src/images/cuveeDesMeuniers_vigne.jpg", srcBottle:"src/images/cuveeDesMeuniers_bouteille-removebg.png",
      subtitle:"Pineau d’Aunis - Vins de France"+
        "<br/>Schisto-gréseux sur Ardenay"+
        "<br/>Chaudefonds sur Layon",
      tastes:[{name:"Acidité (tonique)&nbsp;:", notation:"● ● ● ○ ○"}, {name:"Rondeur :", notation:"● ● ● ○ ○"},
        {name:"Tanins :", notation:"● ● ● ● ○"}, {name:"Gourmandise (épices)&nbsp;:", notation:"● ● ● ● ○"}],
      text1:"ACCORDS : Fromage à pâte molle, grillades, tartare",
      text2:"La robe rubis présente de petites nuances violines scintillantes. "+
        "</br>Au premier abord, le nez est discret, puis très vite, on retrouve les arômes de fruits rouges et de poivre blanc associé à une impression florale et végétale. En bouche, l’attaque est assez structurée et en finale, les tanins sont présents mais restent tout à fait « digestes ».",
      color: "lime-darken-3"},

      {title: 'Confluences', srcVine:"src/images/confluences_vigne.jpg", srcBottle:"src/images/confluences_bouteille-removebg.png",
      subtitle:"Coteaux du Layon - Chenin en surmaturité"+
        "<br/>Schisto-gréseux sur Ardenay"+
        "<br/>Chaudefonds sur Layon",
      tastes:[{name:"Acidité (en fin de bouche)&nbsp;:", notation:"● ● ○ ○ ○"}, {name:"Rondeur :", notation:"● ● ● ● ○"},
        {name:"Sucrosité :", notation:"● ● ● ● ○"}, {name:"Gourmandise :", notation:"● ● ● ● ●"}],
      text1:"ACCORDS : Apéritifs, foie gras, fromages persillés, tartes",
      text2:"La robe jaune avec des nuances or est intense et présente une grande luminosité. Le nez offre une belle expression gourmande : fruits blancs, arômes exotiques. Puis l’élégance du coing et une touche de pêches et d’abricots secs confirment l’expression du cépage."+
        "</br>La  bouche  est  harmonieuse,  moelleuse et  équilibrée.  La  finale  très  légèrement acidulée tonifie ce merveilleux vin de conservation.",
      color: "deep-orange-darken-2"},

      {title: 'Clos de Pierre Cout', srcVine:"src/images/closDePierreCout_vigne.jpg", srcBottle:"src/images/closDePierreCout_bouteille-removebg.png",
      subtitle:"Anjou Gamay"+
        "<br/>Argiles limoneuses sur schistes"+
        "<br/>Chalonnes sur Loire",
      tastes:[{name:"Acidité :", notation:"● ● ● ○ ○"}, {name:"Rondeur (bouche souple)&nbsp;:", notation:"● ● ● ○ ○"},
        {name:"Tanins :", notation:"● ● ● ○ ○"}, {name:"Gourmandise :", notation:"● ● ● ● ○"}],
      text1:"ACCORDS : Charcuteries, fromages, viandes rouges et repas conviviaux",
      text2:"La  robe  est  magnifique,  rouge  violine presque bleutée, très attrayante et d’une belle brillance."+
        "</br>Le nez jovial et fin s’exprime autour d’arômes gourmands  de  petits  fruits  rouges  (cerises, framboises, fraises des bois), une touche de violette, puis les arômes épicés de poivre noir."+
        "</br>La  bouche  souple  et  délicate  en  fait  un beau et grand vin de soif, dans l’esprit des vins de Loire avec un brin de malice et de gourmandise.",
      color: "pink-darken-1"},

      {title: 'Les Vignes Rondes', srcVine:"src/images/lesVignesRondes_vigne.jpg", srcBottle:"src/images/lesVignesRondes_bouteille-removebg.png",
      subtitle:"Anjou Blanc Chenin"+
        "<br/>Schistes gréseux sur Ardenay"+
        "<br/>Chaudefonds sur Layon",
      tastes:[{name:"Acidité :", notation:"● ● ○ ○ ○"}, {name:"Rondeur :", notation:"● ● ● ● ○"},
        {name:"Sucrosité :", notation:"● ● ○ ○ ○"}, {name:"Gourmandise :", notation:"● ● ● ● ○"}],
      text1:"ACCORDS : Apéritifs, poissons en sauce, fromages affinés et viandes blanches",
      text2:"La robe est d’une très belle couleur jaune serin avec une pointe or."+
        "</br>Le nez est puissant et gourmand avec une impression de fruits jaunes mûrs méditerranéens."+
        "</br>Il présente une pointe boisée  et  vanillée de  la  partie  fermentée  en  barriques.  La bouche est ronde, suave et veloutée avec une  acidité  juste  tonique.  L’équilibre  du vin  est  parfaitement  gourmand  pour  de beaux accords.",
      color: "pink-darken-1"},

    ]
  
</script>
  

<template>
  <v-sheet>
    <v-sheet id="nosVins">
      <v-data-iterator
        :items="wines"
        :items-per-page="100"
        item-value="title"
      >
        <template v-slot:default="{ items, isExpanded, toggleExpand }">
          <v-row dense justify="space-between">
            <v-col
            v-for="item in items"
            :key="item.raw.title"
            cols="12" sm="6" lg="4"
            >
              <v-card
                class="mx-auto"
                max-width="400"
                color="orange-lighten-5"
              >
                <v-container fluid class="pa-0">
                  <v-img
                    height="400px"
                    :src="item.raw.srcBottle"
                    alt="bouteille"
                    class="elevation-50 bg-sky"
                  ></v-img>
                  <v-img
                    class="position-absolute top-0 left-0 rounded-be-pill pa-12"
                    height="100px"
                    :src="item.raw.srcVine"
                    alt="vigne"
                    cover
                  ></v-img>
                </v-container>

                <v-card-title class="text-center" v-text="item.raw.title">
                </v-card-title>

                <v-card-subtitle class="text-center" v-html="item.raw.subtitle">
                </v-card-subtitle>

                <!--v-card-text class="text-justify">
                  <v-container class='my-2'>
                    <v-row v-for="taste in item.raw.tastes" class='justify-space-between mb-1' no-gutters>
                      <v-col class="me-auto bg-transparent" cols="6" md="auto" v-html="taste.name"></v-col>
                      <v-col
                        class='bg-transparent lg-pr-6 notation align-self-end '
                        :class="`${'text-' + item.raw.color}`"
                        cols="auto"
                        v-text="taste.notation"
                      ></v-col>
                    </v-row>
                  </v-container>
                  <v-sheet v-text="item.raw.text1" class="bg-transparent px-4"></v-sheet>
                </v-card-text-->

                <v-card-actions>
                  <v-btn color="primary-lighten-2" text="Découvrir"></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :icon="`${isExpanded(item) ? 'mdi-chevron-up' : 'mdi-chevron-down'}`"
                    inset
                    @click="() => toggleExpand(item)"
                    :model-value="isExpanded(item)"
                  ></v-btn>
                </v-card-actions>
                <!--v-divider></v-divider>
                <v-expand-transition>
                  <div v-if="isExpanded(item)">  
                    <v-card-text class="text-justify" >
                    <v-sheet class="bg-transparent px-4" v-html="item.raw.text2">
                    </v-sheet>
                  </v-card-text>
                  </div>
                </v-expand-transition-->
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-sheet>
    </v-sheet>
</template>

<style scoped>
.bg-sky::before {
  content: " ";	
  width: 100%;
  height: 100%;
  background-image: url("src/images/ciel.jpg");
  background-size: cover;
  filter: sepia(80%);
  z-index:-1;
}
  
.notation {
  letter-spacing: 0.4em;
}
</style>
