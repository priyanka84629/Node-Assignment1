const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent)
}
//myFileWriter("file.txt" , 'Hello')

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, 'utf-8')
	console.log(data)

}
//myFileReader('file.txt')


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent)
	console.log('udated file is')
}
myFileUpdater('file.txt', ' world')

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name

	await fs.unlink(fileName)
	console.log('deleted file is')
}
//myFileDeleter('file.txt')



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }