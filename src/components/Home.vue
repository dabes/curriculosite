<template>
    <div class="container-fluid page-container">
        <Menu :title="data.name" />
        <div class="container-fluid">
            <div class="container-fluid top-card-primary-blue d-print-none">
                <div class="social-media-top-right">
                    <a :href="data.facebook" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24"
                            height="40"
                            viewBox="0 0 24 24"
                            width="40"
                        >
                            <rect fill="none" height="40" width="40" />
                            <path
                                class="icon-white"
                                d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"
                            />
                        </svg>
                    </a>
                    <br />
                    <a :href="data.linkedin">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            focusable="false"
                            width="40"
                            height="40"
                            style="
                                -ms-transform: rotate(360deg);
                                -webkit-transform: rotate(360deg);
                                transform: rotate(360deg);
                            "
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                class="icon-white"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                                fill="#626262"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="card center">
                <div class="card-body card-top-spacing-200 info">
                    <img
                        class="rounded-circle z-depth-2 rounded-circle-border d-print-none"
                        alt="profile"
                        :src="data.imagePath"
                        data-holder-rendered="true"
                    />
                    <h5 class="card-title d-print-none">{{ data.title }}</h5>
                    <h5 class="card-title hidden nome-print">
                        {{ data.name }}
                    </h5>
                    <p class="card-text">{{ data.description }}</p>
                    <p>
                        <a
                            class="btn d-print-none"
                            :href="link.path"
                            :class="link.props"
                            v-for="(link, index) in links"
                            :key="index"
                            v-on:click="
                                handdle($event, link.click, link.prevent)
                            "
                            >{{ link.label }}</a
                        >
                    </p>
                </div>
            </div>
        </div>
        <div id="CV" class="CV" :class="{ hidden: !isActive }">
            <Informacoes :curriculoUid="data._id" v-if="data._id" />
            <div style="height: 10px"></div>
            <Formacao :curriculoUid="data._id" v-if="data._id" />
            <Timeline :curriculoUid="data._id" v-if="data._id" />
            <Habilidades :curriculoUid="data._id" v-if="data._id" />
        </div>
        <footer class="card-footer footer d-print-none">
            <span class="text-muted"
                ><p class="foot-last">
                    © 2020-2021 Daniel Dabés Design. All rights reserved.
                </p></span
            >
        </footer>
    </div>
</template>

<script>
import Menu from "./Menu.vue";
import Timeline from "./Timeline.vue";
import Habilidades from "./Habilidades.vue";
import Informacoes from "./Informacoes.vue";
import Formacao from "./Formacao.vue";

export default {
    name: "Home",
    components: { Menu, Timeline, Habilidades, Informacoes, Formacao },
    data() {
        return {
            isActive: false,
            data: {
                title: "",
                name: "",
                _id: "",
                description: "",
                facebook: "",
                linkedin: "",
                imagePath: "",
            },
            links: [
                {
                    path: "",
                    label: "Conheça mais no Curriculo",
                    props: "btn-primary my-2",
                    click: "toggleCV",
                    prevent: true,
                },
                {
                    path: "portifolio/projetos",
                    label: "Ou no Portifolio",
                    props: "btn-secondary my-2",
                },
                {
                    label: "Ou Imprimir Curriculo",
                    path: "#",
                    print: true,
                    prevent: true,
                    props: "btn-secondary my-2",
                    click: "printCV",
                },
            ],
        };
    },
    mounted() {
        window.axios
            .get("https://api.dabes.com.br/api/curriculo")
            .then((response) => {
                for (var key in response.data) {
                    this.data = response.data[key];
                    this.data.imagePath = require("../assets/img/" +
                        this.data._id +
                        ".jpeg");
                }
            });
    },
    methods: {
        handdle(ev, click, prevent) {
            if (prevent) ev.preventDefault();
            if (click == "toggleCV") this.toggleCV();
            if (click == "printCV") this.printCV();
        },
        toggleCV() {
            this.isActive = !this.isActive;
        },
        printCV() {
            // var htmlPage = window.location.pathname;
            document.title = "Curriculo de Daniel Vieira Dabés";
            var cv = document.getElementById("CV");
            cv.className = "CV";

            window.print();
        },
    },
};
</script>

<style>
</style>