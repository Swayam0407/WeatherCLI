# WeatherCLI

**WeatherCLI** is a command-line interface (CLI) tool that allows users to quickly check the current weather conditions for any city. This tool uses the [WeatherAPI](https://www.weatherapi.com/) to fetch real-time weather data.

## Features

- Get the current weather for any city in the world.
- Displays the temperature and weather conditions in an easy-to-read format.
- Colored output for better readability using [chalk](https://www.npmjs.com/package/chalk).

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/weather-cli.git
   ```
2. Navigate to the project directory:

   ```bash
   cd weather-cli
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```
   
## Usage

To use WeatherCLI, you can run the following command from your terminal:

node weather-cli getWeather <city>

Replace <city> with the name of the city you want to check the weather for.

Example

node weather-cli getWeather London

This will output:

Fetching weather for: London...
Weather in London, United Kingdom:
Temperature: 18°C
Condition: Partly cloudy

Commands

	•	getWeather <city>: Fetches the current weather for the specified city.

Technologies Used

	•	Node.js: JavaScript runtime for building CLI applications.
	•	Commander.js: For building the command-line interface and argument parsing.
	•	Axios: For making HTTP requests to fetch the weather data.
	•	Chalk: For styling the output in the terminal.

Weather API Key

The WeatherCLI uses the WeatherAPI service to fetch weather data. You can sign up for a free API key at https://www.weatherapi.com/.

By default, the code uses a demo API key (4a7383dadcff4d4590e84701243008). For production use, you should replace this with your own API key.

To change the API key:

	1.	Open the index.js file.
	2.	Replace the apiKey variable with your own API key.

const apiKey = 'your_api_key_here';

License

This project is licensed under the MIT License.
