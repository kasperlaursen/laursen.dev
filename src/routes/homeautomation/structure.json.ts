export const get = async () => {
	return {
		status: 200,
		body: {
			name: 'Home Assistant',
			id: 'homeassistant',
			color: "--blue",
			type: 'host',
			children: [
				{
					name: 'ESP Home',
					id: 'esphome',
					type: 'integration',
					children: [{
						name: 'ESP32',
						id: 'esp32_1',
						type: 'device',
					}, {
						name: 'ESP32',
						id: 'esp32_2',
						type: 'device',
					}, {
						name: 'ESP32',
						id: 'esp32_3',
						type: 'device',
					}]
				},
				{
					name: 'PI Hole',
					id: 'pihole',
					type: 'integration'
				},
				{
					name: 'HACS',
					id: 'hacs',
					type: 'integration'
				},
				{
					name: 'Mobile App',
					id: 'mobileapp',
					type: 'integration'
				},
				{
					name: 'Shelly',
					id: 'shelly',
					type: 'integration'
				},
				{
					name: 'Xiaomi Miio',
					id: 'xiaomimiio',
					type: 'integration'
				},
				{
					name: 'Sonos',
					id: 'sonos',
					type: 'integration'
				},
				{
					name: 'Google Cast',
					id: 'googlecast',
					type: 'integration',
					children: [{
						name: 'Sony TV',
						id: 'sonytv',
						type: 'device',
					}]
				},
				{
					name: 'Zigbee Home Automation',
					id: 'zha',
					type: 'integration'
				},
				{
					name: 'IHC by Schneider Electric',
					id: 'ihc',
					type: 'integration'
				},
				{
					name: 'InfluxDB',
					id: 'influxdb',
					type: 'integration'
				}
			]
		}
	};
};
