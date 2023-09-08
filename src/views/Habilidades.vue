<!-- PaginaA.vue -->
<template>
  <div class="main">


    <div class="p-16">
      <div class="p-8 bg-white shadow mt-24" style="background-color: #F2F2F2;">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p class="font-bold text-gray-700 text-xl">22</p>
              <p class="text-gray-400">Friends</p>
            </div>
            <div>
              <p class="font-bold text-gray-700 text-xl">10</p>
              <p class="text-gray-400">Photos</p>
            </div>
            <div>
              <p class="font-bold text-gray-700 text-xl">89</p>
              <p class="text-gray-400">Comments</p>
            </div>
          </div>
          <div class="relative">
            <div
              class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img class="my-10 mx-autoh-32 w-32 m" :src="pokemon.imagen" alt="" />
            </div>
          </div>

          <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
              class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>
            <button
              class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Message
            </button>
          </div>
        </div>

        <div class="mt-20 text-center border-b pb-12">
          <h1 class="text-5xl font-medium text-gray-700">{{ pokemon.nombre }}
          </h1>

          <div class="grid grid-cols-12 gap-4">
           
            <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800 col-start-6 col-end-7 mt-3">{{ pokemon.tipo1 }}</button>
            <button class="h-10 px-5 text-green-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-green-800 col-start-7 col-end-8 mt-3">{{ pokemon.tipo2 }}</button>
             </div>
        
          <p class="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
          <p class="mt-2 text-gray-500">University of Computer Science</p>
        </div>

        <div class="mt-12 flex flex-col justify-center">
          <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken
            by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it
            a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
          <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
            Show more
          </button>
        </div>

      </div>
    </div>


  </div>
</template>
  

<script setup>
import { ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

//Definicion de variables
const pokemon = ref({
        imagen:'',
        nombre:'',
        tipo1:'',
        tipo2:''
      })

const route = useRoute(); // Usa useRoute para acceder a la ruta actual


const cargarPokemon = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
    const data = response.data;
    console.log(data);

    const nuevoPokemon = {
      imagen: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      tipo1: data.types[0].type.name,
      tipo2: data.types[1].type.name
    };

    // Actualiza el objeto pokemon con el nuevoPokemon
    pokemon.value = nuevoPokemon;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};



// Llama a cargarPokemon cuando se monta el componente
onMounted(cargarPokemon);



</script>
<style scoped>

:root{
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

</style>
<script>
export default {};
</script>
  