$(function() {


  const $form = $('#sizePicker')      // Select size input
  const $color = $('#colorPicker');   // Select color input
  const $canvas = $('#pixelCanvas');  // Select canvas

  // When size is submitted by the user, call makeGrid()
  $form.submit((e) => {
    e.preventDefault();
    $canvas.empty();
    makeGrid();
  });

  // Create grid
  function makeGrid() {
    let $height = $('#inputHeight').val();
    let $width = $('#inputWidth').val();

    for (let x = 1; x <= $height; x++) {
      $canvas.append('<tr></tr>');
      for (let y = 1; y <= $width; y++) {
        $('tr:last').append('<td class="cells"></td>');
        $('td').attr('class','cells');
      }
    }
  };

  // Each cell should have an event listener
  // that sets the background color of the cell to the selected color
  $canvas.click('.cells', (e) => {
    e.preventDefault();
    $(e.target).css('background-color', $color.val());
  });

});
