const renameEntitiesIDs = (doc: any, ret: any) => {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
  return ret;
};

export default renameEntitiesIDs;
