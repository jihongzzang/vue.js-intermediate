import { ref } from 'vue';

export default function useMessage() {
  const message = ref('hi');

  const changeMessage = () => {
    if (message.value === 'hi') {
      message.value = 'bye';
    } else {
      message.value = 'hi';
    }
  };

  return { message, changeMessage };
}
