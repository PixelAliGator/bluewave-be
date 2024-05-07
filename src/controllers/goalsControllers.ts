async function getGoal(req: Request, res: Response, next: NextFunction) {
  try {
    const activityId = req.query;
    console.log(activityId);
    const activty = await goalsModel.findById(activityId);
    res.json(activty);
  } catch (e) {
    next(e);
  }
}
