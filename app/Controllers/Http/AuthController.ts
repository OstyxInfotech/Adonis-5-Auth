import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/Auth/LoginValidator'

export default class AuthController {
  index({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  async store({ auth, request, response, session }: HttpContextContract) {
    await request.validate(LoginValidator)
    const { email, password, remember } = request.all()

    try {
      await auth.attempt(email, password, !!remember)
      return response.redirect('/')
    } catch (error) {
      session.flash('error', 'Unable to login. Incorrect email/password')
      return response.redirect('back')
    }
  }

  async logout({ auth, response }: HttpContextContract) {
    auth.logout()

    return response.redirect('/login')
  }
}
