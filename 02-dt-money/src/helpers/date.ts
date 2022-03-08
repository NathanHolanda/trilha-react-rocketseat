export function toBrazilianDateFormat(date: Date){
    return Intl.DateTimeFormat('pt-BR').format(date)
}