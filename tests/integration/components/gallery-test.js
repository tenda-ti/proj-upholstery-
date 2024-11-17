import { module, test } from 'qunit';
import { setupRenderingTest } from 'upholstery/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gallery', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Gallery />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Gallery>
        template block text
      </Gallery>
    `);

    assert.dom().hasText('template block text');
  });
});
