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
