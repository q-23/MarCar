<template>
  <div id="app">
    <app-header></app-header>
    <transition mode="out-in"
                name="fade">
      <router-view>
      </router-view>
    </transition>
    <footer class="container-fluid">
      <div class="row justify-content-between ml-3">
        <div class="col-6 footercol">
          <p>MarCar © 2018 ~ 2018 </p>
        </div>
        <div class="col-6  footercol">
          <p class="text-right mr-4"> Projekt i wykonanie SofteNET </p>
        </div>
      </div>
      <div class="strip" v-bind:style="appColor">
      </div>
    </footer>
    </div>
</template>

<script>
  import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    appHeader: Header
  },
  data(){
    return {
      appColor: {}
    }
  },
  computed: {
    routePath(){
      return this.$route.fullPath
    }
  },
  watch: {
    routePath(val){
      if(val==='/autospa'){
        this.appColor = {backgroundColor: '#c10b18'}
      } else {
        this.appColor = {backgroundColor: '#0098db'}
      }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Audiowide:400|Exo+2:300,900|Montserrat:300,400,600,900&subset=latin-ext');

  @media (max-width: 992px) {
    .desktop-only {
      display: none;
    }
    .footercol > small {
      transform: translateY(90%);
    }
  }
  small{
    color: white;
  }
  .container-fluid {
    padding-left: 0rem;
    padding-right: 0rem;
    overflow: hidden;
  }
  .boldblue {
    font-weight: 900;
    color: #0588cc;
    display: inline-block;
  }
  footer {
    background-color: #4c4c4c;
    height: 105px;
    width: 100%;
    position: relative;
  }
  .strip {
    top: 80%;
    position: absolute;
    height: 5px;
    width: 100%;
    /*background-color: #018ace;*/
  }
  .footercol > p {
    color: white;
    margin-top: 5%;
  }
  .montserrat {
    font-family: Montserrat;
  }
  .exo2 {
    font-family: "Exo 2";
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .4s;
  }

  .fade-leave-active {
    transition: opacity .4s;
    opacity: 0;
  }
</style>
