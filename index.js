//Requirements
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

//Routes
const RouteUser = require('./routes/User');
const AUTH = require('./routes/Auth');
const profileUpload = require('./routes/image_upload');
const RouteItem = require('./routes/Item');
const RouteFastFood = require('./routes/fastfood');
const Routepopularfood = require('./routes/popularfood');
const Routenewdishes = require('./routes/newdishes');
const RoutesUpcomingfood = require('./routes/upcomingfood');
const RouteRegularfood = require('./routes/regularfood');
const imageslider = require('./routes/imageslider')
const scannerRoute = require('./routes/scanner');

//Using
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.options('*', cors());
app.use(cors());

mongoose
	.connect(process.env.URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then((db) => {
		console.log('Successfully Connected to mongodb server');
	});

app.use('/users', RouteUser);
app.use('/upload', profileUpload);
app.use('/item', RouteItem);
app.use('/fastfood', RouteFastFood);
app.use('/popularfood', Routepopularfood);
app.use('/newdishesfood', Routenewdishes);
app.use('/upcomingfood', RoutesUpcomingfood);
app.use('/regularfood', RouteRegularfood);

app.use('/imageslider', imageslider);
app.use('/QRscanner',scannerRoute);


app.listen(process.env.PORT, () => {
	console.log(`Application is running in localhost:${process.env.PORT}`);
});
