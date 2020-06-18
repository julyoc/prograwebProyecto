import { model } from './models';

export const User = model<UserSchema>('User');
export const Creator = model<CreatorSchema>('Creator');
export const Categories = model<CategoriesSchema>('Categories');
export const SubCategories = model<SubCategoriesSchema>(`SubCategories`);
export const Rate = model<RateSchema>('Rate');
export const Contract = model<ContractSchema>('Contract');
export const StatusContract = model<StatusContractSchema>('StatusContract');
