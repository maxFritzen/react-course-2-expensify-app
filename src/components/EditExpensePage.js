import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm  from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // Dispatch the action to edit the expense
    this.props.editExpense(this.props.expense.id, expense);
    //this.props.editExpense(this.props.expense.id, expense);
    // Redirect to the dashboard
    this.props.history.push('/');
    console.log('updated', expense);
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button onClick={this.onRemove}>Remove</button>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// const EditExpensePage = (props) => {
//   return (
//       <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           // Dispatch the action to edit the expense
//           props.dispatch(editExpense(props.expense.id, expense));
//           // Redirect to the dashboard
//           props.history.push('/');
//           console.log('updated', expense);
//         }}
//       />
//       <button onClick={(expense) => {
//         props.dispatch(removeExpense({ id: props.expense.id}));
//         props.history.push('/');
//       }}>Remove</button>
//     </div>
//   );
// };
