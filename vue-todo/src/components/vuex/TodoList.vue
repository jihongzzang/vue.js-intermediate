<template>
  <div>
    <TransitionGroup tag="ul" name="list">
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem" class="shadow">
        <i
          class="checkBtn fa-solid fa-check"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete({ index })"
        ></i>
        <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({ index })">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { TransitionGroup } from 'vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    // same expression

    // removeTodo(_, index) {
    //   this.$store.commit('removeOneItem', index);
    // },

    // toggleComplete(_, index) {
    //   this.$store.commit('toggleOneItem', index);
    // },

    ...mapMutations({ removeTodo: 'removeOneItem', toggleComplete: 'toggleOneItem' }),
  },

  computed: {
    // same expression

    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // },

    // ...mapGetters({ todoItems: 'storedTodoItems' }),

    ...mapGetters(['storedTodoItems']),
  },

  components: { TransitionGroup },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트랜지션 효과 */
/* 1. declare transition */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
