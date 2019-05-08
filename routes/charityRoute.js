const keys = require('../Config/Keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe/charity', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 600,
            currency: 'usd',
            description: '$5.00 for 5 credits, and $1 for charity',
            source: req.body.id
        });

        req.user.credits += 5;
        req.user.charity += 1;
        const user = await req.user.save();

        res.send(user);
    });
};