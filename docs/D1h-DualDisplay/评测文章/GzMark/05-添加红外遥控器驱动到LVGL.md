---
sidebar_position: 5
sidebar_label: "添加红外遥控器驱动到LVGL"
---
# 添加红外遥控器驱动到LVGL

> 评测作者：GzMark · 本篇为社区评测文章，来自开发者实测，未经官方逐字校对。

经过前面测试，红外驱动工作正常，这一步准备将红外遥控器加入到lvgl的输入设备中。

前面lvgl的例子里预留了输入驱动部分，这里补上： 
```
#include "irdev.h"

#include <stdio.h>
#include <linux/input.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/time.h>
#include <limits.h>
#include <unistd.h>
#include <signal.h>

#define DEV_PATH "/dev/input/event1" //difference is possible

static int irfd = 0;
/**
 * Initialize the evdev
 */
void irdev_init(void){
    irfd = open(DEV_PATH,O_RDONLY);
    printf("%d\r\n",irfd);
    if(irfd>0){
        fcntl(irfd,F_SETFL,O_NONBLOCK);
        printf("open ir input ok\r\n");
    }
}
/**
 * reconfigure the device file for evdev
 * @param dev_name set the evdev device filename
 * @return true: the device file set complete
 *         false: the device file doesn't exist current system
 */
bool irdev_set_file(char* dev_name){

}
/**
 * Get the current position and state of the evdev
 * @param data store the evdev data here
 * @return false: because the points are not buffered, so no more data to be read
 */
void irdev_read(lv_indev_drv_t * drv, lv_indev_data_t * data){
    static int lastbtn = 0;
    static int lasttm=0;
    if(irfd>0){
        struct input_event ir={0};
        static uint64_t start_ms = 0;
        if(start_ms == 0) {
            struct timeval tv_start;
            gettimeofday(&tv_start, NULL);
            start_ms = (tv_start.tv_sec * 1000000 + tv_start.tv_usec) / 1000;
        }

        struct timeval tv_now;
        gettimeofday(&tv_now, NULL);
        uint64_t now_ms;
        now_ms = (tv_now.tv_sec * 1000000 + tv_now.tv_usec) / 1000;

        uint32_t time_ms = now_ms - start_ms;

        if(read(irfd,&ir,sizeof(ir))>0){
            if(ir.code){
                if(lastbtn != ir.value){
                    // switch(ir.value){
                    //     case 70:data->key=LV_KEY_UP;break;
                    //     case 21:data->key=LV_KEY_DOWN;break;
                    //     case 68:data->key=LV_KEY_LEFT;break;
                    //     case 67:data->key=LV_KEY_RIGHT;break;
                    //     case 64:data->key=LV_KEY_ENTER;break;
                    //     case 74:data->key=LV_KEY_ESC;break;
                    //     case 7:data->key=LV_KEY_PREV;break;
                    //     case 9:data->key=LV_KEY_NEXT;break;
                    //     default:break;
                    // }
                    data->state= LV_INDEV_STATE_PRESSED;
                    data->btn_id = ir.value;
                    lastbtn = ir.value;
                }
                struct timeval tv_start;
                gettimeofday(&tv_start, NULL);
                start_ms = (tv_start.tv_sec * 1000000 + tv_start.tv_usec) / 1000;
            }else{
                if(time_ms>200){
                    lastbtn = 0;
                    data->btn_id = 0;
                    data->state = LV_INDEV_STATE_RELEASED;
                }
            }
        }else
        if(time_ms>200 && lastbtn){
            lastbtn = 0;
            data->btn_id = 0;
            data->state = LV_INDEV_STATE_RELEASED;
        }
        // data->continue_reading = true;

    }
}
```
上面本来想将部分键值注册成导航键，但物理按键，可能都会用到，导航键不一定够，起码我之前的产品用的按键就16个物理按键，所以，这里就不用导航，直接用实际键值，在main.c中注册时，注册为button类型(其实我这里的用法，跳过了输入注册这层，压根没用lvgl的输入设备框架)

main.c中，前面已经加入驱动了，这里就过掉注册驱动

