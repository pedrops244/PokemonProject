import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';

export default createVuetify({
  defaults: {
    global: {
      ripple: true,
    },
    vBtn: {
      variant: 'tonal',
      color: 'primary',
    },
    VTextField: {
      variant: 'outlined',
    },
  },

  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
});
