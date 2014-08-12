---
layout: post
title: "Urho3D 1.3 Release"
description: ""
category: "releases"
tags: [1.3]
---
{% include JB/setup %}

### Source code
- [ZIP File](https://github.com/{{ site.organization.name }}/{{ site.organization.project }}/archive/{{ page.tags[0] }}.zip)
- [TAR Ball](https://github.com/{{ site.organization.name }}/{{ site.organization.project }}/archive/{{ page.tags[0] }}.tar.gz)

### ChangeLog
- Lua scripting support.
- Optional build as a single external library, static or dynamic.
- Raspberry Pi support.
- 64-bit build support.
- HTTP client using the Civetweb library.
- Enhanced CMake build scripts. Android build also uses CMake. Use out-of-source build on platform that supports it.
- Rendering performance optimizations, optional StaticModelGroup component for culling and lighting several objects as one unit.
- A set of sample applications implemented in C++, AngelScript and Lua.
- Automatic Node/component handle member variable serialization for AngelScript script objects.
- New UI theme.
- Shadow & stroke effects in Text & Text3D.
- Boolean shader uniforms.
- Quick menu in the editor.
- Material editor and preview in the editor.
- Editable attributes for particle emitters.
- Components are grouped into categories in the editor.
- Update SDL to stable 2.0.0 release.
- Several other improvements and bugfixes.
