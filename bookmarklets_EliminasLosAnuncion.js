// Función para seleccionar divs con etiquetas específicas
function filterHtml (etiquetasArray) {
  // Convertir las etiquetas a un array

  const divsSeleccionados = []
  for (const etiqueta of etiquetasArray) {
    const divs = document.querySelectorAll(`[id*="${etiqueta}"],[class*="${etiqueta}"]`)
    console.log(etiqueta)
    console.log(divs.length)
    divsSeleccionados.push(...Array.from(divs)) // Convertir NodeList a array
  }

  return divsSeleccionados
}

// Función para editar los divs seleccionados
function edit (divs) {
  divs.forEach(element => {
    element.remove()
  })
}

const etiquetasAnuncios = [
  // 'ad',
  'ads',
  'ad-', // Seguido de un guión y otro texto
  'adframe',
  'sponsored',
  'google_ads_iframe',
  'adsense',
  'adx',
  'googletag_div',
  'div-gpt',
  'fb-ad',
  'fb-pixel',
  'amazon-ad',
  'aax_dp'
]
const listaFiltrada = filterHtml(etiquetasAnuncios)

console.log('Divs seleccionados:', listaFiltrada)
edit(listaFiltrada)
