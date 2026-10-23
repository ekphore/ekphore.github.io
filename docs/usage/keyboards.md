---
title: Keyboard integration
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { BsApple, BsWindows } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";

# Keyboard integration

ekphore supports NKS keyboard integration with a few selected devices, follow the guide below in
order to make it work.

## Supported devices

- Kontrol S32
- Komplete Kontrol S49 MK3
- Komplete Kontrol S61 MK3
- Komplete Kontrol S88 MK3

## Setting it up

<Tabs groupId="os" queryString="os">
<TabItem value="linux" label={<span className="tab_header_with_icon"><FaLinux />Linux</span>} default>

You will need to setup udev rules in order to allow your user access to the keyboard.

Write this to `/etc/udev/rules.d/70-libnks.rules`:

```text
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", ATTR{idVendor}=="17cc", ATTR{idProduct}=="2410", MODE="0660", TAG+="uaccess"
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", ATTR{idVendor}=="17cc", ATTR{idProduct}=="2100", MODE="0660", TAG+="uaccess"
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", ATTR{idVendor}=="17cc", ATTR{idProduct}=="2110", MODE="0660", TAG+="uaccess"
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", ATTR{idVendor}=="17cc", ATTR{idProduct}=="2120", MODE="0660", TAG+="uaccess"
```

Then reload the rules and replug the keyboard:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger --subsystem-match=usb --attr-match=idVendor=17cc
```

Once that is done you can either use the standalone version, or start `./nksd`, included in the archive, in
order to have keyboard integration with the plug-ins.

</TabItem>
<TabItem value="macos" label={<span className="tab_header_with_icon"><BsApple />macOS</span>}>

ekphore relies on a daemon (`nksd`) to add keyboard integration when using plug-ins. 
As such, you will need to install `Ekphore.app` as explained in [installing ekphore](/docs/setup/installing?os=macos) even if you only use the plug-ins.

The daemon will autostart for you.

</TabItem>
<TabItem value="windows" label={<span className="tab_header_with_icon"><BsWindows />Windows</span>}>

ekphore relies on a daemon (`nksd`) to add keyboard integration when using plug-ins. 
As such, you will run this daemon manually when using the plug-ins so that
they can communicate with your keyboard.

</TabItem>
</Tabs>
