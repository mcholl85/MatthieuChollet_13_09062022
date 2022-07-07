import { signin, getUser } from '.'

const MOCK_USER = {
  email: 'steve@rogers.com',
  password: 'password456',
}

const INVALID_TOKEN =
  'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTdhNTIzNDM5MDUyMjY3MDBkMDcwZSIsImlhdCI6MTY1NzE4NzYxOSwiZXhwIjoxNjU3Mjc0MDE5fQ.3yMDvveXoVInbh2sMRABwW52XQn3Qx_3ADE1fs3sl0Q'

describe('Given I am on the login page', () => {
  describe('Given I fill the form', () => {
    test('with the right identifiers and it should return a successfully response with a token', async () => {
      const data = await signin(MOCK_USER.email, MOCK_USER.password)
      expect(data.status).toEqual(200)
      expect(data.body.token).toBeTruthy()
    })
    test('with the wrong password and it should throw a error', async () => {
      try {
        await signin(MOCK_USER.email, 'wrongPassword')
      } catch (error) {
        expect(error).toEqual('Error: Password is invalid')
      }
    })
    test('with the wrong user and it should throw a error', async () => {
      try {
        await signin('wrongEmail', MOCK_USER.password)
      } catch (error) {
        expect(error).toEqual('Error: User not found!')
      }
    })
  })
  describe('Given I have a successfully response and i try to get user data with the token', () => {
    test('It should return a sucessfully response', async () => {
      const data = await signin(MOCK_USER.email, MOCK_USER.password)
      const userData = await getUser(data.body.token)
      expect(userData.status).toEqual(200)
      expect(userData.body.email).toEqual(MOCK_USER.email)
    })
  })
  describe('Given I have a successfully response and i try to get user data with the wrong token', () => {
    test('It should throw a error', async () => {
      try {
        await getUser(INVALID_TOKEN)
      } catch (error) {
        expect(error).toEqual('invalid token')
      }
    })
  })
})
