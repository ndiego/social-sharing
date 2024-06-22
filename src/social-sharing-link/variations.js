/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	facebook,
	flipboard,
	line,
	linkedin,
	mail,
	pinterest,
	pocket,
	print,
	reddit,
	skype,
	sms,
	telegram,
	threads,
	tumblr,
	viber,
	whatsapp,
	x,
	webshare,
} from './icons';

const variations = [
	{
		name: 'facebook',
		attributes: { service: 'facebook' },
		title: 'Facebook',
		icon: facebook,
	},
	{
		name: 'flipboard',
		attributes: { service: 'flipboard' },
		title: 'Flipboard',
		icon: flipboard,
	},
	{
		name: 'line',
		attributes: { service: 'line' },
		title: 'LINE',
		icon: line,
	},
	{
		name: 'linkedin',
		attributes: { service: 'linkedin' },
		title: 'LinkedIn',
		icon: linkedin,
	},
	{
		name: 'mail',
		attributes: { service: 'mail' },
		title: 'Mail',
		label: __('Email this Page', 'social-sharing-block'),
		keywords: ['email', 'e-mail'],
		icon: mail,
	},
	{
		name: 'pinterest',
		attributes: { service: 'pinterest' },
		title: 'Pinterest',
		icon: pinterest,
	},
	{
		name: 'pocket',
		attributes: { service: 'pocket' },
		title: 'Pocket',
		icon: pocket,
	},
	{
		name: 'print',
		attributes: { service: 'print' },
		title: 'Print',
		label: __('Print this Page', 'social-sharing-block'),
		icon: print,
	},
	{
		name: 'reddit',
		attributes: { service: 'reddit' },
		title: 'Reddit',
		icon: reddit,
	},
	{
		name: 'skype',
		attributes: { service: 'skype' },
		title: 'Skype',
		icon: skype,
	},
	{
		name: 'sms',
		attributes: { service: 'sms' },
		title: 'SMS',
		icon: sms,
	},
	{
		name: 'telegram',
		attributes: { service: 'telegram' },
		title: 'Telegram',
		icon: telegram,
	},
	{
		name: 'threads',
		attributes: { service: 'threads' },
		title: 'Threads',
		icon: threads,
	},
	{
		name: 'tumblr',
		attributes: { service: 'tumblr' },
		title: 'Tumblr',
		icon: tumblr,
	},
	{
		name: 'viber',
		attributes: { service: 'viber' },
		title: 'Viber',
		icon: viber,
	},
	{
		name: 'whatsapp',
		attributes: { service: 'whatsapp' },
		title: 'WhatsApp',
		icon: whatsapp,
	},
	{
		isDefault: true,
		name: 'x',
		attributes: { service: 'x' },
		title: 'X',
		keywords: ['twitter'],
		icon: x,
	},
	{
		name: 'webshare',
		attributes: { service: 'webshare' },
		title: 'Web share',
		label: __('Share this page', 'social-sharing-block'),
		icon: webshare,
	},
	// Deprecated now that Twitter is X.
	{
		name: 'twitter',
		attributes: { service: 'twitter' },
		title: __('X (formerly Twitter)'),
		icon: x,
		scope: [], // Removes the variation from the block inserter.
	},
];

/**
 * Add `isActive` function to all `social link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 * Block by providing its attributes.
 */
variations.forEach((variation) => {
	if (variation.isActive) {
		return;
	}

	variation.isActive = (blockAttributes, variationAttributes) =>
		blockAttributes.service === variationAttributes.service;
});

export default variations;
