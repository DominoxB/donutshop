<template>
  <div class="container mx-auto min-h-[500px] mt-3">
    <div class="block">
      <div class="">
        <span class="font-garamond font-bold ml-5 text-2xl">{{
          $t("userdata")
        }}</span>
      </div>
      <div class="flex mt-4 justify-center">
        <div
          class="flex bg-purple-100 font-garamond border border-black rounded"
        >
          <div class="ml-3 mr-3">
            <!-- imię i nazwisko -->
            <div class="md:flex mt-1">
              <div>
                <label
                  class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                  >{{ $t("fname") }}</label
                >
                <input
                  id="name"
                  v-model="state.name"
                  type="text"
                  class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-600 focus:outline-none"
                  :class="v$.name.$error ? 'border-red-600' : 'border-gray-300'"
                  placeholder="Wpisz swoje imię"
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
              <div>
                <label
                  class="form-label inline-block md:ml-2 mb-2 text-gray-700 text-xl font-semibold"
                  >{{ $t("lname") }}</label
                >
                <input
                  v-model="state.surname"
                  type="text"
                  class="form-control block px-4 py-2 md:ml-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
                  :class="
                    v$.surname.$error ? 'border-red-600' : 'border-gray-300'
                  "
                  placeholder="Wpisz nazwisko"
                  @blur="v$.surname.$touch"
                />
                <span
                  v-if="
                    v$.surname.$errors[0] &&
                    v$.surname.$errors[0].$validator === 'required'
                  "
                  class="text-xl text-red-600"
                >
                  {{ v$.surname.required.$message }}
                </span>
                <span
                  v-if="
                    v$.surname.$errors[0] &&
                    v$.surname.$errors[0].$validator === 'minLength'
                  "
                  class="text-xl text-red-600"
                >
                  {{ v$.surname.minLength.$message }}
                </span>
              </div>
            </div>
            <!-- firma i nip -->
            <div class="md:flex">
              <div>
                <label
                  class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                  >{{ $t("companyname") }}</label
                >
                <input
                  v-model="state.company"
                  type="text"
                  class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
                  placeholder="nazwa firmy (opcjonalnie)"
                />
              </div>
              <div>
                <label
                  class="form-label inline-block md:ml-2 mb-2 text-gray-700 text-xl font-semibold"
                  >{{ $t("identification") }}</label
                >
                <input
                  v-model="state.identification"
                  type="text"
                  class="form-control block md:ml-2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
                  placeholder="NIP (opcjonalnie)"
                />
              </div>
            </div>
            <!-- ulica -->
            <div class="md:flex">
              <div>
                <label
                  class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                  >{{ $t("street") }}</label
                >
                <input
                  v-model="state.street"
                  type="text"
                  class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
                  :class="
                    v$.street.$error ? 'border-red-600' : 'border-gray-300'
                  "
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
              <div class="md:ml-2">
                <label
                  class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                  >{{ $t("building") }}</label
                >
                <input
                  v-model="state.building"
                  type="text"
                  class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
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
            </div>
            <div class="md:flex">
              <!-- kod pocztowy -->
              <div class="mb-3">
                <label
                  class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
                  >{{ $t("code") }}</label
                >
                <input
                  v-model="state.code"
                  type="text"
                  class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
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
              </div>
              <!-- miasto -->
              <div>
                <label
                  class="form-label inline-block md:ml-2 mb-2 text-gray-700 text-xl font-semibold"
                  >{{ $t("city") }}</label
                >
                <input
                  v-model="state.town"
                  type="text"
                  class="form-control block md:ml-2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
                  :class="v$.town.$error ? 'border-red-600' : 'border-gray-300'"
                  placeholder="wpisz nazwę miasta"
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
                >{{ $t("email") }}</label
              >
              <input
                v-model="state.emailAdress"
                type="email"
                class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
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
                >{{ $t("phone") }}</label
              >
              <input
                v-model="state.telephone"
                type="text"
                class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-300 focus:border-blue-600 focus:outline-none"
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
      <div class="flex justify-center lg:justify-start mt-4 lg:ml-5">
        <router-link to="/BasketPage">
          <button
            class="border border-neutral-900 bg-purple-200 hover:bg-purple-300 rounded p-3 font-pacifico text-2xl"
          >
            {{ $t("back") }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed, onMounted, nextTick } from "vue";
export default {
  name: "PaymentUserData",
  setup() {
    onMounted(async () => {
      const hasAutofocus = document.getElementById("name");
      hasAutofocus.focus();
      await nextTick();
      hasAutofocus.scrollIntoView({ block: "end", behavior: "smooth" });
    });
    
    const state = reactive({
      name: "",
      surname: "",
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
        surname: {
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
