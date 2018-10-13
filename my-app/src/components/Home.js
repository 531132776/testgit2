import React, { Component } from 'react';
import '../assets/css/home.css'

import chemo from '../assets/images/20171129053929339517.jpg' //全局引入图片

export default class Home extends Component {

    //构造函数
    constructor(){
        super(); //继承 Component

        //react 定义数据
        this.state = {
            name: "朱旭勇",
            msg: '属性绑定',
            style: {
                color: 'green',
                fontSize: '35px'
            },
            list:[
                '11111','22222','33333'
            ],
            list2:[
                <h1 key='1'>1</h1>,<h1 key='2'>2</h1>,<h1 key='3'>3</h1>, //这种格式可直接循环
            ]
        }
    }

    //html模板
    render() {
        // 循环第一种方法
        let res = this.state.list.map((val, key) => {

            return <div key={key}>{val}</div>

        })

        return (
            <div>
                Hello React
                <p>{this.state.name}</p>
                <p title={this.state.msg}>react 属性绑定</p>
                <p className="red">react class样式属性命名 className</p>
                {/* //传统html是写 for关联input 的id属性，react是写htmlFor（注意） */}
                <label htmlFor="name">姓名：</label> 
                <input id="name" />
                <br />

                <div style={{'color':'red'}}>react 1：行内样式写法</div>
                <br />
                <div style={this.state.style}>react 2：行内样式写法</div>

                <img src={require('../assets/images/20171129053929339517.jpg')} alt="img" />
                <img src={chemo} alt="img" />

                {/* 循环第一种方法 res变量*/}
                <div>
                    {res}
                </div>
                <hr/>
                {/* 循环第2种方法 */}
                <div>
                    {this.state.list.map((val, key) => {

                        return <div key={key}>{val}</div>

                    })}
                </div>
                <hr/>
                <div>
                    {this.state.list2}
                </div>
            </div>
        )
    }
}

// export default Home