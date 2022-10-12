/*Animate Elements Continually Using an Infinite Animation Count
The previous challenges covered how to use some of the animation properties and the @keyframes rule. Another animation property is the animation-iteration-count, which allows you to control how many times you would like to loop through the animation. Here's an example:

animation-iteration-count: 3;
In this case the animation will stop after running 3 times, but it's possible to make the animation run continuously by setting that value to infinite.

To keep the ball bouncing on the right on a continuous loop, change the animation-iteration-count property to infinite.

*/

<style>

#ball {
  width: 100px;
  height: 100px;
  margin: 50px auto;
  position: relative;
  border-radius: 50%;
  background: linear-gradient(
    35deg,
    #ccffff,
    #ffcccc
  );
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes bounce{
  0% {
    top: 0px;
  }
  50% {
    top: 249px;
    width: 130px;
    height: 70px;
  }
  100% {
    top: 0px;
  }
}
</style>
<div id="ball"></div>