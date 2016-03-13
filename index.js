'use strict';

const LocalizationHelper = require('./lib/LocalizationHelper');

module.exports = {

	/**
	 * Registers all localization components in service locator.
	 * @param {ServiceLocator} locator Catberry's service locator.
	 */
	register(locator) {
		try {
			const dust = locator.resolve('dust');
			const helper = new LocalizationHelper(locator);
			dust.helperManager.add('l10n', helper.getDustHelper());
		} catch (e) {
			// nothing to do.
		}
	}
};
