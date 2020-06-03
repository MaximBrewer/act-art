<template>
  <mdb-masonry horizontal>
    <mdb-masonry-item :itemStyle="{'width': '222px', 'margin': '0px'}">1</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '102px', 'margin': '0px'}">2</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '155px', 'margin': '0px'}">3</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '365px', 'margin': '0px'}">4</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '132px', 'margin': '0px'}">5</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '106px', 'margin': '0px'}">6</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '199px', 'margin': '0px'}">7</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '164px', 'margin': '0px'}">8</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '424px', 'margin': '0px'}">9</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '467px', 'margin': '0px'}">10</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '350px', 'margin': '0px'}">11</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '296px', 'margin': '0px'}">12</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '440px', 'margin': '0px'}">13</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '110px', 'margin': '0px'}">14</mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width': '413px', 'margin': '0px'}">15</mdb-masonry-item>
  </mdb-masonry>
</template>
<script>
  import { mdbMasonry, mdbMasonryItem } from 'mdbvue';
  export default {
    name: 'MansonryPage',
    components: {
      mdbMasonry,
      mdbMasonryItem
    }
  };
</script>