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
    if (userId) {
        User.findById(userId).then(value => {
            res.json(value);
        }).catch(err => {
            throw err;
        });
    }
    User.find((err, doc) => {
        if (err) throw err;
        res.json(doc);
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
    const { creations, ratings, categories } = req.body;
    const { userId }: any =req.query;
    const data: CreatorSchema = {
        userId,
        creations,
        ratings,
        categories
    }

    const creador = new Creator(data);
    creador.save((err, doc) => {
        if (err) throw err;
        res.json(doc);
    });

}).get((req, res) => {
    const { idCreator }:any = req.query;
    if (idCreator) Creator.findById(idCreator, (err, doc) => {
        if (err) throw err;
        res.json(doc)
    });
    Creator.find((err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
}).put((req, res) => {
    const { creations, ratings, categories } = req.body;
    const { userId, idCreator }: any =req.query;
    const data: CreatorSchema = {
        userId,
        creations,
        ratings,
        categories
    }
    Creator.update(idCreator, data, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'creator was updated'});
    });
}).delete((req, res) => {
    const { idCreator }: any =req.query;
    Creator.delete(idCreator, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'creator was deleted'})
    });
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
    if (categoriesId) Categories.findById(categoriesId, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
    Categories.find((err, doc) => {
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
    const { name, description }: any = req.body;
    const { categoriesId }: any = req.query;
    const data: SubCategoriesSchema = {
        name,
        description,
        categoriesId
    };
    const categ = new SubCategories(data);
    categ.save((err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
}).get((req, res) => {
    const { subcategoriesId }: any = req.query;
    if (subcategoriesId) SubCategories.findById(subcategoriesId, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
    SubCategories.find((err, doc) => {
        if (err) throw err;
        res.json(doc);
    })
}).put((req, res) => {
    const { name, description }: any = req.body;
    const { categoriesId,  subcategoriesId }: any = req.query;
    const data: SubCategoriesSchema = {
        name,
        description,
        categoriesId
    };
    SubCategories.update(subcategoriesId, data, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'subcategory was updated'});
    });
}).delete((req, res) => {
    const { subcategoriesId }: any = req.query;
    SubCategories.delete(subcategoriesId, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'subcategory was deleted'});
    });
});

/**
 * routes for rate collection
 */
rutes.route('/rate').post((req, res) => {
    const { name, price, benefits, type } = req.body;
    const { creatorId }: any = req.query;
    const data: RateSchema = {
        creatorId,
        name,
        price,
        benefits,
        type
    }
    const rate = new Rate(data);
    rate.save((err, doc) => {
        if(err) throw err;
        res.json(doc);
    });
}).get((req, res) => {
    const { rateId }: any = req.query;
    if (rateId) Rate.findById(rateId, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
    Rate.find((err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
}).put((req, res) => {
    const { name, price, benefits, type } = req.body;
    const { creatorId, rateId }: any = req.query;
    const data: RateSchema = {
        creatorId,
        name,
        price,
        benefits,
        type
    };
    Rate.update(rateId, data, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'rate was updated'});
    });
}).delete((req, res) => {
    const { rateId }: any = req.query;
    Rate.delete(rateId, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'rate was deleted'});
    });
});

/**
 * routes for contract collection
 */
rutes.route('/contract').post((req, res) => {
    const { name, description, charged, paidOut } = req.body;
    const { rateId, userId, creatorId }: any = req.query;
    const data: ContractSchema = {
        rateId,
        userId,
        creatorId,
        name,
        description,
        charged,
        paidOut
    }
    const contra = new Contract(data);
    contra.save((err, doc) => {
        if(err) throw err;
        res.json(doc);
    });
}).get((req, res) => {
    const { contractId }: any = req.query;
    if (contractId) Contract.findById(contractId, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
    Contract.find((err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
}).put((req, res) => {
    const { name, description, charged, paidOut } = req.body;
    const { rateId, userId, creatorId, contractId }: any = req.query;
    const data: ContractSchema = {
        rateId,
        userId,
        creatorId,
        name,
        description,
        charged,
        paidOut
    };
    Contract.update(contractId, data, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'contract was updated'});
    });
}).delete((req, res) => {
    const { contractId }: any = req.query;
    Contract.delete(contractId, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'contract was deleted'});
    });
});

/**
 * routes for statuscontract collection
 */
rutes.route('/statuscontract').post((req, res) => {
    const { description, stage } = req.body;
    const { contractId }: any = req.query;
    const data: StatusContractSchema = {
        contractId,
        stage,
        description
    }
    const status = new StatusContract(data);
    status.save((err, doc) => {
        if(err) throw err;
        res.json(doc)
    })
}).get((req, res) => {
    const { statusId }: any = req.query;
    if (statusId) StatusContract.findById(statusId, (err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
    StatusContract.find((err, doc) => {
        if (err) throw err;
        res.json(doc);
    });
}).put((req, res) => {
    const { description, stage } = req.body;
    const { contractId, statusId }: any = req.query;
    const data: StatusContractSchema = {
        contractId,
        stage,
        description
    };
    StatusContract.update(statusId, data, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'status was updated'});
    });
}).delete((req, res) => {
    const { statusId }: any = req.query;
    StatusContract.delete(statusId, (err, doc) => {
        if (err) throw err;
        res.json({massage: 'status was deleted'});
    });
});

export { rutes };
