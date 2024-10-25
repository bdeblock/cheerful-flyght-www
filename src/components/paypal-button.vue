<script setup>
  const {ref, onMounted} = Vue
  const payId = ref('')
  const valu = '1.32'
  const val = '1.23'

  window.paypalLoadScript({ clientId: "test" }).then((paypal) => {
      paypal.Buttons().render("#paypal-button-container");
  });

  async function fileExists(url) {
      try {
          const response = await fetch(url, { method: 'HEAD' });
          return response.ok;
      } catch (err) {
          console.error('An error occurred:', err);
          return false;
      }
  }

  fileExists('/server.php')
      .then(exists => console.log(exists ? 'File exists' : 'File does not exist'));

/*  onMounted(() => {
    paypal.Buttons({
      createOrder() {
        let sData = {value: val, type: 'create'};
        return fetch("/server.php", {
                 method: 'POST',
                 body: JSON.stringify(sData),
          })
        .then(res => res.json())
        .then(order => order.id)
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
      },
  
      onApprove(data) {
        let sData = {orderId: data.orderID,
                     type: 'capture'};
        return fetch("/server.php", {
                 method: 'POST',
                 body: JSON.stringify(sData),
          })
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
      }
    }).render('#paypal-button-container');
  })*/
  
  function createOrderExt(){
    let sData = {value: '1.32', type: 'create'};
    return fetch("./server.php", {
             method: 'POST',
             body: JSON.stringify(sData),
      })
    .then(res => console.log(res.json)); //res.json())
    //.then(data => {payId = data['id']; 
    //               console.log(payId)}
    //     );
  };

 /* function onApproveExt(Id){
    let sData = {orderId: Id, type: 'capture'};
    return fetch("/server.php", {
             method: 'POST',
             body: JSON.stringify(sData),
      })
    .then(res => res.json())
    .then(data => console.log(data)
         );
  };*/
</script>


<template>
  <div id="paypal-button-container"></div>
  <!--v-btn @click='createOrderExt'>Cliquer ici</v-btn-->
  <!--v-btn @click='onApproveExt(payId)'>Cliquer ici</v-btn-->  
</template>
  
<script>
//  const buttonOrder = document.querySelector("#order");
//  const buttonPay = document.querySelector("#pay");
/*  buttonOrder.addEventListener("click", (event) => {
    createOrderExt();
  });
  buttonPay.addEventListener("click", (event) => {
    onApproveExt(payId);
  });
*/
  

  
</script>
