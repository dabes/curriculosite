<template>
    <div :class="className ? className : ''">
        <div class="row">
            <div class="col-sm-9 text-left">{{ title }}</div>
            <div class="col-sm-3 text-right">{{ percent }}%</div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="progress">
                    <div
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: percent + '%' }"
                        :aria-valuenow="percent"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: {
        title: {
            type: String,
            default: "TITULO",
        },
        percent: {
            type: String,
            default: "50",
        },
        className: {
            type: String,
            default: "mb-3",
        },
    },
};
</script>