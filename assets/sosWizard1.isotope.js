
var filters = [];   // store filter for each group
var filterValue;    // store combined filters as one string
var qsRegex;        // quick search regex

// INIT Isotope
var $grid = $('#stages').isotope({
  // options
  itemSelector: '.stage',
  layoutMode: 'vertical',
  filter: function() {
      var $this = $(this);
      var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
      var buttonResult = filterValue ? $this.is( filterValue ) : true;
      return searchResult && buttonResult;
    }
});

var iso = $grid.data('isotope');


// FILTER: combine filters into one eg '.red.small'. https://isotope.metafizzy.co/filtering.html

// CHECK JUST THE CHANGED ONE....
$('.radios').on( 'click', 'input', function() {
  var $this = $(this);
  console.log ("radio: " + $this.attr("id"))
  //filters.push($this.attr("id"));
});

$('.checks').on( 'click', 'input', function() {
  var $this = $(this);
  if($(this).prop("checked") == true){
      console.log( $this.attr("id") + " is checked.");
  }
  else if($(this).prop("checked") == false){
      console.log($this.attr("id") + " is NOT checked.");
  }

});


// CHECK ALL RADIOS AND CHECKBOXES
// push to filters array; convert to filters string & call isotope with this
$('.filters').on( 'click', 'input', function() {
  // RADIOS
  $nationality = $(".radios input:checked").val();
  console.log($nationality);

  // CHECKBOXES #new #stdstart #fulltime #distance
  if($('#new').prop("checked") == true){
      console.log("new");
  }
  else {
      console.log("returner");
  }

  if($('#stdstart').prop("checked") == true){
      console.log("stdstart");
  }
  else {
      console.log("nonstdstart");
  }

  if($('#fulltime').prop("checked") == true){
      console.log("fulltime");
  }
  else {
      console.log("parttime");
  }

  if($('#distance').prop("checked") == true){
      console.log("distance");
  }
  else {
      console.log("campus");
  }

  //filters.push($this.attr("id"));
});




// FILTER: combine filters into one eg '.red.small'. https://isotope.metafizzy.co/filtering.html
$('.filterbuttons').on( 'click', 'button', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.filter-button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  filterValue = concatValues( filters );
  // Isotope filter blocks...
  $grid.isotope();
});

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  //console.log('Search: '  + qsRegex);
  // Isotope arrange cards...
  $grid.isotope();
  //updateFilterCount();
}) );


// change class on buttons (so active = primary)
$('.filter-button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.btn-primary').removeClass('btn-primary');
    $( this ).addClass('btn-primary');
  });
});


// set initial filters on page load to match buttons
// https://isotope.metafizzy.co/filtering.html
// eg filter .metal AND .transition items:  $grid.isotope({ filter: '.metal.transition' });
// home + new + stdstart + fulltime + campus
//$grid.isotope({ filter: '.home.new.stdstart.fulltime.campus' });
// --> this works but then buttons can't change it!  as overides the init above!

// init = no selected buttons + show all content
// https://stackoverflow.com/questions/32377281/isotope-combine-search-and-buttons-with-initial-filter
// so "click" buttons to get to ideal start state...
$('.filterbuttons .btn-group .btn[data-filter=".home"]').trigger('click');
$('.filterbuttons .btn-group .btn[data-filter=".new"]').trigger('click');
$('.filterbuttons .btn-group .btn[data-filter=".stdstart"]').trigger('click');
$('.filterbuttons .btn-group .btn[data-filter=".fulltime"]').trigger('click');
$('.filterbuttons .btn-group .btn[data-filter=".campus"]').trigger('click');




// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}
