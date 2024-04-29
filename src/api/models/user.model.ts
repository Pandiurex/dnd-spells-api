import mongoose from 'mongoose';

// Definir un esquema
const Schema = mongoose.Schema;
const spellSchema = new Schema({
	index: {
		type: 'String',
	},
	name: {
		type: 'String',
	},
	desc: {
		type: ['String'],
	},
	higher_level: {
		type: ['String'],
	},
	range: {
		type: 'String',
	},
	components: {
		type: ['String'],
	},
	material: {
		type: 'String',
	},
	ritual: {
		type: 'Boolean',
	},
	duration: {
		type: 'String',
	},
	concentration: {
		type: 'Boolean',
	},
	casting_time: {
		type: 'String',
	},
	level: {
		type: 'Number',
	},
	attack_type: {
		type: 'String',
	},
	damage: {
		damage_type: {
			index: {
				type: 'String',
			},
			name: {
				type: 'String',
			},
			url: {
				type: 'String',
			},
		},
		damage_at_slot_level: {
			'2': {
				type: 'String',
			},
			'3': {
				type: 'String',
			},
			'4': {
				type: 'String',
			},
			'5': {
				type: 'String',
			},
			'6': {
				type: 'String',
			},
			'7': {
				type: 'String',
			},
			'8': {
				type: 'String',
			},
			'9': {
				type: 'String',
			},
		},
	},
	school: {
		index: {
			type: 'String',
		},
		name: {
			type: 'String',
		},
		url: {
			type: 'String',
		},
	},
	classes: {
		type: ['Mixed'],
	},
	subclasses: {
		type: ['Mixed'],
	},
	url: {
		type: 'String',
	},
});

const SpellModel = mongoose.model('Spells', spellSchema);

export default SpellModel;
