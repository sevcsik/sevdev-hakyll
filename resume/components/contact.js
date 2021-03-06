/* global Polymer */
/**
 * Contact information (cover)
 */

import branding from '../modules/branding.js';

Polymer({
	is: 'sd-contact',
	ready() {
		if (branding) {
			this.classList.add(`branding-${branding}`);
		}

		if (branding === 'screamingbox') {
			let email = Polymer.dom(this).querySelector('.contact-info .email');

			if (email) {
				email.textContent = 'andras.sevcsik@screamingbox.com';
				email.href = `mailto:${email.textContent}`;
			}

			let site = Polymer.dom(this).querySelector('.contact-info .site');

			if (site) {
				site.textContent = 'screamingbox.com';
				site.href = `http://${site.textContent}`;
			}
		}
	}
});
