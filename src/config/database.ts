import mongoose from 'mongoose';

export class Database {
	constructor() {
		this.connectDB();
	}

	private connectDB() {
		mongoose
			.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_SCHEMA}`)
			.then(() => {
				console.log('Database connection successful');
			})
			.catch((_err) => {
				console.error('Database connection error');
			});
	}
}
