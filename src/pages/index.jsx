export default function myFunction() {
    return (
        <view className="my_wrap">
            <view>文章</view>
            <view>图片</view>
            <view>视频</view>
            <button onClick={close}>点击</button>
        </view>
    )
}
function close() {
    console.log('111')
}
