$(document).ready(function()
{
  new ClipboardJS('.btn-clipboard');

  var scroll = getURLParameter("scroll");
  if(scroll)
  {
    var url = window.location.href;
    url = url.replace(/scroll=\d*&?/, '');
    url = url.replace(/&$/, '');
    url = url.replace(/\/\?$/, '/');

    window.history.pushState("string", "Title", url);

    $(window).scrollTop(scroll);
  }

});

function getURLParameter(sParam)
{
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');

  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
      return sParameterName[1];
  }
  return null;
}
