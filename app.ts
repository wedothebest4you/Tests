import mongoose from 'mongoose';
import ProposalModel from './model';

addAComment(1, 'x');

export async function addAComment(proposalId: number, newComment: string) {
  const updateFields: any = {};
  updateFields.comment = newComment;
  console.log('here is a new comment:', newComment);
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  const result = await ProposalModel.findOneAndUpdate(
    { proposalId: proposalId },
    { $set: updateFields },
    { new: true, upsert: true }
  );

  console.log('comment added, this is resut:', result);
}
  