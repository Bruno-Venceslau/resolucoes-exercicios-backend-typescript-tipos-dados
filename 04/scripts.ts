const estoque: {produto: string, lote: number, ano: number, qtd: number}[] = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const etiquetas = (informacao: 
    {produto: string, lote: number, ano: number, qtd: number}): string[]=>{


    const resultado: string[] = []

    for (let i = 0; i <= informacao.qtd ;i++) {
        resultado.push(`${informacao.lote}-${informacao.ano}-${i.toString().padStart(3, '0')}`)
        
    }

    return resultado
   
}   

console.log(etiquetas(estoque))