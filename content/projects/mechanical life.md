---
tags:
  - robots
---

I've been thinking about making a mechanical version of life. This all started when I wanted to make a simple game of life in python to help get my cousin who's just getting started with coding more interesting (Shoutout to Vihaan, you're a real one kiddo). Then I had some fun stepping down the ladder with it - I did a version of it completely in C (and ~100 lines while keeping it readable). This got me thinking - how would a completely mechanical version of life look like? 
We've got to have some way of doing the following:
- get states from neighbors
- change state on a "tick" based on life's rules
I was thinking about if it would be possible to make this completely local (with no tick overseer), but I think that might run into race condition issues, and issues with slop in the mechanisms. I'll think some more on this.