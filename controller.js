const { user, order, restaurant } = require('./data');

exports.restaurantController = {
    get(req, res) {
      if (req.params && req.params.id) {
        const { id } = req.params;
        console.log('single data requested');
        res.json(restaurant[id - 1]);
      } else {
        console.log('all data requested');
        res.json(restaurant);
      }
    },
    post(req, res) {
      console.log('new entity saved!');
      const { body } = req;
      restaurant.push(body);
      res.send('new entity saved!');
    },
   };
   

exports.userController = {
 get(req, res) {
    if (req.params && req.params.id) {
        const { id } = req.params;
        console.log('single data requested');
        res.json(user[id - 1]);
      } else {
        console.log('404');
        res.write(404);
      }
 },
 post(req, res) {
    console.log('new entity saved!');
    const { body } = req;
    user.push(body);
    res.send('new entity saved!');
 },
 put(req, res) {
    if (req.params && req.params.id) {
        const { id } = req.params;
        console.log('single data requested');
        const {body}=req;
        user[id-1] = body;
        res.send('update');
        } else {
        console.log('404');
        res.write(404);
      }
 },
};

exports.orderController = {
 get(req, res) {
    if (req.params && req.params.id) {
        const { id } = req.params;
        console.log('single data requested');
        res.json(order[id - 1]);
      } else {
        console.log('404');
        res.write(404);
      }
 },
 post(req, res) {
    console.log('new entity saved!');
    const { body } = req;
    order.push(body);
    res.send('new entity saved!'); 
 },
 put(req, res) {
    if (req.params && req.params.id) {
        const { id } = req.params;
        console.log('single data requested');
        const {body}=req;
        order[id-1] = body;
        res.send('update');
        } else {
        console.log('404');
        res.write(404);
      }
 },
 delete(req, res) {
    if (req.params && req.params.id) {
        const { id } = req.params;
        console.log('single data requested');
        const {body}=req;
        delete order[id-1]
        res.send(`deleted data with id = ${id}`);
        } else {
        console.log('404');
        res.write(404);
      }
 },
};
