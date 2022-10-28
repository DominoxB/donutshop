<template>
  <div class="container mx-auto min-h-[500px]">
    <div class="grid lg:grid-cols-2">
      <div class="block md:w-auto mb-8 border bg-[#e8cfe1] mt-2 rounded-2xl">
        <div>
          <span class="font-medium ml-4 text-2xl">{{ $t("form") }}</span>
        </div>
        <div class="ml-4">
          <label
            class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
            >{{ $t("formname") }}</label
          >
          <input
            id="name"
            v-model="state.name"
            type="text"
            class="form-control block w-3/4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            :class="v$.name.$error ? 'border-red-600' : 'border-gray-300'"
            placeholder="Wpisz swoje dane"
            @blur="v$.name.$touch"
          />
          <span
            v-if="
              v$.name.$errors[0] && v$.name.$errors[0].$validator === 'required'
            "
            class="text-sm text-red-600"
          >
            {{ v$.name.required.$message }}
          </span>
          <span
            v-if="
              v$.name.$errors[0] &&
              v$.name.$errors[0].$validator === 'minLength'
            "
            class="text-sm text-red-600"
          >
            {{ v$.name.minLength.$message }}
          </span>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >{{ $t("formcompany") }}</label
            >
            <input
              v-model="state.company"
              type="text"
              class="form-control block w-3/4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="nazwa firmy (opcjonalnie)"
            />
          </div>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >{{ $t("formmail") }}</label
            >
            <input
              v-model="state.emailAdress"
              type="email"
              class="form-control block w-3/4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="
                v$.emailAdress.$error ? 'border-red-600' : 'border-gray-300'
              "
              placeholder="wpisz adres e-mail"
              @blur="v$.emailAdress.$touch"
            />
            <span
              v-if="
                v$.emailAdress.$errors[0] &&
                v$.emailAdress.$errors[0].$validator === 'required'
              "
              class="text-sm text-red-600"
            >
              {{ v$.emailAdress.required.$message }}
            </span>
            <span
              v-if="
                v$.emailAdress.$errors[0] &&
                v$.emailAdress.$errors[0].$validator === 'email'
              "
              class="text-sm text-red-600"
            >
              {{ v$.emailAdress.email.$message }}
            </span>
          </div>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >{{ $t("formphone") }}</label
            >
            <input
              v-model="state.telephone"
              type="text"
              class="form-control block w-3/4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="
                v$.telephone.$error ? 'border-red-600' : 'border-gray-300'
              "
              placeholder="wpisz swój numer"
              @blur="v$.telephone.$touch"
            />
            <span
              v-if="
                v$.telephone.$errors[0] &&
                v$.telephone.$errors[0].$validator === 'required'
              "
              class="text-sm text-red-600"
            >
              {{ v$.telephone.required.$message }}
            </span>
            <span
              v-if="
                v$.telephone.$errors[0] &&
                v$.telephone.$errors[0].$validator === 'num'
              "
              class="text-sm text-red-600"
            >
              {{ v$.telephone.num.$message }}
            </span>
          </div>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >{{ $t("formmessage") }}</label
            >
            <textarea
              v-model="state.yourMessage"
              type="text"
              class="form-control block w-3/4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="
                v$.yourMessage.$error ? 'border-red-600' : 'border-gray-300'
              "
              placeholder="wpisz swoją wiadomość"
              @blur="v$.yourMessage.$touch"
            >
            </textarea>
            <span
              v-if="
                v$.yourMessage.$errors[0] &&
                v$.yourMessage.$errors[0].$validator === 'required'
              "
              class="text-sm text-red-600"
            >
              {{ v$.yourMessage.required.$message }}
            </span>
            <span
              v-if="
                v$.yourMessage.$errors[0] &&
                v$.yourMessage.$errors[0].$validator === 'minLength'
              "
              class="text-sm text-red-600"
            >
              {{ v$.yourMessage.minLength.$message }}
            </span>
          </div>
          <button
            class="bg-purple-200 hover:bg-purple-300 border text-gray-800 w-44 h-10 mb-3 font-bold text-base rounded mt-3"
            @click="submitForm"
          >
            {{ $t("formsend") }}
          </button>
        </div>
      </div>
      <div class="my-auto">
        <div
          class="w-auto font-garamond text-gray-900 text-xl text-center mb-8 p-4 lg:p-10 lg:pt-6 lg:mx-auto rounded-2xl bg-[#7dafb5] bg-opacity-30"
        >
          <p class="my-auto">
            {{ $t("forminfo") }}
          </p>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="font-garamond text-2xl text-center mb-4">
        <p>{{ $t("forminfo2") }}</p>
      </div>
      <div class="lg:grid lg:grid-cols-2">
        <TheSlider :slides="slides" class=""></TheSlider>
        <div class="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9607.638453963564!2d20.079489734036667!3d52.98602709626071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c4dd538fc70f9%3A0xbbdb5f0b921b7226!2s06-550%20P%C4%85czkowo!5e0!3m2!1spl!2spl!4v1665664662709!5m2!1spl!2spl"
            style="border: 0"
            allowfullscreen=""
            width="600"
            height="400"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="my-auto mx-auto relative z-20 mt-3 lg:mt-0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed, onMounted} from "vue";
import TheSlider from "./TheSlider.vue";
export default {
  name: "FormContent",
  components: { TheSlider },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    const state = reactive({
      name: "",
      company: "",
      emailAdress: "",
      telephone: "",
      yourMessage: "",
    });
    const slides = [
      "https://www.whitemad.pl/wp-content/uploads/2020/12/Zurawicki-design_AQForm-2.jpg",
      "https://www.whitemad.pl/wp-content/uploads/2020/12/Zurawicki-design_AQForm-3.jpg",
      "https://www.whitemad.pl/wp-content/uploads/2020/12/Zurawicki-design_AQForm-5.jpg",
      "https://www.whitemad.pl/wp-content/uploads/2020/12/Zurawicki-design_AQForm-1.jpg",
    ];
    const rules = computed(() => {
      return {
        name: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
          minLength: helpers.withMessage(
            "To pole musi zawierać min. 2 znaki.",
            minLength(2)
          ),
        },
        // company: { required },
        emailAdress: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
          email: helpers.withMessage(
            "To pole musi zawierać poprawny adres email.",
            email
          ),
        },
        telephone: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
          num: helpers.withMessage(
            "To pole może zawierać tylko cyfry.",
            helpers.regex(/^[0-9]*$/)
          ),
        },
        yourMessage: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
          minLength: helpers.withMessage(
            "To pole musi zawierać min. 10 znaków.",
            minLength(10)
          ),
        },
      };
    });
    const v$ = useVuelidate(rules, state);
    return {
      state,
      v$,
      slides,
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("🙂 Formularz przesłany poprawnie.");
      } else {
        alert("😞 Formularz zawiera błędy, proszę popraw je.");
      }
    },
  },
};
</script>

<style>
.google-maps {
  position: relative;
  padding-bottom: 75%;
  height: 0;
  overflow: hidden;
}
.google-maps iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
