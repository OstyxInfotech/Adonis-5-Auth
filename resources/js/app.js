import _ from 'lodash'
import Popper from 'popper.js'
import axios from 'axios'
import 'bootstrap'

window.Popper = Popper
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error('CSRF token not found')
}
