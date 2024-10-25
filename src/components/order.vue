<script setup>
  import OrderPay from './order-pay.vue'
  const {ref, computed} = Vue

  const ordering = ref(false)
  const total = computed(() => {
    let total = 0;
    cart.value.forEach((purchase) => {
      total += purchase.price6 * purchase.quantity;
    });
    if (total > 0) {
      ordering.value = true;
    } else {
      ordering.value = false;
    }
    return total;
  })
  
  const sales = [
      { name: "Melting Pop", subtitle: "Pétillant naturel", price6: 9, price1: 10, price48: 8.55, quantity: 1 },
      { name: "Murmuration", subtitle: "IGP Chardonnay", price6: 9, price1: 10, price48: 8.55, quantity: 1 },
      { name: "Les Vignes Rondes", subtitle: "Anjou Blanc, Chenin", price6: 12, price1: 13.5, price48: 11.4, quantity: 1 },
      { name: "Clos de Pierre Cout", subtitle: "Anjou Gamay", price6: 11, price1: 12, price48: 10.45, quantity: 1 },
      { name: "Cuvée des Meuniers", subtitle: "VDF, Pineau d'Aunis", price6: 10, price1: 11, price48: 9.5, quantity: 1 },
      { name: "La Soirée", subtitle: "Ajou Rouge, Cabernet Franc", price6: 11, price1: 12, price48: 10.45, quantity: 1 },
      { name: "Sweetie bouteille 75cL", subtitle: "Cabernet d'Anjou", price6: 6.5, price1: 7.5, price48: 6.1, quantity: 1 },
      { name: "Sweetie BIB 5L", subtitle: "Cabernet d'Anjou", price6: 19.5, price1: 19.5, price48: 19.5, quantity: 1 },
      { name: "Sweetie BIB 10L", subtitle: "Cabernet d'Anjou", price6: 36, price1: 36, price48: 36, quantity: 1 },
      { name: "Confluences", subtitle: "Coteaux du Layon, Chenin", price6: 11.5, price1: 13, price48: 10.9, quantity: 1 },
      { name: "Pop Pop Pidou !", subtitle: "Méthode Traditionnelle", price6: 10.5, price1: 11.5, price48: 9.9, quantity: 1 },
      { name: "Cuvée 51-49", subtitle: "Crémant de Loire", price6: 14.5, price1: 16, price48: 13.75, quantity: 1 },
    ]

  const checkbox = ref(null)
  
  function salesProps(item){
    return {
      title: item.name,
      subtitle: item.subtitle,
    }
  }

  const cart = ref([])
  
  function deletePurchase(index){
    cart.value[index].quantity = 1;
    cart.value.splice(index,1);
  }

  function addProduct(product){
    product.quantity < 250 ? product.quantity++ : undefined;
  }

  const defilRapideInterv = ref(null)
  const intervalCounter = ref(0)
  
  function continuousAddProduct(product){
    defilRapideInterv.value = setInterval(() => {
        intervalCounter.value == 10 ?(product.quantity < 250 ? product.quantity++ : undefined) : intervalCounter.value++ ;
    }, 75);
  }
  
  function removeProduct(product){
    product.quantity > 0 ? product.quantity-- : undefined;
  }
  
  function continuousRemoveProduct(product){
  defilRapideInterv.value = setInterval(() => {
      intervalCounter.value == 10 ? (product.quantity < 250 ? product.quantity-- : undefined) : intervalCounter.value++ ;
  }, 75);
  }
  
  function stopAdd(){
    clearInterval(defilRapideInterv.value);
    intervalCounter.value = 0;
  }

  function empty() {
    cart.value.forEach((purchase) => {
      purchase.quantity = 1;
    });
    cart.value = [];
  }
</script>

<template>
  <v-sheet>
    <v-sheet id="commander" class="d-flex flex-column pt-4" min-height="500">
      <div class="mb-auto">
        <v-select
          class="bg-orange-lighten-5"
          label="Faites votre choix ..."
          :items="sales"
          :item-props="salesProps"
          v-model="cart"
          multiple
          persistent-hint
        ></v-select>	
        <v-row class="align-center bg-orange-lighten-5" no-gutters v-for="(purchase, index) in cart" :key="index">
          <v-col class="me-auto" cols="6" sm="auto">
            <v-sheet color="amber-lighten-5">{{purchase.name}} - {{purchase.price6}}&nbsp;€ la bouteille</v-sheet>
          </v-col>
            <v-defaults-provider
                :defaults="{
                  VBtn: {	
                    size: 'small',
                  }
                }"
             >
          <v-col cols="auto">
            <v-text-field
              :id="'purchases_form_quantity' + index"
              class="centered-input"
              inputmode="numeric"
              :value="purchase.quantity"
              min-width="105"
              density="compact"
              hide-details="auto"
              readonly
            >											
              <template v-slot:prepend-inner>
                <v-btn icon="mdi-plus"
                  @click="addProduct(purchase)"
                  @mousedown="continuousAddProduct(purchase)"
                  @mouseup="stopAdd"
                  density="compact"
                  color="surface-light"
                ></v-btn>
              </template>
              <template v-slot:append-inner>
                <v-btn icon="mdi-minus"
                  @click="removeProduct(purchase)"
                  @mousedown="continuousRemoveProduct(purchase)"
                  @mouseup="stopAdd"
                  density="compact"
                  color="surface-light"
                ></v-btn>
              </template>
            </v-text-field>	
          </v-col>
          <v-col cols="auto">
            <v-btn @click="deletePurchase(index)" icon="mdi-delete" color="surface-light"></v-btn>
          </v-col>
            </v-defaults-provider>
        </v-row>
      </div>
      <div class="mt-auto">
            <!--div class="text-right text-justify text-body-2 text-grey-darken-1 pl-3">
            Livraison uniquement en France - Frais de port offerts à partir de 100€ d'achat - réduction de 5% à partir de 500€ d'achat.
            </div-->
        <v-card class="d-flex flex-column align-end" color="orange-lighten-5" label="Total : ">
          <v-card-title class="text-h5 text-high-emphasis">
            Total : {{total}}&nbsp;€
          </v-card-title>
        </v-card>
        <div class="text-body-2 text-justify pl-3" style="color: grey">
          Livraison uniquement en France - Frais de port offerts à partir de 100€ d'achat - réduction de 5% à partir de 500€ d'achat.
        </div>
        <v-checkbox class="mb-n6 mt-2 mt-sm-0" v-model="checkbox" :rules="[v => !!v || '']" required
        >
          <template v-slot:label>
            <div class="text-body-2 text-justify">
            En cochant cette case,  je reconnais avoir pris connaissance des <a id="anchor_cgv" href="#cgv" @click="dialog_cgv = !dialog_cgv">conditions générales de ventes</a> et les accepte sans réserve
            </div>
          </template>
        </v-checkbox>

  <!--Valid and pay$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-->
       <order-pay :cart='cart' :total='total' :checkbox='checkbox' @empty-cart="empty"></order-pay>
      </div>
    </v-sheet>
  </v-sheet>
</template>
