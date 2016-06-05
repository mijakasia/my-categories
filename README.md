# Categories API

This project is meant to be educational. It was written in order for me to learn about consuming API endpoints from the browser and reusing code. I have been provided with the API written in python, and was supposed to write JS code that makes use of all the endpoints. The API allows you to add and remove categories, together wih the possibilty to add and remove items to/from the given category.

## Running

To run the project, clone it and run the following commands:
First, install the python requirements:
```
pip install -r requirements.txt
```
To run the server:
```
python ./app.py
```

This should bring up a flask app, that contains the API, and serves static content. Visit the browser on http://localhost:5000/

## API specification

The API exposes the following endpoints:

GET /categories
	Lists all categories

POST /categories/<category_name>
	Adds a new category

DELETE /categories/<category_name>
	Deletes a category

This is a nested structure, to each category you can add items.

GET /categiories/<category_name>
	Lists all items inide the category

POST /categories/<category_name>
	with payload: 
		items: <item_name>
	Add a new item to the category

DELETE /categories/<category_name>
	with payload: 
		items: <item_name>
	Delete an item from the category

## Foreword

All of the endpoints are utilized with jQuery, feel free to download the project and check out how it looks like. To see my implementation of this, but using AngularJS, see https://github.com/mijakasia/api-task
