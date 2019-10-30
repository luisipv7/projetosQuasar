<template>
  <q-page class="flex flex-center">

    <q-card class="my-card">
      <q-img
        src="https://modelodeagenda.com/wp-content/uploads/2017/09/miolo-agenda-pdf-diario-do-bebe-costura-agenda-do-bebe-download-500x500.jpg"
        basic
      >
        <div class="absolute-bottom text-h6">
          Cadastro
        </div>
      </q-img>

      <q-card-section>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-lg"
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
            type="password"
            v-model="pass"
            label="Password *"
            lazy-rules
            :rules="[
          val => val > 7 && val < 100 || 'Sua senha deve ter mais de 7 caracteres'
        ]"
          />
          <q-input
            v-model="password"
            filled
            label="Password  *"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

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
      password: '',
      isPwd: true

    }
  }
}
</script>
