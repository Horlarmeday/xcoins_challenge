import mongoose from "mongoose";
import { DBURL } from "../../config";

mongoose.connect(`${DBURL}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to DB ${DBURL}`));