import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  index({ view }: HttpContextContract) {
    return view.render('welcome')
  }
}
