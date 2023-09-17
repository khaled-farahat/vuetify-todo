/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#9652ff',
          success: '#3cd1c2',
          info: '#ffaa2c',
          error: '#f83e70',
          hisPrimary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
