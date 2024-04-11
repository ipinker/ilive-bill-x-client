<template>
	<text class="ILoadingIcon"></text>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { genPx } from "../../common/style";
const props = defineProps({
    color: {
        type: String,
        default: ""
    },
    size: {
        type: [String, Number],
        default: "32"
    }
})
const fontSize = computed(() => genPx(props.size))
</script>

<style lang="scss" scoped>
    .ILoadingIcon {
        display: inline-block;
        width: v-bind(fontSize);
        height: v-bind(fontSize);
        border-radius: 50%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA8dJREFUeF7tmsmL1UAQh7/Bfd9XFERcccGDHhQEL3rxX/DP865nvSiC4slBFAQRFNz3Bff9NybShE56TTKPpODxmDedStWXrq7q6kwxcJkauP+MAHqaAQI/H5hT3P8n8A343bU9fc2ABYbzpc+C8HUoABbXOPppBNAxgb5CYJwBYwjYCUzEGqCw0SouUer6FRG2OUNAutYXNjwubPI2KXQNUO5eZGhX3v4MfPe+47+BuQDI8Z3APOP+N4HXvvaEAlgO1upRUzcEQg4AG4E9Fkf1QK63BWBFg+IQCKkANgG7G2y51BaApZYKzryXL4QUABuAvQ0OvgNutAVAsVZnfHlPHwixANYB+xzO3QJetgVAenNAiNkLrAEOOBy7DbzwdV7jQhfBUncqhNDd4ErgUG7nUwD4zATVBx8j6wTT1yXAkTacTwXgA0Hb2y8hU9IydhugT50ET3tTUWwImDqawqFtAEnO55gBTWuCQuBD4tMvLz9qlN/lb8nO5wQgXXMLI/X9o4j/TP7PqNkBbAHeAveL72T9OUIg2Yg+FYwA+qQ/G+49zoDZ8BT6tME2A/Sbmh7loYXLPvXztQfv+lBDzRn1A1Qp+oiq0jvVjlEVgP7WjkupLESU9rQJ6QqCnD8DrAoxEnjzN52eNSFUAWibqo1HjCg/d9XUPAicjDESuAiobTYjVQDLAH1iRFVfrsrPdX9Vhsdcg2r+fxW4Vgdg8DNg8GtAGRaDzQKRYTW5l42V4OQ+uzyWjzMgD8fOtOiBZa02c84A1RDq3SuDqO5+lBHLQuAwsBXQyc80oJPgZMkFQNWjzutM0dG5Wlc55FQB19R1BXiYqjwHAJvzpV2vAH1SRMffevo2SYaQCqDJeRmcA8B+x5FYEoQUAC7nBUAhoFBIEb2TcNqhIBpCLAAf5xWfddtjLZSa2quLVV379LtFY8Xmq9rhx9uAEAPAx3llAGWCOtF+Xs6botda/u/TLRe2AiEUgF6Q2Ox4Ek88+gInLDqU3y87dGeHEApAedh8Sapq71PgvUfA2wDoMp9XW1wQdB553vdUOhTArgbnnhVFiof/pACQfheEC77pNxTA9pqGqe+TL+GkAmiCoLfVzgHqVjslFIBSkl5PK0U3ee4R81VDcgCog6Ce3wOn58WAUAC6TOcFZedYTdCYPJ8LgOxZW6RU+XIPUCh6SwwAb+UNA3MCSLJnBJCEL/7icQbUsPOpA+KxW64cQyArTn9lMXsBf+0BI/uaAeZuUOZqI9S0GwxwKWxoXwDCrGxx9AigRbgToXrwM+APcDK/QZvIX7IAAAAASUVORK5CYII=);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        animation: defaultLoading 1.25s linear infinite;
}

@keyframes defaultLoading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
