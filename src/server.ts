import app from './api';
import 'dotenv/config';
import { Database } from './config/database';

const port = process.env.PORT || '3000';

new Database();

app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on port ' + port);
});
