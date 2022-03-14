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
// on click: CHECK ALL RADIOS AND CHECKBOXES
// push to filters array; convert to filters string & call isotope with this
$('.filters').on( 'click', 'input', function() {
  //checkfilters ();

  filters = [];

  // RADIOS
  filters.push("." + $(".radios input:checked").val());

  // CHECKBOXES #new #stdstart #fulltime #distance
  if($('#new').prop("checked") == true){
      filters.push(".new");
  }
  else {
      filters.push(".returner");
  }

  if($('#stdstart').prop("checked") == true){
      filters.push(".stdstart");
  }
  else {
      filters.push(".nonstdstart");
  }

  if($('#fulltime').prop("checked") == true){
      filters.push(".fulltime");
  }
  else {
      filters.push(".parttime");
  }

  if($('#distance').prop("checked") == true){
      filters.push(".distance");
  }
  else {
      filters.push(".campus");
  }


  // combine filters
  filterValue = concatValues(filters);
  //console.log(filters);
  console.log(filterValue);

  // call Isotope to filter ...
  $grid.isotope();


});


// FILTER: use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  //console.log('Search: '  + qsRegex);
  // call Isotope to filter ...
  $grid.isotope();
}) );


// set initial filters on page load to match buttons
checkfilters ();




// FUNCTIONS
////////////

// check filter radios/checkboxes
// push to filters array; convert to filters string & call isotope with this
function checkfilters (){
  filters = [];

  // RADIOS
  filters.push("." + $(".radios input:checked").val());

  // CHECKBOXES #new #stdstart #fulltime #distance
  if($('#new').prop("checked") == true){
      filters.push(".new");
  }
  else {
      filters.push(".returner");
  }

  if($('#stdstart').prop("checked") == true){
      filters.push(".stdstart");
  }
  else {
      filters.push(".nonstdstart");
  }

  if($('#fulltime').prop("checked") == true){
      filters.push(".fulltime");
  }
  else {
      filters.push(".parttime");
  }

  if($('#distance').prop("checked") == true){
      filters.push(".distance");
  }
  else {
      filters.push(".campus");
  }


  // combine filters
  filterValue = concatValues(filters);
  //console.log(filters);
  console.log(filterValue);

  // call Isotope to filter ...
  $grid.isotope();
}




/*
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
*/


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



/*
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
*/
