<!-- PaginaA.vue -->
<template>
  <div class="main">
    <div class="p-4 md:p-16">
      <div class="p-10 pb-60 bg-white shadow mt-24" style="background-color: #F2F2F2;">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="grid grid-cols-3 text-center order-last md:order-first mt-10 md:mt-0">
            <div>
              <p class="text-gray-400">Peso</p>
              <p class="font-bold text-gray-700 text-xl">{{ pokemon.peso }} KG</p>
            
            </div>
            <div>
              <p class="text-gray-400">Altura</p>
              <p class="font-bold text-gray-700 text-xl">{{ pokemon.altura }} M</p>
            </div>
            <div>
              <p class="text-gray-400">Experiencia</p>
              <p class="font-bold text-gray-700 text-xl">{{ pokemon.experiencia }}</p>
            </div>
          </div>
          <div class="relative">
            <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img class="my-10 mx-auto h-32 w-32 m" :src="pokemon.imagen" alt="" />
            </div>
            <h1 class="text-5xl font-medium text-gray-700 text-center mt-28">{{ pokemon.nombre }}</h1>
          </div>

          <div class="grid grid-cols-3 text-center order-last md:order-last mt-10 mb-10 md:mt-0">
            <div>
              <p class="text-gray-400">Nº PokeDex</p>
              <p class="font-bold text-gray-700 text-xl">{{ pokemon.numeroPokedex }}</p>
              
            </div>
            <div>
              <p class="text-gray-400">Genero</p>
              <p class="font-bold text-gray-700 text-xl">{{ pokemon.genero }}</p>
            </div>
            <div>
              <p class="text-gray-400">Color</p>
              <p class="font-bold text-gray-700 text-xl">{{ pokemon.apariencia }}</p>
              
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Contenido del primer elemento (an artist of considerable range) -->
          <div class="col-span-2 md:col-span-1">
            <div class="mt-18 md:mt-14 flex flex-col justify-center items-center"> <!-- Agrega 'items-center' aquí -->
              
              <!--Aqui empieza los tabs-->
              <div class="w-full flex flex-wrap">
                <div class="w-full">
                  <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                      <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1}">
                        Profile
                      </a>
                    </li>
                    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                      <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-pink-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2}">
                        Settings
                      </a>
                    </li>
                    <li class="-mb-px mr-2 flex-auto text-center custom-margin">
                      <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-pink-600 bg-white': openTab !== 3, 'text-white bg-pink-600': openTab === 3}">
                        Options
                      </a>
                    </li>
                  </ul>
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div class="px-4 py-5 flex-auto">
                      <div class="tab-content tab-space">
                        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          
                          <div id="bar-chart"></div>
                            
                        </div>
                        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                          <p>
                            Completely synergize resource taxing relationships via
                            premier niche markets. Professionally cultivate one-to-one
                            customer service with robust ideas.
                            <br />
                            <br />
                            Dynamically innovate resource-leveling customer service for
                            state of the art customer service.
                          </p>
                        </div>
                        <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely deliverables for
                            real-time schemas.
                            <br />
                            <br />
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!--Aqui acaba los tabs-->
            </div>
          </div>

          <!-- Contenido del segundo elemento (nombre, tipos y descripción) -->
          <div class="md:mt-12 text-center border-b pb-12">
            <h1 class="text-2xl font-medium text-gray-700">TIPO</h1>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="items-center md:col-start-2 md:col-end-4 mt-5">
              <button class="h-10 px-5 md:mr-3 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800 mt-3 custom-margin-r">{{ pokemon.tipo1 }}</button>
              <button class="h-10 px-5 text-green-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-green-800 mt-3 ">{{ pokemon.tipo2 }}</button>
            </div>
          </div>
            <p class="mt-8 text-gray-500">{{ pokemon.descripcionPokemon }}</p>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>
  

<script setup>
import { ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import ApexCharts from 'apexcharts';

//Definicion de variables
const pokemon = ref({
        imagen:'',
        nombre:'',
        tipo1:'',
        tipo2:'',
        descripcionPokemon:'',
        peso:'',
        altura:'',
        experiencia:'',
        numeroPokedex:'',
        apariencia:''
      })



const route = useRoute(); // Usa useRoute para acceder a la ruta actual


const cargarPokemon = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
    const data = response.data;
    const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${route.params.id}`);
    const data2 = response2.data;

    const colorIdioma = await axios.get(data2.color.url);
    const data3 = colorIdioma.data;

    let descrip = '';

    if (data2.flavor_text_entries[26] && data2.flavor_text_entries[26].language.name === 'es') {
      descrip = data2.flavor_text_entries[26].flavor_text;
    } else if (data2.flavor_text_entries[27] && data2.flavor_text_entries[27].language.name === 'es') {
      descrip = data2.flavor_text_entries[27].flavor_text;
    } else {
      descrip = ''; // Otra acción por defecto si no se encuentra la descripción en español
    }
    

   console.log(data2)

    const nuevoPokemon = {
      imagen: data.sprites.other.dream_world.front_default,
      nombre: data.name.toUpperCase(),
      tipo1: data.types[0].type.name.toUpperCase(),
      tipo2: data.types.length > 1 ? data.types[1].type.name.toUpperCase() : '',
      descripcionPokemon:descrip,
      peso: data.weight / 10, // Convierte de decímetros a metros
      altura: data.height / 10, // Convierte de centímetros a metros
      experiencia:data.base_experience,
      numeroPokedex:data.id,
      genero:data2.gender_rate == 1 ? 'Macho' : 'Hembra',
      apariencia:data3.names[5].name
    };

    // Actualiza el objeto pokemon con el nuevoPokemon
    pokemon.value = nuevoPokemon;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Charts

var options = {
      series: [
        {
          name: "Income",
          color: "#31C48D",
          data: ["1420", "1620", "1820", "1420", "1650", "2120"],
        },
        {
          name: "Expense",
          data: ["788", "810", "866", "788", "1100", "1200"],
          color: "#F05252",
        }
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        type: "bar",
        width: "100%",
        height: 400,
        toolbar: {
          show: false,
        }
      },
      fill: {
        opacity: 1,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "100%",
          borderRadiusApplication: "end",
          borderRadius: 6,
          dataLabels: {
            position: "top",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
        formatter: function (value) {
          return "$" + value
        }
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          formatter: function(value) {
            return "$" + value
          }
        },
        categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        }
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -20
        },
      },
      fill: {
        opacity: 1,
      }
    }

// Llama a cargarPokemon cuando se monta el componente
onMounted(cargarPokemon);

onMounted(() => {
  if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("bar-chart"), options);
    chart.render();
  }
});

   

</script>
<style scoped>

:root{
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
@media (max-width: 639px) {
  .custom-margin {
    margin-top: 4%;
  }
  .custom-margin-r{
    margin-right: 4%;
  }
}

</style>
<script>
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
  