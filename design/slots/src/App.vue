<template>
  <div>
    <ul>
      <Item v-for="item in items" :key="item">{{ item }}</Item>
    </ul>
    <ul>
      <Item>아이템 1</Item>
      <Item>아이템 2 <button>click me</button></Item>
      <Item>아이템 3 <img src="./assets/logo.png" alt="로고" width="50px" height="50px" /></Item>
      <Item>
        <div style="color: blue; font-size: 20px">아이템 4</div>
      </Item>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Item.vue';

export default {
  components: {
    Item,
  },

  data() {
    return { items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5'] };
  },
};
</script>
