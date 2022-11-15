const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch(url + coins)
	.then(function (response) {
		return response.json()
	})
	.then(function (data) {
		const dolarReal = data.USDBRL

		let estaData = new Date(dolarReal.create_date)

		document.getElementById('titleeua').innerHTML = dolarReal.name
		document.getElementById('thisdateeua').innerHTML = estaData.toLocaleString()
		document.getElementById('valueeua').innerHTML = parseFloat(dolarReal.bid).toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL'
		})
  })
  
fetch(url + coins)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    const euroReal = data.EURBRL

    let estaData = new Date(euroReal.create_date)

    document.getElementById('titleeur').innerHTML = euroReal.name
    document.getElementById('thisdateeur').innerHTML = estaData.toLocaleString()
    document.getElementById('valueeur').innerHTML = parseFloat(euroReal.bid).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  })