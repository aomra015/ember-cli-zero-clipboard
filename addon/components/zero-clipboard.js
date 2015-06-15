import Ember from 'ember';
/* global ZeroClipboard */

export default Ember.Component.extend({
  attributeBindings: ['title', 'data-clipboard-text', 'data-clipboard-target'],
  title: 'Copy to clipboard',
  
  didInsertElement: function() {
    var client = new ZeroClipboard(this.get('element'));

    //bind aftercopy to an ember event
    client.on("aftercopy", Ember.run.bind(this, function(event) {
      this.send('afterCopy', event);
    }));
  },

  "data-clipboard-text": Ember.computed('text', function() {
    return this.get('text');
  }),

  "data-clipboard-target": Ember.computed('cbTarget', function() {
    return this.get('cbTarget');
  })
});
