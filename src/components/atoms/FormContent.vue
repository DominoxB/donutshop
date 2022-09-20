<template>
  <div class="container mx-auto min-h-[500px]">
    <div>
      <span class="font-medium ml-16 text-2xl">FORMULARZ KONTAKTOWY</span>
    </div>
    <div class="flex">
      <div class="block w-1/2 ml-16 border bg-orange-100 rounded-2xl">
        <div class="">
          <label
            class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
            >Imię i nazwisko</label
          >
          <input
            v-model="state.name"
            type="text"
            class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            :class="v$.name.$error ? 'border-red-600' : 'border-gray-300'" 
            placeholder="Wpisz swoje dane"
            @blur="v$.name.$touch"
            
          />
          <span v-if="v$.name.$error" class="text-xl text-red-600">
           imię i nazwisko jest wymagane (min. 2 znaki)
          </span>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >Nazwa firmy</label
            >
            <input
              v-model="state.company"
              type="text"
              class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="nazwa firmy (opcjonalnie)"
            />
          </div>
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >E-mail</label
            >
            <input
              v-model="state.email"
              type="email"
              class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="v$.email.$error ? 'border-red-600' : 'border-gray-300'" 
              placeholder="wpisz adres e-mail"
              @blur="v$.email.$touch"
            />
            <span v-if="v$.email.$error" class="text-xl text-red-600">
              email jest wymagany
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
              class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="v$.telephone.$error ? 'border-red-600' : 'border-gray-300'" 
              placeholder="wpisz swój numer"
              @blur="v$.telephone.$touch"
            />
            <span v-if="v$.telephone.$error" class="text-xl text-red-600">
              nr telefonu jest wymagany (tylko cyfry)
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
              class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              :class="v$.yourMessage.$error ? 'border-red-600' : 'border-gray-300'" 
              placeholder="wpisz swoją wiadomość"
              @blur="v$.yourMessage.$touch"
            >
            </textarea>
            <span v-if="v$.yourMessage.$error" class="text-xl text-red-600">
              wpisz swoją wiadomość (min. 10 znaków)
            </span>
          </div>
          <button
            class="bg-orange-300 hover:bg-orange-400 text-gray-800 w-44 h-10 font-bold text-base rounded mt-3"
            @click="submitForm"
          >
            Wyślij
          </button>
        </div>
      </div>

      <div
        class="w-1/3 font-garamond font-semibold text-xl text-center my-auto bg-gray-100 p-6 mx-auto"
      >
        <span
          >Jeżeli macie Państwo jakieś pytania, chcecie zapytać o nasze
          składniki, nawiązać współpracę, przygotować słodki stół na ważnej dla
          Was uroczystości, zapraszamy do kontaktu. Wystarczy wysłać do nas
          wiadomość, a my skontaktujemy się Państwem. Na wszystkie wiadomośći
          odpowiada Donata, a więc informacje będą z najpewniejszego źródła
          :)</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, numeric } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "FormContent",
  setup() {
    const state = reactive({
      name: "",
      company: "",
      email: "",
      telephone: "",
      yourMessage: "",
    });

    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(2) },
        // company: { required },
        email: { required, email },
        telephone: { required, numeric },
        yourMessage: { required, minLength: minLength(10) },
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
