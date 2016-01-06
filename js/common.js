/**
 * 
 * @authors Benu (slimeball@foxmail.com)
 * @date    2014-08-18 17:40:01
 * @version $Id$
 */
window.onload=function (){
var nav = document.getElementById("z_nav");
var links = nav.getElementsByTagName("li");
var lilen = nav.getElementsByTagName("a");
var currenturl = document.location.href;
var last = 0;
for (var i=0;i<links.length;i++)
{
var linkurl = lilen[i].getAttribute("href");
if(currenturl.indexOf(linkurl)!=-1)
{
last = i;
links[last].className = "selected";
}
}
}
//导航hover
$(function(){
	$(".z_r_map .z_china_map div").each(function(){
		var $x=-100;
		var $y=-100;	
		var name=$(this).attr("alt");	
		$(this).mouseover(function(e){
			var index_num=$(this).index();
			var dom="<div class='mapDiv'><p><span class='num'></span></p></div>";
			$("body").append(dom);
			$(".num").html($(".z_map_text li").eq(index_num).html());
			$(".mapDiv").css({
					top: (e.pageY + $y)+"px",
					left: (e.pageX + $x)+"px"
				}).show("fast");
		}).mouseout(function(){
				$(".mapDiv").remove();
		}).mousemove(function(e){
				$(".mapDiv").css({
					top: (e.pageY + $y)+"px",
					left: (e.pageX + $x)+"px"
			});
		});
	});
});

// 地图

function zd(u){ 
var a=['top','left'],b=0; 
u=setInterval(function(){ 
	document.getElementById('z_rock').style[a[b%2]]=(b++)%4<2?0:4 +"px"; 
	if(b>15){clearInterval(u);b=0} 
},32)};

// 抖动


//<![CDATA[
	$(function(){
	    var $div_li =$(".z_netzone .z_search div");
	    $div_li.click(function(){
			$(this).addClass("selected") //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
    		$(".z_netzone .z_piczone > ul") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div
			.eq(index).show()   //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		});
	});
//]]>
// tab选手


//<![CDATA[
	$(function(){
	    var $div_li =$(".z_tencity .z_citylist li");
	    $div_li.click(function(){
			$(this).addClass("selected") //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
             $(".z_tencity .z_piczone > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div
			.eq(index).show()   //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
		});
	});
//]]>

// tab 十城

	$(function(){
	    var $div_li =$(".z_l_video_list .z_l_video_list_pic li");
	    $div_li.click(function(){
			$(this).addClass("selected") //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
             $(".z_vedio_map .z_l_video .z_l_video_go > .video_player") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div
			.eq(index).show()   //显示 <li>元素对应的<div>元素
			.siblings(".video_player").hide(); //隐藏其它几个同辈的<div>元素
		});
	});


// tab 视频list
	$(function(){
	    var $div_li =$(".theme-popover .theme-popbod .z_pages a");
	    $div_li.click(function(){
			$(this).addClass("selected") //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
                        $(".theme-popover .theme-popbod .z_tanchu_pic > img") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div
			.eq(index).show()   //显示 <li>元素对应的<div>元素
			.siblings("img").hide(); //隐藏其它几个同辈的<div>元素
		});
	});
// 选手信息页码

	$(function(){
	    var $div_li =$(".theme-popover-join .z_pages a");
	    $div_li.click(function(){
			$(this).addClass("selected") //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $(".theme-popover-join .z_u_input > textarea") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div
			.eq(index).show()   //显示 <li>元素对应的<div>元素
			.siblings("textarea").hide(); //隐藏其它几个同辈的<div>元素
		});
	});
$("#tab_submit").click(function(){
	if (this.value=="") {};
});


$(".theme-popover-join .z_u_input > textarea").focus(function(){
	this.value="";
});
$(".theme-popover-join .z_u_input > textarea").blur(function(){
	if (this.value=="") {
	this.value="就是喜欢光芒四射"+"\n"+"就是愿意听别人的表扬闪光不好吗？骄傲不好吗姨妈驾到也要最美好 我要出彩我要独特我要最好 即使没有王子 我也是公主";
	};
});

// 报名表页码
$(".z_search input:first").focus(function(){
	if (this.value=="请输入选手姓名搜索") {
	this.value="";
	};
});
$(".z_search input:first").blur(function(){
	if (this.value=="") {
	this.value="请输入选手姓名搜索";
	};
});

//报名页参赛宣言
$(".click_qidai").click(function(){
	$(".z_qidai").show();
	$(".theme-popover-mask-qidai").show();
});

$(".theme-poptit").click(function(){
	$(".z_qidai").fadeOut();
	$(".theme-popover-mask-qidai").fadeOut();
});
$(".z_iknow").click(function(){
	$(".z_qidai").fadeOut();
	$(".theme-popover-mask-qidai").fadeOut();
});
// 敬请期待
// 关闭
$(".z_pfile_button").click(function(){
	$(".z_qidai_video").show();
	$(".theme-popover-mask-qidai-video").show();
});

$(".theme-poptit").click(function(){
	$(".z_qidai_video").fadeOut();
	$(".theme-popover-mask-qidai-video").fadeOut();
});
$(".z_iknow").click(function(){
	$(".z_qidai_video").fadeOut();
	$(".theme-popover-mask-qidai-video").fadeOut();
});
// 无视频


// 十城选手页码
	$(function(){
	    var $div_li =$(".theme-popover-ten .z_pages a");
	    $div_li.click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
                        $(".theme-popover-ten .theme-popbod .z_tanchu_pic_ten > img") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div
			.eq(index).show()   //显示 <li>元素对应的<div>元素
			.siblings("img").hide(); //隐藏其它几个同辈的<div>元素
		});
	});

// 十城选手页码

// 网络赛区页码
	$(function(){
	    var $div_li =$(".z_netzone .z_pages a");
	    $div_li.click(function(){
			$(this).addClass("pagehover").siblings().removeClass("pagehover");  //去掉其它同辈<li>元素的高亮
		});
	});

// 网络赛区页码


// 十城视频
// 图片上传弹出flash
$(function(){
	$(".z_u_uppic li span").click(function(){
		$("#flash_picup").fadeIn();
		$("#flash_picup").append("<embed src='./swf/picuploads.swf' allowFullScreen='true' quality='high' width='320' height='440' align='middle' wmode='transparent' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>");
		$('.theme-popover-mask-picup').fadeIn(0);
	});
});
function closepicup(){
	$("#flash_picup embed").remove();
	$('.theme-popover-mask-picup').fadeOut(0);
	$("#flash_picup").fadeOut();
};