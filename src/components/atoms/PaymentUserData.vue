<template>
  <div class="container mx-auto min-h-[500px]">
    <div>
      <span class="font-garamond font-bold ml-16 text-2xl"
        >Uzupełnij swoje dane</span
      >
    </div>
    <div class="flex mt-4">
      <div
        class="block w-1/2 ml-16 font-garamond border border-black rounded-2xl"
      >
        <div class="ml-4">
          <!-- imię i nazwisko -->
          <div>
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
            <span
              v-if="
                v$.name.$errors[0] &&
                v$.name.$errors[0].$validator === 'required'
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
          </div>
          <!-- firma i nip -->
          <div class="flex">
            <div>
              <label
                class="form-label w-full inline-block mb-2 text-gray-700 text-xl font-semibold"
                >Nazwa firmy</label
              >
              <input
                v-model="state.company"
                type="text"
                class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="nazwa firmy (opcjonalnie)"
              />
            </div>
            <div>
              <label
                class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                >NIP</label
              >
              <input
                v-model="state.identification"
                type="text"
                class="form-control block ml-2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="NIP (opcjonalnie)"
              />
            </div>
          </div>
          <!-- ulica -->
          <div class="flex">
            <div>
              <label
                class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                >Ulica</label
              >
              <input
                v-model="state.street"
                type="text"
                class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="v$.street.$error ? 'border-red-600' : 'border-gray-300'"
                placeholder="Wpisz swój adres"
                @blur="v$.street.$touch"
              />
              <span
                v-if="
                  v$.street.$errors[0] &&
                  v$.street.$errors[0].$validator === 'required'
                "
                class="text-xl text-red-600"
              >
                {{ v$.street.required.$message }}
              </span>
              <span
                v-if="
                  v$.street.$errors[0] &&
                  v$.street.$errors[0].$validator === 'minLength'
                "
                class="text-xl text-red-600"
              >
                {{ v$.street.minLength.$message }}
              </span>
            </div>
            <!-- nr budynku -->
            <div class="ml-2">
              <label
                class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                >Nr budynku</label
              >
              <input
                v-model="state.building"
                type="text"
                class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="
                  v$.building.$error ? 'border-red-600' : 'border-gray-300'
                "
                placeholder="nr"
                @blur="v$.building.$touch"
              />
              <span
                v-if="
                  v$.building.$errors[0] &&
                  v$.building.$errors[0].$validator === 'required'
                "
                class="text-xl text-red-600"
              >
                {{ v$.building.required.$message }}
              </span>
            </div>
            <!-- nr lokalu -->
            <div class="ml-2">
              <label
                class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                >Nr lokalu</label
              >
              <input
                v-model="state.local"
                type="text"
                class="form-control block w-24 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="v$.local.$error ? 'border-red-600' : 'border-gray-300'"
                placeholder="nr"
                @blur="v$.local.$touch"
              />
              <span
                v-if="
                  v$.local.$errors[0] &&
                  v$.local.$errors[0].$validator === 'required'
                "
                class="text-xl text-red-600"
              >
                {{ v$.local.required.$message }}
              </span>
            </div>
          </div>
          <div class="flex">
            <!-- kod pocztowy -->
            <div class="mb-3">
              <label
                class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                >Kod pocztowy</label
              >
              <input
                v-model="state.code"
                type="text"
                class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="v$.code.$error ? 'border-red-600' : 'border-gray-300'"
                placeholder="wpisz kod"
                @blur="v$.code.$touch"
              />
              <span
                v-if="
                  v$.code.$errors[0] &&
                  v$.code.$errors[0].$validator === 'required'
                "
                class="text-xl text-red-600"
              >
                {{ v$.code.required.$message }}
              </span>
              <span
                v-if="
                  v$.code.$errors[0] && v$.code.$errors[0].$validator === 'num'
                "
                class="text-xl text-red-600"
              >
                {{ v$.code.num.$message }}
              </span>
            </div>
            <!-- miasto -->
            <div>
              <label
                class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                >Miasto</label
              >
              <input
                v-model="state.town"
                type="email"
                class="form-control block ml-2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                :class="v$.town.$error ? 'border-red-600' : 'border-gray-300'"
                placeholder="wpisz adres e-mail"
                @blur="v$.town.$touch"
              />
              <span
                v-if="
                  v$.town.$errors[0] &&
                  v$.town.$errors[0].$validator === 'required'
                "
                class="text-xl text-red-600"
              >
                {{ v$.town.required.$message }}
              </span>
            </div>
          </div>
          <!-- adres email -->
          <div>
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >E-mail</label
            >
            <input
              v-model="state.emailAdress"
              type="email"
              class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
          <!-- nr telefonu -->
          <div class="mb-3">
            <label
              class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
              >Numer telefonu</label
            >
            <input
              v-model="state.telephone"
              type="text"
              class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "PaymentUserData",
  setup() {
    const state = reactive({
      name: "",
      company: "",
      identification: "",
      street: "",
      building: "",
      local: "",
      code: "",
      town: "",
      emailAdress: "",
      telephone: "",
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
        street: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
          minLength: helpers.withMessage(
            "To pole musi zawierać min. 3 znaki.",
            minLength(3)
          ),
        },
        building: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
        },
        local: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
        },
        code: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
          num: helpers.withMessage(
            "To pole może zawierać tylko cyfry.",
            helpers.regex(/^[0-9]*$/)
          ),
        },
        town: {
          required: helpers.withMessage(
            "To pole musi być wypełnione.",
            required
          ),
          minLength: helpers.withMessage(
            "To pole musi zawierać min. 3 znaki.",
            minLength(3)
          ),
        },
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
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },
};
</script>
