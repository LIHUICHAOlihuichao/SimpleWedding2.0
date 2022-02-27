import axios from 'axios'
import {
    changeInputAction4, changeInputAction2, changeInputAction3, changeInputAction1, changeInputAction, changeInputAction5, changeInputAction6, changeInputAction7, changeInputAction8, changeInputAction9, changeInputAction10, changeInputAction11, changeInputAction12, changeInputAction13,
    addItemAction, addItemAction2,
    getListAction, getListAction1, getListAction2, getListAction3, getListAction4, getListAction5, getListAction6, getListAction7, getListAction8, getListAction9, getListAction10,
    getListAction11,getListAction12,
    postItemAction, putItemAction, deleteItemAction
} from '../store/actionCreators'
var getTime = () => {
    var date = new Date();

    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    var hour = date.getHours().toString();
    var minute = date.getMinutes().toString();
    if (minute < 10) minute = '0' + minute;
    return year + '/' + month + '/' + day + ' ' + hour + ':' + minute;
}
export default dispatchToProps = (dispatch) => {
    return {
        inputChange(value) {
            let action = changeInputAction(value)
            dispatch(action)
        },
        inputChange1(value) {
            let action = changeInputAction1(value)
            dispatch(action)
        },
        inputChange2(value) {
            let action = changeInputAction2(value)
            dispatch(action)
        },
        inputChange3(value) {
            let action = changeInputAction3(value)
            dispatch(action)
        },
        inputChange4(value) {
            let action = changeInputAction4(value)
            dispatch(action)
        },
        inputChange5(value) {
            let action = changeInputAction5(value)
            dispatch(action)
        },
        inputChange6(value) {
            let action = changeInputAction6(value)
            dispatch(action)
        },
        inputChange7(value) {
            let action = changeInputAction7(value)
            dispatch(action)
        },
        inputChange8(value) {
            let action = changeInputAction8(value)
            dispatch(action)
        },
        inputChange9(value) {
            let action = changeInputAction9(value)
            dispatch(action)
        },
        inputChange10(value) {
            let action = changeInputAction10(value)
            dispatch(action)
        },
        inputChange11(value) {
            let action = changeInputAction11(value)
            dispatch(action)
        },
        inputChange12(value) {
            let action = changeInputAction12(value)
            dispatch(action)
        },
        inputChange13(value) {
            let action = changeInputAction13(value)
            dispatch(action)
        },
        clickBtn() {
            let time = getTime()
            let action = addItemAction(time)
            dispatch(action)
        },
        clickBtn2() {
            let action = addItemAction2()
            dispatch(action)
        },
        // clickBtn1() {
        //     console.log(add())
        //     let action = addItemAction1(add())
        //     dispatch(action)
        // },
        getFun(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction(data)
                dispatch(action)
            })
        },
        getFun1(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction1(data)
                dispatch(action)
            })
        },
        getFun2(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction2(data)
                dispatch(action)
            })
        },
        getFun3(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction3(data)
                dispatch(action)
            })
        },
        getFun4(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction4(data)
                dispatch(action)
            })
        },
        getFun5(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction5(data)
                dispatch(action)
            })
        },
        getFun6(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction6(data)
                dispatch(action)
            })
        },
        getFun7(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction7(data)
                dispatch(action)
            })
        },
        getFun8(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction8(data)
                dispatch(action)
            })
        },
        getFun9(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction9(data)
                dispatch(action)
            })
        },
        getFun10(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction10(data)
                dispatch(action)
            })
        },
        getFun11(url) {
            axios.get(url).then((res) => {
                const data = res.data
                let action = getListAction11(data)
                dispatch(action)
            })
        },
        getFun12(url) {
            axios.get(url).then((res) => {
                axios.get(url, { responseType: 'arraybuffer' }).then(function (data) {
                    var binary = '';
                    var bytes = new Uint8Array(data.data);
                    var len = bytes.byteLength;
                    for (var i = 0; i < len; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    let imgurl = window.btoa(binary)

                    // this.setState({
                    //     avatarSource: 'data:image/jpg;base64,' + window.btoa(binary) //前面的编码格式很重要，否则显示不出来
                    // }
                    // );
                    let action = getListAction12(imgurl)
                    dispatch(action)
                }).catch(function (err) {
                    error(err)
                });

            })
        },
        postFun(obj, url) {
            let data = {
                //使用方法
                user_name: obj.user_name,
                user_password: obj.user_password,
                user_phone: obj.user_phone
            }
            // console.log('0000000',data,url)
            axios.post(url, data).then((res) => {
                console.log(res)
                let action = postItemAction(data)
                dispatch(action)
            })
        },
        deleteFun(obj, url) {
            let data = {
                //使用
                // id:obj.id
            }
            axios.delete(url, data).then((res) => {
                let action = deleteItemAction(data)
                dispatch(action)
            })
        },
        putFun(obj, url) {
            let data = {
                //使用
                // id:obj.id
            }
            axios.delete(url, data).then((res) => {
                let action = putItemAction(data)
                dispatch(action)
            })
        },

    }
}