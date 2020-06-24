import { firestore as dbusage } from 'firebase-functions-helper';
import { firestore } from 'firebase-admin';

const db = firestore();


export const model = function<T> (collectionName: string) {
    return class Models {
        constructor(private data: T) { }

        save(cb?: (err: any, res?: T) => void): Promise<T> {
            if (cb) {
                try {
                    dbusage.createNewDocument(db, collectionName, this.data).then(value => {
                        cb(null, value);
                    })
                } catch (error) {
                    cb(error);
                }
            }
            return dbusage.createNewDocument(db, collectionName, this.data);
        }

        static create(data: T, cb?: (err: any, res?: T) => void): Promise<T> {
            if (cb) {
                try {
                    dbusage.createNewDocument(db, collectionName, data).then(value => {
                        cb(null, value);
                    })
                } catch (error) {
                    cb(error);
                }
            }
            return dbusage.createNewDocument(db, collectionName, data);
        }

        static find(cb?: (err: any, res?: T[] | any) => void): Promise<any[] | any> | void {
            if (cb) {
                try {
                    dbusage.backup(db, collectionName).then(value => {
                        cb(null, value);
                    });
                } catch (error) {
                    cb(error);
                }
            }
            return dbusage.backup(db, collectionName);
        }

        static findById(id: string, cb?: (err: any, res?: T) => void): Promise<T> {
            if (cb) {
                try {
                    dbusage.getDocument(db, collectionName, id).then(value => {
                        cb(null, value);
                    })
                } catch (error) {
                    cb(error);
                }
            }
            return dbusage.getDocument(db, collectionName, id);
        }
/*
        static findOne(params: any, cb?: (err: any, res?: UserSchema) => void): Promise<any> {
            if (cb) {
                try {

                } catch (error) {
                    cb(error);
                }
            }
            return new Promise<any>((resolve, reject) => {
                try {
                    
                } catch (error) {
                    reject(error);
                }
            });
        }
*/
        static update(id: string, newvalue: T, cb?: (err: any, res?: T) => void): Promise<T> {
            if (cb) {
                try {
                    dbusage.updateDocument(db, collectionName, id, newvalue).then(value => {
                        cb(null, value);
                    });
                } catch (error) {
                    cb(error);
                }
            }
            return dbusage.updateDocument(db, collectionName, id, newvalue);
        }
        static delete(id: string, cb?: (err: any, res?: Object) => void): Promise<Object> {
            if (cb) {
                try {
                    dbusage.deleteDocument(db, collectionName, id).then(value => {
                        cb(null, value);
                    });
                } catch (error) {
                    cb(error);
                }
            }
            return dbusage.deleteDocument(db, collectionName, id);
        }
    }
}