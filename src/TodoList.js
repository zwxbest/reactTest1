import React,{Component,Fragment} from 'react';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state ={
            inputValue: 'hello!!!!',
            list:[]
        }
    }
  render() {
    return (
        <Fragment>
            <div>
                <input value={this.state.inputValue}/>
                <button>提交</button>
            </div>
            <ul>
                <li>学英语</li>
            </ul>
        </Fragment>
    );
  }
}

export default TodoList;