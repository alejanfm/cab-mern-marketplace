import categoriesModel from '../models/categoriesModel.js'

const getAllCategories = async (req, res) => {

	try {
		const data = await categoriesModel
			.find({})
			.populate({ path: "items", select: ["itemName"] })
			.exec()
		res
			.status(200)
			.json({ data, Number: data.length })
		console.log("all categories", data)
	}
	catch (error) {
		res
			.status(400)
			.json({ message: "SERVER: categoriesController.js -  Something went wrong with the JSON.", error: error });
	}
}

export { getAllCategories }