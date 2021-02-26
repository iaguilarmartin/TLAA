import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import validateEnv from './utils/validateEnv';
import CoinsRoute from './routes/coins.route';
import PeopleRoute from './routes/people.route';
import ReverseRoute from './routes/reverse.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new CoinsRoute(), new PeopleRoute(), new ReverseRoute()]);

app.listen();
