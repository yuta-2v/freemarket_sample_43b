$(document).on('turbolinks:load', function() {
  //リストの表示
  $('.list-to-do').mouseover(function() {
    $('.to-do-list-table').show();
    },
  );
  $('.list-to-do').mouseout(function() {
    $('.to-do-list-table').hide();
    },
  );
  //リストをマウスオーバーするとリストの色が変わる
  //1つ目
  $('.to-do-list-table--message--new').mouseover(function() {
    $('.to-do-list-table--message--new').css('background','rgb(245, 245, 245)');
    },
  );
  $('.to-do-list-table--message--new').mouseout(function() {
    $('.to-do-list-table--message--new').css('background','#fff');
    },
  );
  //2つ目
  $('.to-do-list-table--message--second').mouseover(function() {
    $('.to-do-list-table--message--second').css('background','rgb(245, 245, 245)');
    },
  );
  $('.to-do-list-table--message--second').mouseout(function() {
    $('.to-do-list-table--message--second').css('background','#fff');
    },
  );
  //3つ目
  $('.to-do-list-table--message--third').mouseover(function() {
    $('.to-do-list-table--message--third').css('background','rgb(245, 245, 245)');
    },
  );
  $('.to-do-list-table--message--third').mouseout(function() {
    $('.to-do-list-table--message--third').css('background','#fff');
    },
  );
});
