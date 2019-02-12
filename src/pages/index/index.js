import Taro, { Component} from '@tarojs/taro'
import { View, Button, Text ,Input} from '@tarojs/components'
import './index.styl'
import ToItem from './ToItem'

import { AtButton,AtAvatar } from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
    super(props);
    //当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state={
        inputValue:'',
        list:['react','vue']
    }
    //this.handleItemDele=this.handleItemDele.bind(this)
  }
  handleEmail1(date){
    this.setState({
      index:date
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <label htmlFor='insert'>输入内容</label>
            <Input id='insert'
                   className="input"
                   value={this.state.inputValue}
                   onInput={this.handleInputChange.bind(this)}
                   //ref={(input)=>{this.input=input}}
            /><Button onClick={this.handBtnClick.bind(this)}>提交</Button>
            <Button onClick={this.changeState.bind(this)}>改变state</Button>
            <ul>
                <li>英语{this.state.index}</li>
                <li>{this.state.inputValue}</li>
                {this.state.list.map((item,index)=>{
                   return <ToItem  key={item} content={item} index={index}  onhandleEmail={this.handleItemDele.bind(this)}/>
                })}
            </ul>
            <AtAvatar openData={{ type: 'userAvatarUrl'}}></AtAvatar>
            <AtButton loading type='primary' onClick={this.toUrl}>跳转网页</AtButton>
      </View>
    )
  }
  toUrl(){
    Taro.redirectTo({
        url: '/pages/taro-ui/taro-ui'
      })
  }

 handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        });
 }
 handBtnClick(){
         // this.setState({
         //     list:[...this.state.list,this.state.inputValue],
         //     inputValue:''
         // })
     this.setState((prevState)=>{
         return {
             list:[...prevState.list,prevState.inputValue],
             inputValue:''
         }
     })
 }
 handleItemDele(index){
     console.log(index)
     this.setState((prevState)=>{
         const list=[...prevState.list]
         list.splice(index,1)
         return {list}
     })
 }

 changeState(){
   console.log('1122')
   this.setState({
    inputValue:'2233'
   })
 }
}