import { ref } from 'vue';

export default function useTodo() {
  const todoItems = ref([]);

  const fetchTodos = () => {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const todoItem = localStorage.key(i);

      result.push(todoItem);
    }

    return result;
  };

  const addTodoItem = (todo) => {
    todoItems.value.push(todo);

    localStorage.setItem(todo, todo);
  };

  const removeTodoItem = (item, index) => {
    todoItems.value.splice(index, 1);

    localStorage.removeItem(item);
  };

  return { todoItems, fetchTodos, addTodoItem, removeTodoItem };
}
