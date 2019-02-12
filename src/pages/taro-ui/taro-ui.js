import Taro,{ Component } from "@tarojs/taro"
import {View,Button,Text} from '@tarojs/components'

export default class taroui extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        return (<View>
            <Text>这是taro-ui页面</Text>
        </View>)
    }
}