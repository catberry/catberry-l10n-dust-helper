'use strict';

class LocalizationHelper {

	/**
	 * Creates new instance of localization helper.
	 * @param {ServiceLocator} locator Service locator for resolving dependencies.
	 */
	constructor(locator) {

		/**
		 * Current localization provider.
		 * @type {LocalizationProvider}
		 * @private
		 */
		this._localizationProvider = locator.resolve('localizationProvider');
	}

	/**
	 * Gets dust helper for localization.
	 * @returns {Function} Dust helper function.
	 */
	getDustHelper() {
		return function(chunk, context, bodies, params) {
			const key = context.tap(params.key, chunk);
			let locale = context.tap(params.locale, chunk);
			const count = Number(context.tap(params.count, chunk));
			if (!key) {
				return chunk.write('');
			}
			if (!locale) {
				locale = context.get('locale');
			}

			let value = '';
			try {
				value = !isNaN(count) ?
					this._localizationProvider.pluralize(locale, key, count) :
					this._localizationProvider.get(locale, key);
			} catch (e) {
				// nothing to do.
			}

			return chunk.write(value);
		}.bind(this);
	}
}
module.exports = LocalizationHelper;
