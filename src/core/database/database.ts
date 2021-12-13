import mongoose from 'mongoose';
import { DBURL, TESTDB } from '../../config';
import { TEST } from '../../common/constants';

const DB = DBURL.split('/')[3];
const TEST_DB_URL = DBURL.replace(DB, TESTDB);

mongoose
  .connect(`${process.env.NODE_ENV === TEST ? TEST_DB_URL : DBURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`Connected to DB ${process.env.NODE_ENV === TEST ? TEST_DB_URL : DBURL}`)
  );
