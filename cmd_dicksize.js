module.exports = function(msg, bot, args) {
	var inches = msg.member.id/100000000000000000*4
	var dick = "8"+"=".repeat(inches/2)+"D";
	msg.channel.createMessage(dick + " ("+inches.toString()+" inches)")
}
