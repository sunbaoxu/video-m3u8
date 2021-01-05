# video-m3u8
大视频播放

## 转化视频格式  地址路径记得修改！！！

ffmpeg -i /Users/xxx/xxx/testxxx.mp4 -c copy -map 0 -f segment -segment_list /Users/xxx/xxx/video/index.m3u8 -segment_time 6 /Users/xxx/xxx/video/nxb-%04d.ts

## 下载依赖

cnpm i

## 启动服务

gulp dev
