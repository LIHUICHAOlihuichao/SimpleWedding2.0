const defaultState = {
    inputValue: '',
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    inputValue4: '',
    inputValue5: '',
    inputValue6: '',
    inputValue7: '',
    inputValue8: '',
    inputValue9: '',
    inputValue10: '',
    inputValue11: '',
    inputValue12: '',
    inputValue13: '',
    list: [],
    list1:[],
    list2:[],
    data:[],
    data1:[],
    data2:[],
    data3:[],
    data4:[],
    data5:[],
    data6:[],
    data7:[],
    data8:[],
    data9:[],
    data10:[],
    data11:[],
    data12:[],
    post:[],
    delete:[],
    put:[],
    input:[]
}
export default reducer = (state = defaultState, action) => {
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'changeInput1') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue1 = action.value
        return newState
    }
    if (action.type === 'changeInput2') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue2 = action.value
        return newState
    }
    if (action.type === 'changeInput3') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue3 = action.value
        return newState
    }
    if (action.type === 'changeInput4') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue4 = action.value
        return newState
    }
    if (action.type === 'changeInput5') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue5 = action.value
        return newState
    }
    if (action.type === 'changeInput6') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue6 = action.value
        return newState
    }
    if (action.type === 'changeInput7') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue7 = action.value
        return newState
    }
    if (action.type === 'changeInput8') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue8 = action.value
        return newState
    }
    if (action.type === 'changeInput9') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue9 = action.value
        return newState
    }
    if (action.type === 'changeInput10') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue10 = action.value
        return newState
    }
    if (action.type === 'changeInput11') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue11 = action.value
        return newState
    }
    if (action.type === 'changeInput12') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue12 = action.value
        return newState
    }
    if (action.type === 'changeInput13') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue13 = action.value
        return newState
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        let data={title:newState.inputValue,content:newState.inputValue1,time:action.time}
        newState.list.push(data)
        newState.inputValue=''
        newState.inputValue1=''
        return newState
    }
    if (action.type === 'addItem2') {
        let newState = JSON.parse(JSON.stringify(state))
        let data={title:newState.inputValue10,content:newState.inputValue11}
        newState.data3.push(data)
        newState.inputValue10=''
        newState.inputValue11=''
        return newState
    }
    // if (action.type === 'addItem1') {
    //     let newState = JSON.parse(JSON.stringify(state))
    //     let data={id:action.count,content:action.value}
    //     newState.list1.push(data)
    //     return newState
    // }
    if(action.type==='getItem'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data=action.data
        return newState
    }
    if(action.type==='getItem1'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data1=action.data
        return newState
    }
    if(action.type==='getItem2'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data2=action.data
        return newState
    }
    if(action.type==='getItem3'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data3=action.data
        return newState
    }
    if(action.type==='getItem4'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data4=action.data
        return newState
    }
    if(action.type==='getItem5'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data5=action.data
        return newState
    }
    if(action.type==='getItem6'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data6=action.data
        return newState
    }
    if(action.type==='getItem7'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data7=action.data
        return newState
    }
    if(action.type==='getItem8'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data8=action.data
        return newState
    }
    if(action.type==='getItem9'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data9=action.data
        return newState
    }
    if(action.type==='getItem10'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data10=action.data
        return newState
    }
    if(action.type==='getItem11'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data11=action.data
        return newState
    }
    if(action.type==='getItem12'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data12=action.data
        return newState
    }
    if(action.type==='postItem'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.post=action.data
        return newState
    }
    if(action.type==='deleteItem'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.delete=action.data
        return newState
    }
    if(action.type==='putItem'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.put=action.data
        return newState
    }
    

    return state;
}