<template>
  <div class="flex">
    <div class="block w-1/2 mt-4 ml-16">
      <div>
        <span class="font-medium text-2xl">FORMULARZ KONTAKTOWY</span>
      </div>
      <p>
        <label
          class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
          >Imię i nazwisko</label
        >
        <input
          v-model="state.name"
          type="text"
          class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Wpisz swoje dane"
        />
        <span v-if="v$.name.$error" class="text-xl text-red-600">
          {{ v$.name.$errors[0].$message }}
        </span>
      </p>
      <p>
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
      </p>
      <p>
        <label
          class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
          >E-mail</label
        >
        <input
          v-model="state.email"
          type="email"
          class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="wpisz adres e-mail"
        />
        <span v-if="v$.email.$error" class="text-xl text-red-600">
          {{ v$.email.$errors[0].$message }}
        </span>
      </p>
      <p>
        <label
          class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
          >Numer telefonu</label
        >
        <input
          v-model="state.telephone"
          type="text"
          class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="wpisz swój numer"
        />
        <span v-if="v$.telephone.$error" class="text-xl text-red-600">
          {{ v$.telephone.$errors[0].$message }}
        </span>
      </p>
      <p>
        <label
          class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
          >Twoja wiadomość</label
        >
        <textarea
          v-model="state.yourMessage"
          type="text"
          class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="wpisz swoją wiadomość"
        >
        </textarea>
        <span v-if="v$.yourMessage.$error" class="text-xl text-red-600">
          {{ v$.yourMessage.$errors[0].$message }}
        </span>
      </p>
      <button
        class="bg-purple-200 hover:bg-purple-300 text-gray-800 w-44 h-10 font-bold text-base rounded mt-3"
        @click="submitForm"
      >
        Wyślij
      </button>
    </div>

    <div
      class="w-1/3 font-garamond font-semibold text-xl text-center my-auto bg-gray-100 p-6"
    >
      <span
        >Jeżeli macie Państwo jakieś pytania, chcecie zapytać o nasze składniki,
        nawiązać współpracę, przygotować słodki stół na ważnej dla Was
        uroczystości, zapraszamy do kontaktu. Wystarczy wysłać do nas wiadomość,
        a my skontaktujemy się Państwem. Na wszystkie wiadomośći odpowiada
        Donata, a więc informacje będą z najpewniejszego źródła :)</span
      >
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, integer } from "@vuelidate/validators";
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
        telephone: { required, integer },
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
        alert("Form succesfully submitted.");
      } else {
        alert("Form failed validation");
      }
    },
  },
};
</script>
