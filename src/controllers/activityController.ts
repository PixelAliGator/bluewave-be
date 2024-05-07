
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

async function createSwimmingActivity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.body);
    const activityData: swimmingType = req.body;
    activityData.createdAt = new Date();
    activityData.updatedAt = new Date();
    const newActivity = await swimmingTable.create(activityData);
    res.status(201).json(newActivity);
  } catch (e) {
    next(e);
  }
}

