define(function(require,exports){
    var $ = require('jquery');
    var modelsComm = require('../../comm/model_comm');

    /*首页初始化*/
    exports.init = function(){

        //批改平台首页自动切换
        modelsComm.transformView({
            container:$("#chang-img-container"),
            slider:$("#chang-slider-container")
        });

        //批改平台头部右侧下拉菜单
        modelsComm.selectMenu("select-menu-bar");
    }
});
