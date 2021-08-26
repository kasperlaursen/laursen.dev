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
					color: "--purple",
					type: 'integration',
					children: [{
						name: 'ESP32 BLE Hub',
						count: 3,
						id: 'esp32',
						type: 'device',
						children: [{
							name: 'BLE Temp & Hum sensor',
							count: 12,
							color: "--green",
							id: 'esp32',
							type: 'device',
						}]
					}]
				},
				{
					name: 'PI Hole',
					id: 'pihole',
					color: "--purple",
					type: 'integration'
				},
				{
					name: 'HACS',
					id: 'hacs',
					color: "--purple",
					type: 'integration'
				},
				{
					name: 'Mobile App',
					id: 'mobileapp',
					color: "--purple",
					type: 'integration'
				},
				{
					name: 'Shelly',
					id: 'shelly',
					color: "--purple",
					type: 'integration',
					children: [{
						name: "Shelly 1",
						id: "shelly1",
						type: "device"
					}]
				},
				{
					name: 'Xiaomi Miio',
					id: 'xiaomimiio',
					color: "--purple",
					type: 'integration',
					children: [{
						name: 'Roborock s6 Vacuum',
						id: 'roborocks6',
						type: 'device',
					}]
				},
				{
					name: 'Sonos',
					id: 'sonos',
					color: "--purple",
					type: 'integration',
					children: [{
						name: 'IKEA SYMFONISK',
						count: 2,
						id: 'symfonsik1',
						type: 'device',
					}]
				},
				{
					name: 'Google Cast',
					id: 'googlecast',
					color: "--purple",
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
					color: "--purple",
					type: 'integration',
					children: [{
						name: "TRADFRI Lightbulb",
						count: 6,
						id: 'ikeabulb',
						type: 'device',
					},{
						name: "TRADFRI Switch",
						count: 3,
						id: 'ikeaswitch',
						type: 'device',
					},{
						name: "TRADFRI Remote",
						count: 1,
						id: 'ikearemote',
						type: 'device',
					},{
						name: "TRADFRI Outlet",
						count: 4,
						id: 'ikeabulb',
						type: 'device',
					},{
						name: "TRADFRI LED Driver",
						count: 1,
						id: 'ikealed',
						type: 'device',
					},{
						name: "Xiaomi Button",
						count: 1,
						id: 'xiaomibutton',
						type: 'device',
					},{
						name: "Xiaomi Cube",
						count: 1,
						id: 'xiaomicube',
						type: 'device',
					},{
						name: "Xiaomi Motion sensor",
						count: 2,
						id: 'xiaomimotion',
						type: 'device',
					},{
						name: "Xiaomi Temp/Hum sensor",
						count: 3,
						id: 'xiaomitemp',
						type: 'device',
					},{
						name: "Xiaomi Door sensor",
						count: 3,
						id: 'xiaomidoor',
						type: 'device',
					}]
				},
				{
					name: 'IHC by Schneider Electric',
					id: 'ihc',
					color: "--purple",
					type: 'integration',
					children: [{
						name: 'Light Zone',
						count: 25,
						id: 'ihclight',
						type: 'device'
					},{
						name: 'Wall switch',
						count: 5,
						id: 'ihcswitch',
						type: 'device'
					}]
				},
				{
					name: 'InfluxDB',
					id: 'influxdb',
					color: "--purple",
					type: 'integration'
				}
			]
		}
	};
};
