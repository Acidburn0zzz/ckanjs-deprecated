var CKAN = CKAN || {};

CKAN.UI = function($) {
  var my = {};

  my.Workspace = Backbone.Controller.extend({
    routes: {
      "": "index",
      "search": "search",
      "search/:query": "search",
      "search/:query/p:page": "search",
      "dataset/edit/:id": "datasetEdit",
      "dataset/view/:id": "datasetView",
      "add": "add",
      "add-resource": "addResource",
      "config": "config"
    },

    initialize: function(options) {
      var self = this;
      var newPkg = new CKAN.Model.Dataset();
      this.lightbox = new CKAN.View.Lightbox();
      document.body.appendChild(this.lightbox.render());
      this.lightbox.hide();


      var newCreateView = new CKAN.View.DatasetCreateView({model: newPkg, el: $('#add-page')});
      newCreateView.render();

      var newResource = new CKAN.Model.Resource();
      var newResourceEditView = new CKAN.View.ResourceEditView({model: newResource, el: $('#add-resource-page')});
      newResourceEditView.render();


      var searchView = this.searchView =  new CKAN.View.DatasetSearchView({
        el: $('#search-page')
      });

      var default_cfg = {
        endpoint: 'http://ckan.net',
        api_key: ''
      };
      var cfg = options.config ? options.config : default_cfg;

      CKAN.Model.configure(cfg);

      var configView = new CKAN.View.ConfigView({
        el: $('#config-page'),
        config: cfg
        });
      $(document).bind('config:update', function(e, cfg) {
        CKAN.Model.configure(cfg)
      });

      this.notificationView = new CKAN.View.NotificationView({
        el: $('.flash-banner-box')
        });

      function switchView(view) {
        self.switchView(view);
      }

    },

    switchView: function(view) {
      $('.page-view').hide();
      $('#' + view + '-page').show();
    },

    index: function(query, page) {
      this.search();
    },

    search: function(query, page) {
      this.switchView('search');
    },

    _findDataset: function(id, callback) {
      var searchResults = this.searchView.collection;
      var pkg = searchResults.get(id);

      if (pkg===undefined) {
        pkg = new CKAN.Model.Dataset({id: id});
        pkg.fetch({
          success: callback,
          error: function() {
            alert('There was an error');
          }
        });
      } else {
        callback(pkg);
      }
    },

    datasetView: function(id) {
      var self = this;
      this._findDataset(id, function (model) {
        var newView = new CKAN.View.DatasetFullView({model: model});

        self.lightbox
            .title(model.get("name"))
            .content(newView.render())
            .show();
      });
    },

    datasetEdit: function(id) {
      var self = this;
      function _show(model) {
        var newCreateView = new CKAN.View.DatasetCreateView({model: model});
        $('#edit-page').html(newCreateView.render().el);
        self.switchView('edit');
      }
      this._findDataset(id, _show)
    },

    add: function() {
      this.switchView('add');
    },

    addResource: function() {
      this.switchView('add-resource');
    },

    edit: function(pkg) {
    },

    config: function() {
      this.switchView('config');
    },

    url: function(controller, action, id) {
      return '#' + controller + '/' + action + '/' + id;
    }
  });
  
  my.initialize = function(options) {
    my.workspace = new my.Workspace(options);
    Backbone.history.start()
  };

  return my;
}(jQuery);

