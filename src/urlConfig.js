// const baseUrl = "http://localhost:2000" ;
const baseUrl="https://youshopweshipbackend.herokuapp.com";

export const api = `${baseUrl}/api`;


export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
