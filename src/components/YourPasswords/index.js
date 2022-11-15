import './index.css'

const YourPasswords = props => {
  const {passwordItemDetails, isChecked, onDeleteItem} = props
  const {id, websiteInput, username, passwordInput} = passwordItemDetails

  const initial = websiteInput[0].toUpperCase()

  const passwordItem = isChecked ? (
    <p className="para">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <div className="password-list-items-container">
      <li className="list-item-container">
        <div className="initial-section">{initial}</div>
        <div className="text-cont">
          <p className="heading">{websiteInput}</p>
          <p className="name">{username}</p>
          {passwordItem}
        </div>
        <div className="button-cont">
          <button
            type="button"
            className="delete-button"
            onClick={onClickDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default YourPasswords
