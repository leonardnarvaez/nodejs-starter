import { db } from '../database/models';
import QueryHandling from '../database/models/queryHandling';

class QueryHandlingService {
    private static instance: QueryHandlingService;

    static getInstance(): QueryHandlingService {
        if (!QueryHandlingService.instance) {
            QueryHandlingService.instance = new QueryHandlingService();
        }
        return QueryHandlingService.instance;
    }

    findAll = async () => {
        const queries: QueryHandling[] = await QueryHandling.findAll({
            attributes: [
                'qId',
                'subDate',
                'custId',
                'empId',
                'resDate',
                'status',
                'feedback',
                'queryText',
                'queryResponse',
            ],
        });
        return queries;
    };

    findById = async (qId: string) => {
        const existingQueries: QueryHandling | null =
            await QueryHandling.findByPk(qId, {
                attributes: [
                    'qId',
                    'subDate',
                    'custId',
                    'empId',
                    'resDate',
                    'status',
                    'feedback',
                    'queryText',
                    'queryResponse',
                ],
            });
        return existingQueries;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object.length == 0)) {
                throw new Error('Object must contain at least one property');
            }
            const query = await QueryHandling.create({ ...object });
            return query;
        } catch (err) {
            throw new Error('non_existing_foreign_keys_identified');
        }
    };

    update = async (qId: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingQuery = await this.findById(qId);
        if (!existingQuery) {
            throw new Error('query_not_found');
        }

        try {
            await QueryHandling.update(
                { ...object },
                {
                    where: { qId }, //shorthand
                }
            );

            existingQuery = await this.findById(qId);
            return existingQuery;
        } 
        catch (err) {
            throw new Error('non_existing_foreign_keys_identified');
        }
    };

    deleteByPrimaryKey = async (qId: string) => {
        let existingQuery = await this.findById(qId);
        if (!existingQuery) {
            throw new Error('query_not_found');
        }

        try {
            await existingQuery.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default QueryHandlingService;
