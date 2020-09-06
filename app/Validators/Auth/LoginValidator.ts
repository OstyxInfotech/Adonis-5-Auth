import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class LoginValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [rules.email()]),
    password: schema.string({ trim: true })
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'email.required': 'Email ID is requried',
    'email.email': 'Enter a vaild email ID',
    'password.required': 'Password is requried'
  }
}
