/**
 * site:http://www.raxue.com
 * User: yinhuadong
 * Date: 13-3-19
 * Time: 上午10:01
 * Model:功能模块，不涉及业务逻辑
 */
define(function(require,exports){
    //导入依赖模块
    var $ = require('jquery');

    /*滑动分类菜单*/
    exports.categoryMenu = function(idStr){
        if($("#"+idStr).length>0){
            $("#"+idStr).find(".item").bind("mousemove",function(){
                var $this = $(this);
                $this.siblings().removeClass("hover");
                $this.addClass("hover");
            }).bind("mouseout",function(){
                    var $this = $(this);
                    $this.removeClass("hover");
            });
        }
    };

    /*自动切换功能*/
    exports.transformView = function(opt){
        opt = $.extend({
            time:5,//间隔时间（秒）
            step:500,//变化时间 （毫秒）
            startIndex:0,//开始滚动的索引
            container:null,//容器对象
            slider:null,//滑动对象
            width:960,//宽度
            selectStyle:'selected'//选择样式
        },opt);

        var timerHandler,index = 0,count = 0,auto = true,target;
        var init = function(){
            if(!opt.container || !opt.slider || !(opt.container.length>0) || !(opt.slider.length>0)) return ;
            /*初始化样式*/
            opt.container.css({overflow:"hidden"});
            $(opt.slider.find("li")[opt.startIndex]).addClass(opt.selectStyle);

            count = opt.slider.find("li").length;
            start();

            /*鼠标事件*/
            opt.slider.find("li").bind("mousemove",function(){
                index = $(this).index();
                //鼠标移入停止自动切换
                auto = false;
                start();
            }).bind("mouseout",function(){
                    //鼠标移开开启自动切换
                    index = $(this).index();
                    auto = true;
                    start();
                });
        };

        /*开始切换设置*/
        var start = function(){
            target = -1*opt.width*index;
            move();
        };

        /*移动*/
        var move = function(){
            window.clearInterval(timerHandler);
            var curItem = $(opt.slider.find("li").get(index));
            curItem.siblings().removeClass("selected");
            curItem.addClass("selected");
            opt.container.find("ul").stop().animate({left:target},opt.step);
            if(index>=(count-1)){
                index = 0;
            }else{
                index ++;
            }
            if(auto){
                timerHandler = window.setTimeout(start,opt.time*1000);
            }
        };

        init();
    };

    /*下拉菜单*/
    exports.selectMenu = function(id){
        var selectBar = $("#"+id);
        if(!(selectBar.length)) return ;
        var selected = false,menu = selectBar.next();
        selectBar.bind("click",function(){
            if(selected){
                menu.stop().slideUp(300,function(){
                    selectBar.parent().removeClass("selected");
                    selected = false;
                });
            }else{
                selectBar.parent().addClass("selected");
                menu.stop().slideDown(300,function(){
                    selected = true;
                });
            }
        });
    };
});
