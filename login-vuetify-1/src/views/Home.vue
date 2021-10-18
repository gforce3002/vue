<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text text--accent-3">Sign in to E-education</h1>
                    <div class="text-center mt-4" > 
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-linkedin-in</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">
                      Deseas iniciar session con tu email?
                    </h4>
                    <v-form>
                      <v-text-field label="Email" name="Email" 
                      prepend-icon="mdi-email" type="text"
                      color="teal accent-3"/>
                      <v-text-field label="Password" name="Password" 
                      prepend-icon="mdi-lock" type="password"
                      color="teal accent-3"/>
                    </v-form>
                    <h3>Olvidaste tu contraseña?</h3>
                  </v-card-text>
                  <div class="text-center my-3">
                    <v-btn rounded color="teal accent-3" dark> Entrar</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center diplay-1">
                      Hola amigos !
                    </h1>
                    <h4 class="text-center mt-5">¿No tienes cuenta? registrate aqui</h4>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step++">Registrar</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row >
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Bienvenido de vuelta</h1>
                    <h5 class="text-center">para seguir conectado con nosotros por favor logeate con correo y contraseña</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step--">Ingresa</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text text--accent-3">Crear cuenta</h1>
                    <div class="text-center mt-4" > 
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-linkedin-in</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">ingresa tu email para registrarte</h4>
                    <v-form>
                      <v-text-field label="Email" name="Email" 
                      prepend-icon="mdi-email" type="text"
                      color="teal accent-3"/>
                      <v-text-field label="Password" name="Password" 
                      prepend-icon="mdi-lock" type="password"
                      color="teal accent-3"/>
                      <v-text-field label="Confirm Password" name="Password" 
                      prepend-icon="mdi-lock" type="password"
                      color="teal accent-3"/>
                    </v-form>
                  </v-card-text>
                  <div class="text-center my-3">
                    <v-btn rounded color="teal accent-3" dark> Registrar</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
 

  export default {
    name: 'Home',
    data(){
      return{
        step:1
      }
    },
    components: {
     
    },
  }
</script>
