
export const useNamesStore = defineStore('Names', () => {
  const names = ref<string[]>([]);

  const getNames = computed(() => { return names })
  const addName = (name: string) => {
    names.value.push(name);
  }
  function removeName(name: string) {
    names.value = names.value.filter(n => n !== name);
  }
  const clearNames = () => {
    names.value = [];
  }

  return {
    names,
    addName,
    removeName,
    clearNames,
    getNames
  }
})
