<template>

    <nav class="navbar navbar-expand-lg navbar-light container-fluid sticky-top"
         style="background-color: rgba(75,75,75,.95);">

        <a class="navbar-brand">MarCar
            <small>auto deal</small>
        </a>

        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler navbar-toggler-right custom-toggler" data-target="#navbarSupportedContent"
                data-toggle="collapse" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>



        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <router-link active-class="active"
                             class="nav-item rhombus justify-content-end bluehover"
                             exact tag="li"
                             data-target=".navbar-collapse"
                             to="/">
                    <a class="nav-link">START</a>
                </router-link>
                <li class="nav-item rhombus justify-content-end bluehover">
                    <a href="#" class="nav-link">OTOMOTO</a>
                </li>
                <router-link active-class="active-red "
                             class="nav-item rhombus justify-content-end redhover"
                             tag="li"
                             data-target=".navbar-collapse"
                             to="/autospa">
                    <a class="nav-link">AUTO SPA</a>
                </router-link>
                <router-link active-class="active"
                             class="nav-item rhombus justify-content-end bluehover"
                             tag="li"
                             data-target=".navbar-collapse"
                             to="/autoskup">
                    <a class="nav-link">AUTOSKUP</a>
                </router-link>
                <router-link active-class="active"
                             class="nav-item rhombus justify-content-end bluehover"
                             tag="li"
                             data-target=".navbar-collapse"
                             to="/kontakt">
                    <a class="nav-link test">KONTAKT</a>
                </router-link>
                <li class="nav-item spacer justify-content-end"></li>
            </ul>
        </div>

    </nav>

</template>

<script>
    /* eslint-disable */
    export default {
        name: "Header",
        data() {
            return {
                windowWidth: 0
            }
        },
        mounted() {
            this.$nextTick(function() {
                window.addEventListener('resize', this.getWindowWidth);
                this.getWindowWidth()
            })
        },
        methods: {
            getWindowWidth() {
                this.windowWidth = document.documentElement.clientWidth;
            }
        },
        watch:{
            windowWidth(val){
                if(val<=992){
                    $('.nav-item').attr('data-toggle', "collapse")
                } else {
                    $('.nav-item').attr('data-toggle', "")
                }
            }
        }
    }
</script>

<style scoped>
    @media (min-width: 992px){
        collapse{
            transition: none;
        }
    }
    nav {
        min-height: 105px;
        margin-top: -105px;
    }

    a {
        color: white !important;
    }
    .navbar-brand small {
        display: block;
        font-size: 15px;
        margin-left: 30px;
        font-family: Montserrat;
    }
    .navbar-toggler {
        border: none;
    }

    .navbar-toggler:focus {
        outline: none;
    }

    .custom-toggler .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(1,138,206,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }

    .navbar-brand {
        font-family: Audiowide;
        font-size: 2rem;
        margin-left: 4rem;
        text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
    }
    @media (max-width: 991px) {
        nav {
            margin-top: 0;
        }
        li {
            margin-left: 5%;
        }
    }

    @media (min-width: 992px) {
        .rhombus {
            box-sizing: content-box;
            margin: -10px -10px -10px 10px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .5) 90%);
            height: 105px;
            width: 155px;
            transform: skewX(-20deg);
        }

        .rhombus > a {
            transform: skew(20deg);
            margin-top: 50px;
            margin-left: 30px;
            font-family: 'Montserrat', sans-serif;
            color: white !important;
        }
        .spacer {
            width: 65px;
        }

        .bluehover{
            transition: 0.3s;
        }

        .bluehover:hover{
            font-weight: 600;
            background-color: #0098db;
        }

        .redhover{
            transition: 0.3s;
        }

        .redhover:hover{
            font-weight: 600;
            background-color: #C10B18;
        }

        .active {
            background-color: #0098db;
            font-weight: 600;
            transform: skew(-20deg);
            margin-left: 10px;
        }
        .active-red {
            background-color: #C10B18;
            font-weight: 600;
            transform: skew(-20deg);
            margin-left: 10px;
        }

    }
</style>