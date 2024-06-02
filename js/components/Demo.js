import { defineComponent, ref } from "vue";
import { double } from "../utils/double.js";

export default defineComponent({
  setup() {
    const counter = ref(1);

    return {
      counter,
      double,
    };
  },

  template: /* vue */ `
    <div class="flex flex-col gap-4 items-center justify-center p-8 min-h-100dvh">
      <!-- Icons -->
      <div class="i-uil-spin font-size-12 sm:font-size-14" />

      <h1 class="m-0 font-size-12 sm:font-size-18 fw-700 text-center lh-none m-b-4">
        Example
      </h1>

      <!-- Reactivity -->
      <div class="flex flex-col gap-2 items-center">
        <code class="font-size-5">
          {{ counter }}
        </code>
        <button
          type="button"
          class="font-size-4 min-h-10.5 p-x-4.5 rounded-xl border-0 cursor-pointer active:scale-95 transition bg-emerald-200 text-dark-900"
          @click="counter = double(counter)"
        >
          Double!
        </button>
      </div>
    </div>
  `,
});
