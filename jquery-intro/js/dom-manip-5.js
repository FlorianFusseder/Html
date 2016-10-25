/**
 * Created by Florian on 25.10.2016.
 */
function action() {

  const $t = $('#text');
  const $b = $('#button');

  if ($t.attr('type') == 'hidden' || $t.is(':hidden')) {
    $t.show();
    $b.text('Hide');
  } else {
    $t.hide();
    $b.text('Reveal');
  }
}
