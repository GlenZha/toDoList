//子组件
import Taro,{Component} from '@tarojs/taro'
//对传过来的函数进行校验，确定是否为函数
import PropTypes from 'prop-types'
import { View, Button, Text ,Input} from '@tarojs/components'


class ToItem extends Component{
    //初始化函数
    constructor(props){
        super(props)
        //绑定this
        //this.handleClick=this.handleClick.bind(this)
    }
    //子组件不会因为父组件render执行而重新渲染
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.content !== this.content
    }

    render() {
        //子组件通过属性接受数据

        const self=this
        return <View onClick={this.handleClick.bind(this)}>{this.props.content}</View>
    }
    handleClick () {
        console.log(this.props)
        this.props.onhandleEmail(this.props.index)
      }
}

//期望接受到的值是什么类型，不是会报警告
ToItem.propTypes={
    //test:PropTypes.string.isRequied,必须传一个test
    content:PropTypes.string,
    //handleItemDele:PropTypes.func,
    index:PropTypes.number
}
//默认值
ToItem.defaultProps={
    test:'hello'
};
export default ToItem