<template>
  <div class="warning-message">
    <div class="left">⚠️</div>
    <div class="right">
      <p class="title">{{ options.title }}</p>
      <p class="message">{{ options.message }}</p>
      <div v-if="options.link.url" class="link">
        > {{ $t('common.read') }}:
        <a :href="options.link.url" target="_blank">{{ options.link.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: function() {
        return {
          title: this.$t('common.notRecommended'),
          message: this.$t('common.notRecommendedMessage'),
          link: {
            text: this.$t('common.usingMewOffline'),
            url: 'https://kb.myetherwallet.com/posts/offline/using-mew-offline/'
          }
        };
      }
    }
  },
  data() {
    return {
      expanded: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import 'WarningMessage.scss';
</style>
