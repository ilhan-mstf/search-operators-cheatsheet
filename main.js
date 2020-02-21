/*!
 * License: MIT
 * Author: Mustafa İlhan, http://ilhan-mstf.github.io/
 */

const searchForm = document.getElementById("searchform");

const searchOperatorsContainer = document.createElement("div");
searchOperatorsContainer.className = "search-operators-ext-container";
searchOperatorsContainer.innerHTML = `
<select class="search-operators-ext-select">
  <option>Exact Match = "steve jobs"</option>
  <option>And = jobs AND gates</option>
  <option>Or = jobs OR gates</option>
  <option>Or = jobs | gates</option>
  <option>Exclude = jobs ‑apple</option>
  <option>Dictionary = define:entrepreneur</option>
  <option>Filetype = apple ext:pdf</option>
  <option>Site = site:apple.com</option>
  <option>Related = related:apple.com</option>
  <option>Weather = weather:san francisco</option>
  <option>Map = map:silicon valley</option>
  <option>Source = apple source:the_verge</option>
  <option>Location = loc:"san francisco" apple</option>
  <option>Conversion = $329 in GBP</option>
  <option>Conversion = 2kg in pounds</option>
  <option>Conversion = 2km in miles</option>
  <option>--</option>
  <option>added by Search Operators Cheatsheet Extension</option>
  <option>--</option>
</select>`;

searchForm.appendChild(searchOperatorsContainer);
