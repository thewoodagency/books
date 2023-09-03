exports.handler = function(event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify([
			{
			"title": "afdsfadsdf",
			"id": 1
			},
			{
			"title": "werwe",
			"id": 2
			},
			{
			"title": "ewrew",
			"id": 3
			},
			{
			"title": "yrtuiuyt",
			"id": 4
			},
			{
			"title": "new books",
			"id": 6
			}
			])
	})
}