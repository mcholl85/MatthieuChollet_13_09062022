const API_URL = 'http://localhost:3001/api/v1/user/'

interface signinResponse {
  status: number
  message: string
  body: {
    token: string
  }
}

interface getUserResponse {
  status: number
  message: string
  body: {
    createdAt: string
    email: string
    firstName: string
    id: string
    lastName: string
    updatedAt: string
  }
}

interface updateUserResponse {
  status: number
  message: string
  body: {
    id: string
    email: string
  }
}

export async function signin(username: string, password: string): Promise<signinResponse> {
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

    if (!response.ok) {
      const error = (data && data.message) || response.status
      return Promise.reject(error)
    }

    return data
  } catch (error) {
    throw new Error('API not working')
  }
}

export async function getUser(token: string): Promise<getUserResponse> {
  try {
    const response = await fetch(API_URL + 'profile', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      const error = (data && data.message) || response.status
      return Promise.reject(error)
    }

    return data
  } catch (error) {
    throw new Error('API not working')
  }
}

export async function updateUser(
  token: string,
  firstName: string,
  lastName: string,
): Promise<updateUserResponse> {
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

    if (!response.ok) {
      const error = (data && data.message) || response.status
      return Promise.reject(error)
    }

    return data
  } catch (error) {
    throw new Error('API not working')
  }
}
