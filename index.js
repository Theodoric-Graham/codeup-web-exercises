// Working with data types, operators, and variables
var username = 'codeup'
var password = 'notastrongpassword'
var fiveChar = password.length >= 5
var passNotUser = password.includes(username)
var twentyChar = username.length <= 20
var whiteSpace = username.length === username.trim().length && password.length === password.trim().length