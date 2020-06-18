
declare interface UserSchema {
    name: string;
    username: string;
    email: string;
    password: string;
    active: boolean;
}

interface category {
    category?: string;
    subCategory?: string;
}

declare interface CreatorSchema {
    userId: string;
    creations: string[];
    ratings: number;
    categories: category[];
}

declare interface CategoriesSchema {
    name: string;
    description: string;
}

declare interface SubCategoriesSchema {
    categoriesId: string;
    name: string;
    description: string;
}

declare interface RateSchema {
    creatorId: string;
    name: string;
    price: number;
    benefits: string[];
    type: 'basic' | 'premiun' | 'gold';
}

declare interface ContractSchema {
    rateId: string;
    userId: string;
    creatorId: string;
    name: string;
    description: string;
    charged: boolean;
    paidOut: boolean;
}

declare interface StatusContractSchema {
    contractId: string;
    description: string;
    stage: string;
}