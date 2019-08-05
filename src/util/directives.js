import Vue from "vue"
Vue.directive('preventReClick', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 2000)
      }
    })
  }
})

Vue.directive("inputLimit", {
  inserted(el, binding) {
    el.addEventListener('keyup', () => {
      let input = el.getElementsByTagName("input")[0]
      input.value = input.value.replace(binding.value, "")
    })
    el.addEventListener('change', () => {
      let input = el.getElementsByTagName("input")[0]
      input.value = input.value.replace(binding.value, "")
    })
  }
})
