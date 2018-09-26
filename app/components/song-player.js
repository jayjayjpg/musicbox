import Component from '@ember/component';
import newyorkFeels from 'musicbox/utils/newyork-feels';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    newyorkFeels();
  },
});
