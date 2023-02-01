const apiKey = "561f003984d04fa253aaa25f9263f8df";
    const citySearch = document.querySelector('input');
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
      fetch(`https://openweathermap.org/api=${citySearch.value}&APPID=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const output = document.querySelector(".output");
          output.innerHTML = `
            <ul>
              <li>City: ${data.name}</li>
              <li>Weather: ${data.weather[0].main}</li>
              <li>Temperature: ${data.main.temp}</li>
            </ul>
          `
        });
    });