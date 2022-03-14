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


    </div>


    <!-- CONTENT -->
    <div class="col-lg-8 col-md-9" id="stages">

{% include sossteps.md %}

    </div>

  </div>
</div>
