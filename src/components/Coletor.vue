<template>
    <div class="container-fluid">
        <Menu :title="data.name" />
        <div class="card">
            <div class="card-header">
                <h1>Coletor</h1>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4 text-justify">
                        <h5>
                            Iniciado pela necessidade de efetuar coletas de
                            dados para os gerentes de negocios em toda a massa
                            de clientes. O coletor usa Django para sua frontend
                            e o Fabric para conectar nos clientes e retornar
                            dados.
                            <br /><br />
                            Ainda pode-se selecionar as colunas que deseja
                            exibir/esconder para uma customização mais pessoal.
                            O painel de clientes ainda pode ser filtrado por
                            letra, ou campo assincrono de pesquisa.
                            <br /><br />
                            Caso as coletas rodem e algum dos clientes
                            selecionados não estiver conectado o coletor ao ser
                            disparado novamente irá tentar coletar destes que
                            não estavam online. No modo automatico o coletor
                            roda de forma idependente 4 veses ao dia efetuando
                            as coletas do dia de forma incremental para tentar
                            pegar todos os dados de todos os clientes.
                        </h5>
                    </div>
                    <div class="col-8">
                        <img
                            class="img-thumbnail img-fluid"
                            src="../assets/img/coletor/coletor.png"
                        />
                    </div>
                </div>
                <hr class="clear" />
                <div class="row">
                    <div class="col-5">
                        <img
                            class="img-thumbnail img-fluid"
                            src="../assets/img/coletor/coletor_5.png"
                        />
                    </div>
                    <div class="col-7 text-justify">
                        <h5>
                            As coletas cadastradas podem ser efetuadas de 2
                            maneiras, manual ou agendada. No caso da agendada
                            pode-se agendar com data fixa ( dia/mês/ano ),
                            coleta semanal onde pode escolher um ou mais dias da
                            semana ( ex: Sábado e Segunda) ou coleta mensal onde
                            pode-se escolher em qual ou quais dias do mês irá
                            rodar.
                            <br /><br />
                            Os dados são coletados por 3 métodos, banco de
                            dados, comandos linux ou conteúdo de link/arquivo
                            que são usados com datatable e o gerador de
                            relatórios que lê o dado coletado e o tabela baseado
                            num delimitador informado, permitindo analise,
                            export e filtros.
                            <div class="clear" />
                            <img
                                class="img-thumbnail img-fluid"
                                src="../assets/img/coletor/coletor_3.png"
                            />
                        </h5>
                    </div>
                </div>
                <hr class="clear" />
                <div class="row">
                    <div class="col-4 text-justify">
                        <h5>
                            No mesmo sistema foi criado uma plataforma de status
                            dos clientes e comandos remotos que podem executar
                            tarefas com retorno de log em tempo real para os
                            programadores e time de suporte.
                        </h5>
                        <p>
                            Obs: Todos nomes de clientes e parceiros foram
                            omitidos para preservar sua privacidade.
                        </p>
                    </div>
                    <div class="col-8">
                        <img
                            class="img-thumbnail img-fluid"
                            src="../assets/img/coletor/coletor_2.png"
                        />
                    </div>
                </div>

                <hr class="clear" />
                <div class="row">
                    <div class="col">
                        <h5>
                            <p class="text-justify">
                                O sistema usa um duplo sistema de autenticação
                                por meio do email corporativo, usando
                                autenticação Google ou com a senha universal
                                interna de cada operador.
                            </p>
                        </h5>
                        <img
                            class="img-thumbnail img-fluid center"
                            src="../assets/img/coletor/coletor_4.png"
                        />
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
            },
        };
    },
};
</script>

<style>
</style>