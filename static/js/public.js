 $('.beian span, .beian .bk').click(function () {
	        $('.bgbgbg').hide()
	        $('.beian').hide()
	    })
		function back() {
			$('.jumpbox').hide();
		}
		function xiazai() {
			$('.jumpbox').hide();
			$('.xiazai').show();
		}
		function lianxi() {
		    qqq();
		    return false;
			$('.jumpbox').hide();
			$('.lianxi').show();
		}
		function android() {
		    $.getJSON("/api/down?type=1",function(data) {
		        if(data){
		            location.href = 'https://down.fenfagou.com/z/aKG06v';
		        }
		    });
			
		}
		function iphone() {
		   $.getJSON("/api/down?type=2",function(data) {
		        if(data){
		            location.href = 'https://down.fenfagou.com/z/ULoYBZ';
		        }
		    });
		}
		function androidB() {
		    $.getJSON("/api/down?type=1",function(data) {
		        if(data){
		            location.href = 'https://down.youfenfa.cn/z/aKG06v';
		        }
		    });
			
		}
		function iphoneB() {
		   $.getJSON("/api/down?type=2",function(data) {
		        if(data){
		            location.href = 'https://down.youfenfa.cn/z/ULoYBZ';
		        }
		    });
		}
		function qqq() {
		    window.open('https://jq.qq.com/?_wv=1027&k=fIljvE3d');
		}
		function qq(qq) {
			window.open('http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes');
		}
		function zhuce() {
		     var bdvid = $("#bdvid").val();
			window.open('http://a.tzhnni.cn/game/Login/GL?dl=dd111');
		}
		var clipboard = new ClipboardJS('.wx', {
			text: function(trigger) {
				return wxkf;
			}
		});
		clipboard.on('success', function () {
			alert('复制成功，正在打开微信');
			location.href = 'weixin://';
		});
		
		
		  var myDate = new Date;
          var year = myDate.getFullYear();
          var mon = myDate.getMonth() + 1;
          var date = myDate.getDate(); 
          var week = myDate.getDay();
		  $('.gxsj').text(year+'-'+mon+'-'+date);
		  
	        var clipboard = new ClipboardJS('#btn_Share', {
            text: function () {
                var url = '勇闯大陆';
                return url;
            }
        });
 
        clipboard.on('success', function () {
            alert("公众号复制成功，正在打开微信");
			location.href = 'weixin://';
        });
 
        var myDate = new Date;
          var year = myDate.getFullYear();
          var mon = myDate.getMonth() + 1;
          var date = myDate.getDate(); 
          var week = myDate.getDay();
		  $('.gxsj').text(year+'-'+mon+'-'+date);