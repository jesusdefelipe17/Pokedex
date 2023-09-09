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
                      <a class="text-xxs md:text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1}">
                        Estadisticas Basicas
                      </a>
                    </li>
                    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                      <a class="text-xxs md:text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-pink-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2}">
                        Habilidades
                      </a>
                    </li>
                    <li class="-mb-px mr-2 flex-auto text-center custom-margin">
                      <a class="text-xxs md:text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-pink-600 bg-white': openTab !== 3, 'text-white bg-pink-600': openTab === 3}">
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
                        <div class="items-center" v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                          <div class="flex flex-col sm:flex-row">
                            <div v-for="(ability, index) in pokemon.abilities" :key="index" class="flex justify-center bg-gray-50 p-2">
                              <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 w-80">
                                <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-300 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md sm:flex-col justify-center">
                                  <div class="flex items-center">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-blue-300 transition-all duration-300 group-hover:bg-blue-300">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                                        <path d="M 30 50
                                          a 1 1 1 0 1 40 0
                                          h-12.5
                                          a 1 1 1 0 0 -15 0
                                          z"
                                          fill="#f00" stroke="#222"
                                        ></path>
                                        <circle
                                          cx="50"
                                          cy="50"
                                          r="5"
                                          fill="#222" stroke="#222"
                                        ></circle>
                                        <path d="M 30 50
                                          a 1 1 1 0 0 40 0
                                          h-12.5
                                          a 1 1 1 0 1 -15 0
                                          z"
                                          fill="#fff" stroke="#222"
                                        ></path>
                                      </svg>
                                    </span>
                                    <p class="ml-2 font-bold ml-6 md:ml-12 ">{{ ability.nombre }}</p>
                                  </div>
                                  <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-black/90">
                                    <p>{{ ability.descripcion }}</p>
                                  </div>
                                  <div class="pt-5 text-base font-semibold leading-7">
                                    <p>
                                      <a href="#" class="text-sky-500 transition-all duration-300 group-hover:text-black">Read the docs &rarr;</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
              <button v-show="pokemon.tipo1 != ''" class="h-10 px-5 md:mr-3 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800 mt-3 custom-margin-r">{{ pokemon.tipo1 }}</button>
              <button v-show="pokemon.tipo2 != ''" class="h-10 px-5 text-green-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-green-800 mt-3 ">{{ pokemon.tipo2 }}</button>
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

let estadisticas = {
      nombre:'',
      valor:''
}
let habilidad = {
      nombre:'',
      descripcion:''
}

const stats = [];
const abilities = [];


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
        apariencia:'',
        stats:[estadisticas],
        habilidades:[habilidad]
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
    

    for (let index = 0; index < data.stats.length; index++) {
      let estadisticasNuevas= {
        nombre:'',
        valor:''
      }
      estadisticasNuevas.valor = data.stats[index].base_stat;
      estadisticasNuevas.nombre = data.stats[index].stat.name;
      estadisticas = estadisticasNuevas;
      stats.push(estadisticas);
    }


    for (let index = 0; index < data.abilities.length; index++) {

      const url = data.abilities[index].ability.url

      const responseHabilidad = await axios.get(url);
      const dataHabilidad = responseHabilidad.data;

      let descrip = '';


      for (let i = 0; i < dataHabilidad.flavor_text_entries.length; i++) {
        if (dataHabilidad.flavor_text_entries[i].language.name === 'es') {
          descrip = dataHabilidad.flavor_text_entries[i].flavor_text;
          break; // Detenemos el bucle una vez que encontramos el texto en español
        }
      }

      if (!descrip) {
        descrip = ''; // Otra acción por defecto si no se encuentra la descripción en español
      }

      let habilidadNueva = {
        nombre:dataHabilidad.names[5].name,
        descripcion:descrip
      } 
      habilidad = habilidadNueva;
      abilities.push(habilidad);
    }

    console.log(data)

    //Sacamos el tipo 1 de pokemon 
    let tipo1 = '';
    let url = data.types[0].type.url
    let responseTipos = await axios.get(url);
    let dataTipos = responseTipos.data;
    for (let i = 0; i < dataTipos.names.length; i++) {
      if (dataTipos.names[i].language.name === 'es') {
        tipo1 = dataTipos.names[i].name;
        break; // Detenemos el bucle una vez que encontramos el texto en español
      }
    }
   

    //Sacamos el tipo 2 de pokemon 
    let tipo2 = '';
    if(data.types[1]!=undefined){
      url = data.types[1].type.url
      responseTipos = await axios.get(url);
      dataTipos = responseTipos.data;
      for (let i = 0; i < dataTipos.names.length; i++) {
        if (dataTipos.names[i].language.name === 'es') {
          tipo2 = dataTipos.names[i].name;
          break; // Detenemos el bucle una vez que encontramos el texto en español
        }
      }
    }
   


    const nuevoPokemon = {
      imagen: data.sprites.other.dream_world.front_default,
      nombre: data.name.toUpperCase(),
      tipo1: tipo1.toUpperCase(),
      tipo2: tipo2.toUpperCase(),
      descripcionPokemon:descrip,
      peso: data.weight / 10, // Convierte de decímetros a metros
      altura: data.height / 10, // Convierte de centímetros a metros
      experiencia:data.base_experience,
      numeroPokedex:data.id,
      genero:data2.gender_rate == 1 ? 'Macho' : 'Hembra',
      apariencia:data3.names[5].name,
      stats:stats,
      abilities: abilities
    };

    //Datos del Pokemon

    // Actualiza el objeto pokemon con el nuevoPokemon
    pokemon.value = nuevoPokemon;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};



// Llama a cargarPokemon cuando se monta el componente


onMounted(() => {
  cargarPokemon().then(()=>{
    //Charts

var options = {
      series: [
        {
          name: "Estadisticas Basicas",
          color: "#31C48D",
          data: [stats[0].valor, stats[1].valor, stats[2].valor, stats[3].valor, stats[4].valor, stats[5].valor],
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
          return value
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
            return value
          }
        },
        categories: ["Hp", "Ata", "Def", "Ata Esp", "Def Esp", "Vel"],
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
    if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("bar-chart"), options);
    chart.render();
  }
  });
  
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
  