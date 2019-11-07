import React from 'react'
import '../css/navBar.css'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.firstName = React.createRef()
    this.lastName = React.createRef()
    this.mobile = React.createRef()
    this.mobileCountryCode = React.createRef()
    this.otp = React.createRef()
    this.state = {
      sentCode: null
    }
  }

  login = () =>{
    const mobile = this.mobile.current.value
    const requestBody = {
      query: `
      mutation{login(mobile:${mobile}){
        userId
        token
        tokenExpiration
      }
      }  `
    }

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed')
        }
        return res.json()
      })
      .then(resData => {
        console.log(resData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  sendOtpHandler = (event) => {
    event.preventDefault()
    const mobile = this.mobile.current.value
    const requestBody = {
      query: `
      mutation{sendOTP(mobile:"${mobile}")}  `
    }
    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed')
        }
        return res.json()
      })
      .then(resData => {
        console.log(resData)
        console.log(resData.data.sendOTP)
        this.setState({ sentCode: resData.data.sendOTP})
        console.log(this.state.sentCode)
      })
      .catch(err => {
        console.log(err)
      })
  }

  submitHandler = (event) => {
    event.preventDefault()
    const firstName = this.firstName.current.value
    const lastName = this.lastName.current.value
    const mobile = this.mobile.current.value
    const mobileCountryCode = this.mobileCountryCode.current.value
    const otp = this.otp.current.value

    if (mobile.trim().length === 0 || firstName.trim().length === 0 || lastName.trim().length === 0) {
      return
    }


    //if (otp == this.state.sentCode) {
      const requestBody = {
        query: `
              mutation {
                addUser(userInput: {firstName: "${firstName}", lastName: "${lastName}", mobileCountryCode: "${mobileCountryCode}",mobile: "${mobile}",userGroup: newUser}) {
                  firstName
                  lastName
                  mobileCountryCode
                  mobile
                  userGroup
                }
              }
        `
      }

      fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed')
          }
          return res.json()
        })
        .then(resData => {
          console.log(resData)
          this.login()
        })
        .catch(err => {
          console.log(err)
        })
    //}

  }
  render() {
    return (
      <div className="authCard">
        <h1>Create Account</h1>
        <form className="form" onSubmit={this.submitHandler}>
          <div>
            <label className="label" htmlFor='firstName'>First Name</label>
          </div>
          <div>
            <input className="inputForm" type='text' id='firstName' ref={this.firstName} />
          </div>
          <div>
            <label className="label">Last Name</label>
          </div>
          <div>
            <input className="inputForm" type='text' id='lastName' ref={this.lastName} />
          </div>
          <div>
            <label className="label" htmlFor='mobileCountryCode'>Country</label>
          </div>
          <div>
            <input className="inputForm" type='number' id='mobileCountryCode' ref={this.mobileCountryCode} />
          </div>
          <div>
            <label className="label" htmlFor='mobile'>Mobile</label>
          </div>
          <div>
            <input className="inputForm" type='number' id='mobile' ref={this.mobile} />
          </div>
          <div>
            <div>
              <button className="button" type='submit' >Send Otp</button>
            </div>
            <label className="label" htmlFor='otp'>Enter OTP</label>
          </div>
          <div>
            <input className="inputForm" type='number' id='otp' ref={this.otp} />
          </div>
          <div>
            <button className="button" type='submit' >Create Account</button>
          </div>
        </form>
      </div>
    )
  }
}
// onClick={this.sendOtpHandler}

export default Auth;
