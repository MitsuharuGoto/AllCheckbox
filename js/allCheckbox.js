// 全選択とグループ選択が可能なチェックボックス
$(function(){
  // 下位カテゴリの開閉スイッチ付き
  // 下位カテゴリを非表示にする
  $('.accordionBox dl').hide();
  // 開閉スイッチをクリックした時の動作
  $('.accordionBox a').on('click', function() {
    $(this).parent().next().toggle(
      function(){
        var checkLabelHTML = $(this).parent().find('a').html();
        if (checkLabelHTML === '[+]') {
          $(this).parent().children('span').find('a').html('[-] ')
        } else {
          $(this).parent().children('span').find('a').html('[+]')
        }
      }
    );
  });
  // 全選択
  $('.checkAll').on('change', function(){
    $('input:checkbox').prop('checked', this.checked);
  });
  // グループ選択
  $('.checkGroup').each(function(){
    $(this).on('change', function(){
      $(this).parent().next().find('input:checkbox').prop('checked', this.checked);
    });
  });
});