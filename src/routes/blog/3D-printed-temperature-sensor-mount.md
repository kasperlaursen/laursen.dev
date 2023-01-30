---
title: 'How I made a wall mount for cheap Xiaomi Temperature Sensors'
teaser: 'These cheap temperature sensors are great! I designed a wall mount to avoid drilling any holes.'
date: '2021-09-01'
image: '/posts/3D-printed-temperature-sensor-mount/thumb.jpg'
layout: 'post'
categories: ['3d_print']
---

<script lang="ts">
    import Image1 from "$lib/posts/3D-printed-temperature-sensor-mount/img-1.jpg?w=400&webp";
    import Image2 from "$lib/posts/3D-printed-temperature-sensor-mount/img-2.jpg?w=400&webp";
    import Image3 from "$lib/posts/3D-printed-temperature-sensor-mount/img-3.jpg?w=400&webp";
    import Image4 from "$lib/posts/3D-printed-temperature-sensor-mount/img-4.jpg?w=400&webp";
    import Image5 from "$lib/posts/3D-printed-temperature-sensor-mount/img-5.jpg?w=400&webp";
    import ImageGrid from "$lib/ui/ImageGrid.svelte";
</script>

<svelte:head>
    <title>{title} | Kasper Laursen</title>
</svelte:head>

# 3D Printed wall mount for Xiaomi Temperature sensors

Some time ago I bought a bunch of these cheap Xiaomi Bluetooth Temperature and Humidity sensors.  
We wanted to mount them on the walls in each room in the house but didn't want to drill any holes.

The easy solution would be just tapeing them directly to the wall, but they needed to be taken down for battery change...

To solve this I designed a simple mount for the sensors!

<ImageGrid images={[Image1, Image2, Image3, Image4, Image5]} />

On the back there's an indentation for some gel tape, to leave as small a gap to the wall as possible.  
On the front, a combination of 4 pegs and a magnet holds the sensor secured.  
The magnet magnetizes directly to the battery, as nothing else is magnetic.

The mount holds the sensor secure enough that it will not fall, however loose enough that it can easily be taken down for battery replacement!

If you want to print the mount for yourself, the [files are available on Thingiverse!](https://www.thingiverse.com/thing:4946445)
