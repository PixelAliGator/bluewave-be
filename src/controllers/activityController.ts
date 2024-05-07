async function getSwimmingActivity(req: Request, res: Response, next: NextFunction) {
    try {
        const activityId = req.query.id;
        if(activityId === '*'){
            const activties:swimmingType[] = await swimmingTable.find({});
            res.json(activties);
        }
        else if (!activityId) {
            const id = req.currentUser.id;
            const activties:swimmingType[] = await swimmingTable.find({});
            activties.filter((activty) => activty.user_id === id);
            res.json(activties)
        } else {
            const activty = await swimmingTable.findById(activityId)
            res.json(activty)
        }

    } catch (e) {
        next(e)
    }
}