async function createGoal(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req.body);
        const activityData:goalsType = req.body;
         activityData.createdAt = new Date();
        activityData.updatedAt = new Date();
        const newActivity = await goalsModel.create(activityData);
        res.status(201).json(newActivity)
    } catch (e) {
        next(e)
    }
}