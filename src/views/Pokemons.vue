<template>
  <div class="main">

    

  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2" v-for="(pokemon, index) in pokemons" :key="index">
      <Cards :mensaje="pokemon.tipo" :titulo="pokemon.nombre" :img="pokemon.imagen" :nombrePokemon="pokemon.nombre"/>
    </div>
  </div>


</div>
</template>


<script setup>
import Cards from '../components/Card.vue';
import { ref, onMounted, watch} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

//Definicion de variables
const pokemons = ref([]);

onMounted(async () => {
  try {
    // Hacer 10 solicitudes HTTP para los primeros 10 Pokémon
    for (let i = 1; i <= 100; i++) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = response.data;
  

      // Agregar la imagen al array imagenes
      const pokemon = {
        imagen:data.sprites.other.dream_world.front_default,
        nombre:data.name,
        tipo:data.types[0].type.name
      }


      pokemons.value.push(pokemon);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }

});

</script>


<style>
/* Estilos CSS si es necesario */
.main {
  height: auto;
}



</style>

