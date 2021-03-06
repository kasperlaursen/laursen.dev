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
					color: "--teal",
					type: 'integration',
					children: [{
						name: 'ESP32 BLE Hub',
						id: 'esp32',
						count: 3,
						color: "--teal",
						type: 'device',
						children: [{
							name: 'BLE Temp & Hum sensor',
							id: 'bletemp',
							count: 12,
							color: "--teal",
							type: 'device',
						}]
					}]
				},
				{
					name: 'PI Hole',
					id: 'pihole',
					color: "--gray",
					type: 'integration'
				},
				{
					name: 'HACS',
					id: 'hacs',
					color: "--gray",
					type: 'integration'
				},
				{
					name: 'Mobile App',
					id: 'mobileapp',
					color: "--gray",
					type: 'integration'
				},
				{
					name: 'Shelly',
					id: 'shelly',
					color: "--dark-gray",
					type: 'integration',
					children: [{
						name: "Shelly 1",
						id: "shelly1",
						color: "--dark-gray",
						type: "device"
					}]
				},
				{
					name: 'Xiaomi Miio',
					id: 'xiaomimiio',
					color: "--orange",
					type: 'integration',
					children: [{
						name: 'Roborock s6 Vacuum',
						id: 'roborocks6',
						color: "--orange",
						type: 'device',
					}]
				},
				{
					name: 'Sonos',
					id: 'sonos',
					color: "--dark-blue",
					type: 'integration',
					children: [{
						name: 'IKEA SYMFONISK',
						count: 2,
						color: "--dark-blue",
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
						color: "--purple",
						type: 'device',
					}]
				},
				{
					name: 'Zigbee Home Automation',
					id: 'zha',
					color: "--dark-green",
					type: 'integration',
					children: [{
						name: "TRADFRI Lightbulb",
						count: 6,
						color: "--green",
						id: 'ikeabulb',
						type: 'device',
					},{
						name: "TRADFRI Switch",
						count: 3,
						color: "--green",
						id: 'ikeaswitch',
						type: 'device',
					},{
						name: "TRADFRI Remote",
						count: 1,
						color: "--green",
						id: 'ikearemote',
						type: 'device',
					},{
						name: "TRADFRI Outlet",
						count: 4,
						color: "--green",
						id: 'ikeaoutlet',
						type: 'device',
					},{
						name: "TRADFRI LED Driver",
						count: 1,
						color: "--green",
						id: 'ikealed',
						type: 'device',
					},{
						name: "Xiaomi Button",
						count: 1,
						color: "--green",
						id: 'xiaomibutton',
						type: 'device',
					},{
						name: "Xiaomi Cube",
						count: 1,
						color: "--green",
						id: 'xiaomicube',
						type: 'device',
					},{
						name: "Xiaomi Motion sensor",
						count: 2,
						color: "--green",
						id: 'xiaomimotion',
						type: 'device',
					},{
						name: "Xiaomi Temp/Hum sensor",
						count: 3,
						color: "--green",
						id: 'xiaomitemp',
						type: 'device',
					},{
						name: "Xiaomi Door sensor",
						count: 3,
						color: "--green",
						id: 'xiaomidoor',
						type: 'device',
					}]
				},
				{
					name: 'IHC by Schneider Electric',
					id: 'ihc',
					color: "--red",
					type: 'integration',
					children: [{
						name: 'Light Zone',
						count: 25,
						color: "--red",
						id: 'ihclight',
						type: 'device'
					},{
						name: 'Wall switch',
						count: 5,
						color: "--red",
						id: 'ihcswitch',
						type: 'device'
					}]
				},
				{
					name: 'InfluxDB',
					id: 'influxdb',
					color: "--gray",
					type: 'integration'
				}
			]
		}
	};
};
