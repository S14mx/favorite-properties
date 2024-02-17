# Favorite Properties App

This is a React application that displays pictures and descriptions of different properties. Users can "like" properties and filter them by the number of rooms.

## Features

- View pictures of different properties
- View descriptions of diffent properties(dynamically generated with OpenAI API)
- "Like" properties
- Filter properties by the number of rooms

## Installation

1. Clone this repository: `git clone https://github.com/yourusername/property-listing-app.git`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

You will need an API key and endpoint for OpenAI Azure Service to use the app out of the box. If you don't have it you can modify the app to not use OpenAI service.

## Usage

After starting the application, you will see a list of properties. Each property has a picture, a description, and a "like" button. You can click the "like" button to like a property. You can click on the property to see a modal with description. You can also filter the properties by the number of rooms using the filter at the top of the page.

## License

[MIT](https://choosealicense.com/licenses/mit/)
