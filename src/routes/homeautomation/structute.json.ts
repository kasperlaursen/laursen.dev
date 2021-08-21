export const get = async () => {
	return {
		status: 200,
		body: {
			name: 'Home Assistant',
			id: 'homeassistant',
			type: 'host',
			children: [
				{
					name: 'ESP Home',
					id: 'esphome',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'PI Hole',
					id: 'pihole',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'HACS',
					id: 'hacs',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'Mobile App',
					id: 'mobileapp',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'Shelly',
					id: 'shelly',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'Xiaomi Miio',
					id: 'xiaomimiio',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'Sonos',
					id: 'sonos',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'Google Cast',
					id: 'googlecast',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'Zigbee Home Automation',
					id: 'zha',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'IHC by Schneider Electric',
					id: 'ihc',
					type: 'integration',
					children: [{}]
				},
				{
					name: 'InfluxDB',
					id: 'influxdb',
					type: 'integration',
					children: [{}]
				}
			]
		}
	};
};
