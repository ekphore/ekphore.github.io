---
title: Approving unsigned builds
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { BsApple, BsWindows } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";

# Approving unsigned builds

ekphore's macOS builds are ad-hoc signed but not notarized, and its Windows
builds aren't code-signed. Both systems warn about that the first time you open
them. Only approve archives you downloaded from the
[downloads page](/downloads) or the official
[GitHub releases](https://github.com/ekphore/ekphore/releases).

<Tabs groupId="os" queryString="os" defaultValue="macos">
<TabItem value="macos" label={<span className="tab_header_with_icon"><BsApple />macOS</span>}>

The first time you open `Ekphore.app` or one of its plugin, macOS may refuse to execute the program.
Follow those instructions in order to allow it:

1. Click **Done** in the warning.
2. Open **System Settings -> Privacy & Security**.
3. Scroll to the message about Ekphore and click **Open Anyway**.
4. Confirm with your password or Touch ID, then choose **Open**.

</TabItem>
<TabItem value="windows" label={<span className="tab_header_with_icon"><BsWindows />Windows</span>}>

The first time you open `ekphore-ui.exe` or one of its plugin, Windows SmartScreen may refuse to execute the program.
Click **More info** then **Run anyway** to allow it.

</TabItem>
</Tabs>
