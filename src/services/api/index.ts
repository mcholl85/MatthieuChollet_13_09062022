const API_URL = 'http://localhost:3001/api/v1/user/'

export async function signin(username: string, password: string) {
  try {
    const response = await fetch(API_URL + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: username, password: password }),
    })
    const data = await response.json()
    return { data }
  } catch (error) {
    throw new Error('Signin error')
  }
}

export async function getUser(token: string) {
  if (token) {
    const response = await fetch(API_URL + 'profile', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    return data
  }
}

export async function updateUser(token: string, firstName: string, lastName: string) {
  try {
    const response = await fetch(API_URL + 'profile', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    })
    const data = await response.json()
    return { data }
  } catch (error) {
    throw new Error('Update user error')
  }
}
