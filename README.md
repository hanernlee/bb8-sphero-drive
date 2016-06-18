# BB-8 Sphero
***
I was fortunate enough to receive a Star Wars BB-8 Sphero as a birthday gift and as soon as I learned that BB-8 Sphero was hackable, I dived straight into looking for documentation.

After a few hours of googling, I narrowed down my search to these two resources, which I found to be awesomely useful.

- [Sphero.js](https://github.com/orbotix/sphero.js)
- [Cylon.js](https://cylonjs.com/documentation/drivers/bb8/)

Being new to programming, it took me a good hour and a half to get BB-8 connected through Node and setting up keypress, but it was definitely worth it once I got it working.

![Alt text](http://i.imgur.com/txJZ8JD.gif)

If you have your own BB-8 Sphero and would like to try this out. Follow these steps below:-

1. Clone or Download this repo.
2. Run ```npm install``` to install the necessary node dependencies.
3. Run ```node ./node_modules/cylon-ble/examples/discovery/discovery.js``` to obtain BB-8's UUID. Make sure BB-8 has enough battery and is within range.
4. Once you have obtained the UUID, replace the old uuid string on ```line 9 in bb8.js``` with your own BB-8's UUID.
5. Run ```node bb8.js``` and you should see something like this on the terminal :-

```
2016-06-18T16:49:20.360Z : [Robot 1] - Starting connections.
2016-06-18T16:49:20.366Z : [Robot 1] - Starting connection 'bluetooth'.
2016-06-18T16:49:24.371Z : [Robot 1] - Starting devices.
2016-06-18T16:49:24.371Z : [Robot 1] - Starting device 'bb8'.
2016-06-18T16:49:25.634Z : [Robot 1] - Working.
```


You should be good to go once you see the status ```Working```.

6. Controls are ```c``` to change colors, and your standard ```wsad``` for movements to different directions.

For now, this cute droid behaves like a RC Car, but hey at least I get to move it around using my laptop and randomize BB-8's colors.
***
