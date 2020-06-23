module.exports = class UnauthorizedError extends Error {
  constructor (paramName) {
    super('internal error')
    this.name = 'ServerError'
  }
}
