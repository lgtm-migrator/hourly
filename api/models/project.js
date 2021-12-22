module.exports = {
	name: 'project',
	fields: {
		project_name: {
			name: 'Project Name',
			type: 'string',
			desc: '',
			must: true,
			show: true,
			required: true,
			unique: true,
		},
		desc: {
			name: 'Description',
			type: 'textarea',
			row: 3,
			desc: '',
			must: true,
			show: true,
			require: false
		},
		organization: {
			name: 'Organization',
			type: 'choice',
			desc: '',
			option: {
				form: 'organization',
				value: 'company_name',
				text: 'company_name',
			},
			must: true,
			show: true,
			required: true,
		},
		sub_dev_cycle: {
			name: 'Dev cycles',
			// type: 'sub_model',
			type: 'choice',
			desc: '',
			option: {
				form: 'dev_cycles',
				value: 'applicant',
				text: 'applicant'
			},
			must: false,
			show: true,
			required: false,
			// fields: {
			// 	cycle: {
			// 		name: 'Name',
			// 		type: 'string',
			// 		desc: '',
			// 		must: false,
			// 		show: true,
					// option: {
					// 	form: 'dev_cycles',
					// 	query: {},
					// 	value: 'applicant',
					// 	text: 'applicant'
					// }
				// },
				// amount: {
				// 	name: 'amount',
				// 	type: 'number',
				// 	desc: '',
				// 	must: true,
				// 	show: true,
				// },
			// },
		},
		pm: {
			name: 'Project Manager',
			model: '_account',
			type: 'choice',
			desc: 'pm',
			show: true,
			require: true,

		},
		client1: {
			name: 'Client 1',
			model: '_account',
			type: 'choice',
			desc: 'client',
			show: true,
			require: true,
			
		},
		client2: {
			name: 'Client 2',
			model: '_account',
			type: 'choice',
			desc: 'client',
			show: true,
			require: true,
			
		},
		dev1: {
			name: 'developer 1',
			model: '_account',
			type: 'choice',
			desc: 'developer',
			show: true,
			require: true,
			
		},
		dev2: {
			name: 'developer 2',
			model: '_account',
			type: 'choice',
			desc: 'developer',
			show: true,
			require: true,
			
		},	
		dev3: {
			name: 'developer 3',
			model: '_account',
			type: 'choice',
			desc: 'developer',
			show: true,
			require: true,
		
		},	
	}
};
