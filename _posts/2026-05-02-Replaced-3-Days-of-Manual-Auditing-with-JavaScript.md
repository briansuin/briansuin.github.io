---
layout: post
title: "How I Replaced 3 Days of Manual Auditing with JavaScript"
date: 2026-05-02
---

In complex international trade investigations, the burden of proof often rests on the ability to manage and audit massive datasets with surgical precision. The battle isn't just fought in legal briefs; it's fought in the rows of a spreadsheet. 

The Challenge: The "tens of thousands of Row" Wall
In a recent anti-dumping (AD) project, we were faced with an export sales database exceeding tens of thousands of rows and over hundreds of distinct product codes (PCNs). The task? Calculating precise weighted average prices for each code to determine dumping margins. 

Using traditional Excel formulas for a dataset of this scale is a recipe for disaster:

1. Human Error: Manually dragging formulas across hundreds of categories over tens of thousands of rows is inherently prone to "fat-finger" errors.

2. Time Loss: What should be a strategic task becomes a 3-day manual grind. 

The Solution: Data Engineering in Law
Instead of relying on standard office tools, I developed a custom JavaScript engine specifically optimized for AD sales tables. 

By mapping the data in memory and executing the weighted average logic through a scripted loop, the tool achieved:

🚀 Speed: Processing tens of thousands of rows in under 3 minutes. 

🎯 Precision: Eliminating manual copy-paste risks and ensuring 100% adherence to the SumProduct / Total Quantity logic required by investigating authorities. 

🔄 Simulation Power: The speed allowed our team to run multiple "what-if" scenarios, optimizing the disclosure strategy in real-time rather than waiting days for a single update. 

Modern trade law requires more than just legal interpretation; it requires the ability to manage and audit big data with surgical precision. By integrating JavaScript and Python into our workflow at Yingke Law Firm, we aren't just filling out forms—we are rebuilding the defense process for the digital age.

If you are a trade professional or a data-driven lawyer, I’d love to connect and discuss how we can further automate the complexities of international trade defense.

The related script is available here:  
[AD weighted-average calculation script](https://github.com/briansuin/briansuin.github.io/blob/main/images/AD_TOOL_SUMPRODUCT.js)
