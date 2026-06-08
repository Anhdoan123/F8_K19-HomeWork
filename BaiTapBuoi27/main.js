import { renderTable, renderDialog, headers } from './utils/index.js'

const getCustomers = async () => {
  try {
    const response = await fetch('http://localhost:3000/customers')
    return await response.json()
  } catch {
    alert('get data failed')
  }
}


const init = async () => {
  const customers = await getCustomers()

  const panel = document.querySelector('.panel')
  panel.append(renderTable(headers, customers))

  const body = document.querySelector('body')
  body.append(renderDialog())
}

init()