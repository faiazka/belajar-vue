<template>
  <span>{{ value }}</span>
</template>

<script>
export default {
  name: "CurrencyFormat",
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>
