<template>
  <div>
    <div
      v-for="name in getNames"
      :key="name"
      class="flex justify-between items-center p-2 border-b border-gray-300"
    >
      <span>{{ name }}</span>
      <button class="text-red-500" @click="removeName(name)">
        Delete
      </button>
    </div>
    <div v-if="getNames.length === 0" class="text-center text-gray-500 p-4">
      No names available
    </div>
    <!-- Add a single form to add names -->
    <input
      v-model="newName"
      type="text"
      placeholder="Enter name"
      class="border p-2 rounded mt-4"
    >
    <button
      class="mt-4 bg-blue-500 text-white p-2 rounded"
      @click="addName(newName)"
    >
      Add Name
    </button>

    <p>Currently inserting:</p>
    <p :value="newName" />
  </div>
</template>

<script lang="ts" setup>
const { addName, removeName, getNames } = useNamesStore();

const newName = ref("");

watch(getNames, async (newNames) => {
  const storage = await useStorage("names");
  if (newNames.length > 0) {
    storage.setItem("names", newNames);
  } else {
    storage.setItem("names", newNames);
  }
});
</script>
