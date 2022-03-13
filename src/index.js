import ChatKitty from 'chatkitty';

export default {
  install(Vue, options) {
    Vue.mixin({
      created() {
        Vue.prototype.$chatkitty = ChatKitty.getInstance(options.apiKey);
      }
    });
  }
};
