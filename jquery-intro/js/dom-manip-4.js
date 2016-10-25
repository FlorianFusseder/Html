/**
 * Created by Florian on 25.10.2016.
 */

const $images = $("[name = 'imgs']");
alert('Number of images in page is ' + $images.length);

const $images = $('#ictskills-imgs [name="imgs"]');
alert('There are ' + $images.length + ' images with name "imgs" in this page');
