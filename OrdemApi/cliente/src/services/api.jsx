export const fetchPersonagens = async() => {
    const response = await fetch('./Ordem.json');
    const data = await response.json();
    return data;
  };
  

  