/*Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
The next function of the transform property is skewX(), which skews the selected element along its X (horizontal) axis by a given degree.

The following code skews the paragraph element by -32 degrees along the X-axis.

p {
  transform: skewX(-32deg);
}
Skew the element with the id of bottom by 24 degrees along the X-axis by using the transform property.*/


<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>