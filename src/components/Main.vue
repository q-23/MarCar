<template>
    <div class="container-fluid">
        <div class="imgtext desktop-only">
            <img alt="Header" src="../assets/header1.jpg">
            <span class="imgpar">
                <h6 class="exo2">Nasze samochody...są</h6>
                <br><h1 class="bold exo2">NASZĄ &nbsp;</h1>
                <h1 class="boldblue exo2"> PASJĄ!</h1>
            </span>
        </div>
        <div class="hr desktop-only"></div>
        <div class="row holder desktop-only justify-content-center">
            <div class="col-lg-8">
                <i class="fas fa-map-marker-alt"></i>
                <p class="montserrat address">MarCar 41-219 Sosnowiec, ul. Cienista 2</p>
            </div>
            <div class="col-lg-3">
                <ul class="phone fas-ul">
                    <li class="montserrat"><i class="fas fa-phone"></i> 508 199 458</li>
                    <li class="montserrat"><i class="fas fa-phone"></i> 575 937 772</li>
                    <li class="montserrat"><i class="fas fa-phone"></i> 509 351 993</li>
                </ul>
            </div>
        </div>
        <div class="hr desktop-only"></div>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>


    .imgtext {
        position: relative;
        text-align: center;
    }

    .imgtext > img {
        max-width: 100%;
        height: auto;
    }

    .imgpar {
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .bold {
        font-weight: 900;
        display: inline-block;
    }

    .hr {
        height: 2px;
        width: 100%;
        background-color: #4f82a1;
    }

    .holder {
        background-color: #e4f3fa;
        height: 100px;
        position: relative;
    }

    .fa-map-marker-alt {
        transform: scale(3.5);
        margin-top: 40px;
        margin-left: 15px;
    }


    .address {
        margin-left: 60px;
        position: absolute;
        bottom: 21px;
    }

    ul.phone {
        list-style: none;
        margin-top: 15px;
        margin-left: 30px;
        font-weight: 600;
    }



</style>