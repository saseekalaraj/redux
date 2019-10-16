import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementCounter,decrementCounter} from './testAction'
import { Button } from 'semantic-ui-react'

const mapStateProps = (state) => ({
    data: state.test.data
})
const mapDispathToProps={
    incrementCounter,
    decrementCounter
}
class TestComponent extends Component {
    render() {
        const {data,incrementCounter,decrementCounter}=this.props
        return (
            <div>
                <h1>{data}</h1>
                <Button onClick={incrementCounter} positive content='Increment'/>
                <Button onClick={decrementCounter} negative content='Decrement'/>
            </div>
        )
    }
}
export default connect(mapStateProps,mapDispathToProps)(TestComponent)
