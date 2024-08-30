import {program} from "commander";
import chalk from "chalk";
import axios from "axios";



//setup
program
  .version("1.0.0")
  .description("CLI to check weather information")
  .name('WeatherCLI');

//commands
program
.command('getWeather')
.description('get weather for your city')
.argument('<city>', 'city entered')
.action( async (city) => {
    const apiKey = '4a7383dadcff4d4590e84701243008';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      console.log(chalk.red(`Fectching weather for: ${city}...`));

      console.log(
        `Weather in ${data.location.name}, ${data.location.country}:`
      );
      console.log(`Temperature: ${data.current.temp_c}°C`);
      console.log(`Condition: ${data.current.condition.text}`);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }

    
});

program.parse(process.argv);

