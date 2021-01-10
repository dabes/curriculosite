<template>
  <div class="container-fluid">
    <h5 class="card-title hidden nome-print" id="carreira">
      <div style="height: 10px"></div>
      <img class="hidden img-print" src="../assets/img/carreira.jpg" />
      Carreira
    </h5>
  </div>
  <ul class="timeline">
    <!-- <li><div class="tldate">2021</div></li> -->
    <li
      :class="index % 2 == 0 ? 'timeline-inverted' : ''"
      v-for="(dados, index) in data"
      :key="dados._id"
    >
      <div class="tl-circ d-print-none"></div>
      <div class="timeline-panel">
        <div class="tl-heading">
          <h4>{{ dados.company }}</h4>
          <p>
            <small class="text-muted">
              <i class="glyphicon glyphicon-time"></i>{{ dados.timefrom }} até
              {{ dados.timeto === "" ? "..." : dados.timeto }}
            </small>
          </p>
        </div>
        <hr />
        <div class="tl-body">
          <h5>{{ dados.position }}</h5>
          <p>
            {{ dados.description }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<style></style>

<script>
export default {
  name: "Timeline",
  props: {
    curriculoUid: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      data: [
        {
          company: "",
          timefrom: "",
          timeto: "",
          position: "",
          description: "",
          _id: "",
        },
      ],
    };
  },
  mounted() {
    window.axios
      .get(process.env.VUE_APP_API + "/api/carreira/" + this.curriculoUid)
      .then((response) => {
        this.data = response.data;
      });
  },
};
</script>
