
<script setup>
import { } from 'vue';
defineProps({
  mensaje: String,
  titulo:String,
  img:String,
  nombrePokemon:String,
})

const emits = defineEmits(['ocultarContenido']);


function handleClick() {
  // Emitir el evento al componente padre para ocultar el contenido
  emits('ocultarContenido');
}

</script>

<template>
  
      <div class="card max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-stone-600 duration-300">
          <a href="#">
            <!-- Utiliza v-bind o :src para vincular el valor de img al atributo src -->
            <img class="my-10 mr-5 h-32 w-32 m" :src="img" alt="" />
            
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ titulo }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ mensaje }}</p>

            <router-link :to="`/Pokemons/${nombrePokemon}`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <div @click="handleClick">
              Leer más
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </div>
              
          </router-link>
          </div>
        </div>
  
</template>

<style>

.card{
    margin-top: 5%;
    margin-left: 5%;
}




</style>
  