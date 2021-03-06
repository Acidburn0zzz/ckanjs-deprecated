CKANEXT.DATAPREVIEW.template.html = ' \
<div class="ckanext-datapreview-viewer"> \
  <div class="ckanext-datapreview-nav"> \
    <span class="ckanext-datapreview-nav-toggle"> \
      <input type="radio" id="ckanext-datapreview-nav-grid" name="ckanext-datapreview-nav-toggle" value="grid" checked="checked" /> \
      <label for="ckanext-datapreview-nav-grid">Grid</label> \
      <input type="radio" id="ckanext-datapreview-nav-graph" name="ckanext-datapreview-nav-toggle" value="chart" /> \
      <label for="ckanext-datapreview-nav-graph">Graph</label> \
    </span> \
    <input type="checkbox" id="ckanext-datapreview-nav-editor" checked="checked" /> \
    <label for="ckanext-datapreview-nav-editor">Toggle Editor</label> \
  </div> \
  <div class="ckanext-datapreview-panel ckanext-datapreview-grid"></div> \
  <div class="ckanext-datapreview-panel ckanext-datapreview-graph"></div> \
  <div class="ckanext-datapreview-editor"> \
    <div class="ckanext-datapreview-editor-info ckanext-datapreview-editor-hide-info"> \
      <h1><span></span>Help</h1> \
      <p>To create a chart select a column (group) to use as the x-axis \
         then another column (Series A) to plot against it.</p> \
      <p>You can add add \
         additional series by clicking the "Add series" button</p> \
      <p>Please note you must be logged in to save charts.</p> \
    </div> \
    <form> \
      <ul> \
        <li class="ckanext-datapreview-editor-type"> \
          <label>Graph Type</label> \
          <select></select> \
        </li> \
        <li class="ckanext-datapreview-editor-group"> \
          <label>Group Column (x-axis)</label> \
          <select></select> \
        </li> \
        <li class="ckanext-datapreview-editor-series"> \
          <label>Series <span>A (y-axis)</span></label> \
          <select></select> \
        </li> \
      </ul> \
      <div class="ckanext-datapreview-editor-buttons"> \
        <button class="ckanext-datapreview-editor-add">Add Series</button> \
      </div> \
      <div class="ckanext-datapreview-editor-buttons ckanext-datapreview-editor-submit"> \
        <button class="ckanext-datapreview-editor-save">Save</button> \
        <input type="hidden" class="ckanext-datapreview-editor-id" value="chart-1" /> \
      </div> \
    </form> \
  </div> \
</div> \
';
