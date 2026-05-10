---
layout: post
title: "Making Serious Work Visible to AI — An Introduction to VeriHash"
date: 2026-05-10
---

The future of personal reputation may not rely solely on resumes, job titles, social media posts, or self-promotion.

As AI increasingly becomes an intermediary for searching, matching, recommending, collaboration, and dispute resolution, knowledge workers — including lawyers, researchers, developers, and consultants — face a new challenge: our real value often lies hidden in tedious documents, draft iterations, and complex debugging processes. This kind of work is difficult to display publicly, hard for AI systems to recognize, and challenging for others to quantify.

To explore a possible solution, I developed and open-sourced **VeriHash**, an experimental tool designed to preserve a long-term, machine-readable footprint of professional work.

## Core Positioning

**VeriHash does not prove that a person is excellent.**  
It simply helps preserve a long-term, machine-readable trail of what that person has actually worked on.

## How It Works

VeriHash acts like a personal “digital notary.” When a task is completed, it can:

1. **AI Smart Extraction**  
   Locally distill work increments and generate sanitized workload summaries and skill tags.

2. **Cryptographic Anchoring**  
   Timestamp the work and generate a unique credential ID.

3. **Web3 Identity System**  
   Each user generates a local DID (Decentralized Identifier) key. This globally unique identity key applies a digital signature to each work record.

4. **Hash Linking**  
   After signing, each new credential is mathematically linked to the hash of the previous one, forming a tamper-evident hash chain.

Ultimately, this data is packaged into a lightweight personal **Credential Chain**.  
VeriHash’s core value lies in the long-term continuity of one’s work footprint and identity ownership.

## Why Broadcast via GitHub Gist?

Once a credential chain is built, AI systems need a stable, machine-readable source to discover it.

We chose **GitHub Gist** as the public broadcasting channel because it provides stable URLs and plain-text, machine-readable records. This allows AI systems to read signed “intellectual fingerprints” directly, without relying solely on third-party intermediaries.

## Latest Milestone

VeriHash has just released **v0.4.2 (MVP Stage)**.

This version includes:

- Fixes for several underlying bugs
- A comprehensive **GitHub Account & Gist Setup Guide**
- Continued optimization for Gemini and DeepSeek API workflows

## Looking Ahead

We are exploring a new path: **evidence-based personal branding**.

The project is now open-source on GitHub. Because my testing bandwidth is limited, I have primarily optimized and tested the tool with the **Gemini** and **DeepSeek** APIs. Since LLM APIs vary significantly across providers, feedback from anyone testing integrations with **Claude, OpenAI, or local open-source models** would be highly appreciated.

🔗 **GitHub Repository:** [VeriHash](https://github.com/briansuin/verihash)