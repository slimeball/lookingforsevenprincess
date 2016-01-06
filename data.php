<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-08-23 16:33:43
 * @version 幸运转盘
 *  v是几率 
 */
 $prize_arr = array( 
    '0' => array('id'=>1,'min'=>1,'max'=>44,'prize'=>'电商代金卷100元','v'=>0), 
    '1' => array('id'=>2,'min'=>271,'max'=>314,'prize'=>'乐魔LOMO相机','v'=>0), 
    '2' => array('id'=>3,'min'=>91,'max'=>134,'prize'=>'京东E卡星座卡(100元)','v'=>0), 
    '3' => array('id'=>4,'min'=>136,'max'=>179,'prize'=>'七度空间公主系列全年礼包','v'=>0), 
    '4' => array('id'=>5,'min'=>181,'max'=>224,'prize'=>'iPad mini2','v'=>0), 
    '5' => array('id'=>6,'min'=>226,'max'=>269,'prize'=>'七度空间公主系列半年礼包','v'=>0), 
    '6' => array('id'=>7,'min'=>array(46,46,46,316,316,316), 
	'max'=>array(89,89,89,359,359,359),'prize'=>'七度空间公主系列月度礼包','v'=>1) 

); 
// 八块转盘


// $prize_arr = array( 
//     '0' => array('id'=>1,'min'=>1,'max'=>59,'prize'=>'七度空间公主系列月度礼包','v'=>0), 
//     '1' => array('id'=>2,'min'=>61,'max'=>119,'prize'=>'谢谢参与','v'=>0), 
//     '2' => array('id'=>3,'min'=>121,'max'=>179,'prize'=>'七度空间公主系列月度礼包','v'=>0), 
//     '3' => array('id'=>4,'min'=>181,'max'=>239,'prize'=>'谢谢参与','v'=>0), 
//     '4' => array('id'=>5,'min'=>241,'max'=>299,'prize'=>'学生复古旅行箱万向轮箱包20寸','v'=>0), 
//     '5' => array('id'=>6,'min'=>301,'max'=>359,'prize'=>'谢谢参与','v'=>0)

// ); 
// 六块转盘
function getRand($proArr) { 
    $result = ''; 
 
    //概率数组的总概率精度 
    $proSum = array_sum($proArr); 
 
    //概率数组循环 
    foreach ($proArr as $key => $proCur) { 
        $randNum = mt_rand(1, $proSum); 
        if ($randNum <= $proCur) { 
            $result = $key; 
            break; 
        } else { 
            $proSum -= $proCur; 
        } 
    } 
    unset ($proArr); 
 
    return $result; 
} 

foreach ($prize_arr as $key => $val) { 
    $arr[$val['id']] = $val['v']; 
} 
 
$rid = getRand($arr); //根据概率获取奖项id 
 
$res = $prize_arr[$rid-1]; //中奖项 
$min = $res['min']; 
$max = $res['max']; 
if($res['id']==7){ //七等奖 
    $i = mt_rand(0,5); 
    $result['angle'] = mt_rand($min[$i],$max[$i]); 
}else{ 
    $result['angle'] = mt_rand($min,$max); //随机生成一个角度 
} 
$result['prize'] = $res['prize']; 
 
echo json_encode($result); 

