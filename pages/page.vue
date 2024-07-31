<template>
  <div>
    <!-- Display the "time ago" result using the timeAgoFunction -->
    <div>{{timeAgoFunction({ _seconds: 1722397001, _nanoseconds: 975000000 })}}</div>
  </div>
</template>
<script setup lang="ts">
import { timeAgo } from "~/composables/timeAgoHelper";// Import the timeAgo function from the helper

const timeAgoFunction = (timestamp: String) => {
  try {
    // Call the timeAgo helper function with the provided timestamp
    return timeAgo(timestamp);
  } catch (error) {
    // Log any errors to the console and return "Invalid date"
    console.error(error);
    return "Invalid date";
  }
};
</script>
