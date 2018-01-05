$(document).ready(function() {
  
  var str='';
  var result='';
  $('.eql').click(function() {
    //result = result.split(/[\+|\-|x|\÷]/);
    $('#digits').text(eval(str));
    str='0';
  });
  $('.div').click(function() {
    if(str == '') str = '';
    else str = str + '/';
    $('#digits').text(str);
  });
  $('.mul').click(function() {
    if(str == '') str = '';
    else str = str + '*';
    $('#digits').text(str);
  });
  $('.sub').click(function() {
    if(str == '') str = '';
    else str = str + '-';
    $('#digits').text(str);
  });
  $('.add').click(function() {
    if(str == '') str = '';
    else str = str + '+';
    $('#digits').text(str);
  });
  $('.dot').click(function() {
    if(str == '') str = '0.';
    else if(isNaN(str[str.length-1])) str = str + '0.';
    else str = str + '.';
    //$('#digits').text(document.getElementById('digits').textContent + '.');
    $('#digits').text(str);
  });
  
  $('.ac').click(function() {
    $('#digits').text(0);
    str = '0';
  });
  $('.ce').click(function() {
    $('#digits').text(0);
    str = '0';
  });
  $('.zero').click(function() {
    if (str == 0) str = '0';
    else str = str + '0';
    $('#digits').text(str);
  });
  $('.one').click(function() {
    if (str == 0) str = '1';
    else str = str + 1;
    $('#digits').text(str);
  });
  $('.two').click(function() {
    if (str == 0) str = '2';
    else str = str + 2;
    $('#digits').text(str);
  });
  $('.three').click(function() {
    if (str == 0) str = '3';
    else str = str + 3;
    $('#digits').text(str);
  });
  $('.four').click(function() {
    if (str == 0) str = '4';
    else str = str + 4;
    $('#digits').text(str);
  });
  $('.five').click(function() {
    if (str == 0) str = '5';
    else str = str + 5;
    $('#digits').text(str);
  });
  $('.six').click(function() {
    if (str == 0) str = '6';
    else str = str + 6;
    $('#digits').text(str);
  });
  $('.seven').click(function() {
    if (str == 0) str = '7';
    else str = str + 7;
    $('#digits').text(str);
  });
  $('.eight').click(function() {
    if (str == 0) str = '8';
    else str = str + 8;
    $('#digits').text(str);
  });
  $('.nine').click(function() {
    if (str == 0) str = '9';
    else str = str + 9;
    $('#digits').text(str);
  });
});