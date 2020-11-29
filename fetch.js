class Fetch {
  async getCurrent(input) {
    const myKey = "a21f86ece20fe55a89bf04722806e31e";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
