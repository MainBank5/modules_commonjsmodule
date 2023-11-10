//package.json is used to maintain/track your dependecies 
//so when we install a npm module it gets added to the package.json
//the node_modules folder is also auto created. it carries all dependncies files
//when pushing our files to github, we dont want to push the node_modules folder
//to avoid pushing it we create .gitignore file and add the node_module in the ignore file. you can add
//other more files you dont want to push to github


//after installing our npm module using the terminal. this is how we import it to our app file. Note no file path

const axios = require ('axios');

async function getPosts () {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

    console.log(response.data);
}

getPosts()

//node -d nodmon is a devdepedency that constantly watches your application so you dont have to constantly run it
//this devdepedency is ideal for development only/local environment you dont have to push it to production/thus you can delete it b4 production
//in the scripts of packg.json you can the dev: nodemon app.js and run it in terminal node run dev