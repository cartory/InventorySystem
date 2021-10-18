const fs = require('fs')
const csv = require('csv-parser')

const csv2json = (module, rooms = []) => {
	if (rooms.length) {
		let results = []
		let room = rooms.pop()
		let stream = fs.createReadStream(`${__dirname}/csv/${module}-${room}.csv`)

		stream
			.pipe(csv({ separator: ';' }))
			.on('error', err => console.error(err))
			.on('data', data => {
				delete data['']
				results.push(data)
			})
			.on('end', () => {
				stream.close()
				csv2json(module, rooms)
				fs.writeFileSync(`${__dirname}/json/${module}-${room}.json`, JSON.stringify(results), {
					encoding: 'utf-8'
				})
			})
	}

}

const modules = [
	[123, ['03']],
	[232, ['09', 10, 11, 12]],
	[236, [41, 42, 43, 44, 45, 46, 48]],
]

// modules.forEach(([module, rooms]) => {
// 	csv2json(module, rooms)
// 	console.log(module, 'csv2json Done!');
// })

module.exports = {
	modules
}