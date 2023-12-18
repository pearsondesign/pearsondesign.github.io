---
published: true
title: WLED Controller
---

:::warning
This page is currently under construction.
:::

<iframe width="100%" src="https://www.youtube.com/embed/hE9B4bpsDIw" title="WLED Controller | DIY LED Strip Controller" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## About

This project is for a custom LED controller board.  My goal of this project was to have a board that:
* Runs [WLED](https://kno.wled.ge) firmware;
* Uses inexpensive components and is simple to assemble;
* Has a small(ish) form factor;
* Uses a common 5.5x2.1mm barrel jack for power input;
* Uses common JST 2.54 connectors for the LED strips;
* Presence of a replaceable fuse;
* Enclosure that allows for mounting, as well as serviceability;

I also just enjoy a good challenge.

:::danger
I am not an electrical engineer.  This board design has flaws, only some of which are known by me.  Use with caution.
:::

## Parts List

You'll need the following components, along with a custom PCB and some 3D prints.

### Components

| Item | Link |  Notes |
| --- | --- | --- |
| ESP8266 | [Amazon](https://www.amazon.com/dp/B0BK986HLZ?ref=ppx_yo2ov_dt_b_product_details&th=1) | This is the USB C variant.  Micro USB can be had for significantly cheaper, and any "d1 mini" form factor will work |
| 5.5x2.1mm Barrel Jack | [Amazon](https://www.amazon.com/dp/B081DYQSC9?ref=ppx_yo2ov_dt_b_product_details&th=1) | These specific jacks have wider legs that make soldering easier |
| 5x20mm Fuse Holder | [Amazon](https://www.amazon.com/gp/product/B074N1NMMX/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1) | Alternative fuse holders may require some modifications to the enclosure top |
| Fuse assortment | [Amazon](https://www.amazon.com/gp/product/B07TXFHR5J/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1) | These particular fuses are rated in AC current, which makes converting a bit tricky |
| M3x8 Screws | [Amazon](https://www.amazon.com/dp/B07Q4N4V1V?ref=ppx_yo2ov_dt_b_product_details&th=1) | Need 3 for this build |
| JST XH 2.54 2 pin | [Amazon](https://a.co/d/3dqOVPY) | Comes with male wires as well, any 2 pin 2.54 JST XH connector will work though |
| JST XH 2.54 3 pin | [Amazon](https://a.co/d/aD3Sctu) | Also comes with male wires, but **need to be repinned** prior to using |


### PCB

| Board | Schematic |
| --- | --- |
| ![](./assets/Board.png) | ![](./assets/Schematic.png) |

The board design is pretty simple.  I had 25 boards manufactured by [JLCPCB](https://jlcpcb.com) for less than $10 (including shipping).  Other competitive services exist for PCB manufacturing however, so do your research before picking one.

The gerber files can be downloaded [here](./assets/gerber_files.zip).  You'll need to input these files into the 

### 3D Prints

![](./assets/CaseRender.png)

| File | Description | Recommended Settings |
| --- | --- | --- |
| [Top](./assets/WLedCaseTop.3mf) | Top part of the enclosure | Print upside-down, support enabled |
| [Bottom](./assets/WLedCaseBottom.3mf) | Bottom of enclosure | No support needed, 100% infill |
| [Holder](./assets/WLedCaseHolder.3mf) | Bracket for mounting the controller | support enabled, 100% infill in the overhang section |
| [Spacer](./assets/WLedCaseSpacer.3mf) | Spacer that separates the PCB from the WS2812B |

I print these on a Bambu Labs X1C, using ASA filament.  ASA is not required, nor is a super expensive printer, but PLA is not recommended for outdoor use.


## Assembly

There is an order of operations that must be followed.  Follow the video guide for assembly.

## Firmware

This board is meant to run [WLED](https://kno.wled.ge).  After flashing firmware, no additional setup is required.

## Flaws

Couple of known problems with this board design:
* Only supports 5v LED strips:
    * Can't use other strips such as 12v;
* No capacitor:
    * This isn't an issue when using a good power supply, but if using a cheaper supply (such as in a car), then issues may pop up.  Power does run near the WiFi antenna, and this could cause interference issues;
* Small pads:
    * Some of these solder joints are harder than they need to be, should've made the pads bigger;
* JST connectors point straight up:
    * If I redesign this board, the JST connectors will be the 90 degree variety;