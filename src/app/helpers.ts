
const helpers = {

  // Add commas in between thousands
  addCommas: function(num): string {
    if (num > 999) {
      let stringified = num.toString()
      const iterations = Math.floor((stringified.length - 1) / 3)
      for (let i = 1; i <= iterations; i++) {
        let index = (i * -3) - (i - 1)
        stringified = stringified.slice(0, index) + "," + stringified.slice(index)
      }
      return stringified
    }
    return num
  },

  // Turns JS variable names into English, i.e. "crudeRate" becomes "Crude Rate"
  humanize: function(str): string {
    let result = str.replace( /([A-Z])/g, " $1" )
    result = result.split(" ").map(r => r.charAt(0).toUpperCase() + r.slice(1))
    return result.join(" ")
  }

}

module.exports = helpers
