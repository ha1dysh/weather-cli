import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ' + ' ' + error));
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ' + ' ' + message));
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
    Show weather without params
    -s [CITY] set city
    -h show help
    -t [API_KEY] set token
    `
    );
};

const printWeather = (res) => {
    console.log(
        dedent(`${chalk.bgYellow(' WEATHER ')} in ${res.name}
    ${res.weather[0].description}
    Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity: ${res.main.humidity}%
    Wind speed: ${res.wind.speed}
    `)
    );
};

export { printError, printSuccess, printHelp, printWeather };
