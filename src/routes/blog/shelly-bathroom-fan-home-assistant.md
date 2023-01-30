---
title: 'Controlling bathroom fan with Shelly One and Home Assistant'
teaser: 'I made my Bathroom Fans controllable with Shelly One, Home Assistant, and cheap humidity sensors!'
date: '2022-01-29'
image: '/posts/shelly-bathroom-fan-home-assistant/thumb.jpg'
layout: 'post'
categories: ['home_automation']
---
<script lang="ts">
    import ShellyImage from "$lib/posts/shelly-bathroom-fan-home-assistant/0661.jpg?w=400&webp";
    import FanImage from "$lib/posts/shelly-bathroom-fan-home-assistant/IMG_0741.jpeg?w=400&webp";
    import SensorImage from "$lib/posts/shelly-bathroom-fan-home-assistant/IMG_8274.jpg?w=400&webp";
    import StockImage from "$lib/posts/shelly-bathroom-fan-home-assistant/stock.png?w=400&webp";
    import MushroomImage from "$lib/posts/shelly-bathroom-fan-home-assistant/mushroom.png?w=400&webp";
    import ImageGrid from "$lib/ui/ImageGrid.svelte";
</script>

<svelte:head>
    <title>{title} | Kasper Laursen</title>
</svelte:head>

# Controlling bathroom fan with Shelly One and Home Assistant

First, why do this? Our existing Fans humidity sensor simply never triggers and the alternative of having the fan running every time there is light in the room is way too annoying.  

**First, turn off the power...**  
Then I went to the attic and connected the Shelly One to the wires going to the fan. The connection is pretty simple by following the diagram in the manual that comes with the shelly. As the shelly supports being connected to a switch as well, simply ignore the SW pin when no switch is needed. You will need some short pieces of wire to make the connection.

**Remember to check the mode bridge**: As the manual states it is important the bridged pins under the smaller cover are connected correctly to support 240v!  

When Shelly has power, open the Shelly app and set up the device.  
The Shelly will automatically show up in Home Assistant if you have installed the Shelly Integration.

To get the Humidity I use my existing Xiaome BLE Temperature and Humidity Sensors but you can use any sensor entity you have available.

<ImageGrid images={[ShellyImage, FanImage, SensorImage]} />

## Letting Home Assistant control the Fan

When you have the Shelly and Humidity sensor in Home Assistant, we can use a [Generic Hygrostat](https://www.home-assistant.io/integrations/generic_hygrostat/) to control our fan based on a humidity sensor. 

To set up the sensor you can add the Yaml below to your config and replace the sensors and values to your preferences.  

```yaml
generic_hygrostat:
  - name: Bathroom Fan
    humidifier: switch.fan_bathroom
    target_sensor: sensor.temp_hum_screen_sensor_03_humidity
    min_humidity: 50
    max_humidity: 65
    target_humidity: 55
    device_class: "dehumidifier"
    min_cycle_duration:
      seconds: 60
```

Now use a Humidifier card in Lovelace to control your bathroom fan!  
Personally i use the [Mushroom custom cards](https://github.com/piitaya/lovelace-mushroom) installed through HACS.

<ImageGrid images={[MushroomImage, StockImage]} />