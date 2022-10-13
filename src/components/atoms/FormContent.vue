<template>
  <div class="container mx-auto min-h-[500px]">
    <div class="grid lg:grid-cols-2">
      <div class="block md:w-auto m-8 ml-10 border bg-orange-100 rounded-2xl">
        <div>
          <span class="font-medium ml-4 text-2xl">FORMULARZ KONTAKTOWY</span>
        </div>
        <div class="ml-4">
          <label
            class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
            >Imię i nazwisko</label
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
        style="
          background-image: url('https://i.pinimg.com/736x/df/3a/b6/df3ab6eee0fdeccc33d4aa70e1ea9d2f.jpg');
        "
        class="font-garamond font-semibold text-gray-900 text-xl text-center m-9 p-4 lg:p-10 lg:pt-11 mx-4 lg:mr-3 lg:mx-auto bg-no-repeat bg-top bg-cover bg-opacity-25"
      >
        <p class="mt-7">
          Jeżeli macie Państwo pytania o nasze składniki, chcecie nawiązać
          współpracę, przygotować słodki stół na ważnej dla Was uroczystości,
          zapraszamy do kontaktu.
        </p>
        <p class="mt-7">
          Wystarczy wysłać do nas wiadomość, z krótkim opisem, a my
          skontaktujemy się Wami. Na wszystkie wiadomości staramy się odpowiadać
          w ciągu 12 godzin.
        </p>
        <p class="mt-7">
          Realizujemy specjalne zamówienia na terenie całej Polski,
          przygotowujemy urodzinowe donutowe torty, obsługujemy słodki
          poczęstunek na weselach, konferencjach i innych wydarzeniach.
        </p>
        <p class="mt-7">Serdecznie zapraszamy do naszego donutowego świata!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed, onMounted, nextTick } from "vue";
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
    onMounted(async () => {
      const hasAutofocus = document.getElementById("name");
      hasAutofocus.focus();
      await nextTick();
      hasAutofocus.scrollIntoView({ block: "end", behavior: "smooth" });
      console.log(hasAutofocus);
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
