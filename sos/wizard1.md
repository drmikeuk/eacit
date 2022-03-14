---
layout: sosblank
title: "Wizard1"
sosnav: "yes"
sortTitle: "Wizard1"
customjs:
  - /vendor/isotope.pkgd.min.js
  - /assets/sosWizard1.isotope.js
---

<div class="container">

  <h2>Start of Session</h2>

  <div class="row">
    <!-- SIDE -->
    <div class="col-lg-3 col-lg-offset-1 col-md-3">

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
            <input class="form-check-input" type="checkbox" value="" id="stdstart" checked>
            <label class="form-check-label" for="stdstart">Start date in September</label>
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
    </div>


    <!-- CONTENT -->
    <div class="col-lg-8 col-md-9">

{% include sossteps.md %}

    </div>

  </div>
</div>
