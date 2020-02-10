import { Stories } from './../../stories.js';

Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    heroes: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredHeroes: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var heroes = this.heroes
      if (filterKey) {
        heroes = heroes.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        heroes = heroes.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return heroes
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// set empty list;
var allData = [];
var allStories = [];

// execute anonymous func and parse current dict elements;
(function() {
    for (var key in Stories) {
    	var value = Stories[key]
    	allData.push({ 'date' : key, 'storie' : value})
    }
    serveTable()		
})()

// serve to the table;
function serveTable() {
var storiesTable = new Vue({
  el: '#storiesTable',
  data: {
    searchQuery: '',
    gridColumns: ['date', 'storie'],
    gridData: allData
  }
})
}