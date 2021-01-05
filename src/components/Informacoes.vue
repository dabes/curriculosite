<template>
    <div class="container-fluid">
        <div class="card left">
            <div class="card-body info">
                <h5 class="card-title">
                    <img
                        class="hidden img-print"
                        src="../assets/img/identidade.jpg"
                    />
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
            .get("http://localhost:3000/api/informacoes/" + this.curriculoUid)
            .then((response) => {
                for (var key in response.data) {
                    this.data = response.data[key];
                }
            });
    },
};
</script>