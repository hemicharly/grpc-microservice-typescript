import DbConnect from '../../config/database/DbConnect';

export default class AuthenticatorService {
    public static async findAll(): Promise<any> {
        const result = await DbConnect.raw('select current_timestamp() as date_time');
        console.log('AuthenticatorService: ', result);
        return Promise.resolve(result);
    }

    public static async findById(id: string): Promise<any> {
        return null;
    }

    public static async create(customersRequest: any): Promise<any> {
        return null;
    }

    public static async update(customersRequest: any): Promise<any> {
        return null;
    }

    public static async remove(id: string): Promise<any> {
        return null;
    }
}