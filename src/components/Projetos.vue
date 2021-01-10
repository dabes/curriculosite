<template>
  <div class="container-fluid">
    <Menu :title="data.name" />
    <div class="row">
      <div
        class="col-sm-3 mb-3 d-flex align-items-stretch"
        v-for="(cada, index) in data.projects"
        :key="index"
      >
        <div class="card" style="width: 100%">
          <img class="card-img-top" :src="cada.img" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ cada.name }}</h5>
            <p class="card-text">
              {{ cada.description }}
            </p>
          </div>
          <div class="card-footer">
            <a
              :href="'../portifolio/projetos/' + cada._id"
              class="btn btn-primary"
              >Ver mais</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  name: "Projetos",
  components: { Menu },
  data() {
    return {
      data: {
        name: "Daniel Vieira Dabés",
        projects: [
          {
            name: "Migrador",
            description:
              "Escrito em python, conecta as bases de origem e de destino em PostgreSQL para transferir os dados de um banco para outro. Concebido para facilitar as migrações das áreas devido ao dominio do banco de dados de destino por parte dos colaboradores.",
            img: require("../assets/img/migrador.png"),
            _id: "migrador",
          },
          {
            name: "Coletor",
            description:
              "Escrito em python com django, conecta as bases dos clientes para efetuar operações de monitoramento, coleta de informações e execução remota de procedimentos.",
            img: require("../assets/img/coletor/coletor.png"),
            _id: "coletor",
          },
          {
            name: "App Obras",
            description:
              "Escrito em React Native, para coleta de informações a partir de dispositivo móvel para melhor experiência do usuário.",
            img: require("../assets/img/sgpobras.jpeg"),
            _id: "sgpobras",
          },
          {
            name: "Backend",
            description:
              "Escrito em node, conecta ao MongoDB usando métodos de modelagem avançados para entregar uma API RESTFull.",
            img: require("../assets/img/backend.png"),
            _id: "backend",
          },
        ],
      },
    };
  },
};
</script>

<style></style>