修改前面的test部分代码，让它响应按键

在前面，我初始化界面控件后，开启了一个定时器，主要是来轮询按键（其实这里用法很多，这里用的定时器，还可以做一个界面管理器，有界面管理器去挂输入设备，将键值作为事件给界面管理器当前的界面去处理，不过这里用定时器最方便），下面是定时器事件部分代码:
```
void checkkey(lv_timer_t * t){
    {
        lv_indev_data_t data={0};
        curinput->driver->read_cb(curinput->driver,&data);
        if(data.state==LV_INDEV_STATE_PRESSED && data.btn_id){
            switch(data.btn_id){
                case 70:{
                    //up
                    const uint32_t c = lv_obj_get_child_id(cur);
                    if(c>0){
                        lv_obj_clear_state(cur,LV_STATE_FOCUSED);
                        cur = lv_obj_get_child(list,c-1);
                        lv_obj_add_state(cur,LV_STATE_FOCUSED);
                        lv_obj_scroll_to_view(cur,LV_ANIM_ON);
                    }else{
                        lv_obj_clear_state(cur,LV_STATE_FOCUSED);
                        cur = lv_obj_get_child(list,lv_obj_get_child_cnt(list)-1);
                        lv_obj_add_state(cur,LV_STATE_FOCUSED);
                        lv_obj_scroll_to_view(cur,LV_ANIM_ON);
                    }
                }break;
                case 21:{
                    // down
                    const uint32_t c = lv_obj_get_child_id(cur);
                    if(c<lv_obj_get_child_cnt(list)-1){
                        lv_obj_clear_state(cur,LV_STATE_FOCUSED);
                        cur = lv_obj_get_child(list,c+1);
                        lv_obj_add_state(cur,LV_STATE_FOCUSED);
                        lv_obj_scroll_to_view(cur,LV_ANIM_ON);
                    }else{
                        lv_obj_clear_state(cur,LV_STATE_FOCUSED);
                        cur = lv_obj_get_child(list,0);
                        lv_obj_add_state(cur,LV_STATE_FOCUSED);
                        lv_obj_scroll_to_view(cur,LV_ANIM_ON);
                    }
                }break;
                case 68:{
                    //  left 
                    lv_tabview_t* tabview = (lv_tabview_t*)base;
                    if(tabview->tab_cur>0){
                        lv_tabview_set_act(base,tabview->tab_cur-1,LV_ANIM_ON);
                    }else{
                        lv_tabview_set_act(base,tabview->tab_cnt-1,LV_ANIM_ON);
                    }                
                }break;
                case 67:{
                    //  right
                    lv_tabview_t* tabview = (lv_tabview_t*)base;
                    if(tabview->tab_cur<tabview->tab_cnt-1){
                        lv_tabview_set_act(base,tabview->tab_cur+1,LV_ANIM_ON);
                    }else{
                        lv_tabview_set_act(base,0,LV_ANIM_ON);
                    }  
                    // lv_event_send(base,LV_EVENT_SCROLL_END,NULL); 
                }break;
            }
        }
    }
}
```
这里，模拟了上下左右的导航切换功能

完整的test.c

