---
title: Installing ekphore
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { BsApple, BsWindows } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";

# Installing ekphore

Grab the archive for your platform from the [downloads page](/downloads).
Every archive contains the standalone application, the plug-ins for that
platform, the `nksd` helper and the license notices of bundled dependencies.

<Tabs groupId="os" queryString="os">
<TabItem value="linux" label={<span className="tab_header_with_icon"><FaLinux />Linux</span>} default>

To install the DAW plugin, copy the relevant file in the correct folder listed below:

| Format | Location |
| --- | --- |
| CLAP | `~/.clap/` |
| LV2 | `~/.lv2/` |
| VST3 | `~/.vst3/` |

If you want to install the standalone version, you can run those commands to install it on your system 
with a desktop icon:

```bash
mkdir -p ~/.local/opt/ekphore
tar -C ~/.local/opt/ekphore -xzf ekphore-linux-x86_64.tar.gz
cp -r ~/.local/opt/ekphore/share/. ~/.local/share/
sed -i "s|^Exec=.*|Exec=$HOME/.local/opt/ekphore/ekphore-ui|" ~/.local/share/applications/io.github.ekphore.desktop
~/.local/opt/ekphore/ekphore-ui
```
:::note
Some distributions (eg NixOS) might require you to package the binary
:::


</TabItem>
<TabItem value="macos" label={<span className="tab_header_with_icon"><BsApple />macOS</span>}>

To install the DAW plugin, copy the relevant file in the correct folder listed below:

| Format | Location |
| --- | --- |
| AU | `~/Library/Audio/Plug-Ins/Components` |
| VST3 | `~/Library/Audio/Plug-Ins/VST3` |
| CLAP | `~/Library/Audio/Plug-Ins/CLAP` |

To install the standalone version and the nksd daemon, drag `Ekphore.app` to `/Applications`. 

:::note
You may need to approve ekphore's launch on its first run; see [approving unsigned builds](unsigned-builds.md).
:::

</TabItem>
<TabItem value="windows" label={<span className="tab_header_with_icon"><BsWindows />Windows</span>}>

To install the DAW plugin, copy the relevant file in the correct folder listed below: 

| Format | Location |
| --- | --- |
| VST3 | `C:\Program Files\Common Files\VST3` |
| CLAP | `C:\Program Files\Common Files\CLAP` |

You can also run the standalone version by executing ekphore-ui.

:::note
You may need to approve ekphore's launch on its first run; see [approving unsigned builds](unsigned-builds.md).
:::

</TabItem>
</Tabs>
