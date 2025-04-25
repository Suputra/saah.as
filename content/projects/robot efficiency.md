---
tags:
  - robots
---


Thinking about robot efficiency. 
Many robots have problems similar to rockets. Each successive link or stage has to be carried by the previous stage. This raises the question of how powerful your initial stage must be to get a resulting force/movement at your end effector. Trajectory and forces applied also matters - what are you trying to do with you robot arm

Rather than focusing on more general purpose robots, we could design specific robots based on the trajectories of the end effectors / toolpaths, and forces applied along those paths. 

What do we care about
- simplicity of the parts (assembly mainly, but also manufacturing)
- path + force matching (outcomes)
- how cheap and less performant actuators can we get away with?

How to prioritize these is also an open question.

The robot manufacturing line will have a few parts. The above will be one of the central pieces of it. Other things to think about will be the lower level details of how these robots will be built

these can also be separate projects

some options
- they build each other, with base tiles that can be carried by them and assembled by them
This approach will have passive vitamin dispensers. parts will be supplied and loaded into things like hoppers, and the robots will do all the self assembly

- they are built from the top and designed to be built from the top, and have a mothership / manufacturing hub

- hybrid approach / misc
   - saw an interesting idea where robots drive onto a build plate themselves and get printed on, then leave when done. 

the other question is the control scheme for the robots themselves. we have the meta designer, low level details of how they will be made, but we also need to consider how they are controlled. what will be the brains of each individual robot, and how will that evolve with the body? this may be a tough question. This is also circular. If trajectories are fixed, then we don’t have to think about this. 

I think this is turning into 2 things.

fixed trajectory / factory bots being made more efficiently and operate within very strict limits(so people don’t have to spend crazy amounts on actuators when it’s unnecessary) perhaps this can be done with fixed building blocks that can be mass produced automatically. 

mobile / dynamic robots - built small and simply, and with some degree of being produced automatically - whether it be by themselves, or by a factory, or both.

Maybe these can meet eventually, but they are somewhat different to start.

To some extent the robot efficiency idea is really only related to the fixed trajectory thing - and the idea of using more parallel manipulators instead of just serial manipulators. Also, we can merge together the automatic creation of base units from idea 2 with this fixed trajectory idea. dynamic trajectories and small robots can be handled later. 















