<template>
  <div
    class="picture b-fixed-props"
    :data-size="item.SIZE"
    :data-props="item.PROPS"
    :style="`background-image: url('`+item.PATH+`');height:`+item.PROPS.split(',')[1]*240+`px;width:`+item.PROPS.split(',')[0]*240+`px;`"
  >
    <div class="picture-inner">
      <a :href="item.ARTICLE" target="_self" class="lookFullSize">
        <span class="ico-holder">
          <span class="ia icon-logo-eye"></span>
        </span>
      </a>
      <div class="pic-description">
        <h5 class="tag">{{ item.TAG }}</h5>
        <h5 class="title">{{ item.TITLE }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style>
</style>