import { Navigate } from 'react-router-dom'
import Account from '../../components/Account'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { selectUser } from '../../utils/selectors'
import { getAccounts, updateUser } from '../../services/api'
import * as actions from '../../features/user'

export default function Profile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [showEditName, setShowEditName] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const { user, token } = useSelector(selectUser)
  const accounts = getAccounts()
  const dispatch = useDispatch()

  const editUserName = async () => {
    const data = await updateUser(token, firstName, lastName)

    if (data && data.status === 200) {
      dispatch(actions.setUser(data.body))
    }
  }

  const handleEdit = () => {
    const NamesHaveOnlyLetters = /^[a-zA-Z]+$/.test(firstName) && /^[a-zA-Z]+$/.test(lastName)

    if (NamesHaveOnlyLetters) {
      editUserName()
      setShowEditName(false)
      setShowErrorMessage(false)
    } else {
      setShowErrorMessage(true)
    }
  }

  return !user.id ? (
    <Navigate to='/' />
  ) : (
    <main className='main bg-dark'>
      {!showEditName ? (
        <div className='header'>
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>
          <button className='edit-button' onClick={() => setShowEditName(true)}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className='header'>
          <h1>Welcome back</h1>
          <div>
            <div className='input-wrapper input-wrapper-user'>
              <input
                type='text'
                id='firstname'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={user.firstName}
              />
              <input
                type='text'
                id='lastname'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={user.lastName}
              />
            </div>
            {showErrorMessage && <span className='error'>Please enter only letters</span>}
            <div className='edit-button-user-wrapper'>
              <button className='edit-button edit-button-user' onClick={handleEdit}>
                Save
              </button>
              <button
                className='edit-button edit-button-user'
                onClick={() => setShowEditName(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <h2 className='sr-only'>Accounts</h2>
      {accounts.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          amountDescription={account.amountDescription}
        />
      ))}
    </main>
  )
}
