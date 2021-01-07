<template>
    <div
        class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow d-print-none"
    >
        <h5 class="my-0 mr-md-auto font-weight-normal">{{ title }}</h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <ul class="nav nav-tabs">
                <li
                    class="nav-item"
                    v-for="(item, index) in menu"
                    :key="index"
                    :class="item.type === 'dropdown' ? item.type : ''"
                >
                    <a
                        class="nav-link"
                        :class="item.props"
                        :href="item.link"
                        v-if="item.type === 'item' && !item.print"
                        :target="item.target"
                        >{{ item.label }}</a
                    >

                    <a
                        class="nav-link"
                        :class="item.props"
                        :href="item.link"
                        v-on:click.prevent="printPDF()"
                        v-if="item.type === 'item' && item.print"
                        :target="item.target"
                        >{{ item.label }}</a
                    >

                    <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        v-if="item.type === 'dropdown'"
                        >{{ item.label }}</a
                    >
                    <div class="dropdown-menu" v-if="item.type === 'dropdown'">
                        <div
                            v-for="(subitem, subindex) in item.link"
                            :key="subindex"
                        >
                            <div
                                class="dropdown-divider"
                                v-if="subitem.divider === true"
                            ></div>
                            <a
                                class="dropdown-item"
                                :class="subitem.props"
                                :href="subitem.link"
                                :target="subitem.target"
                                >{{ subitem.label }}</a
                            >
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
</style>


<script>
export default {
    name: "Menu",
    props: { title: { type: String, default: "Menu" } },
    data() {
        return {
            menu: [
                {
                    type: "item",
                    label: "Home",
                    link: "/",
                    props: "active",
                },
                {
                    type: "dropdown",
                    label: "Portifolio",
                    props: "",
                    link: [
                        {
                            type: "item",
                            label: "Projetos Feitos",
                            link: "/portifolio/projetos",
                            props: "",
                        },
                        {
                            type: "item",
                            label: "Componentes",
                            link: "/portifolio/componentes",
                            props: "",
                        },
                        {
                            type: "item",
                            label: "GitHub",
                            link: "https://github.com/dabes",
                            props: "",
                            target: "_blank",
                            divider: true,
                        },
                    ],
                },
            ],
        };
    },
    methods: {},
};
</script>

