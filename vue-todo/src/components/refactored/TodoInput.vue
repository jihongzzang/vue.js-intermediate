<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <span class="addContainer addBtn" @click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>

    <Modal v-show="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>경고! <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i></h3>
      </template>
      <template v-slot:body>아무것도 입력하지 않았습니다.</template>
    </Modal>
  </div>
</template>

<script>
import Modal from '../common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },

  methods: {
    addTodo() {
      if (!this.newTodoItem.trim()) {
        this.showModal = !this.showModal;
        return;
      }

      this.$emit('addTodoItem', this.newTodoItem);

      this.clearInput();
    },

    clearInput() {
      this.newTodoItem = '';
    },
  },

  components: {
    Modal: Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  width: calc(100% - 4.8rem);
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}
</style>
