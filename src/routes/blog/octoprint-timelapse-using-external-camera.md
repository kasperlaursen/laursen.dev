---
title: 'How to use an external camera in octoprint'
teaser: 'Setting up octoprint on a Raspberry pi to use an external DSLR for making timelapses'
date: '2021-12-11'
layout: 'post'
image: '/posts/octoprint-timelapse-using-external-camera/thumb.jpg'
categories: ['home_automation', '3d_print']
---

<svelte:head>
    <title>{title} | Kasper Laursen</title>
</svelte:head>

# Using an external camera in octoprint

Even tho I have a pi cam connected to my octopint, I wanted to make higher quality timelapses.  
To make that happen, I found my old Canon EOS 600D.  
We are going to be using gphoto2 to interface with the camera, [you can find a list of supproted cameras here](http://www.gphoto.org/doc/remote/).

<section>
    <div>
        <h3>Octolapse + DSLR</h3>
        <video controls>
        <source src="/posts/octoprint-timelapse-using-external-camera/after.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
    </div>
    <div>
        <h3>Default + pi camera</h3>
        <video controls>
        <source src="/posts/octoprint-timelapse-using-external-camera/before.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
    </div>
</section>

Okay lets get started on setting it all up.

I assume that you already have octoprint running on a PI connected to your 3D printer.  
If not, follow the [official documentation](https://octoprint.org/download/).

We need to connect to the pi via ssh to install gphoto2.  
If you did not enable ssh on installation you can do so by adding an empty file named `ssh` (no extnesion) to to root of the SD Card.

Now open a terminal and follow the steps below.

Connect to the PI via ssh

```
ssh pi@{your octopi ip}
```

(Default pasword is `raspberry`)

Install gphoto2

```
sudo apt-get install gphoto2
```

Now connect the camera to the PI and test gphoto2

```
gphoto2 --auto-detect
```

<small>You should see your camera model listed</small>

Take a picture

```
gphoto2 --auto-detect --set-config capturetarget=1 --trigger-capture
```

Navigate to the script folder

```
cd scripts
```

Create a new script to take a picture

```
sudo nano snapshot.sh
```

Add the following to the file:

```
#!/bin/sh
gphoto2 --auto-detect --set-config capturetarget=1 --trigger-capture
```

press `crtl+O` then `enter` and then `ctrl+x` and `enter` to save the file.

Add execute permission to the script

```
chmod +x snapshot.sh
```

Now try to take a picture using the script

```
./snapshot.sh
```

Now lets setup octolapse in octoprint to use the script.  
If you have not already, install the octolapse plugin through the plugin manager in the octoprint UI.
After installing configure your printer (or use a preset).

Go to `octolapse` -> `cameras` -> `Add profile`.  
Under `Camera Type` select `External Camera - Script`.  
Then under `External Camera Setup - Script` add the path to the snapshot.sh file

```
/home/pi/scripts/snapshot.sh
```

Use the test button to make sure it works.

Scroll to the bottom of the window and save the settings.

Under the octolaps tab you can now select your new camera and it will take a picture on each layer!

<style>
    section {
        display: flex;
        gap: 20px
    }

        div {
            width: 100%;
        }

        video {
            width: 100%;

        }
</style>