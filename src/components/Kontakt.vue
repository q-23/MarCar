<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-4 nopadding">
                <div class="contact-placeholder"><p class="montserrat">KONTAKT</p></div>
                <iframe allowfullscreen frameborder="0" height="450"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1274.1916579600454!2d19.19780991913879!3d50.
                        30343838871572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716dbb2848901f5%3A0x97c40884f8fdd01c!
                        2sCienista+2%2C+41-200+Sosnowiec!5e0!3m2!1spl!2spl!4v1546528257547"
                        style="border:0" width="100%"></iframe>
            </div>
        </div>
        <div class="row justify-content-around mt-4">
            <div class="col-12 col-md-1 ml-lg-5">
                <router-link to="/autospa" tag="a">
                   <img alt="Auto SPA" src="../assets/iko1.png" class="mx-auto d-block">
                </router-link>
            </div>
            <div class="col-12 col-md-1 mx-auto">
                <a href="#">
                    <img alt="Ogłoszenia OtoMoto" src="../assets/iko2.png" class="mx-auto d-block">
                </a>
            </div>
            <div class="col-12 col-md-1 mr-lg-5">
                <router-link to="/" tag="a">
                    <img alt="O Nas" src="../assets/iko3.png" class="mx-auto d-block">
                </router-link>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <p class="text-center montserrat">Zapraszamy: poniedziałek - piątek 10:00 - 17:00</p>
                <p class="text-center montserrat">sobota 10:00 - 14:00</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Kontakt"
    }
</script>

<style scoped>

    .contact-placeholder {
        position: absolute;
        background-color: #0098db;
        width: 150px;
        height: 50px;
        left: 50%;
        margin-left: -50px;
        shape-outside: polygon(20% 0, 100% 0, 80% 100%, 0 100%);
        clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%);
        -webkit-clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%);

    }

    .contact-placeholder > p {
        color: white;
        font-weight: 600;
        text-align: center;
        margin-top: 10%;
    }

    img {
        width: 100%;
        height: auto;
    }
    @media only screen and (max-width: 991px){
        img {
            margin-top: 25px;
            width: 30%;
            height: auto;
        }

    }

    @media only screen and (min-width: 992px){
        .container-fluid{
            margin-top: 81px;
        }
    }
</style>