import { Router } from 'express';
import { User, Creator, Categories, SubCategories, Rate, Contract, StatusContract } from '../models';

const rutes = Router();

/**
 * routes for user collection
 */
rutes.route('/user').post((req, res) => {
    const { name, username, email, password } = req.body;
    const data: UserSchema = {
        name,
        username,
        email,
        password,
        active: true
    };
    const user = new User(data);
    user.save().then(value => {
        res.json(value);
    }).catch(err => {
        throw err;
    });
}).get((req, res) => {
    const { userId }: any = req.query;
    User.findById(userId).then(value => {
        res.json(value);
    }).catch(err => {
        throw err;
    });
}).put((req, res) => {
    const { userId }: any = req.query;
    const { name, username, email, password } = req.body;
    const data: UserSchema = {
        name,
        username,
        email,
        password,
        active: true
    };
    User.update(userId, data, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
}).delete((req, res) => {
    const { userId }: any = req.query;
    User.delete(userId, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
});

/**
 * routes for creator collection
 */
rutes.route('/creator').post((req, res) => {

}).get((req, res) => {

}).put((req, res) => {

}).delete((req, res) => {

});

/**
 * routes for add category to creator
 */
rutes.route('/creator/add/categories').post((req, res) => {

}).get((req, res) => {

}).put((req, res) => {

}).delete((req, res) => {

});

/**
 * routes for categories collection
 */
rutes.route('/categories').post((req, res) => {
    const { name, description }: any = req.body;
    const data: CategoriesSchema = {
        name,
        description
    };
    const categ = new Categories(data);
    categ.save((err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
}).get((req, res) => {
    const { categoriesId }: any = req.query;
    Categories.findById(categoriesId, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
}).put((req, res) => {
    const { categoriesId }: any = req.query;
    const { name, description }: any = req.body;
    const data: CategoriesSchema = {
        name,
        description
    };
    Categories.update(categoriesId, data, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    })
}).delete((req, res) => {
    const { categoriesId }: any = req.query;
    Categories.delete(categoriesId, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
});

/**
 * routes for subcategories collection
 */
rutes.route('/subcategories').post((req, res) => {

}).get((req, res) => {

}).put((req, res) => {

}).delete((req, res) => {

});

/**
 * routes for rate collection
 */
rutes.route('/rate').post((req, res) => {

}).get((req, res) => {

}).put((req, res) => {

}).delete((req, res) => {

});

/**
 * routes for contract collection
 */
rutes.route('/contract').post((req, res) => {

}).get((req, res) => {

}).put((req, res) => {

}).delete((req, res) => {

});

/**
 * routes for statuscontract collection
 */
rutes.route('/statuscontract').post((req, res) => {

}).get((req, res) => {

}).put((req, res) => {

}).delete((req, res) => {

});

export { rutes };
