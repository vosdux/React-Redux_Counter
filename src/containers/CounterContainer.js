import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, resetAction } from '../store/actionCreators/actions';

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = {
    incrementAction,
    decrementAction,
    resetAction
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);