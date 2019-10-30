<template>
  <q-page class="flex flex-center">

    <q-card class="my-card">
      <q-img
        src="http://brilexbrindes.com.br/wp-content/uploads/2019/07/423l_1.png"
        basic
      >
        <div class="absolute-bottom text-h6">
          Login
        </div>
      </q-img>

      <q-card-section>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="email"
            type="email"
            label="Email *"
            hint="govbr@govbr.com.br"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor informe o seu Email']"
          />

          <q-input
            filled
            type="string"
            v-model="pass"
            label="Password *"
            lazy-rules
            :rules="[
          val => val > 7 && val < 100 || 'Sua senha deve ter mais de 7 caracteres'
        ]"
          />

          <div>
            <q-btn
              label="Entrar"
              type="submit"
              color="primary"
            />
            <q-btn
              label="Cria Conta"
              type="submit"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
