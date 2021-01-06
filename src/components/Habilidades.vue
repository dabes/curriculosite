<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card-body formacao">
                    <h5
                        class="card-title"
                        style="font-size: 1.5rem; font-weight: 300"
                    >
                        <img
                            class="hidden img-print"
                            src="../assets/img/coding.png"
                        />
                        Habilidades
                    </h5>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Avançados</h5>
                        <template v-for="dados in data">
                            <ProcessBar
                                :title="dados.name"
                                :percent="dados.percent"
                                :key="dados._id"
                                v-if="dados.type === 'avancado'"
                            />
                        </template>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Intermediários</h5>
                        <template v-for="dados in data">
                            <ProcessBar
                                :title="dados.name"
                                :percent="dados.percent"
                                :key="dados._id"
                                v-if="dados.type === 'intermediario'"
                            />
                        </template>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Pessoal</h5>
                        <template v-for="dados in data">
                            <ProcessBar
                                :title="dados.name"
                                :percent="dados.percent"
                                :key="dados._id"
                                v-if="dados.type === 'pessoal'"
                            />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>
import ProcessBar from "./ProgressBar.vue";
export default {
    name: "Habilidades",
    components: { ProcessBar },
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
                    name: "",
                    percent: "",
                    bar: "",
                },
            ],
        };
    },
    mounted() {
        window.axios
            .get("https://api.dabes.com.br/api/habilidade/" + this.curriculoUid)
            .then((response) => {
                this.data = response.data;
            });
    },
};
</script>

