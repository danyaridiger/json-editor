/* global Feature Scenario */

Feature('readonly')

Scenario('should be disabled if "readonly" is specified @readOnly', async ({ I }) => {
  I.amOnPage('read-only.html')
  I.seeDisabledAttribute('[id="root[rating]5"]')
  I.seeDisabledAttribute('[id="root[rating]4"]')
  I.seeDisabledAttribute('[id="root[rating]3"]')
  I.seeDisabledAttribute('[id="root[rating]2"]')
  I.seeDisabledAttribute('[id="root[rating]1"]')
})
