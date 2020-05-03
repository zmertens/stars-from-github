const getStars = require('./get-stars')

test('#Sanity check', async () => {
    expect(6).not.toBe(9)
})

test('#Test known user with stars is not a black hole', async () => {
    const userName = 'zmertens'
    await expect(getStars(userName)).resolves.not.toBeNull()
})

test('#Test empty user is a black hole', async () => {
    const userName = ''
    expect.assertions(1)
    await expect(getStars(userName)).rejects.toThrow('Not Found')
})

test('#Expect username is undefined', async () => {
    const userName = undefined
    await expect(userName).toBeUndefined()
})

test('#Match a cat in octocat', async () => {
    const userName = 'octocat'
    await expect(userName).toMatch(/cat/)
})