```
#include "test.h"
#include "stdio.h"
#include "lv_conf.h"


static lv_obj_t* base ;
static lv_obj_t* list;
static lv_obj_t* tabs[3] = {0};
static lv_obj_t* cur;
static lv_timer_t* timer;
int tabindex=0,listindex=0;
static lv_indev_t* curinput;

void checkkey(lv_timer_t * t){
    {
        lv_indev_data_t data={0};
        curinput->driver->read_cb(curinput->driver,&data);
        if(data.state==LV_INDEV_STATE_PRESSED && data.btn_id){
            switch(data.btn_id){
                case 70:{
                    //up
                    const uint32_t c = lv_obj_get_child_id(cur);
                    if(c>0){
                        lv_obj_clear_state(cur,LV_STATE_FOCUSED);
                        cur = lv_obj_get_child(list,c-1);
                        lv_obj_add_state(cur,LV_STATE_FOCUSED);
                        lv_obj_scroll_to_view(cur,LV_ANIM_ON);
                    }else{
                        lv_obj_clear_state(cur,LV_STATE_FOCUSED);
                        cur = lv_obj_get_child(list,lv_obj_get_child_cnt(list)-1);
                        lv_obj_add_state(cur,LV_STATE_FOCUSED);
                        lv_obj_scroll_to_view(cur,LV_ANIM_ON);
                    }
                }break;
                case 21:{
                    // down
                    const uint32_t c = lv_obj_get_child_id(cur);
                    if(c<lv_obj_get_child_cnt(list)-1){
                        lv_obj_clear_state(cur,LV_STATE_FOCUSED);
                        cur = lv_obj_get_child(list,c+1);
                        lv_obj_add_state(cur,LV_STATE_FOCUSED);
                        lv_obj_scroll_to_view(cur,LV_ANIM_ON);
                    }else{
                        lv_obj_clear_state(cur,LV_STATE_FOCUSED);
                        cur = lv_obj_get_child(list,0);
                        lv_obj_add_state(cur,LV_STATE_FOCUSED);
                        lv_obj_scroll_to_view(cur,LV_ANIM_ON);
                    }
                }break;
                case 68:{
                    //  left 
                    lv_tabview_t* tabview = (lv_tabview_t*)base;
                    if(tabview->tab_cur>0){
                        lv_tabview_set_act(base,tabview->tab_cur-1,LV_ANIM_ON);
                    }else{
                        lv_tabview_set_act(base,tabview->tab_cnt-1,LV_ANIM_ON);
                    }                
                }break;
                case 67:{
                    //  right
                    lv_tabview_t* tabview = (lv_tabview_t*)base;
                    if(tabview->tab_cur<tabview->tab_cnt-1){
                        lv_tabview_set_act(base,tabview->tab_cur+1,LV_ANIM_ON);
                    }else{
                        lv_tabview_set_act(base,0,LV_ANIM_ON);
                    }  
                    // lv_event_send(base,LV_EVENT_SCROLL_END,NULL); 
                }break;
            }
        }
    }
}

void test(lv_indev_t* d){

    base = lv_tabview_create(lv_scr_act(),LV_DIR_TOP, 80);
    lv_obj_set_size(base,1920,1080);
    lv_obj_set_pos(base,0,0);

    tabs[0] = lv_tabview_add_tab(base,"Item1");
    tabs[1] = lv_tabview_add_tab(base,"Item2");
    tabs[2] = lv_tabview_add_tab(base,"Item3");


    static lv_style_t style;
    lv_style_init(&style);

    lv_style_set_bg_opa(&style, LV_OPA_100);
    lv_style_set_bg_color(&style, lv_palette_main(LV_PALETTE_BLUE));
    lv_style_set_bg_grad_color(&style, lv_palette_darken(LV_PALETTE_BLUE, 1));
    lv_style_set_bg_grad_dir(&style, LV_GRAD_DIR_VER);


    lv_style_set_text_color(&style, lv_color_white());

    list = lv_list_create(tabs[0]);
    lv_obj_set_size(list,200,400);
    lv_obj_set_pos(list,0,0);
    for(int i=0; i<6; i++){
        char t[5] = {0};
        sprintf(t,"T%d",i+1);
        cur = lv_list_add_btn(list,NULL,t);
        lv_obj_add_style(cur,&style,LV_STATE_FOCUSED);
    }

    lv_obj_add_state(cur,LV_STATE_FOCUSED);
    curinput = d;
    timer = lv_timer_create(checkkey,5,NULL);
}

void test_quit(){
    if(base){
        lv_obj_clean(base);
        lv_obj_del(base);
    }
}
```
上面的修改完成，在lv_ir_test目录下，建立shell，在shell下执行 mm

等待编译完成，将out目录下的lv_ir_test 执行文件通过adb push到板子上

在串口终端下，执行lv_ir_test,此时可以通过红外遥控的上下切换tabview的tab页，通过上下去切换list的选项。

最后呢，可以通过pack打包成镜像，烧录下，此时lv_ir_test 在/usr/bin/下，可以直接在串口终端执行测试
