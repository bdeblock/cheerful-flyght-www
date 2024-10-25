<script setup>
  const {ref} = Vue
  const dialog_cgv = ref(false)
</script>

<template>
  <v-btn id="btn_cgv" class="mx-2" rounded="xl" variant="text" text="">Mentions légales - CGU
    <v-dialog id="cgv" v-model="dialog_cgv" activator="parent" max-width="800">
      <template v-slot:default="{ isActive }">
        <v-card rounded="lg">
          <!--template v-slot:title>
            <div class="text-h5 text-medium-emphasis ps-2">Conditions et Confidentialité</div>
          </template-->
          <template v-slot:text>
            <div class="text-justify">
              <h1>I - Mentions légales</h1>
              En vigueur au 15/10/2024<br>
              Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance en l’économie numérique, il est porté à la connaissance des utilisateurs et visiteurs, ci-après l' "Utilisateur", du site http://www.lenvolee.com , ci-après le "Site", les présentes mentions légales. <br>
              La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique "Mentions légales". <br>
              <h2>1) Identité de l'entreprise</h2>
              DIEUSAERT Gaetan (EI), 30 rue de l'Onglée - 49290 Chalonnes-sur-Loire - France, dont le numéro de téléphone est 06 62 24 68 79, et l'adresse e-mail gaetan@lenvolee-vins.fr.<br>
              SIREN : 913384079 <br>
              <h2>2) Edition du site</h2>
              L’édition et la direction de la publication du Site est assurée par Monsieur Gaetan Dieusaert, domicilié 30 rue de l'Onglée - 49290 Chalonnes-sur-Loire - France, dont le numéro de téléphone est 06 62 24 68 79, et l'adresse e-mail gaetan@lenvolee-vins.fr.<br>
              ci-après l'"Editeur".
              <h2>3) Hébergeur</h2>
              L'hébergeur du Site est la société Ovh, dont le siège social est situé au 2 rue Kellermann 59100 Roubaix .
              <h2>4) Accès au site</h2>
              Le Site est normalement accessible, à tout moment, à l'Utilisateur. Toutefois, l'Editeur pourra, à tout moment, suspendre, limiter ou interrompre le Site afin de procéder, notamment, à des mises à jour ou des modifications de son contenu. L'Editeur ne pourra en aucun cas être tenu responsable des conséquences éventuelles de cette indisponibilité sur les activités de l'Utilisateur.
              <h2>5) Collecte des données</h2>
              Le Site assure à l'Utilisateur une collecte et un traitement des données personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers aux libertés et dans le respect de la règlementation applicable en matière de traitement des données à caractère personnel conformément au règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (ci-après, ensemble, la "Règlementation applicable en matière de protection des Données à caractère personnel").
              <br>
              En vertu de la Règlementation applicable en matière de protection des Données à caractère personnel, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur peut exercer ce droit :
               par mail à l'adresse email gaetan@lenvolee-vins.fr
               depuis le formulaire de contact ;
              Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation expresse de l’Editeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que prévues par la règlementation en vigueur.
              Pour plus d’informations, se reporter aux CGV du site http://www.lenvolee.com accessibles depuis la
              rubrique "CGV" .
              <br>
              <h1>II - Conditions Générales d'Utilisation</h1>
              <h2>6) Propriété intellectuelle</h2>
              Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.<br>
              La marque L'Envolée Domaine Anjoué est une marque déposée par Dieusaert Gaetan.Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de cette marque, de quelque nature que ce soit, est totalement prohibée.<br>
              L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.<br>
              Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.<br>
              Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.
              <h2>7) Responsabilité</h2>
              Les sources des informations diffusées sur le site http://www.lenvolee.com sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.<br>
              Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site http://www.lenvolee.com ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
              Le site http://www.lenvolee.com ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.<br>
              La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
              <h2>8) Liens hypertextes</h2>
              Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site http://www.lenvolee.com. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
              <h2>9) Cookies</h2>
              L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.<br>
              Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site http://www.lenvolee.com. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.<br>
              L’information contenue dans les cookies est utilisée pour améliorer le site http://www.lenvolee.com.<br>
              En naviguant sur le site, L’Utilisateur les accepte.
              L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.
              A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.<br>
              L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
              <h2>10) Droit applicable et juridiction compétente</h2>
              La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.<br>
              Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 2.
            </div>
          </template>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="text-none bg-secondary"
              rounded="xl"
              text="Fermer"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-btn>
</template>