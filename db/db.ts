import mongoose from 'mongoose'
import 'dotenv/config'

class Database {
   private static _database: Database
   private constructor() {
    const dbUrl = `${process.env.DB_URI}` + `${process.env.DB_NAME}`;

         if(dbUrl) {
            mongoose.connect(dbUrl)
               .then(() => console.log('Connected with database'))
               .catch(err => console.error('Not connected with database', err));
         }
   }

   static getInstance(): Database {
      if (this._database) {
         return this._database
      }
      this._database = new Database()
      return this._database = new Database()
   }
}
export default Database