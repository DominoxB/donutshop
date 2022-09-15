<template>
  <div class="flex">
    <div class="block w-1/2 mt-4 ml-16">
      <div>
        <span class="font-medium text-2xl">FORMULARZ KONTAKTOWY</span>
      </div>
      <label
        class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
        >Imię i nazwisko</label
      >
      <input
        v-model="name"
        type="text"
        class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Wpisz swoje dane"
      />
      <label
        class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
        >Nazwa firmy</label
      >
      <input
        v-model="company"
        type="text"
        class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="nazwa firmy (opcjonalnie)"
      />
      <label
        class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
        >E-mail</label
      >
      <input
        v-model="company"
        type="text"
        class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="wpisz adres e-mail"
      />
      <label
        class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
        >Numer telefonu</label
      >
      <input
        v-model="company"
        type="number"
        class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="wpisz swój numer"
      />
      <label
        class="form-label inline-block mb-2 text-gray-700 text-xl font-semibold"
        >Twoja wiadomość</label
      >
      <textarea
        v-model="message"
        type="text"
        class="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="wpisz swoją wiadomość"
      >
      </textarea>
      <button
        class="bg-purple-200 hover:bg-purple-300 text-gray-800 w-44 h-10 font-bold text-base rounded mt-3"
      >
        Wyślij
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormContent",
};
</script>
