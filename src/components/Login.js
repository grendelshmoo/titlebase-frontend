import React from 'react'
// import auth from '../lib/auth'
// import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {logIn} from '../actions/auth'

const Login = ({logIn}) => {

  return (
  <div id="login-page" className="container p-4 mx-auto">
    <div className="row">
      <div className="col">
        <div className="card border-dark mb-3 mx-auto">
          <div className="card-body text-dark">
            <h2 className="card-title text-center">Login</h2>

            <form onSubmit={ (e) => {
              e.preventDefault()
              logIn(e.target.email.value, e.target.password.value)
              }}
              id='login-form'>
              <div className="form-group">
                <label htmlFor="email">Email address</label>

                <input
                  // onChange={ this.onChange }
                  // value={ this.state.email }
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  defaultValue="craig@fell.org"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email*">
                  </input>

              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>

                <input
                  // onChange={ this.onChange }
                  // value={ this.state.password }
                  type="password"
                  defaultValue="password"
                  className="form-control"
                  name="password"
                  id="login-password"
                  placeholder="Password*">
                  </input>

              </div>
              <button type="submit" className="btn btn-danger">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>)

}

// class Login extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       email: '',
//       password: ''
//     }
//   }
//
//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

  // onSubmit = async (event) => {
  //   event.preventDefault()
  //   const { email, password } = this.state
  //   try {
  //     const response = await auth.login(email, password)
  //     this.props.updateLoggedInStatus(response)
  //     console.log('LOGIN RESPONSE:', response)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // render() {
    // return (<div className="container p-4 m-2 mx-auto">
    //   <div className="row">
    //     <div className="col">
    //       <div className="card border-dark mb-3 mx-auto">
    //         <div className="card-body text-dark">
    //           <h2 className="card-title text-center">Login</h2>
    //
    //           <form onSubmit={ this.onSubmit } id='login-form'>
    //             <div className="form-group">
    //               <label htmlFor="email">Email address</label>
    //
    //               <input
    //                 onChange={ this.onChange }
    //                 value={ this.state.email }
    //                 type="email"
    //                 className="form-control"
    //                 name="email"
    //                 id="email"
    //                 aria-describedby="emailHelp"
    //                 placeholder="Enter Email*">
    //                 </input>
    //
    //             </div>
    //             <div className="form-group">
    //               <label htmlFor="password">Password</label>
    //
    //               <input
    //                 onChange={ this.onChange }
    //                 value={ this.state.password }
    //                 type="password"
    //                 className="form-control"
    //                 name="password"
    //                 id="login-password"
    //                 placeholder="Password*">
    //                 </input>
    //
    //             </div>
    //             <button type="submit" className="btn btn-danger">Login</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>)
//   }
// }

// export default withRouter(Login)
// const mapStateToProps = () => ()
const mapDispatchToProps = (dispatch) => bindActionCreators({logIn}, dispatch)
export default connect(null, mapDispatchToProps)(Login)
