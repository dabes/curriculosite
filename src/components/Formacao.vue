<template>
  <div class="container-fluid">
    <div class="card left">
      <div class="card-body formacao">
        <h5 class="card-title">
          <img
            class="hidden img-print"
            src="../assets/img/formacao.png"
          />Formação Acadêmica
        </h5>
        <p class="card-text text-left">
          <text class="font-bolder">Curso:</text> {{ data.curso }}
        </p>
        <p class="card-text text-left">
          <text class="font-bolder">Grau:</text> {{ data.grau }}
        </p>
        <p class="card-text text-left">
          <text class="font-bolder">Instituição:</text>
          {{ data.instituicao }}
        </p>
        <p class="card-text text-left">
          <text class="font-bolder">Início:</text> {{ data.inicio }}
        </p>
        <p class="card-text text-left">
          <text class="font-bolder">Estado:</text> {{ data.estado }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formacao",
  props: {
    curriculoUid: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      data: {
        curso: "",
        grau: "",
        instituicao: "",
        inicio: "",
        estado: "",
        _id: "",
      },
    };
  },
  mounted() {
    window.axios
      .get(process.env.VUE_APP_API + "/api/formacao/" + this.curriculoUid)
      .then((response) => {
        for (var key in response.data) {
          this.data = response.data[key];
        }
      });
  },
};
</script>
