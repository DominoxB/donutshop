<template>
  <div class="container mx-auto min-h-[500px]">
    <div>
      <span class="font-medium ml-16 text-2xl">FORMULARZ KONTAKTOWY</span>
    </div>
    <div class="grid md:grid-cols-2">
      <div class="block md:w-full m-8 ml-10 border bg-orange-100 rounded-2xl">
        <div class="ml-4">
          <label
            class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
            >Imię i nazwisko</label
          >
          <input
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
            class="text-xl text-red-600"
          >
            {{ v$.name.required.$message }}
          </span>
          <span
            v-if="
              v$.name.$errors[0] &&
              v$.name.$errors[0].$validator === 'minLength'
            "
            class="text-xl text-red-600"
          >
            {{ v$.name.minLength.$message }}
          </span>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >Nazwa firmy</label
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
              >E-mail</label
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
              class="text-xl text-red-600"
            >
              {{ v$.emailAdress.required.$message }}
            </span>
            <span
              v-if="
                v$.emailAdress.$errors[0] &&
                v$.emailAdress.$errors[0].$validator === 'email'
              "
              class="text-xl text-red-600"
            >
              {{ v$.emailAdress.email.$message }}
            </span>
          </div>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >Numer telefonu</label
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
              class="text-xl text-red-600"
            >
              {{ v$.telephone.required.$message }}
            </span>
            <span
              v-if="
                v$.telephone.$errors[0] &&
                v$.telephone.$errors[0].$validator === 'num'
              "
              class="text-xl text-red-600"
            >
              {{ v$.telephone.num.$message }}
            </span>
          </div>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >Twoja wiadomość</label
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
              class="text-xl text-red-600"
            >
              {{ v$.yourMessage.required.$message }}
            </span>
            <span
              v-if="
                v$.yourMessage.$errors[0] &&
                v$.yourMessage.$errors[0].$validator === 'minLength'
              "
              class="text-xl text-red-600"
            >
              {{ v$.yourMessage.minLength.$message }}
            </span>
          </div>
          <button
            class="bg-orange-300 hover:bg-orange-400 text-gray-800 w-44 h-10 mb-3 font-bold text-base rounded mt-3"
            @click="submitForm"
          >
            Wyślij
          </button>
        </div>
      </div>

      <div
        style="background-image: url('https://t4.ftcdn.net/jpg/01/98/88/85/360_F_198888595_APmkgmFYwzY7RMCfhhav9ELknjHFv2iw.jpg');"
        class="w-3/4 h-2/4 font-garamond font-semibold text-xl text-center my-auto p-8 pt-11 mx-auto"
      >
        <span
          >Jeżeli macie Państwo jakieś pytania, chcecie zapytać o nasze
          składniki, nawiązać współpracę, przygotować słodki stół na ważnej dla
          Was uroczystości, zapraszamy do kontaktu. Wystarczy wysłać do nas
          wiadomość, a my skontaktujemy się Wami. Na wszystkie wiadomości
          odpowiada Donata, dlatego informacje będą z najpewniejszego źródła
          :)</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "FormContent",
  setup() {
    const state = reactive({
      name: "",
      company: "",
      emailAdress: "",
      telephone: "",
      yourMessage: "",
    });

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
