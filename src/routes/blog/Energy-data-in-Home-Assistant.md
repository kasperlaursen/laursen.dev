---
title: 'Integrating my Power Meter with Home Assistant'
teaser: 'Learn how to connect an ESP8266 to your power meter and retrieve encrypted data using AMS Reader. Follow this step-by-step guide to integrate the data into Home Assistant. Monitor your energy consumption and export data with Home Assistants Energy Dashboard.'
date: '2023-04-14'
image: '/posts/Energy-data-in-Home-Assistant/thumb.jpeg'
layout: 'post'
categories: ['home_automation']
---

<script lang="ts">
    import pinout from "$lib/posts/Energy-data-in-Home-Assistant/meter-pinout.png?w=400&webp";
    import settings from "$lib/posts/Energy-data-in-Home-Assistant/settings.png?w=1200&webp";
    import ImageGrid from "$lib/ui/ImageGrid.svelte";
</script>

<svelte:head>
    <title>{title} | Kasper Laursen</title>
</svelte:head>

# Integrating My Power Meter with Home Assistant 🔌🏠

Yesterday, I got the encryption keys for my power meter from the energy company! 🎉   
This meant it was time to connect an ESP8266 to the HAN interface on the power meter, so I could get the data into Home Assistant. 
In this post, I'll briefly go through how I did it.  

I followed [this Danish Guide from smarthjemmet.dk](https://smarthjemmet.dk/2021/09/aflaes-kamstrup-elmaalere-med-esp8266-eller-esp32).  
The firmware I used on the ESP is [AMS reader](https://github.com/UtilitechAS/amsreader-firmware) (I used v2.2.11, as .12 and .13 had some issues).  

## Prerequisites 🔧
0. Some way to get power to your ESP at your Power Meter.
1. An ESP8266 or ESP32.
2. USB connector for the device.
3. A compatible Power Meter with HAN enabled (I have a Kamstrup Power Meter).
4. Encryption Keys for the Power meter.
5. Dupont wires to connect between the ESP and the Male pins on the Meter.

## How to Get Encryption Keys and Enable HAN 📨

I sent a mail following the template below, found on [smarthjemmet.dk](https://smarthjemmet.dk/2021/09/aflaes-kamstrup-elmaalere-med-esp8266-eller-esp32) (translated to English for this post). I also attached a picture of the Power meter for reference.

```
Dear Power Company,

I have purchased a HAN module for my Kamstrup electricity meter, which now requires a set of encryption keys. I need GPK60 and GPK61 in order to communicate with the meter. Additionally, I would also like to have the HAN interface enabled so that I can communicate with my HAN-NVE "push" module.

My name is XXX and I live at YYY.

I have attached a photo of my electricity meter, where you can see the serial number.

Can you send the two keys to me?

Thank you in advance,
XXX
```

To find out who to send this email to, I used [greenpowerdenmark.dk](https://greenpowerdenmark.dk/vejledning-teknik/nettilslutning/find-netselskab) where you can find the provider by entering your address.

## 1. Install AMS Reader on an ESP8266 or ESP32 🔧

To do this, follow the steps on the [AMS reader Wiki](https://github.com/UtilitechAS/amsreader-firmware/wiki/flashing). This guide uses [esptool](https://github.com/espressif/esptool) to flash the firmware file to the ESP but any other tool can be used. I used [esptool-gui](https://github.com/Rodmg/esptool-gui) which adds a simple GUI to [esptool](https://github.com/espressif/esptool).

## 2. Set Up AMS Reader ⚙️

Follow the instructions on the [AMS reader Wiki](https://github.com/UtilitechAS/amsreader-firmware/wiki/initial-setup).

Connect to the Wi-Fi SSID `AMS2MQTT` and navigate to [http://192.168.4.1](http://192.168.4.1).

Choose the hardware you used, and the pin you want to connect to the power meter. On my ESP8266 NodeMCU, I used `GPIO 14`, which translates to `D5` on the board. If you use another board, Google the `{board name} pinout chart`. Set a hostname or keep the existing one, and then set up the network connection for your device to your local network.

When done, connect to the network you specified and wait for the browser to connect to the ESP.

## 3. Connect the ESP to Your Power Meter 🔌

Now, connect your wires to the ESP pin you chose in the setup, as well as GND. GND on the ESP connects to GND on the HAN interface, following the pinout below. Then, connect the GPIO pin to the DATA_OUT pin on the HAN interface, following the pinout below.

<ImageGrid images={[pinout]} />

Now, connect your ESP to power and open up the dashboard in your browser. You might already see some data, but let's add the encryption keys.

1. Click on the cog icon in the top right of the dashboard to open the settings page.
2. Under the meter section, check the "Meter is encrypted" box.
3. Add the GPK60 in the first input and GPK61 in the next.
4. Click the save button.

Below, I added a screenshot of my settings for reference.

<ImageGrid images={[settings]} />

## 4. Getting Data in Home Assistant 🏠

Now, let's get the data into Home Assistant! This guide will not go through how to set up MQTT in Home Assistant. For that, follow [the Home Assistant docs](https://www.home-assistant.io/integrations/mqtt/).

On the screenshot above, you can see my MQTT settings in AMS reader. With these settings, I have added the following config in my Home Assistant configuration.yml:

```
mqtt:
  sensor:
    - state_topic: "power-meter"
      value_template: "{{ value_json.data.P }}"
      name: "Power Import"
      unit_of_measurement: "watts"
      device_class: "power"
      state_class: "measurement"

    - state_topic: "power-meter"
      value_template: "{{ value_json.data.PO }}"
      name: "Power Export"
      unit_of_measurement: "watts"
      device_class: "power"
      state_class: "measurement"

sensor:
  - platform: integration
    source: sensor.power_import
    name: energy_spent
    unit_prefix: k
    round: 2

  - platform: integration
    source: sensor.power_export
    name: energy_sold
    unit_prefix: k
    round: 2
    
homeassistant:
  customize_glob:
    sensor.power_import:
      last_reset: "1970-01-01T00:00:00+00:00"
      device_class: energy
      state_class: measurement

    sensor.energy_spent:
      last_reset: "1970-01-01T00:00:00+00:00"
      device_class: energy
      state_class: total_increasing
      unit_of_measurement: kWh

    sensor.power_export:
      last_reset: "1970-01-01T00:00:00+00:00"
      device_class: energy
      state_class: measurement

    sensor.energy_sold:
      last_reset: "1970-01-01T00:00:00+00:00"
      device_class: energy
      state_class: total_increasing
      unit_of_measurement: kWh  
```

After adding this, I restarted Home Assistant. Then, I navigated to `myHassURL:8123/config/energy` to set up the Energy Dashboard.

In **Grid Consumption**, I selected the `sensor.energy_spent`. In **Return to grid**, I selected the `sensor.energy_sold`.

I also added my Solar Inverter to Hass to get that data in as well.

