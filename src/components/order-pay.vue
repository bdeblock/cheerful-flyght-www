<script setup>
  import PaypalButton from './paypal-button.vue'
  const {ref, defineProps} = Vue

  const dialog = ref(false)
  const dialog_cgv = ref(false)
  const pay = ref(false)

  defineProps({
    cart: {
      type: Array, // as PropType<Array<>>,
      default: [],
    },
    total: {
      type: Number, // as PropType<Array<>>,
      default: 0,
    },
    checkbox: {
      type: Boolean, // as PropType<Array<>>,
      default: false,
    },
  })
  
</script>

<template>
  <v-row  class="text-center mb-6" justify="center" no-gutters>
    <div class="mr-2 py-2">
      <v-dialog
        v-model="dialog"
        max-width="400"
        persistent
      >
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="text-h6"
            :color="checkbox ? 'green-lighten-3' : 'error'"
            :prepend-icon="checkbox ? 'mdi-check' : 'mdi-minus-circle-outline'"
            v-bind="activatorProps"
            type="submit"
            :text="checkbox ? 'Valider la commande' : 'Valider'"
            @click="pay = !pay"
            :disabled="!checkbox"
          >
          </v-btn><!--:readonly="!checkbox"-->
        </template>
        <template v-slot:default="{ isActive }">
        <v-card
          prepend-icon="mdi-format-list-bulleted"
          title="Paiement"
        >
          <v-card-text>
            <div class="text-medium-emphasis">Détail de la commande :</div>
            <ul>
              <li v-for="purchase in cart">
                <span v-if="purchase.quantity > 0">{{purchase.name}} ({{purchase.price6}}&nbsp;€) x {{purchase.quantity}}</span>
              </li>
            </ul>
            <div class="text-right mt-2">Total: {{total}}€</div>
          </v-card-text>
          <template v-slot:actions>
            <v-spacer></v-spacer>
            <paypal-button></paypal-button>
            <v-btn
                class="text-none"
                color="primary"
                rounded="xl"
                text="Payer"
                variant="flat"
                @click="isActive.value = false"
              ></v-btn>

            <v-btn
                class="text-none"
                color="secondary"
                rounded="xl"
                text="Annuler"
                variant="flat"
                @click="dialog = false"
            ></v-btn>
          </template>
        </v-card>
        </template>
      </v-dialog>
    </div>
    <div class="ml-2 py-2">
      <v-btn
        class="text-h6 bg-orange-lighten-4"
        text="Vider le panier"
        @click="$emit('emptyCart')"
      >
      </v-btn>
    </div>
  </v-row>
</template>
