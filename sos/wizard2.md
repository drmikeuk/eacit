---
layout: sosblank
title: "Wizard2"
sosnav: "yes"
sortTitle: "Wizard2"
customjs:
  - /vendor/isotope.pkgd.min.js
  - /assets/sosWizard2.isotope.js
---

<div class="container">

  <input type="text" class="quicksearch float-right" placeholder="Search...">
  <h2>Start of Session</h2>

      <div class="filterbuttons">

        <!--  nationality: British / EU / Other (aka international) -->
        <div class="btn-group filter-button-group" data-filter-group="nationality" aria-label="Filter by nationality">
          <button type="button" class="btn " data-filter=".home">British</button>
          <button type="button" class="btn " data-filter=".eu">EU</button>
          <button type="button" class="btn " data-filter=".international">Any other</button>
        </div>

        <!--  year: new / returner -->
        <div class="btn-group filter-button-group" data-filter-group="year" aria-label="Filter by year of study">
          <button type="button" class="btn " data-filter=".new">1st year</button>
          <button type="button" class="btn " data-filter=".returner">Other</button>
        </div>

        <!--  startdate:  stdstart / nonstdstart-->
        <div class="btn-group filter-button-group" data-filter-group="startdate" aria-label="Filter by start date">
          <button type="button" class="btn " data-filter=".stdstart">September</button>
          <button type="button" class="btn " data-filter=".nonstdstart">Other</button>
        </div>

        <!--  mode: full time / part time -->
        <div class="btn-group filter-button-group" data-filter-group="mode" aria-label="Filter by mode of study">
          <button type="button" class="btn " data-filter=".fulltime">Full time</button>
          <button type="button" class="btn " data-filter=".parttime">Part time</button>
        </div>

        <!--  distance: campus / distance-->
        <div class="btn-group filter-button-group" data-filter-group="distance" aria-label="Filter by nationality">
          <button type="button" class="btn " data-filter=".campus">Campus</button>
          <button type="button" class="btn " data-filter=".distance">Distance</button>
        </div>

      </div>




  <div class="row">
    <!-- SIDE -->
    <div class="col-lg-3 col-lg-offset-1 col-md-3">

    <!--
      <div class="filters">

        <h3>I am...</h3>

        <div class="radios">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="nationality" id="home" value="home" checked>
            <label class="form-check-label" for="home">British or Irish</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="nationality" id="eu" value="eu">
            <label class="form-check-label" for="eu">An EU citizen</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="nationality" id="international" value="international">
            <label class="form-check-label" for="international">Any other nationality</label>
          </div>
        </div>

        <div class="checks">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="new" checked>
            <label class="form-check-label" for="new">First year on course</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="standardstart" checked>
            <label class="form-check-label" for="standardstart">Start date in September</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="fulltime" checked>
            <label class="form-check-label" for="fulltime">Full time</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="distance">
            <label class="form-check-label" for="distance">Distance learner</label>
          </div>
        </div>

      </div>
     -->
    </div>


    <!-- CONTENT -->
    <div class="col-lg-8 col-md-9" id="stages">

{% include sossteps.html %}

    </div>

  </div>
</div>
