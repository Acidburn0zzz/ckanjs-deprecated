CKAN.Templates.resourceForm = ' \
  <form class="resource" action="" method="POST"> \
    <dl> \
      <dt> \
        <label class="field_opt" for="Resource--url"> \
          Link \
        </label> \
      </dt> \
      <dd> \
        <input id="Resource--url" name="Resource--url" type="text" value="${url}" placeholder="http://mydataset.com/file.csv" /> \
      </dd> \
    </dl> \
 \
  <fieldset> \
    <legend> \
      <h3>A Bit More Info</h3> \
    </legend> \
    <dl> \
      <dt> \
        <label class="field_opt" for="Resource--description"> \
          Description \
        </label> \
      </dt> \
      <dd> \
        <input id="Resource--description" name="Resource--description" type="text" value="${description}" placeholder="A short description ..."/> \
      </dd> \
 \
      <dt> \
        <label class="field_opt" for="Resource--kind"> \
          Kind \
        </label> \
      </dt> \
      <dd> \
        <select id="Resource--license_id" name="Resource--license_id"> \
          <option selected="selected" value="file">File</option> \
          <option value="api">API</option> \
          <option value="index">Index</option> \
          <option value="example">Example</option> \
        </select> \
      </dd> \
 \
      <dt> \
        <label class="field_opt" for="Resource--format"> \
          Format \
        </label> \
      </dt> \
      <dd> \
        <input id="Resource--format" name="Resource--format" type="text" value="${format}" placeholder="e.g. csv, zip:csv (zipped csv), sparql"/> \
      </dd> \
 \
      <dt> \
        <label class="field_opt" for="Resource--license_id"> \
          Licence \
        </label> \
      </dt> \
      <dd> \
        <select id="Resource--license_id" name="Resource--license_id"> \
          <option selected="selected" value=""></option> \
          <option value="notspecified">Other::License Not Specified</option> \
        </select> \
      </dd> \
  </fieldset> \
 \
    <div class="submit"> \
      <input id="save" name="save" type="submit" value="Save" /> \
    </div> \
  </form> \
';

CKAN.Templates.resourceCreate = ' \
  <div class="resource-create"> \
    <table> \
      <tr class="heading"> \
        <td> \
          <h3>Link to data online (File, API etc)</h3> \
        </td> \
        <td><h3>or</h3></td> \
        <td><h3>Upload data</h3></td> \
      </tr> \
      <tr> \
        <td class="edit"></td> \
        <td class="separator"></td> \
        <td class="upload"></td> \
      </tr> \
    </table> \
  </div> \
';