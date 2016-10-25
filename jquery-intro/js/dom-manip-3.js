/**
 * Created by Florian on 25.10.2016.
 */

const images = document.getElementsByName('imgs');
for (let i = 0; i < images.length; i++) {
  alert('Image number ' + i + ' is ' + images[i].height);
}

alert('next');

const $images = $('[name="imgs"]');
alert('There are ' + $images.length + ' images with name="imgs" in this page');
let index = 0;
$images.each(function () {
  alert('Image ' + index + ' height is ' + $(this).height());
  index += 1;
});
