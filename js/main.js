function AppViewModel() {

  var menudata = [
    {name: "Our_Story", selected:  false},
    {name: "The_Team", selected: false},
    {name: "Industries", selected:  false},
    {name: "Solutions", selected: false},
    {name: "Welcome", selected: true}
  ]

  var self = this;
  self.menuItem = function(data) {
    this.name = ko.observable(data.name);
    this.selected = ko.observable(data.selected);
    this.selectMenuItem = function(menuItem) {              
      self.menuItems().forEach(function(menuItem){
        menuItem.selected(false);
      })
      menuItem.selected(!menuItem.selected());
    }
  }
  self.menuItems = ko.observableArray();  

  self.renderMenu = function(menudata, menuItems) {
    for (var i = menudata.length - 1; i >= 0; i--) {
      menuItems.push(new self.menuItem(menudata[i]));
    }
  }
  self.renderMenu(menudata, self.menuItems);

  

  
    
}






ko.applyBindings(new AppViewModel());