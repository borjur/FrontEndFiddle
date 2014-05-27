// Code goes here

$(function(){
  $('.all').check(function(){
    var that = this;
    $('.answer').each(function(){
      this
      $(this).text($(that).text())
    })
  })
})

var person = {
 name: 'boris juro',
 age: 24,
 state: 'UT',
 giveKeynote: function() {}

}

console.log(JSON.stringify(person));