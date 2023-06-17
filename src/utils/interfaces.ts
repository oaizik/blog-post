export interface IRequestOptions extends RequestInit {
    method: string;
    redirect?: RequestRedirect;
};

export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
};

interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
};

interface IGeo {
    lat: number;
    lng: number;
};

interface IUserAddress {
    city: string;
    geo: IGeo;
    street: string;
    suite: string;
    zipcode: string;
};

export interface IUser {
    id: number;
    name: string;
    phone: string;
    userName: string;
    email: string;
    website: string;
    company: IUserCompany;
    address: IUserAddress;
};

export interface IComment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
};