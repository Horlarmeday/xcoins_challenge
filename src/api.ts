import app from '../src/core/startup/server';
import { PORT } from './config';

app.listen(PORT, () => console.log(`✅  Ready on port http://localhost:${PORT}`));
