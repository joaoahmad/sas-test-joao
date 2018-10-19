export default (reason) => {
  switch (reason) {
    case 'Dúvidas': return 'blue'
    case 'Elogios': return 'green'
    case 'Sugestões': return 'yellow'
    case 'Reclamações': return 'red'
    case 'Outros': return 'gray'

    default: return 'gray'
  }
}
