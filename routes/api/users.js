const Express = require ('express');

const Bycrypt =  require('bcryptjs');

const router = Express.Router();

const config = require ('config');

const jwt = require('jsonwebtoken');

const User = require('../../models/User');

router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password){
    return res.status(400).json({ msg: 'Please enter all fields'}); 
}

User.findOne({ email })
.then(user => {
    if(user) return res.status(400).json({ msg: 'Existing User'});

    const newUser =  new User({
    name,
    email,
    password
  });

  //create salt & hash

  Bycrypt.genSalt(10, (err, salt) => {
      Bycrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then( user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;
                  res.json({
                    token,
                    user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
              });
                }
              )
            })
          })
        })
      })
    });


module.exports = router;
