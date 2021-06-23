import { vuexOidcCreateStoreModule } from 'vuex-oidc';
const oidcSettings = {
  authority: 'https://accounts.google.com',
  clientId: '459300396575-3ruj8l8jn69pcgst8rgkqnk6g43gbc78.apps.googleusercontent.com',
  redirectUri: 'http://localhost:3000/oidc-callback',
  responseType: 'code',
  scope: 'openid email',
  automaticSilentRenew: true,
  silentRedirectUri: 'http://localhost:3000/silent-renew-oidc.html'
};

const storeModule = vuexOidcCreateStoreModule(
  oidcSettings,
  {
    namespaced: true,
    dispatchEventsOnWindow: true,
    publicRoutePaths: ['/', 'oidc-callback-error']
  },
//   Optional OIDC event listeners
  {
    userLoaded: user => console.log('OIDC user is loaded:', user),
    userUnloaded: () => console.log('OIDC user is unloaded'),
    accessTokenExpiring: () => console.log('Access token will expire'),
    accessTokenExpired: () => console.log('Access token did expire'),
    silentRenewError: () => console.log('OIDC user is unloaded'),
    userSignedOut: () => console.log('OIDC user is signed out')
  }
);

export const state = () => (storeModule.state);

export const getters = storeModule.getters;

export const actions = storeModule.actions;

export const mutations = storeModule.mutations;