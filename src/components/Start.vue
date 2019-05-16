<template>
    <div>
        <div class="row mt-4 justify-content-around m6-4">
            <div class="col-11">
                <h2 class="greet">WITAMY NA NASZEJ STRONIE</h2>
                <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, 7
                    aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur.</p>
            </div>
        </div>

        <div class="row justify-content-around no-gutters mx-2 mb-3">
            <div class="col-lg-3 col-11 imgdiv mt-3 ">
                <router-link
                             tag="a"
                             to="/autospa">
                    <img alt="Obrazek Auto Spa" src="../assets/min1.jpg">
                    <h3>AUTO SPA</h3>
                </router-link>
                <p class="offertext text-center">Świadczymy usługi wysokiej jakości na kosmetykach
                    i chemii renomowanych firm specjalizujących się
                    w myciu i detailingu samochodów. <br>
                    <span class="font-weight-bold"> Możliwy odbiór auta z domu klienta i dostarczenie
                    z powrotem po wykonaniu usługi!!! </span>
                </p>

            </div>
            <div class="col-lg-3 col-11 imgdiv mt-3">
                <a href="#">
                    <img alt="Obrazek OTOMOTO" src="../assets/min2.jpg">
                    <h3>OTOMOTO</h3>
                </a>
                <p class="offertext text-center"> <br> Sprawdź najnowsze oferty sprzedaży na popularnymserwisie internetowym
                    OTOMOTO.</p>

            </div>
            <div class="col-lg-3 col-11 imgdiv mt-3">
                <router-link
                             tag="a"
                             to="/autoskup">
                    <img alt="Obrazek Auto Skup" src="../assets/min3.jpg">
                    <h3>AUTO SKUP</h3>
                </router-link>
                <p class="offertext text-center"> <br> Skup samochodów na terenie Śląska. Skupujemy auta osobowe za gotówkę. </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Start"
    }
</script>

<style scoped>
    a:hover {
        text-decoration: none;
    }
    .greet {
        font-family: Montserrat;
        font-weight: 900;
        color: #0098db;
    }

    .text {
        font-family: Montserrat;
        font-weight: 300;
    }

    .imgdiv {
        border: 2px solid #4f82a1;
    }

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        font-family: Montserrat;
        font-weight: 900;
        text-align: center;
        color: #0588cc;
    }

    .offertext {
        margin: 10px;
    }


</style>