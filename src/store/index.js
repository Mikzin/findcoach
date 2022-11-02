import { createStore } from 'vuex';

import coachesModule from './module/coaches/index';
import requestsModule from './module/requests/index';
import AuthModule from './module/auth/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: AuthModule,
  },
});

export default store;
