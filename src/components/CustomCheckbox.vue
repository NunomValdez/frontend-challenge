<template>
  <div class="custom-checkbox" :class="{ 'is-checked': modelValue }">
    <input type="checkbox" :checked="modelValue" @change="toggleCheckbox" class="checkbox-input" />
    <span class="checkmark"></span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

function toggleCheckbox() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped lang="scss">
.custom-checkbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: 16px;
  height: 16px;
  border: 3px solid #859eff;
  border-radius: 3px;
  background-color: transparent;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #eee;
  // border-radius: 2px;
}

.custom-checkbox.is-checked .checkmark {
  background-color: #859eff;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}
.custom-checkbox .checkmark:after {
  left: 5px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
