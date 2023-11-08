import colors from "@colors/colors";

export const logError = (path, message, error) => {
  return console.log(`[${colors.green(path)}] ${colors.yellow("=>")} ${colors.red(message)} ${error ? ":: "+colors.red(error) : ""} `)
}

export const log = (path, message) => {
  return console.log(`[${colors.green(path)}] ${colors.yellow("=>")} ${colors.cyan(message)} `)
}

export const logWarning = (path, message) => {
  return console.log(`[${colors.green(path)}] ${colors.yellow("=>")} ${colors.yellow(message)} `)
}
