import {Component} from 'react'

import {v4} from 'uuid'

import YourPasswords from '../YourPasswords'

import './index.css'

class PasswordInputs extends Component {
  state = {
    passwordItems: [],
    websiteInput: '',
    username: '',
    passwordInput: '',
    isChecked: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswordList = event => {
    event.preventDefault()
    const {websiteInput, username, passwordInput} = this.state

    const newPassword = {
      id: v4(),
      websiteInput,
      username,
      passwordInput,
    }

    this.setState(prev => ({
      passwordItems: [...prev.passwordItems, newPassword],
      websiteInput: '',
      username: '',
      passwordInput: '',
    }))
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  onDeleteItem = id => {
    const {passwordItems} = this.state
    const updatedNewList = passwordItems.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordItems: updatedNewList})
  }

  renderShowNoPasswords = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />

      <p className="no-password">No Passwords</p>
    </div>
  )

  render() {
    const {
      websiteInput,
      username,
      passwordInput,
      passwordItems,
      searchInput,
      isChecked,
    } = this.state

    const updatedNewList = passwordItems.filter(eachPassword =>
      eachPassword.websiteInput
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    const count = updatedNewList.length

    return (
      <div>
        <div className="password-inputs-container">
          <div className="inputs-container">
            <div className="inputs-card">
              <form
                className="add-password-container"
                onSubmit={this.onAddPasswordList}
              >
                <h1 className="heading">Add New Password</h1>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo"
                  />
                  <input
                    type="text"
                    value={websiteInput}
                    placeholder="Enter Website"
                    className="input-item"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-logo"
                  />
                  <input
                    type="text"
                    value={username}
                    placeholder="Enter Username"
                    className="input-item"
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-logo"
                  />
                  <input
                    type="password"
                    value={passwordInput}
                    placeholder="Enter Password"
                    className="input-item"
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="add-button-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>
        <div className="password-show-container">
          <div className="show-passwords-container">
            <div className="show-password-card">
              <h1 className="show-heading">
                Your Passwords <span className="count">{count}</span>
              </h1>
              <div className="search-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="input-item"
                  onChange={this.updateSearchList}
                />
              </div>
            </div>
            <hr />
            <div className="password-list-container">
              <input
                type="checkbox"
                id="showPassword"
                onChange={this.onChecked}
                checked={isChecked}
              />
              <label htmlFor="showPassword">Show passwords</label>
            </div>
          </div>
          {count === 0 ? (
            this.renderShowNoPasswords()
          ) : (
            <ul className="ul-list">
              {updatedNewList.map(eachPassword => (
                <YourPasswords
                  key={eachPassword.id}
                  passwordItemDetails={eachPassword}
                  isChecked={isChecked}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordInputs
