import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

class Counter extends Component {
    handleIncClick() {
        this.props.incrementAction(this.props.counter);
    }
    handleDecClick() {
        this.props.decrementAction(this.props.counter)
    }
    handleResClick() {
        this.props.resetAction()
    }
    render() {
        console.log(this.props.counter);
        return (
            <Wrapper>
                <P>{this.props.counter}</P>
                <BtnWrapper>
                    <Button symbol={'-'} onClick={this.handleDecClick.bind(this)}/>
                    <Button symbol={'R'} onClick={this.handleResClick.bind(this)}/>
                    <Button symbol={'+'} onClick={this.handleIncClick.bind(this)}/>
                </BtnWrapper>
                
            </Wrapper>
            
        )
    }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #263238;
`

const BtnWrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`

const P = styled.p`
    font-size: 40px;
    color: #fff;
`

export default Counter;

