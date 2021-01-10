<template>
  <div class="container-fluid">
    <div class="card left">
      <div class="card-body info">
        <h5 class="card-title">
          <img class="hidden img-print" src="../assets/img/identidade.jpg" />
          Informações Pessoais
        </h5>
        <p class="card-text text-left">
          <text class="font-bolder">E-mail:</text>
          {{ data.email }}
        </p>
        <p class="card-text text-left">
          <text class="font-bolder">Idade:</text> {{ data.idade }}
        </p>
        <p class="card-text text-left">
          <text class="font-bolder">Sexo:</text> {{ data.sexo }}
        </p>
        <p class="card-text text-left">
          <text class="font-bolder">Estado Civil:</text>
          {{ data.estadoCivil }}
        </p>
        <p class="card-text text-left hidden nome-print">
          <text class="font-bolder">Linkedin:</text>
          {{ linkReplaceChar }}
        </p>
        <p class="card-text text-left hidden nome-print">
          <text class="font-bolder">Facebook:</text>
          {{ facebookUrl }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Informacoes",
  props: {
    curriculoUid: {
      type: String,
      default: "",
    },
    linkedinUrl: {
      type: String,
      default: "",
    },
    facebookUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      data: {
        email: "",
        idade: "",
        dataNascimento: "",
        sexo: "",
        estadoCivil: "",
        _id: "",
      },
    };
  },
  mounted() {
    window.axios
      .get(process.env.VUE_APP_API + "/api/informacoes/" + this.curriculoUid)
      .then((response) => {
        for (var key in response.data) {
          this.data = response.data[key];
        }
      });
  },
  computed: {
    linkReplaceChar() {
      return this.linkedinUrl.replace("%C3%A9", "é");
    },
  },
};
</script>
