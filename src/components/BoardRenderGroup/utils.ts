export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
  
    date.setDate(date.getDate() + 1);
  
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "America/Sao_Paulo",
    };
  
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };


  
  