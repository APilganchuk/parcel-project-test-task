const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;

async function fetchCountries(searchQuery) {
  if (searchQuery === '') {
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}${searchQuery}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export default { fetchCountries };
