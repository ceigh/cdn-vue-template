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
    <div class="flex flex-col gap-4 items-center justify-center p-8 min-h-screen">
      <!-- Icons -->
      <div class="i-uil-spin font-size-8 sm:font-size-14" />

      <h1 class="m-0 font-size-8 sm:font-size-18 text-center lh-none m-b-4">
        Example CDN app
      </h1>

      <!-- Reactivity -->
      <div class="flex flex-col gap-2 items-center">
        <div class="font-size-5">
          Counter: <span>{{ counter }}</span>
        </div>
        <button
          type="button"
          class="font-size-4 min-h-10.5 p-x-5 rounded-lg border-0 bg-amber text-dark-800 cursor-pointer active:scale-95 transition"
          @click="counter = double(counter)"
        >
          Double
        </button>
      </div>
    </div>
  `,
});
