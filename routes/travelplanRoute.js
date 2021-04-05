const express = require('express');
const {
    getAllTravelplans,
    getAllTravelplansOfTravelgroup,
    getAllTraveplansOfUser,
    addTravelplan,
    updateTravelplan,
    deleteTravelplan,
    likeTravelplan,
    disLikeTravelplan,
    unLikeTravelplan,
    unDislikeTravelplan

} = require('../controllers/travelplanController')


const router = express.Router();
//GET 
router.route('/read').get(getAllTravelplans);

router.route('/read/plans_in/:groupId').get(getAllTravelplansOfTravelgroup);

router.route('/read/plans_createdby/:userId').get(getAllTraveplansOfUser);

router.route('/create/:userId').post(addTravelplan);

router.route('/update/:userId/:planId').put(updateTravelplan);

router.route('/delete/:userId/:planId').delete(deleteTravelplan);

router.route('/like/:userId/:planId').put(likeTravelplan);

router.route('/dislike/:userId/:planId').put(disLikeTravelplan);

router.route('/unlike/:userId/:planId').put(unLikeTravelplan);

router.route('/undislike/:userId/:planId').put(unDislikeTravelplan);





module.exports = router;