<template>
  <span>{{ prefix + Number.parseFloat(value).toFixed(precision) }}</span>
</template>

<script>
export default {
  name: "priceSegment",
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "Rp",
    },
    precision: {
      type: Number,
      default: 2,
    },
  },
};
</script>
